import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { DEFAULT_DEVICE_ID, DEVICE_IDS } from "~/lib/devices";
import {
  DEFAULT_LOCALE_CODES,
  MAX_LOCALES_PER_TEST,
  getLocaleOption,
  localeLabel,
} from "~/lib/locales";
import {
  deriveHotspots,
  displayNodeName,
  findHotspotById,
} from "~/lib/screen";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { toArtifactUrl } from "~/server/artifacts";

const INTERACTIVE_STATUSES = new Set(["awaiting_input"]);

async function assertInteractiveRun(
  db: {
    reviewRun: {
      findUnique: (args: {
        where: { id: string };
        include?: { apkBuild: boolean };
      }) => Promise<{
        id: string;
        status: string;
        maxNodes: number;
        currentNodeId: string | null;
        apkBuild?: { packageName: string | null };
      } | null>;
    };
  },
  runId: string,
) {
  const run = await db.reviewRun.findUnique({
    where: { id: runId },
    include: { apkBuild: true },
  });
  if (!run) {
    throw new TRPCError({ code: "NOT_FOUND", message: "Run not found" });
  }
  if (!INTERACTIVE_STATUSES.has(run.status)) {
    throw new TRPCError({
      code: "PRECONDITION_FAILED",
      message:
        run.status === "failed" || run.status === "cancelled"
          ? `Run is ${run.status}. Start a new run.`
          : `Run is not ready for exploration (status: ${run.status}). Wait until the session is awaiting input.`,
    });
  }
  return run;
}

