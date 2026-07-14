"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

async function copyPngToClipboard(screenshotUrl: string): Promise<"copied" | "downloaded"> {
  const res = await fetch(screenshotUrl);
  if (!res.ok) throw new Error("Failed to fetch screenshot");
  const blob = await res.blob();
  const pngBlob =
    blob.type === "image/png"
      ? blob
      : new Blob([await blob.arrayBuffer()], { type: "image/png" });

  if (
    typeof navigator !== "undefined" &&
    navigator.clipboard &&
    typeof ClipboardItem !== "undefined"
  ) {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": pngBlob }),
      ]);
      return "copied";
    } catch {
      // fall through to download
    }
  }

  const url = URL.createObjectURL(pngBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "screenshot.png";
  a.target = "_blank";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  return "downloaded";
}

export function CopyPngButton({
  screenshotUrl,
  className,
  size = "sm",
  variant = "outline",
}: {
  screenshotUrl: string;
  className?: string;
  size?: "sm" | "default" | "icon";
  variant?: "outline" | "ghost" | "secondary";
}) {
  const [busy, setBusy] = useState(false);

  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      className={cn(className)}
      disabled={busy}
      onClick={async (e) => {
        e.stopPropagation();
        setBusy(true);
        try {
          const result = await copyPngToClipboard(screenshotUrl);
          if (result === "copied") {
            toast.success("Screenshot copied as PNG");
          } else {
            toast.message("Clipboard image not supported — downloaded PNG instead");
          }
        } catch (err) {
          toast.error(
            err instanceof Error ? err.message : "Failed to copy screenshot",
          );
          try {
            window.open(screenshotUrl, "_blank", "noopener,noreferrer");
          } catch {
            /* ignore */
          }
        } finally {
          setBusy(false);
        }
      }}
    >
      {busy ? (
        "…"
      ) : size === "icon" ? (
        <Copy className="size-3.5" />
      ) : (
        <>
          <Copy className="size-3.5" />
          Copy PNG
        </>
      )}
    </Button>
  );
}
