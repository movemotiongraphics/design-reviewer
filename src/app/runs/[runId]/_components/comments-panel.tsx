"use client";

import { useState } from "react";
import { Check, EyeOff, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ISSUE_TYPE_LABELS } from "~/lib/screen";
import { api } from "~/trpc/react";

const ISSUE_OPTIONS = Object.entries(ISSUE_TYPE_LABELS);

export function CommentsPanel({ screenNodeId }: { screenNodeId: string }) {
  const utils = api.useUtils();
  const comments = api.nodeComment.listByNode.useQuery({ screenNodeId });
  const [body, setBody] = useState("");
  const [issueType, setIssueType] = useState<string>("");
  const [author, setAuthor] = useState("");

  const create = api.nodeComment.create.useMutation({
    onSuccess: async () => {
      setBody("");
      setIssueType("");
      toast.success("Comment added");
      await utils.nodeComment.listByNode.invalidate({ screenNodeId });
      await utils.reviewRun.getGraph.invalidate();
    },
    onError: (err) => toast.error(err.message),
  });

  const resolve = api.nodeComment.resolve.useMutation({
    onSuccess: async () => {
      await utils.nodeComment.listByNode.invalidate({ screenNodeId });
      await utils.reviewRun.getGraph.invalidate();
    },
  });

  const ignore = api.nodeComment.ignore.useMutation({
    onSuccess: async () => {
      await utils.nodeComment.listByNode.invalidate({ screenNodeId });
      await utils.reviewRun.getGraph.invalidate();
    },
  });

  const reopen = api.nodeComment.update.useMutation({
    onSuccess: async () => {
      await utils.nodeComment.listByNode.invalidate({ screenNodeId });
      await utils.reviewRun.getGraph.invalidate();
    },
  });

  const remove = api.nodeComment.delete.useMutation({
    onSuccess: async () => {
      toast.success("Comment deleted");
      await utils.nodeComment.listByNode.invalidate({ screenNodeId });
      await utils.reviewRun.getGraph.invalidate();
    },
  });

  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold">Comments</h3>

      <form
        className="space-y-2 rounded-lg border p-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!body.trim()) return;
          create.mutate({
            screenNodeId,
            body: body.trim(),
            issueType: issueType
              ? (issueType as
                  | "layout"
                  | "typography"
                  | "color"
                  | "spacing"
                  | "copy"
                  | "broken_state"
                  | "accessibility")
              : null,
            createdByName: author.trim() || undefined,
          });
        }}
      >
        <div className="space-y-1">
          <Label htmlFor="comment-body">Note</Label>
          <textarea
            id="comment-body"
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[72px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Describe the issue or leave a note…"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <Label htmlFor="issue-type">Issue type</Label>
            <select
              id="issue-type"
              className="border-input bg-background flex h-9 w-full rounded-md border px-2 text-sm"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
            >
              <option value="">None</option>
              {ISSUE_OPTIONS.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="author">Your name</Label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Optional"
            />
          </div>
        </div>
        <Button type="submit" size="sm" disabled={create.isPending || !body.trim()}>
          {create.isPending ? "Adding…" : "Add comment"}
        </Button>
      </form>

      {comments.isLoading ? (
        <p className="text-sm text-muted-foreground">Loading comments…</p>
      ) : comments.data && comments.data.length > 0 ? (
        <ul className="space-y-2">
          {comments.data.map((c) => (
            <li key={c.id} className="rounded-lg border p-3 text-sm">
              <div className="mb-1 flex flex-wrap items-center gap-1.5">
                <Badge
                  variant={
                    c.status === "open"
                      ? "default"
                      : c.status === "resolved"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {c.status}
                </Badge>
                {c.issueType ? (
                  <Badge variant="outline">
                    {ISSUE_TYPE_LABELS[c.issueType] ?? c.issueType}
                  </Badge>
                ) : null}
              </div>
              <p className="whitespace-pre-wrap">{c.body}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {c.createdByName ? `${c.createdByName} · ` : ""}
                {new Date(c.createdAt).toLocaleString()}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {c.status !== "resolved" ? (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => resolve.mutate({ id: c.id })}
                  >
                    <Check className="size-3.5" />
                    Resolve
                  </Button>
                ) : (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      reopen.mutate({ id: c.id, status: "open" })
                    }
                  >
                    Reopen
                  </Button>
                )}
                {c.status !== "ignored" ? (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => ignore.mutate({ id: c.id })}
                  >
                    <EyeOff className="size-3.5" />
                    Ignore
                  </Button>
                ) : null}
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => remove.mutate({ id: c.id })}
                >
                  <Trash2 className="size-3.5" />
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">No comments yet.</p>
      )}
    </section>
  );
}
