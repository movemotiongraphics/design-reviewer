"use client";

import { Handle, Position, type NodeProps } from "@xyflow/react";
import { MousePointerClick } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

export interface ScreenNodeData {
  label: string;
  screenshotUrl: string;
  depth: number;
  clickableCount: number;
  selected: boolean;
  [key: string]: unknown;
}

export function ScreenNodeCard({ data }: NodeProps) {
  const node = data as ScreenNodeData;
  return (
    <div
      className={cn(
        "w-[200px] overflow-hidden rounded-lg border bg-card shadow-sm transition-all",
        node.selected
          ? "ring-2 ring-primary"
          : "hover:ring-1 hover:ring-primary/40",
      )}
    >
      <Handle type="target" position={Position.Left} className="!bg-muted-foreground" />
      <div className="relative aspect-[9/16] w-full bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={node.screenshotUrl}
          alt={node.label}
          className="h-full w-full object-cover"
          draggable={false}
        />
        <Badge variant="secondary" className="absolute left-1.5 top-1.5">
          d{node.depth}
        </Badge>
      </div>
      <div className="flex items-center justify-between gap-2 px-2 py-1.5">
        <p className="truncate text-xs font-medium" title={node.label}>
          {node.label}
        </p>
        <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
          <MousePointerClick className="size-3" />
          {node.clickableCount}
        </span>
      </div>
      <Handle type="source" position={Position.Right} className="!bg-muted-foreground" />
    </div>
  );
}
