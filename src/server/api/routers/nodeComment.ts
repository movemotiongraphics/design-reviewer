import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const issueTypeSchema = z.enum([
  "layout",
  "typography",
  "color",
  "spacing",
  "copy",
  "broken_state",
  "accessibility",
]);

const commentStatusSchema = z.enum(["open", "resolved", "ignored"]);

export const nodeCommentRouter = createTRPCRouter({
  listByNode: publicProcedure
    .input(z.object({ screenNodeId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.nodeComment.findMany({
        where: { screenNodeId: input.screenNodeId },
        orderBy: { createdAt: "desc" },
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        screenNodeId: z.string(),
        body: z.string().min(1).max(5000),
        issueType: issueTypeSchema.nullable().optional(),
        createdByName: z.string().max(120).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const node = await ctx.db.screenNode.findUnique({
        where: { id: input.screenNodeId },
        select: { id: true },
      });
      if (!node) {
        throw new Error("Screen node not found");
      }
      return ctx.db.nodeComment.create({
        data: {
          screenNodeId: input.screenNodeId,
          body: input.body.trim(),
          issueType: input.issueType ?? null,
          createdByName: input.createdByName?.trim() ?? null,
        },
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        body: z.string().min(1).max(5000).optional(),
        issueType: issueTypeSchema.nullable().optional(),
        status: commentStatusSchema.optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const data: {
        body?: string;
        issueType?: "layout" | "typography" | "color" | "spacing" | "copy" | "broken_state" | "accessibility" | null;
        status?: "open" | "resolved" | "ignored";
      } = {};
      if (input.body !== undefined) data.body = input.body.trim();
      if (input.issueType !== undefined) data.issueType = input.issueType;
      if (input.status !== undefined) data.status = input.status;
      return ctx.db.nodeComment.update({
        where: { id: input.id },
        data,
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.nodeComment.delete({ where: { id: input.id } });
      return { ok: true };
    }),

  resolve: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.nodeComment.update({
        where: { id: input.id },
        data: { status: "resolved" },
      });
    }),

  ignore: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.nodeComment.update({
        where: { id: input.id },
        data: { status: "ignored" },
      });
    }),
});
