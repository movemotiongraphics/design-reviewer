import { PrismaClient } from "../generated/prisma";

/**
 * Dedicated Prisma client for the worker process. The worker runs outside of
 * Next.js (via `tsx`), so it creates its own client rather than importing the
 * app's request-scoped singleton. `DATABASE_URL` is provided via `--env-file`.
 */
export const db = new PrismaClient({
  log: ["error", "warn"],
});
