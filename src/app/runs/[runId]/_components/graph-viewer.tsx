"use client";

import "@xyflow/react/dist/style.css";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
  type NodeChange,
} from "@xyflow/react";
import { LayoutGrid, Search } from "lucide-react";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  ISSUE_TYPE_LABELS,
  deriveHotspots,
  describeAction,
  displayNodeName,
  type Hotspot,
} from "~/lib/screen";
import { api } from "~/trpc/react";
import { Inspector, type GraphNode } from "./inspector";
import { ScreenNodeCard, type ScreenNodeData } from "./screen-node-card";
import { useExploration } from "./use-exploration";

const COL_W = 300;
const ROW_H = 380;
const GROUP_GAP = 80;

const nodeTypes = { screen: ScreenNodeCard };

export type GroupMode = "none" | "activity" | "depth" | "flow" | "nodeType";

function groupKey(node: GraphNode, mode: GroupMode): string {
  switch (mode) {
    case "activity":
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- empty string should fall back
      return node.activityName?.trim() || "Unknown activity";
    case "depth":
      return `Depth ${node.depth}`;
    case "flow":
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- empty string should fall back
      return node.flowName?.trim() || "Ungrouped flow";
    case "nodeType":
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- empty string should fall back
      return node.nodeType?.trim() || "unknown";
    default:
      return "all";
  }
}

function autoLayout(
  nodes: GraphNode[],
  mode: GroupMode,
): Map<string, { x: number; y: number }> {
  const positions = new Map<string, { x: number; y: number }>();

  if (mode === "none") {
    const perDepth = new Map<number, number>();
    for (const n of nodes) {
      const index = perDepth.get(n.depth) ?? 0;
      perDepth.set(n.depth, index + 1);
      positions.set(n.id, { x: n.depth * COL_W, y: index * ROW_H });
    }
    return positions;
  }

  const groups = new Map<string, GraphNode[]>();
  for (const n of nodes) {
    const key = groupKey(n, mode);
    const list = groups.get(key) ?? [];
    list.push(n);
    groups.set(key, list);
  }

  const keys = [...groups.keys()].sort((a, b) => a.localeCompare(b));
  keys.forEach((key, gi) => {
    const list = groups.get(key) ?? [];
    list.forEach((n, i) => {
      positions.set(n.id, {
        x: gi * (COL_W + GROUP_GAP),
        y: i * ROW_H + 40,
      });
    });
  });

  return positions;
}

