"use client";

import { useMemo, useState } from "react";
import { AlertCircle, Globe, Loader2, Plus, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";
import {
  DEFAULT_LOCALE_CODES,
  LOCALE_OPTIONS,
  MAX_LOCALES_PER_TEST,
} from "~/lib/locales";
import { isRunInteractive } from "~/lib/run-status";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

export function LocaleTestDialog({
  runId,
  runStatus,
  nodeId,
  nodeName,
  onClose,
}: {
  runId: string;
  runStatus: string;
  nodeId: string;
  nodeName: string;
  onClose: () => void;
}) {
  const interactive = isRunInteractive(runStatus);
  const utils = api.useUtils();

  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(DEFAULT_LOCALE_CODES),
  );

  const shotsQuery = api.reviewRun.getLocaleShots.useQuery(
    { nodeId },
    {
      refetchInterval: (q) => {
        const status = q.state.data?.action.status;
        return status === "pending" || status === "running" ? 1000 : false;
      },
    },
  );

  const running =
    shotsQuery.data?.action.status === "pending" ||
    shotsQuery.data?.action.status === "running";

  const testLocales = api.reviewRun.testLocales.useMutation({
    onSuccess: async () => {
      await utils.reviewRun.getLocaleShots.invalidate({ nodeId });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const shots = shotsQuery.data?.shots ?? [];
  const capturedCount = shots.filter((s) => s.status === "captured").length;
  const actionError =
    shotsQuery.data?.action.status === "failed"
      ? shotsQuery.data.action.errorMessage
      : null;

  const addToGraph = api.reviewRun.addLocaleShotsToGraph.useMutation({
    onSuccess: async (res) => {
      await utils.reviewRun.getGraph.invalidate({ runId });
      if (res.added > 0) {
        toast.success(
          `Added ${res.added} screenshot${res.added === 1 ? "" : "s"} to the graph`,
        );
      } else {
        toast.message("All screenshots are already on the graph");
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function toggle(code: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code);
      else if (next.size < MAX_LOCALES_PER_TEST) next.add(code);
      else
        toast.message(`You can test up to ${MAX_LOCALES_PER_TEST} locales at once`);
      return next;
    });
  }

  const canRun =
    interactive && !running && selected.size > 0 && !testLocales.isPending;

  function runTest() {
    if (!canRun) return;
    testLocales.mutate({
      runId,
      nodeId,
      localeCodes: [...selected],
    });
  }

  const orderedOptions = useMemo(
    () => LOCALE_OPTIONS.filter((o) => o.code !== "en"),
    [],
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg border bg-card shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <Globe className="size-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium leading-tight">
                Test in different locales
              </p>
              <p className="truncate text-xs text-muted-foreground" title={nodeName}>
                {nodeName}
              </p>
            </div>
          </div>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="size-7"
            onClick={onClose}
          >
            <X className="size-4" />
          </Button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          {!interactive ? (
            <p className="mb-3 rounded-md border border-amber-400/50 bg-amber-400/10 px-3 py-2 text-xs text-amber-700 dark:text-amber-400">
              This run is not in an interactive session, so new locale tests
              can&apos;t be started. Previous results (if any) are shown below.
            </p>
          ) : null}

          <div className="mb-4">
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              Choose locales ({selected.size}/{MAX_LOCALES_PER_TEST})
            </p>
            <div className="flex flex-wrap gap-2">
              {orderedOptions.map((option) => {
                const checked = selected.has(option.code);
                return (
                  <button
                    key={option.code}
                    type="button"
                    disabled={running}
                    onClick={() => toggle(option.code)}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs transition-colors disabled:opacity-50",
                      checked
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-input bg-background text-muted-foreground hover:bg-muted",
                    )}
                  >
                    {option.englishName}
                    {option.nativeNames[0]
                      ? ` · ${option.nativeNames[0]}`
                      : ""}
                  </button>
                );
              })}
            </div>
            <div className="mt-3">
              <Button
                type="button"
                size="sm"
                onClick={runTest}
                disabled={!canRun}
              >
                {running || testLocales.isPending ? (
                  <>
                    <Loader2 className="size-3.5 animate-spin" />
                    Testing…
                  </>
                ) : (
                  <>
                    <Globe className="size-3.5" />
                    Run test
                  </>
                )}
              </Button>
            </div>
          </div>

          {actionError ? (
            <p className="mb-3 flex items-center gap-1.5 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-xs text-destructive">
              <AlertCircle className="size-3.5 shrink-0" />
              {actionError}
            </p>
          ) : null}

          {shots.length > 0 ? (
            <>
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-xs font-medium text-muted-foreground">
                  Results
                </p>
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  disabled={
                    capturedCount === 0 || running || addToGraph.isPending
                  }
                  onClick={() => addToGraph.mutate({ runId, nodeId })}
                >
                  {addToGraph.isPending ? (
                    <Loader2 className="size-3.5 animate-spin" />
                  ) : (
                    <Plus className="size-3.5" />
                  )}
                  Add all screenshots
                </Button>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {shots.map((shot) => (
                  <LocaleShotCard key={shot.id} shot={shot} />
                ))}
              </div>
            </>
          ) : (
            <p className="text-xs text-muted-foreground">
              {running
                ? "Capturing screens…"
                : "No locale results yet. Pick locales and run a test."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function LocaleShotCard({
  shot,
}: {
  shot: {
    id: string;
    locale: string;
    label: string;
    status: string;
    errorMessage: string | null;
    screenshotUrl: string | null;
  };
}) {
  return (
    <div className="w-[160px] shrink-0">
      <div className="relative flex aspect-[9/16] w-full items-center justify-center overflow-hidden rounded-md border bg-muted">
        {shot.status === "captured" && shot.screenshotUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- natural sizing preferred
          <img
            src={shot.screenshotUrl}
            alt={shot.label}
            className="h-full w-full object-contain"
          />
        ) : shot.status === "failed" ? (
          <div
            className="flex flex-col items-center gap-1 px-2 text-center text-destructive"
            title={shot.errorMessage ?? undefined}
          >
            <AlertCircle className="size-5" />
            <span className="text-[10px] leading-tight">Failed</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <Loader2 className="size-5 animate-spin" />
            <span className="text-[10px]">Testing…</span>
          </div>
        )}
      </div>
      <p className="mt-1 truncate text-center text-xs font-medium" title={shot.label}>
        {shot.label}
      </p>
      {shot.status === "failed" && shot.errorMessage ? (
        <p
          className="truncate text-center text-[10px] text-destructive"
          title={shot.errorMessage}
        >
          {shot.errorMessage}
        </p>
      ) : null}
    </div>
  );
}
