import { apkRouter } from "~/server/api/routers/apk";
import { projectRouter } from "~/server/api/routers/project";
import { reviewRunRouter } from "~/server/api/routers/reviewRun";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for the server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  project: projectRouter,
  apk: apkRouter,
  reviewRun: reviewRunRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 */
export const createCaller = createCallerFactory(appRouter);
