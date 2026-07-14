import { z } from "zod";

import { NODE_TYPES } from "~/lib/screen";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { toArtifactUrl } from "~/server/artifacts";

export const screenNodeRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const node = await ctx.db.screenNode.findUnique({
        where: { id: input.id },
        include: {
          _count: {
            select: {
              comments: { where: { status: "open" } },
            },
          },
        },
      });
      if (!node) return null;
      return {
        ...node,
        screenshotUrl: toArtifactUrl(node.screenshotPath),
        openCommentCount: node._count.comments,
      };
    }),

  listByRun: publicProcedure
    .input(z.object({ runId: z.string() }))
    .query(async ({ ctx, input }) => {
      const nodes = await ctx.db.screenNode.findMany({
        where: { reviewRunId: input.runId },
        orderBy: [{ depth: "asc" }, { createdAt: "asc" }],
      });
      return nodes.map((node) => ({
        ...node,
        screenshotUrl: toArtifactUrl(node.screenshotPath),
      }));
    }),

  rename: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().max(200),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.screenNode.update({
        where: { id: input.id },
        data: { name: input.name.trim() ? input.name.trim() : null },
      });
    }),

  updateMetadata: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().max(200).optional(),
        flowName: z.string().max(200).nullable().optional(),
        nodeType: z
          .enum(NODE_TYPES)
          .nullable()
          .optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const data: {
        name?: string | null;
        flowName?: string | null;
        nodeType?: string | null;
      } = {};
      if (input.name !== undefined) {
        const trimmed = input.name.trim();
        data.name = trimmed ? trimmed : null;
      }
      if (input.flowName !== undefined) {
        data.flowName = input.flowName?.trim() ?? null;
      }
      if (input.nodeType !== undefined) {
        data.nodeType = input.nodeType;
      }
      return ctx.db.screenNode.update({
        where: { id: input.id },
        data,
      });
    }),

  updatePosition: publicProcedure
    .input(
      z.object({
        id: z.string(),
        positionX: z.number(),
        positionY: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.screenNode.update({
        where: { id: input.id },
        data: {
          positionX: input.positionX,
          positionY: input.positionY,
        },
      });
    }),

  bulkUpdatePositions: publicProcedure
    .input(
      z.object({
        positions: z.array(
          z.object({
            id: z.string(),
            positionX: z.number(),
            positionY: z.number(),
          }),
        ),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.$transaction(
        input.positions.map((p) =>
          ctx.db.screenNode.update({
            where: { id: p.id },
            data: {
              positionX: p.positionX,
              positionY: p.positionY,
            },
          }),
        ),
      );
      return { updated: input.positions.length };
    }),
});
