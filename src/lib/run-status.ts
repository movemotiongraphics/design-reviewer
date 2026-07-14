/**
 * Mirror of the Prisma `ReviewRunStatus` enum. Kept as a plain union so it can
 * be imported freely by client components without pulling in the generated
 * Prisma client. Keep in sync with prisma/schema.prisma.
 */
export const RUN_STATUSES = [
  "queued",
  "preparing_emulator",
  "installing_apk",
  "launching_app",
  "exploring",
  "completed",
  "failed",
  "cancelled",
] as const;

export type RunStatus = (typeof RUN_STATUSES)[number];

export const RUN_STATUS_LABELS: Record<RunStatus, string> = {
  queued: "Queued",
  preparing_emulator: "Preparing emulator",
  installing_apk: "Installing APK",
  launching_app: "Launching app",
  exploring: "Exploring",
  completed: "Completed",
  failed: "Failed",
  cancelled: "Cancelled",
};

const IN_PROGRESS: ReadonlySet<RunStatus> = new Set<RunStatus>([
  "queued",
  "preparing_emulator",
  "installing_apk",
  "launching_app",
  "exploring",
]);

export function isRunInProgress(status: string): boolean {
  return IN_PROGRESS.has(status as RunStatus);
}

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

export function runStatusVariant(status: string): BadgeVariant {
  switch (status) {
    case "completed":
      return "default";
    case "failed":
      return "destructive";
    case "cancelled":
      return "outline";
    default:
      return "secondary";
  }
}

export function runStatusLabel(status: string): string {
  return RUN_STATUS_LABELS[status as RunStatus] ?? status;
}