export const reviewRunRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        apkBuildId: z.string(),
        deviceId: z.enum(DEVICE_IDS).default(DEFAULT_DEVICE_ID),
        maxDepth: z.number().int().min(1).max(6).optional(),
        maxNodes: z.number().int().min(1).max(200).optional(),
        maxTapsPerScreen: z.number().int().min(1).max(20).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.reviewRun.create({
        data: {
          apkBuildId: input.apkBuildId,
          deviceId: input.deviceId,
          status: "queued",
          maxDepth: input.maxDepth,
          maxNodes: input.maxNodes,
          maxTapsPerScreen: input.maxTapsPerScreen,
        },
      });
    }),

  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.reviewRun.findUnique({
        where: { id: input.id },
        include: {
          apkBuild: { include: { project: true } },
          _count: { select: { nodes: true, edges: true } },
        },
      });
    }),

  getAction: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.explorationAction.findUnique({
        where: { id: input.id },
      });
    }),

  listByProject: publicProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.reviewRun.findMany({
        where: { apkBuild: { projectId: input.projectId } },
        orderBy: { createdAt: "desc" },
        include: {
          apkBuild: true,
          _count: { select: { nodes: true, edges: true } },
        },
      });
    }),

  getGraph: publicProcedure
    .input(z.object({ runId: z.string() }))
    .query(async ({ ctx, input }) => {
      const [nodes, edges, comments] = await Promise.all([
        ctx.db.screenNode.findMany({
          where: { reviewRunId: input.runId },
          orderBy: [{ depth: "asc" }, { createdAt: "asc" }],
        }),
        ctx.db.screenEdge.findMany({
          where: { reviewRunId: input.runId },
          orderBy: { createdAt: "asc" },
        }),
        ctx.db.nodeComment.findMany({
          where: { screenNode: { reviewRunId: input.runId } },
          select: {
            screenNodeId: true,
            status: true,
            issueType: true,
          },
        }),
      ]);

      const summaryByNode = new Map<
        string,
        {
          openCount: number;
          resolvedCount: number;
          ignoredCount: number;
          issueCounts: Record<string, number>;
        }
      >();

      for (const c of comments) {
        let s = summaryByNode.get(c.screenNodeId);
        if (!s) {
          s = {
            openCount: 0,
            resolvedCount: 0,
            ignoredCount: 0,
            issueCounts: {},
          };
          summaryByNode.set(c.screenNodeId, s);
        }
        if (c.status === "open") s.openCount += 1;
        else if (c.status === "resolved") s.resolvedCount += 1;
        else if (c.status === "ignored") s.ignoredCount += 1;
        if (c.issueType) {
          s.issueCounts[c.issueType] = (s.issueCounts[c.issueType] ?? 0) + 1;
        }
      }

      return {
        nodes: nodes.map((node) => {
          const summary = summaryByNode.get(node.id) ?? {
            openCount: 0,
            resolvedCount: 0,
            ignoredCount: 0,
            issueCounts: {},
          };
          return {
            ...node,
            screenshotUrl: `${toArtifactUrl(node.screenshotPath)}?h=${node.hash.slice(0, 12)}`,
            displayName: displayNodeName(node),
            commentSummary: summary,
            issueCount: Object.values(summary.issueCounts).reduce(
              (a, b) => a + b,
              0,
            ),
          };
        }),
        edges,
      };
    }),

  getHotspotsForNode: publicProcedure
    .input(z.object({ nodeId: z.string() }))
    .query(async ({ ctx, input }) => {
      const node = await ctx.db.screenNode.findUnique({
        where: { id: input.nodeId },
        include: {
          reviewRun: { include: { apkBuild: true } },
        },
      });
      if (!node) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Node not found" });
      }
      return deriveHotspots(node.uiTreeJson, {
        appPackage: node.reviewRun.apkBuild.packageName,
      });
    }),

  performHotspotTap: publicProcedure
    .input(
      z.object({
        runId: z.string(),
        nodeId: z.string(),
        hotspotId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await assertInteractiveRun(ctx.db, input.runId);

      const node = await ctx.db.screenNode.findFirst({
        where: { id: input.nodeId, reviewRunId: input.runId },
        include: {
          reviewRun: { include: { apkBuild: true } },
        },
      });
      if (!node) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Node not found" });
      }

      const hotspot = findHotspotById(node.uiTreeJson, input.hotspotId, {
        appPackage: node.reviewRun.apkBuild.packageName,
      });
      if (!hotspot) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Hotspot not found on this node",
        });
      }
      if (hotspot.isRisky) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Risky action blocked: ${hotspot.riskReason ?? "risky"}`,
        });
      }

      const pending = await ctx.db.explorationAction.findFirst({
        where: {
          reviewRunId: input.runId,
          status: { in: ["pending", "running"] },
        },
      });
      if (pending) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Another exploration action is already in progress",
        });
      }

      const action = await ctx.db.explorationAction.create({
        data: {
          reviewRunId: input.runId,
          type: "tap",
          status: "pending",
          fromNodeId: input.nodeId,
          hotspotKey: input.hotspotId,
          targetLabel: hotspot.label,
          targetBounds: hotspot.bounds,
        },
      });

      return action;
    }),

  pressBack: publicProcedure
    .input(
      z.object({
        runId: z.string(),
        fromNodeId: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const run = await assertInteractiveRun(ctx.db, input.runId);
      const fromNodeId = input.fromNodeId ?? run.currentNodeId;
      if (!fromNodeId) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "No current node to press back from",
        });
      }

      const pending = await ctx.db.explorationAction.findFirst({
        where: {
          reviewRunId: input.runId,
          status: { in: ["pending", "running"] },
        },
      });
      if (pending) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Another exploration action is already in progress",
        });
      }

      return ctx.db.explorationAction.create({
        data: {
          reviewRunId: input.runId,
          type: "back",
          status: "pending",
          fromNodeId,
        },
      });
    }),

  resetToRoot: publicProcedure
    .input(z.object({ runId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await assertInteractiveRun(ctx.db, input.runId);

      const pending = await ctx.db.explorationAction.findFirst({
        where: {
          reviewRunId: input.runId,
          status: { in: ["pending", "running"] },
        },
      });
      if (pending) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Another exploration action is already in progress",
        });
      }

      return ctx.db.explorationAction.create({
        data: {
          reviewRunId: input.runId,
          type: "reset_to_root",
          status: "pending",
        },
      });
    }),

  resumeFromNode: publicProcedure
    .input(
      z.object({
        runId: z.string(),
        nodeId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await assertInteractiveRun(ctx.db, input.runId);

      const node = await ctx.db.screenNode.findFirst({
        where: { id: input.nodeId, reviewRunId: input.runId },
      });
      if (!node) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Node not found" });
      }

      const pending = await ctx.db.explorationAction.findFirst({
        where: {
          reviewRunId: input.runId,
          status: { in: ["pending", "running"] },
        },
      });
      if (pending) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Another exploration action is already in progress",
        });
      }

      return ctx.db.explorationAction.create({
        data: {
          reviewRunId: input.runId,
          type: "resume_from_node",
          status: "pending",
          targetNodeId: input.nodeId,
        },
      });
    }),

  /**
   * Re-navigate to a node and overwrite its screenshot (and UI dump) with a
   * freshly captured settled frame. Useful when the original capture was early
   * / mid-skeleton despite the stability wait.
   */
  refreshScreenshot: publicProcedure
    .input(
      z.object({
        runId: z.string(),
        nodeId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await assertInteractiveRun(ctx.db, input.runId);

      const node = await ctx.db.screenNode.findFirst({
        where: { id: input.nodeId, reviewRunId: input.runId },
      });
      if (!node) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Node not found" });
      }

      const pending = await ctx.db.explorationAction.findFirst({
        where: {
          reviewRunId: input.runId,
          status: { in: ["pending", "running"] },
        },
      });
      if (pending) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Another exploration action is already in progress",
        });
      }

      return ctx.db.explorationAction.create({
        data: {
          reviewRunId: input.runId,
          type: "refresh_screenshot",
          status: "pending",
          fromNodeId: input.nodeId,
        },
      });
    }),

  testLocales: publicProcedure
    .input(
      z.object({
        runId: z.string(),
        nodeId: z.string(),
        localeCodes: z
          .array(z.string())
          .min(1)
          .max(MAX_LOCALES_PER_TEST)
          .optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await assertInteractiveRun(ctx.db, input.runId);

      const node = await ctx.db.screenNode.findFirst({
        where: { id: input.nodeId, reviewRunId: input.runId },
      });
      if (!node) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Node not found" });
      }

      // Keep only recognised locale codes and de-duplicate, preserving order.
      const requested = input.localeCodes ?? DEFAULT_LOCALE_CODES;
      const codes = [...new Set(requested)].filter((c) => getLocaleOption(c));
      if (codes.length === 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "No valid locales selected",
        });
      }

      const pending = await ctx.db.explorationAction.findFirst({
        where: {
          reviewRunId: input.runId,
          status: { in: ["pending", "running"] },
        },
      });
      if (pending) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Another exploration action is already in progress",
        });
      }

      const action = await ctx.db.explorationAction.create({
        data: {
          reviewRunId: input.runId,
          type: "test_locales",
          status: "pending",
          fromNodeId: input.nodeId,
          localeCodes: codes,
        },
      });

      // Pre-create placeholder rows so the UI can render per-locale progress.
      await ctx.db.localeShot.createMany({
        data: codes.map((code) => ({
          reviewRunId: input.runId,
          actionId: action.id,
          sourceNodeId: input.nodeId,
          locale: code,
          label: localeLabel(code),
          status: "pending",
        })),
      });

      return action;
    }),

  getLocaleShots: publicProcedure
    .input(z.object({ nodeId: z.string() }))
    .query(async ({ ctx, input }) => {
      const action = await ctx.db.explorationAction.findFirst({
        where: { fromNodeId: input.nodeId, type: "test_locales" },
        orderBy: { createdAt: "desc" },
      });
      if (!action) return null;

      const shots = await ctx.db.localeShot.findMany({
        where: { actionId: action.id },
        orderBy: { createdAt: "asc" },
      });

      return {
        action: {
          id: action.id,
          status: action.status,
          errorMessage: action.errorMessage,
        },
        shots: shots.map((shot) => ({
          id: shot.id,
          locale: shot.locale,
          label: shot.label,
          status: shot.status,
          errorMessage: shot.errorMessage,
          screenshotUrl: shot.screenshotPath
            ? toArtifactUrl(shot.screenshotPath)
            : null,
        })),
      };
    }),

  addLocaleShotsToGraph: publicProcedure
    .input(z.object({ runId: z.string(), nodeId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const source = await ctx.db.screenNode.findFirst({
        where: { id: input.nodeId, reviewRunId: input.runId },
      });
      if (!source) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Node not found" });
      }

      const action = await ctx.db.explorationAction.findFirst({
        where: { fromNodeId: input.nodeId, type: "test_locales" },
        orderBy: { createdAt: "desc" },
      });
      if (!action) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No locale test found for this screen",
        });
      }

      const shots = await ctx.db.localeShot.findMany({
        where: {
          actionId: action.id,
          status: "captured",
          NOT: { screenshotPath: null },
        },
        orderBy: { createdAt: "asc" },
      });
      if (shots.length === 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "No captured locale screenshots to add",
        });
      }

      // Skip screenshots already promoted to the graph (idempotent re-clicks).
      const paths = shots
        .map((s) => s.screenshotPath)
        .filter((p): p is string => !!p);
      const existing = await ctx.db.screenNode.findMany({
        where: { reviewRunId: input.runId, screenshotPath: { in: paths } },
        select: { screenshotPath: true },
      });
      const existingPaths = new Set(existing.map((e) => e.screenshotPath));

      const baseX = source.positionX ?? source.depth * 300;
      const baseY = source.positionY ?? 0;
      const sourceName = displayNodeName(source);
      const flowName = `Locales: ${sourceName}`;

      let added = 0;
      let slot = 0;
      for (const shot of shots) {
        if (!shot.screenshotPath || existingPaths.has(shot.screenshotPath)) {
          continue;
        }
        const node = await ctx.db.screenNode.create({
          data: {
            reviewRunId: input.runId,
            screenshotPath: shot.screenshotPath,
            name: `${sourceName} · ${shot.label}`,
            flowName,
            nodeType: "page",
            depth: source.depth + 1,
            hash: `locale-${shot.id}`,
            clickableCount: 0,
            positionX: baseX + 320,
            positionY: baseY + slot * 400,
          },
        });
        await ctx.db.screenEdge.create({
          data: {
            reviewRunId: input.runId,
            fromNodeId: input.nodeId,
            toNodeId: node.id,
            actionType: "locale",
            targetLabel: shot.label,
          },
        });
        added += 1;
        slot += 1;
      }

      return { added, skipped: shots.length - added };
    }),

  endSession: publicProcedure
    .input(z.object({ runId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const run = await ctx.db.reviewRun.findUnique({
        where: { id: input.runId },
      });
      if (!run) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Run not found" });
      }
      if (run.status !== "awaiting_input") {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Run is not in an interactive session",
        });
      }
      return ctx.db.reviewRun.update({
        where: { id: input.runId },
        data: {
          status: "completed",
          completedAt: new Date(),
        },
      });
    }),
});
