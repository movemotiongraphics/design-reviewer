"use client";

import Link from "next/link";
import { ArrowLeft, TriangleAlert } from "lucide-react";

import { RunStatusBadge } from "~/components/run-status-badge";
import { Card, CardContent } from "~/components/ui/card";
import { isRunInProgress } from "~/lib/run-status";
import { api } from "~/trpc/react";
import { GraphViewer } from "./graph-viewer";

export function RunClient({ runId }: { runId: string }) {
  const run = api.reviewRun.get.useQuery(
    { id: runId },
    {
      refetchInterval: (query) => {
        const status = query.state.data?.status;
        return status && isRunInProgress(status) ? 2000 : false;
      },
    },
  );

  if (run.isLoading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-sm text-muted-foreground">Loading run…</p>
      </main>
    );
  }

  if (!run.data) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-sm text-muted-foreground">Run not found.</p>
      </main>
    );
  }

  const data = run.data;
  const nodeCount = data._count.nodes;
  const inProgress = isRunInProgress(data.status);

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      <div className="border-b px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <Link
              href={`/projects/${data.apkBuild.projectId}`}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              {data.apkBuild.project.name}
            </Link>
            <h1 className="text-lg font-semibold">{data.apkBuild.fileName}</h1>
            <p className="text-xs text-muted-foreground">
              {data._count.nodes} nodes · {data._count.edges} edges
            </p>
          </div>
          <RunStatusBadge status={data.status} />
        </div>
      </div>

      {data.status === "failed" ? (
        <div className="mx-auto w-full max-w-6xl px-4 py-4">
          <Card className="border-destructive/50">
            <CardContent className="flex items-start gap-3 p-4 text-sm">
              <TriangleAlert className="mt-0.5 size-5 shrink-0 text-destructive" />
              <div>
                <p className="font-medium text-destructive">
                  Exploration failed
                </p>
                <p className="text-muted-foreground">
                  {data.errorMessage ?? "Unknown error."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}

      <div className="min-h-0 flex-1">
        {nodeCount > 0 ? (
          <GraphViewer runId={runId} poll={inProgress} />
        ) : (
          <div className="flex h-full items-center justify-center px-4">
            <p className="text-sm text-muted-foreground">
              {inProgress
                ? "Exploring the app… screens will appear here as they are captured."
                : "No screens were captured for this run."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
