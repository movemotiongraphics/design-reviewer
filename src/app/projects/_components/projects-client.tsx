"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, FolderPlus, Loader2 } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";

export function ProjectsClient() {
  const utils = api.useUtils();
  const projects = api.project.list.useQuery();
  const [name, setName] = useState("");

  const createProject = api.project.create.useMutation({
    onSuccess: async () => {
      setName("");
      await utils.project.list.invalidate();
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    createProject.mutate({ name: trimmed });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-sm text-muted-foreground">
            Group your APK builds and exploration runs.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <FolderPlus className="size-4" />
            New project
          </CardTitle>
          <CardDescription>Create a project to start uploading APKs.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreate} className="flex gap-2">
            <Input
              placeholder="Project name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={120}
            />
            <Button type="submit" disabled={createProject.isPending || !name.trim()}>
              {createProject.isPending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : null}
              Create
            </Button>
          </form>
          {createProject.error ? (
            <p className="mt-2 text-sm text-destructive">
              {createProject.error.message}
            </p>
          ) : null}
        </CardContent>
      </Card>

      <div className="space-y-3">
        {projects.isLoading ? (
          <p className="text-sm text-muted-foreground">Loading projects…</p>
        ) : projects.data && projects.data.length > 0 ? (
          projects.data.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="transition-colors hover:bg-accent">
                <CardContent className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {project._count.builds} build
                      {project._count.builds === 1 ? "" : "s"}
                    </p>
                  </div>
                  <ChevronRight className="size-5 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">
            No projects yet. Create one above to get started.
          </p>
        )}
      </div>
    </div>
  );
}
