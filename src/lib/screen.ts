/**
 * Shared shapes for screen node data. Written by the worker (stored in
 * `ScreenNode.uiTreeJson`) and read by the web inspector.
 */

/** [x1, y1, x2, y2] pixel bounds. */
export type Bounds = [number, number, number, number];

export interface ClickableSummary {
  label: string | null;
  className: string | null;
  resourceId: string | null;
  bounds: Bounds;
}

export interface UiTreeSummary {
  activity: string | null;
  clickableCount: number;
  clickables: ClickableSummary[];
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
