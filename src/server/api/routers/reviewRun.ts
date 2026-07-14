import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { toArtifactUrl } from "~/server/artifacts";

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
      const [nodes, edges] = await Promise.all([
        ctx.db.screenNode.findMany({
          where: { reviewRunId: input.runId },
          orderBy: [{ depth: "asc" }, { createdAt: "asc" }],
        }),
        ctx.db.screenEdge.findMany({
          where: { reviewRunId: input.runId },
          orderBy: { createdAt: "asc" },
        }),
      ]);

      return {
        nodes: nodes.map((node) => ({
          ...node,
          screenshotUrl: toArtifactUrl(node.screenshotPath),
        })),
        edges,
      };
    }),
});
