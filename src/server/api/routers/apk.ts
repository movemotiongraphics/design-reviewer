import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const apkRouter = createTRPCRouter({
  listByProject: publicProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.apkBuild.findMany({
        where: { projectId: input.projectId },
        orderBy: { uploadedAt: "desc" },
        include: {
          _count: { select: { runs: true } },
        },
      });
    }),
});
