/**
 * Shared shapes for screen node data. Written by the worker (stored in
 * `ScreenNode.uiTreeJson`) and read by the web inspector.
 */

import {
  boundsKey,
  classifyRisk,
  isRiskyKeywordReason,
} from "./safeTap";

/** [x1, y1, x2, y2] pixel bounds. */
export type Bounds = [number, number, number, number];

export interface ClickableSummary {
  label: string | null;
  className: string | null;
  resourceId: string | null;
  bounds: Bounds;
  /** Optional fields when full element data is available. */
  text?: string | null;
  contentDesc?: string | null;
}

export interface UiTreeSummary {
  activity: string | null;
  clickableCount: number;
  clickables: ClickableSummary[];
}

export interface Hotspot {
  id: string;
  label: string | null;
  text: string | null;
  contentDesc: string | null;
  resourceId: string | null;
  className: string | null;
  bounds: Bounds;
  isRisky: boolean;
  riskReason: string | null;
}

export const NODE_TYPES = [
  "page",
  "modal",
  "bottom_sheet",
  "dropdown",
  "tab",
  "error",
  "empty",
  "loading",
  "unknown",
] as const;

export type NodeType = (typeof NODE_TYPES)[number];

export const ISSUE_TYPE_LABELS: Record<string, string> = {
  layout: "Layout",
  typography: "Typography",
  color: "Color",
  spacing: "Spacing",
  copy: "Copy",
  broken_state: "Broken State",
  accessibility: "Accessibility",
};

export const NODE_TYPE_LABELS: Record<string, string> = {
  page: "Page",
  modal: "Modal",
  bottom_sheet: "Bottom Sheet",
  dropdown: "Dropdown",
  tab: "Tab",
  error: "Error",
  empty: "Empty",
  loading: "Loading",
  unknown: "Unknown",
};

/** User-facing node name with V2 fallbacks. */
export function displayNodeName(node: {
  name?: string | null;
  stateName?: string | null;
  activityName?: string | null;
  depth?: number;
}): string {
  const name = node.name?.trim();
  if (name) return name;
  if (node.stateName?.trim()) return node.stateName.trim();
  if (node.activityName?.trim()) return node.activityName.trim();
  if (typeof node.depth === "number") return `Screen at depth ${node.depth}`;
  return "Screen";
}

function parseBounds(value: unknown): Bounds | null {
  if (
    Array.isArray(value) &&
    value.length === 4 &&
    value.every((n) => typeof n === "number")
  ) {
    return value as Bounds;
  }
  return null;
}

export function parseUiTree(value: unknown): UiTreeSummary | null {
  if (value && typeof value === "object" && "clickables" in value) {
    return value as UiTreeSummary;
  }
  return null;
}

/**
 * Derive stable hotspots from a node's `uiTreeJson` summary.
 * IDs are `clickable-{index}` within one node.
 */
export function deriveHotspots(
  uiTreeJson: unknown,
  opts?: { appPackage?: string | null },
): Hotspot[] {
  const tree = parseUiTree(uiTreeJson);
  if (!tree) return [];

  const seen = new Set<string>();
  const hotspots: Hotspot[] = [];

  tree.clickables.forEach((c, index) => {
    const bounds = parseBounds(c.bounds);
    if (!bounds) return;

    const key = boundsKey(bounds);
    if (seen.has(key)) return;
    seen.add(key);

    const text = c.text ?? null;
    const contentDesc = c.contentDesc ?? null;
    const riskReason = classifyRisk({
      text: text ?? c.label,
      contentDesc,
      resourceId: c.resourceId,
      className: c.className,
      packageName: null,
      bounds,
      appPackage: opts?.appPackage ?? null,
    });

    hotspots.push({
      id: `clickable-${index}`,
      label: c.label,
      text,
      contentDesc,
      resourceId: c.resourceId,
      className: c.className,
      bounds,
      isRisky: isRiskyKeywordReason(riskReason) || riskReason === "password field",
      riskReason,
    });
  });

  return hotspots;
}

export function findHotspotById(
  uiTreeJson: unknown,
  hotspotId: string,
  opts?: { appPackage?: string | null },
): Hotspot | null {
  return deriveHotspots(uiTreeJson, opts).find((h) => h.id === hotspotId) ?? null;
}

/** Human-readable description of an edge action, e.g. `tap "Search"`. */
export function describeAction(edge: {
  actionType: string;
  targetLabel?: string | null;
  targetText?: string | null;
  targetBounds?: unknown;
}): string {
  const label = edge.targetLabel?.trim() ?? edge.targetText?.trim() ?? "";
  if (label) return `${edge.actionType} "${label}"`;

  const bounds = edge.targetBounds;
  if (Array.isArray(bounds) && bounds.length === 4) {
    const [x1, y1, x2, y2] = bounds as Bounds;
    const cx = Math.round((x1 + x2) / 2);
    const cy = Math.round((y1 + y2) / 2);
    return `${edge.actionType} bounds ${cx},${cy}`;
  }
  return edge.actionType;
}

export interface PathEdge {
  id: string;
  fromNodeId: string | null;
  toNodeId: string;
  actionType: string;
  targetBounds?: unknown;
  targetLabel?: string | null;
  targetText?: string | null;
}

export interface PathNode {
  id: string;
  depth: number;
  hash: string;
}

/**
 * BFS from root (depth 0, or node with no incoming edges) to `targetId`.
 * Returns the sequence of edges to follow, or null if unreachable.
 */
export function findPathToNode(
  nodes: PathNode[],
  edges: PathEdge[],
  targetId: string,
): PathEdge[] | null {
  if (nodes.length === 0) return null;

  const nodeIds = new Set(nodes.map((n) => n.id));
  if (!nodeIds.has(targetId)) return null;

  const incomingCount = new Map<string, number>();
  for (const n of nodes) incomingCount.set(n.id, 0);
  for (const e of edges) {
    if (e.fromNodeId && nodeIds.has(e.fromNodeId) && nodeIds.has(e.toNodeId)) {
      incomingCount.set(e.toNodeId, (incomingCount.get(e.toNodeId) ?? 0) + 1);
    }
  }

  const roots = nodes.filter(
    (n) => n.depth === 0 || (incomingCount.get(n.id) ?? 0) === 0,
  );
  const root = roots.sort((a, b) => a.depth - b.depth)[0];
  if (!root) return null;
  if (root.id === targetId) return [];

  const adjacency = new Map<string, PathEdge[]>();
  for (const e of edges) {
    if (!e.fromNodeId || !nodeIds.has(e.fromNodeId) || !nodeIds.has(e.toNodeId)) {
      continue;
    }
    const list = adjacency.get(e.fromNodeId) ?? [];
    list.push(e);
    adjacency.set(e.fromNodeId, list);
  }

  const queue: string[] = [root.id];
  const parentEdge = new Map<string, PathEdge>();
  const visited = new Set<string>([root.id]);

  while (queue.length > 0) {
    const current = queue.shift()!;
    for (const edge of adjacency.get(current) ?? []) {
      if (visited.has(edge.toNodeId)) continue;
      visited.add(edge.toNodeId);
      parentEdge.set(edge.toNodeId, edge);
      if (edge.toNodeId === targetId) {
        const path: PathEdge[] = [];
        let cursor = targetId;
        while (cursor !== root.id) {
          const pe = parentEdge.get(cursor);
          if (!pe) return null;
          path.unshift(pe);
          cursor = pe.fromNodeId!;
        }
        return path;
      }
      queue.push(edge.toNodeId);
    }
  }

  return null;
}

export function parseBoundsJson(value: unknown): Bounds | null {
  return parseBounds(value);
}
