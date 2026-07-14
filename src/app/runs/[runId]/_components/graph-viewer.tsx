"use client";

import "@xyflow/react/dist/style.css";

import { useCallback, useMemo, useState } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";

import { describeAction } from "~/lib/screen";
import { api } from "~/trpc/react";
import { Inspector, nodeLabel } from "./inspector";
import { ScreenNodeCard, type ScreenNodeData } from "./screen-node-card";

const COL_W = 300;
const ROW_H = 380;

const nodeTypes = { screen: ScreenNodeCard };

export function GraphViewer({
  runId,
  poll,
}: {
  runId: string;
  poll: boolean;
}) {
  const graph = api.reviewRun.getGraph.useQuery(
    { runId },
    { refetchInterval: poll ? 2500 : false },
  );

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const rawNodes = graph.data?.nodes;
  const rawEdges = graph.data?.edges;

  const flowNodes = useMemo<Node<ScreenNodeData>[]>(() => {
    if (!rawNodes) return [];
    const perDepth = new Map<number, number>();
    return rawNodes.map((n) => {
      const index = perDepth.get(n.depth) ?? 0;
      perDepth.set(n.depth, index + 1);
      return {
        id: n.id,
        type: "screen",
        position: { x: n.depth * COL_W, y: index * ROW_H },
        data: {
          label: nodeLabel(n),
          screenshotUrl: n.screenshotUrl,
          depth: n.depth,
          clickableCount: n.clickableCount,
          selected: n.id === selectedId,
        },
      };
    });
  }, [rawNodes, selectedId]);

  const flowEdges = useMemo<Edge[]>(() => {
    if (!rawEdges) return [];
    const nodeIds = new Set(rawNodes?.map((n) => n.id));
    return rawEdges
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
      }));
  }, [rawEdges, rawNodes]);

  const onNodeClick = useCallback((_: unknown, node: Node) => {
    setSelectedId(node.id);
  }, []);

  const selectedNode = rawNodes?.find((n) => n.id === selectedId) ?? null;

  return (
    <div className="flex h-full">
      <div className="min-w-0 flex-1">
        <ReactFlow
          nodes={flowNodes}
          edges={flowEdges}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          onPaneClick={() => setSelectedId(null)}
          nodesDraggable={false}
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
          node={selectedNode}
          nodes={rawNodes}
          edges={rawEdges}
          onClose={() => setSelectedId(null)}
        />
      ) : null}
    </div>
  );
}
