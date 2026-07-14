"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  Loader2,
  Play,
  Rocket,
  Upload,
} from "lucide-react";

import { RunStatusBadge } from "~/components/run-status-badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { api } from "~/trpc/react";

export function ProjectDetailClient({ projectId }: { projectId: string }) {
  const router = useRouter();
  const utils = api.useUtils();

  const project = api.project.get.useQuery({ id: projectId });
  const builds = api.apk.listByProject.useQuery({ projectId });
  const runs = api.reviewRun.listByProject.useQuery({ projectId });

  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Exploration limits (schema defaults).
  const [maxDepth, setMaxDepth] = useState(2);
  const [maxNodes, setMaxNodes] = useState(30);
  const [maxTapsPerScreen, setMaxTapsPerScreen] = useState(6);

  const startRun = api.reviewRun.create.useMutation({
    onSuccess: (run) => {
      router.push(`/runs/${run.id}`);
    },
  });

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploadError(null);
    const file = fileRef.current?.files?.[0];
    if (!file) {
      setUploadError("Choose an .apk file first.");
      return;
    }
    setUploading(true);
    try {
      const body = new FormData();
      body.append("projectId", projectId);
      body.append("file", file);
      const res = await fetch("/api/apk/upload", { method: "POST", body });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? `Upload failed (${res.status})`);
      }
      if (fileRef.current) fileRef.current.value = "";
      await utils.apk.listByProject.invalidate({ projectId });
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All projects
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">
          {project.data?.name ?? "Project"}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Upload className="size-4" />
            Upload APK
          </CardTitle>
          <CardDescription>
            Only single `.apk` files are supported in V1 (no `.aab` / split
            APKs).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="flex flex-wrap items-center gap-2">
            <Input
              ref={fileRef}
              type="file"
              accept=".apk"
              className="max-w-sm"
            />
            <Button type="submit" disabled={uploading}>
              {uploading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Upload className="size-4" />
              )}
              Upload
            </Button>
          </form>
          {uploadError ? (
            <p className="mt-2 text-sm text-destructive">{uploadError}</p>
          ) : null}
        </CardContent>
      </Card>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Builds</h2>
        </div>

        <details className="rounded-md border p-3 text-sm">
          <summary className="cursor-pointer font-medium">
            Exploration limits
          </summary>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="space-y-1">
              <Label htmlFor="maxDepth">Max depth</Label>
              <Input
                id="maxDepth"
                type="number"
                min={1}
                max={6}
                value={maxDepth}
                onChange={(e) => setMaxDepth(Number(e.target.value))}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="maxNodes">Max nodes</Label>
              <Input
                id="maxNodes"
                type="number"
                min={1}
                max={200}
                value={maxNodes}
                onChange={(e) => setMaxNodes(Number(e.target.value))}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="maxTaps">Max taps / screen</Label>
              <Input
                id="maxTaps"
                type="number"
                min={1}
                max={20}
                value={maxTapsPerScreen}
                onChange={(e) => setMaxTapsPerScreen(Number(e.target.value))}
              />
            </div>
          </div>
        </details>

        {builds.isLoading ? (
          <p className="text-sm text-muted-foreground">Loading builds…</p>
        ) : builds.data && builds.data.length > 0 ? (
          builds.data.map((build) => (
            <Card key={build.id}>
              <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
                <div className="min-w-0">
                  <p className="truncate font-medium">{build.fileName}</p>
                  <p className="text-sm text-muted-foreground">
                    {build.packageName ?? "unknown package"}
                    {build.versionName ? ` · v${build.versionName}` : ""}
                    {build.versionCode ? ` (${build.versionCode})` : ""}
                    {` · ${build._count.runs} run${
                      build._count.runs === 1 ? "" : "s"
                    }`}
                  </p>
                </div>
                <Button
                  onClick={() =>
                    startRun.mutate({
                      apkBuildId: build.id,
                      maxDepth,
                      maxNodes,
                      maxTapsPerScreen,
                    })
                  }
                  disabled={startRun.isPending}
                >
                  {startRun.isPending ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Play className="size-4" />
                  )}
                  Start exploration
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">
            No builds yet. Upload an APK above.
          </p>
        )}
        {startRun.error ? (
          <p className="text-sm text-destructive">{startRun.error.message}</p>
        ) : null}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Recent runs</h2>
        {runs.isLoading ? (
          <p className="text-sm text-muted-foreground">Loading runs…</p>
        ) : runs.data && runs.data.length > 0 ? (
          <div className="space-y-2">
            {runs.data.map((run) => (
              <Link key={run.id} href={`/runs/${run.id}`}>
                <Card className="transition-colors hover:bg-accent">
                  <CardContent className="flex items-center justify-between gap-3 p-4">
                    <div className="flex items-center gap-3">
                      <Rocket className="size-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">
                          {run.apkBuild.fileName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {run._count.nodes} nodes · {run._count.edges} edges ·{" "}
                          {new Date(run.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <RunStatusBadge status={run.status} />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No runs yet.</p>
        )}
      </section>
    </div>
  );
}
