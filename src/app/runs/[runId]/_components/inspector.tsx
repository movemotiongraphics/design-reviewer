"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Loader2,
  RefreshCw,
  RotateCcw,
  Undo2,
  X,
} from "lucide-react";
import { toast } from "sonner";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  describeAction,
  displayNodeName,
  NODE_TYPE_LABELS,
  NODE_TYPES,
  type Hotspot,
} from "~/lib/screen";
import { api, type RouterOutputs } from "~/trpc/react";
import { CommentsPanel } from "./comments-panel";
import { CopyPngButton } from "./copy-png-button";
import { HotspotOverlay } from "./hotspot-overlay";
import type { ExplorationApi } from "./use-exploration";

type GraphData = RouterOutputs["reviewRun"]["getGraph"];
export type GraphNode = GraphData["nodes"][number];
export type GraphEdge = GraphData["edges"][number];

/** @deprecated use displayNodeName */
export function nodeLabel(node: {
  name?: string | null;
  stateName: string | null;
  activityName: string | null;
  depth?: number;
}): string {
  return displayNodeName(node);
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
  runId,
  runStatus: _runStatus,
  node,
  nodes,
  edges,
  exploration,
  showHotspots,
  onShowHotspotsChange,
  hotspots,
  onClose,
  onSelectNode,
}: {
  runId: string;
  runStatus: string;
  node: GraphNode;
  nodes: GraphNode[];
  edges: GraphEdge[];
  exploration: ExplorationApi;
  showHotspots: boolean;
  onShowHotspotsChange: (show: boolean) => void;
  hotspots: Hotspot[];
  onClose: () => void;
  onSelectNode: (id: string) => void;
}) {
  const utils = api.useUtils();
  const { interactive, exploring, onHotspotClick, onPressBack, onResume, onResetRoot, onRefreshScreenshot } =
    exploration;
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const incoming = edges.filter((e) => e.toNodeId === node.id);
  const outgoing = edges.filter((e) => e.fromNodeId === node.id);

  const [name, setName] = useState(node.name ?? "");
  const [flowName, setFlowName] = useState(node.flowName ?? "");
  const [nodeType, setNodeType] = useState(node.nodeType ?? "");

  useEffect(() => {
    setName(node.name ?? "");
    setFlowName(node.flowName ?? "");
    setNodeType(node.nodeType ?? "");
  }, [node.id, node.name, node.flowName, node.nodeType]);

  const updateMeta = api.screenNode.updateMetadata.useMutation({
    onSuccess: async () => {
      toast.success("Node updated");
      await utils.reviewRun.getGraph.invalidate({ runId });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <aside className="flex h-full w-[360px] shrink-0 flex-col border-l bg-background">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="truncate font-semibold" title={displayNodeName(node)}>
          {displayNodeName(node)}
        </h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="size-4" />
        </Button>
      </div>

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
        {exploring ? (
          <div className="flex items-center gap-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm text-sky-900 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-100">
            <Loader2 className="size-4 animate-spin" />
            Exploring action…
          </div>
        ) : null}

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Label className="text-xs">Hotspots</Label>
            <div className="flex items-center gap-1">
              <Button
                type="button"
                size="sm"
                variant={showHotspots ? "secondary" : "outline"}
                onClick={() => onShowHotspotsChange(!showHotspots)}
              >
                {showHotspots ? "On" : "Off"}
              </Button>
              <CopyPngButton screenshotUrl={node.screenshotUrl} />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border bg-muted">
            <HotspotOverlay
              screenshotUrl={node.screenshotUrl}
              alt={displayNodeName(node)}
              hotspots={hotspots}
              enabled={showHotspots}
              busy={exploring || !interactive}
              onHotspotClick={(h) => void onHotspotClick(node.id, h)}
            />
          </div>
          {!interactive ? (
            <p className="text-xs text-muted-foreground">
              Hotspot taps require an active session (Awaiting input).
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">
              Click a safe hotspot to explore. Risky actions are blocked.
            </p>
          )}
        </div>

        {interactive ? (
          <div className="flex flex-wrap gap-1.5">
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={exploring}
              onClick={() => void onRefreshScreenshot(node.id)}
              title="Re-navigate here and overwrite this node's screenshot"
            >
              <RefreshCw className="size-3.5" />
              Refresh screenshot
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={exploring}
              onClick={() => void onPressBack(node.id)}
            >
              <Undo2 className="size-3.5" />
              Back
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={exploring}
              onClick={() => void onResume(node.id)}
            >
              Resume here
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={exploring}
              onClick={() => void onResetRoot()}
            >
              <RotateCcw className="size-3.5" />
              Reset to root
            </Button>
          </div>
        ) : null}

        <form
          className="space-y-2 rounded-lg border p-3"
          onSubmit={(e) => {
            e.preventDefault();
            updateMeta.mutate({
              id: node.id,
              name,
              flowName: flowName || null,
              nodeType: nodeType
                ? (nodeType as (typeof NODE_TYPES)[number])
                : null,
            });
          }}
        >
          <div className="space-y-1">
            <Label htmlFor="node-name">Name</Label>
            <Input
              id="node-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={displayNodeName({ ...node, name: null })}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="flow-name">Flow</Label>
            <Input
              id="flow-name"
              value={flowName}
              onChange={(e) => setFlowName(e.target.value)}
              placeholder="e.g. Onboarding"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="node-type">Node type</Label>
            <select
              id="node-type"
              className="border-input bg-background flex h-9 w-full rounded-md border px-2 text-sm"
              value={nodeType}
              onChange={(e) => setNodeType(e.target.value)}
            >
              <option value="">—</option>
              {NODE_TYPES.map((t) => (
                <option key={t} value={t}>
                  {NODE_TYPE_LABELS[t] ?? t}
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" size="sm" disabled={updateMeta.isPending}>
            Save metadata
          </Button>
        </form>

        <dl className="divide-y">
          <Field label="Activity" value={node.activityName ?? "—"} />
          <Field label="State" value={node.stateName ?? "—"} />
          <Field label="Depth" value={node.depth} />
          <Field label="Clickables" value={node.clickableCount} />
          <Field
            label="Open comments"
            value={node.commentSummary.openCount}
          />
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
                    <button
                      type="button"
                      className="text-foreground hover:underline"
                      onClick={() => from && onSelectNode(from.id)}
                    >
                      {from ? displayNodeName(from) : "Launch"}
                    </button>{" "}
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
                    <button
                      type="button"
                      className="text-foreground hover:underline"
                      onClick={() => to && onSelectNode(to.id)}
                    >
                      {to ? displayNodeName(to) : "?"}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">None.</p>
          )}
        </section>

        {showHotspots && hotspots.length > 0 ? (
          <section>
            <h3 className="mb-1 text-sm font-semibold">
              Hotspots ({hotspots.length})
            </h3>
            <div className="flex flex-wrap gap-1">
              {hotspots.slice(0, 40).map((h) => (
                <Badge
                  key={h.id}
                  variant={h.isRisky ? "destructive" : "outline"}
                  className="font-normal"
                >
                  {h.label ?? h.className ?? "element"}
                  {h.isRisky ? " · blocked" : ""}
                </Badge>
              ))}
            </div>
          </section>
        ) : null}

        <CommentsPanel screenNodeId={node.id} />
      </div>
    </aside>
  );
}
