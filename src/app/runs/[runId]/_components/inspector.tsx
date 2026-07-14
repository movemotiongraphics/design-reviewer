"use client";

import { ArrowDownRight, ArrowUpRight, X } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { describeAction, type UiTreeSummary } from "~/lib/screen";
import type { RouterOutputs } from "~/trpc/react";

type GraphData = RouterOutputs["reviewRun"]["getGraph"];
export type GraphNode = GraphData["nodes"][number];
export type GraphEdge = GraphData["edges"][number];

export function nodeLabel(node: {
  stateName: string | null;
  activityName: string | null;
}): string {
  return node.stateName ?? node.activityName ?? "Screen";
}

function parseUiTree(value: unknown): UiTreeSummary | null {
  if (value && typeof value === "object" && "clickables" in value) {
    return value as UiTreeSummary;
  }
  return null;
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 gap-2 py-1 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="col-span-2 break-words">{value}</dd>
    </div>
  );
}

export function Inspector({
  node,
  nodes,
  edges,
  onClose,
}: {
  node: GraphNode;
  nodes: GraphNode[];
  edges: GraphEdge[];
  onClose: () => void;
}) {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const incoming = edges.filter((e) => e.toNodeId === node.id);
  const outgoing = edges.filter((e) => e.fromNodeId === node.id);
  const uiTree = parseUiTree(node.uiTreeJson);

  return (
    <aside className="flex h-full w-[340px] shrink-0 flex-col border-l bg-background">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="font-semibold">{nodeLabel(node)}</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="size-4" />
        </Button>
      </div>

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
        <div className="overflow-hidden rounded-lg border bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={node.screenshotUrl}
            alt={nodeLabel(node)}
            className="mx-auto max-h-[420px] w-auto object-contain"
          />
        </div>

        <dl className="divide-y">
          <Field label="Activity" value={node.activityName ?? "—"} />
          <Field label="State" value={node.stateName ?? "—"} />
          <Field label="Depth" value={node.depth} />
          <Field label="Clickables" value={node.clickableCount} />
          <Field
            label="Hash"
            value={
              <span className="font-mono text-xs">{node.hash.slice(0, 16)}…</span>
            }
          />
        </dl>

        <section>
          <h3 className="mb-1 flex items-center gap-1 text-sm font-semibold">
            <ArrowDownRight className="size-4" />
            Incoming
          </h3>
          {incoming.length > 0 ? (
            <ul className="space-y-1 text-sm">
              {incoming.map((e) => {
                const from = e.fromNodeId ? byId.get(e.fromNodeId) : null;
                return (
                  <li key={e.id} className="text-muted-foreground">
                    <span className="text-foreground">
                      {from ? nodeLabel(from) : "Launch"}
                    </span>{" "}
                    → {describeAction(e)}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">None.</p>
          )}
        </section>

        <section>
          <h3 className="mb-1 flex items-center gap-1 text-sm font-semibold">
            <ArrowUpRight className="size-4" />
            Outgoing
          </h3>
          {outgoing.length > 0 ? (
            <ul className="space-y-1 text-sm">
              {outgoing.map((e) => {
                const to = byId.get(e.toNodeId);
                return (
                  <li key={e.id} className="text-muted-foreground">
                    {describeAction(e)} →{" "}
                    <span className="text-foreground">
                      {to ? nodeLabel(to) : "?"}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">None.</p>
          )}
        </section>

        <section>
          <h3 className="mb-1 text-sm font-semibold">UI tree summary</h3>
          {uiTree && uiTree.clickables.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {uiTree.clickables.slice(0, 30).map((c, i) => (
                <Badge key={i} variant="outline" className="font-normal">
                  {c.label ?? c.className ?? "element"}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No UI hierarchy captured.
            </p>
          )}
        </section>
      </div>
    </aside>
  );
}
