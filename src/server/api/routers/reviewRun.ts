import { TRPCError } from "@trpc/server";
import { z } from "zod";

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
        maxDepth: z.number().int().min(1).max(6).optional(),
        maxNodes: z.number().int().min(1).max(200).optional(),
        maxTapsPerScreen: z.number().int().min(1).max(20).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.reviewRun.create({
        data: {
          apkBuildId: input.apkBuildId,
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
            screenshotUrl: toArtifactUrl(node.screenshotPath),
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
