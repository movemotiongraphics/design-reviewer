"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { Hotspot } from "~/lib/screen";
import { cn } from "~/lib/utils";

export function HotspotOverlay({
  screenshotUrl,
  alt,
  hotspots,
  enabled,
  busy = false,
  showHoverLabel = true,
  imgClassName,
  className,
  onHotspotClick,
}: {
  screenshotUrl: string;
  alt: string;
  hotspots: Hotspot[];
  enabled: boolean;
  busy?: boolean;
  /** Show the floating label under the hovered hotspot. Default true. */
  showHoverLabel?: boolean;
  imgClassName?: string;
  className?: string;
  onHotspotClick?: (hotspot: Hotspot) => void;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  const [display, setDisplay] = useState<{ w: number; h: number } | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const measure = useCallback(() => {
    const img = imgRef.current;
    if (!img) return;
    const nextNatural =
      img.naturalWidth > 0 && img.naturalHeight > 0
        ? { w: img.naturalWidth, h: img.naturalHeight }
        : null;
    // Use layout size (not getBoundingClientRect) so React Flow zoom
    // transforms don't skew hotspot positioning.
    const nextDisplay = { w: img.clientWidth, h: img.clientHeight };
    setNatural((prev) =>
      prev && nextNatural && prev.w === nextNatural.w && prev.h === nextNatural.h
        ? prev
        : nextNatural,
    );
    setDisplay((prev) =>
      prev && prev.w === nextDisplay.w && prev.h === nextDisplay.h
        ? prev
        : nextDisplay,
    );
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, screenshotUrl]);

  // Re-measure when the image's laid-out size changes (e.g. React Flow zoom).
  useEffect(() => {
    const img = imgRef.current;
    if (!img || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(img);
    return () => ro.disconnect();
  }, [measure, screenshotUrl]);

  const scaleX =
    natural && display && natural.w > 0 ? display.w / natural.w : 1;
  const scaleY =
    natural && display && natural.h > 0 ? display.h / natural.h : 1;

  const hovered = hotspots.find((h) => h.id === hoveredId) ?? null;

  return (
    <div className={cn("relative mx-auto inline-block max-w-full", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={screenshotUrl}
        alt={alt}
        className={cn(
          "mx-auto max-h-[420px] w-auto object-contain",
          imgClassName,
        )}
        onLoad={measure}
        draggable={false}
      />

      {enabled && natural && display ? (
        <div
          className="pointer-events-none absolute left-0 top-0"
          style={{ width: display.w, height: display.h }}
        >
          {hotspots.map((h) => {
            const [x1, y1, x2, y2] = h.bounds;
            const left = x1 * scaleX;
            const top = y1 * scaleY;
            const width = Math.max(4, (x2 - x1) * scaleX);
            const height = Math.max(4, (y2 - y1) * scaleY);
            const label =
              h.label ??
              h.text ??
              h.contentDesc ??
              h.className ??
              `bounds ${Math.round((x1 + x2) / 2)},${Math.round((y1 + y2) / 2)}`;

            return (
              <button
                key={h.id}
                type="button"
                title={
                  h.isRisky
                    ? `Blocked: ${h.riskReason ?? "risky"}`
                    : label
                }
                disabled={busy || h.isRisky}
                className={cn(
                  // nodrag/nopan: keep React Flow from stealing pointer events
                  "nodrag nopan pointer-events-auto absolute border transition-colors",
                  h.isRisky
                    ? "cursor-not-allowed border-destructive/60 bg-destructive/15"
                    : "cursor-pointer border-sky-400/70 bg-sky-400/10 hover:bg-sky-400/25",
                  hoveredId === h.id &&
                    !h.isRisky &&
                    "bg-sky-400/30 ring-1 ring-sky-500",
                )}
                style={{ left, top, width, height }}
                onMouseEnter={() => setHoveredId(h.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  if (h.isRisky || busy) return;
                  onHotspotClick?.(h);
                }}
              />
            );
          })}
        </div>
      ) : null}

      {enabled && showHoverLabel && hovered ? (
        <div className="pointer-events-none absolute bottom-2 left-2 right-2 rounded bg-black/75 px-2 py-1 text-xs text-white">
          {hovered.isRisky ? "Blocked · " : ""}
          {hovered.label ??
            hovered.text ??
            hovered.contentDesc ??
            hovered.className ??
            hovered.resourceId ??
            "element"}
          {hovered.className ? (
            <span className="opacity-70">
              {" "}
              · {hovered.className.split(".").pop()}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