function matchesSearch(node: GraphNode, q: string): boolean {
  if (!q) return true;
  const hay = [
    node.name,
    node.displayName,
    node.activityName,
    node.stateName,
    node.flowName,
    node.nodeType,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function matchesFilters(
  node: GraphNode,
  issueType: string,
  commentStatus: string,
): boolean {
  if (issueType) {
    if ((node.commentSummary.issueCounts[issueType] ?? 0) === 0) return false;
  }
  if (commentStatus === "open" && node.commentSummary.openCount === 0) {
    return false;
  }
  if (commentStatus === "resolved" && node.commentSummary.resolvedCount === 0) {
    return false;
  }
  if (commentStatus === "ignored" && node.commentSummary.ignoredCount === 0) {
    return false;
  }
  if (commentStatus === "any") {
    const total =
      node.commentSummary.openCount +
      node.commentSummary.resolvedCount +
      node.commentSummary.ignoredCount;
    if (total === 0) return false;
  }
  return true;
}

export function GraphViewer({
  runId,
  runStatus,
  poll,
}: {
  runId: string;
  runStatus: string;
  poll: boolean;
}) {
  const utils = api.useUtils();
  const graph = api.reviewRun.getGraph.useQuery(
    { runId },
    { refetchInterval: poll ? 2500 : false },
  );

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [issueFilter, setIssueFilter] = useState("");
  const [commentFilter, setCommentFilter] = useState("");
  const [groupMode, setGroupMode] = useState<GroupMode>("none");
  const [showHotspots, setShowHotspots] = useState(true);

  const onSelectNode = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const exploration = useExploration({
    runId,
    runStatus,
    onSelectNode,
  });

  const rawNodes = graph.data?.nodes;
  const rawEdges = graph.data?.edges;

  const hotspotsByNodeId = useMemo(() => {
    const map = new Map<string, Hotspot[]>();
    for (const n of rawNodes ?? []) {
      map.set(n.id, deriveHotspots(n.uiTreeJson));
    }
    return map;
  }, [rawNodes]);

  const updatePosition = api.screenNode.updatePosition.useMutation();
  const bulkPositions = api.screenNode.bulkUpdatePositions.useMutation({
    onSuccess: async () => {
      await utils.reviewRun.getGraph.invalidate({ runId });
    },
  });

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Positions waiting to be persisted to the server. */
  const pendingPositions = useRef<Map<string, { x: number; y: number }>>(
    new Map(),
  );
  /**
   * Last known live positions on the canvas. Survives `built` rebuilds so a
   * selection change / poll / hotspot toggle can't snap a dragged node back.
   */
  const localPositionsRef = useRef<Map<string, { x: number; y: number }>>(
    new Map(),
  );
  /** When true, the next sync from `built` should apply server/layout positions. */
  const forceLayoutRef = useRef(false);

  const flushPositions = useCallback(() => {
    const entries = [...pendingPositions.current.entries()];
    pendingPositions.current.clear();
    if (entries.length === 0) return;
    if (entries.length === 1) {
      const [id, pos] = entries[0]!;
      updatePosition.mutate({
        id,
        positionX: pos.x,
        positionY: pos.y,
      });
      return;
    }
    bulkPositions.mutate({
      positions: entries.map(([id, pos]) => ({
        id,
        positionX: pos.x,
        positionY: pos.y,
      })),
    });
  }, [bulkPositions, updatePosition]);

  const queuePosition = useCallback(
    (id: string, x: number, y: number) => {
      localPositionsRef.current.set(id, { x, y });
      pendingPositions.current.set(id, { x, y });
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(flushPositions, 400);
    },
    [flushPositions],
  );

  const searchQ = search.trim().toLowerCase();
  const hasActiveFilter = !!(searchQ || issueFilter || commentFilter);

  const hotspotBusy = exploration.exploring || !exploration.interactive;
  const onHotspotClickRef = useRef(exploration.onHotspotClick);
  onHotspotClickRef.current = exploration.onHotspotClick;

  const built = useMemo(() => {
    if (!rawNodes) {
      return { flowNodes: [] as Node<ScreenNodeData>[], groupLabels: [] as Node[] };
    }

    const layout = autoLayout(rawNodes, groupMode === "none" ? "none" : groupMode);

    const flowNodes: Node<ScreenNodeData>[] = rawNodes.map((n) => {
      // Manual mode: prefer persisted drag positions. Grouping modes: computed columns.
      const saved =
        groupMode === "none" &&
        n.positionX != null &&
        n.positionY != null
          ? { x: n.positionX, y: n.positionY }
          : layout.get(n.id) ?? { x: n.depth * COL_W, y: 0 };

      const matchSearch = matchesSearch(n, searchQ);
      const matchFilter = matchesFilters(n, issueFilter, commentFilter);
      const matches = matchSearch && matchFilter;

      const subtitle = [n.nodeType, n.activityName?.split(".").pop()]
        .filter(Boolean)
        .join(" · ");

      const nodeHotspots = hotspotsByNodeId.get(n.id) ?? [];
      const nodeId = n.id;

      return {
        id: n.id,
        type: "screen",
        position: saved,
        data: {
          label: displayNodeName(n),
          screenshotUrl: n.screenshotUrl,
          depth: n.depth,
          clickableCount: n.clickableCount,
          selected: n.id === selectedId,
          dimmed: hasActiveFilter && !matches,
          highlighted: !!searchQ && matchSearch && matchFilter,
          openCommentCount: n.commentSummary.openCount,
          issueCount: n.issueCount,
          subtitle,
          hotspots: nodeHotspots,
          showHotspots,
          hotspotBusy,
          onHotspotClick: (hotspot: Hotspot) => {
            setSelectedId(nodeId);
            void onHotspotClickRef.current(nodeId, hotspot);
          },
        },
      };
    });

    const groupLabels: Node[] = [];
    if (groupMode !== "none") {
      const keys = new Set(rawNodes.map((n) => groupKey(n, groupMode)));
      const sorted = [...keys].sort((a, b) => a.localeCompare(b));
      sorted.forEach((key, gi) => {
        groupLabels.push({
          id: `group-label-${gi}`,
          type: "default",
          position: { x: gi * (COL_W + GROUP_GAP), y: 0 },
          data: { label: key },
          draggable: false,
          selectable: false,
          style: {
            background: "transparent",
            border: "none",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--muted-foreground)",
            width: COL_W,
            padding: 0,
          },
        });
      });
    }

    return { flowNodes, groupLabels };
  }, [
    rawNodes,
    selectedId,
    searchQ,
    issueFilter,
    commentFilter,
    hasActiveFilter,
    groupMode,
    hotspotsByNodeId,
    showHotspots,
    hotspotBusy,
  ]);

  const [nodes, setNodes, onNodesChangeBase] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    const force = forceLayoutRef.current;
    forceLayoutRef.current = false;

    setNodes(
      [...built.groupLabels, ...built.flowNodes].map((n) => {
        if (n.id.startsWith("group-label-")) return n;

        if (force) {
          localPositionsRef.current.set(n.id, n.position);
          return n;
        }

        const local = localPositionsRef.current.get(n.id);
        if (local) {
          return { ...n, position: local };
        }

        localPositionsRef.current.set(n.id, n.position);
        return n;
      }),
    );
  }, [built, setNodes]);

  useEffect(() => {
    if (!rawEdges || !rawNodes) {
      setEdges([]);
      return;
    }
    const nodeIds = new Set(rawNodes.map((n) => n.id));
    setEdges(
      rawEdges
        .filter(
          (e) =>
            e.fromNodeId != null &&
            nodeIds.has(e.fromNodeId) &&
            nodeIds.has(e.toNodeId),
        )
        .map((e) => ({
          id: e.id,
          source: e.fromNodeId!,
          target: e.toNodeId,
          label: describeAction(e),
          labelBgPadding: [6, 3] as [number, number],
          animated: false,
        })),
    );
  }, [rawEdges, rawNodes, setEdges]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      onNodesChangeBase(changes);
      for (const change of changes) {
        if (change.type !== "position" || !change.position) continue;
        if (change.id.startsWith("group-label-")) continue;

        // Keep a live copy so a mid-drag rebuild can't snap the node back.
        localPositionsRef.current.set(change.id, {
          x: change.position.x,
          y: change.position.y,
        });

        if (!change.dragging) {
          queuePosition(change.id, change.position.x, change.position.y);
        }
      }
    },
    [onNodesChangeBase, queuePosition],
  );

  const onNodeClick = useCallback((_: unknown, node: Node) => {
    if (node.id.startsWith("group-label-")) return;
    setSelectedId(node.id);
  }, []);

  const selectedNode = rawNodes?.find((n) => n.id === selectedId) ?? null;

  async function applyLayout(mode: GroupMode, persist: boolean) {
    if (!rawNodes) return;
    const layout = autoLayout(rawNodes, mode === "none" ? "none" : mode);
    for (const [id, pos] of layout) {
      localPositionsRef.current.set(id, pos);
    }
    // Apply immediately — groupMode may be unchanged, so `built` might not rebuild.
    forceLayoutRef.current = true;
    setGroupMode(mode);
    setNodes((current) =>
      current.map((n) => {
        if (n.id.startsWith("group-label-")) return n;
        const pos = layout.get(n.id);
        return pos ? { ...n, position: pos } : n;
      }),
    );
    const next = rawNodes.map((n) => {
      const pos = layout.get(n.id) ?? { x: 0, y: 0 };
      return { id: n.id, positionX: pos.x, positionY: pos.y };
    });
    if (persist) {
      await bulkPositions.mutateAsync({ positions: next });
      toast.success("Layout saved");
    }
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center gap-2 border-b px-3 py-2">
        <div className="relative min-w-[180px] flex-1">
          <Search className="pointer-events-none absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="h-8 pl-8"
            placeholder="Search nodes…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="border-input bg-background h-8 rounded-md border px-2 text-sm"
          value={issueFilter}
          onChange={(e) => setIssueFilter(e.target.value)}
          title="Filter by issue type"
        >
          <option value="">All issues</option>
          {Object.entries(ISSUE_TYPE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select
          className="border-input bg-background h-8 rounded-md border px-2 text-sm"
          value={commentFilter}
          onChange={(e) => setCommentFilter(e.target.value)}
          title="Filter by comment status"
        >
          <option value="">All comments</option>
          <option value="open">Open comments</option>
          <option value="resolved">Resolved</option>
          <option value="ignored">Ignored</option>
          <option value="any">Has comments</option>
        </select>
        <select
          className="border-input bg-background h-8 rounded-md border px-2 text-sm"
          value={groupMode}
          onChange={(e) => {
            const mode = e.target.value as GroupMode;
            void applyLayout(mode, true);
          }}
          title="Grouping"
        >
          <option value="none">Group: None</option>
          <option value="activity">By Activity</option>
          <option value="depth">By Depth</option>
          <option value="flow">By Flow</option>
          <option value="nodeType">By Node Type</option>
        </select>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => void applyLayout("none", true)}
        >
          <LayoutGrid className="size-3.5" />
          Reset layout
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() =>
            void applyLayout(groupMode === "none" ? "depth" : groupMode, true)
          }
        >
          Auto layout
        </Button>
        <Button
          type="button"
          size="sm"
          variant={showHotspots ? "secondary" : "outline"}
          onClick={() => setShowHotspots((v) => !v)}
          title="Toggle hotspot overlays on graph screenshots"
        >
          Hotspots {showHotspots ? "on" : "off"}
        </Button>
      </div>

      <div className="flex min-h-0 flex-1">
        <div className="min-w-0 flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            onPaneClick={() => setSelectedId(null)}
            nodesDraggable
            fitView
            minZoom={0.1}
            proOptions={{ hideAttribution: true }}
          >
            <Background />
            <Controls />
            <MiniMap pannable zoomable />
          </ReactFlow>
        </div>
        {selectedNode && rawNodes && rawEdges ? (
          <Inspector
            runId={runId}
            runStatus={runStatus}
            node={selectedNode}
            nodes={rawNodes}
            edges={rawEdges}
            exploration={exploration}
            showHotspots={showHotspots}
            onShowHotspotsChange={setShowHotspots}
            hotspots={hotspotsByNodeId.get(selectedNode.id) ?? []}
            onClose={() => setSelectedId(null)}
            onSelectNode={onSelectNode}
          />
        ) : null}
      </div>
    </div>
  );
}
