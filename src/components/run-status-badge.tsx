import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";
import { isRunInProgress, runStatusLabel, runStatusVariant } from "~/lib/run-status";

export function RunStatusBadge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  const inProgress = isRunInProgress(status);
  return (
    <Badge variant={runStatusVariant(status)} className={cn("gap-1.5", className)}>
      {inProgress ? (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
        </span>
      ) : null}
      {runStatusLabel(status)}
    </Badge>
  );
}
