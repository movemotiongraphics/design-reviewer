"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import { MessageSquare, MousePointerClick } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import type { Hotspot } from "~/lib/screen";
import { cn } from "~/lib/utils";
import { HotspotOverlay } from "./hotspot-overlay";

export interface ScreenNodeData {
  label: string;
  screenshotUrl: string;
  depth: number;
  clickableCount: number;
  selected: boolean;
  dimmed?: boolean;
  highlighted?: boolean;
  openCommentCount?: number;
  issueCount?: number;
  subtitle?: string;
  hotspots?: Hotspot[];
  showHotspots?: boolean;
  hotspotBusy?: boolean;
  onHotspotClick?: (hotspot: Hotspot) => void;
  [key: string]: unknown;
}

export function ScreenNodeCard({ data }: NodeProps) {
  const node = data as ScreenNodeData;
  const hotspots = node.hotspots ?? [];
  const showHotspots = !!node.showHotspots && hotspots.length > 0;

  return (
    <div
      className={cn(
        "w-[200px] overflow-hidden rounded-lg border bg-card shadow-sm transition-all",
        node.selected
          ? "ring-2 ring-primary"
          : "hover:ring-1 hover:ring-primary/40",
        node.highlighted && "ring-2 ring-amber-400",
        node.dimmed && "opacity-30",
      )}
    >
      <Handle type="target" position={Position.Left} className="!bg-muted-foreground" />
      <div className="relative flex aspect-[9/16] w-full items-center justify-center overflow-hidden bg-muted">
        <HotspotOverlay
          screenshotUrl={node.screenshotUrl}
          alt={node.label}
          hotspots={hotspots}
          enabled={showHotspots}
          busy={node.hotspotBusy}
          showHoverLabel={false}
          // Shrink-wrap the img so hotspot bounds map 1:1 (not letterboxed inside a full box).
          className="mx-0 max-h-full max-w-full"
          imgClassName="mx-0 max-h-full max-w-full w-auto h-auto object-contain"
          onHotspotClick={node.onHotspotClick}
        />
        <Badge variant="secondary" className="pointer-events-none absolute left-1.5 top-1.5 z-10">
          d{node.depth}
        </Badge>
        {(node.openCommentCount ?? 0) > 0 ? (
          <Badge className="pointer-events-none absolute right-1.5 top-1.5 z-10 gap-0.5" variant="default">
            <MessageSquare className="size-3" />
            {node.openCommentCount}
          </Badge>
        ) : null}
      </div>
      <div className="space-y-0.5 px-2 py-1.5">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-xs font-medium" title={node.label}>
            {node.label}
          </p>
          <span className="flex shrink-0 items-center gap-0.5 text-xs text-muted-foreground">
            <MousePointerClick className="size-3" />
            {node.clickableCount}
          </span>
        </div>
        {node.subtitle ? (
          <p className="truncate text-[10px] text-muted-foreground" title={node.subtitle}>
            {node.subtitle}
          </p>
        ) : null}
        {(node.issueCount ?? 0) > 0 ? (
          <p className="text-[10px] text-amber-700 dark:text-amber-400">
            {node.issueCount} issue{node.issueCount === 1 ? "" : "s"}
          </p>
        ) : null}
      </div>
      <Handle type="source" position={Position.Right} className="!bg-muted-foreground" />
    </div>
  );
}
