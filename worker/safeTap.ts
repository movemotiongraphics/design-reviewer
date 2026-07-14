import type { Bounds } from "../src/lib/screen";
import {
  boundsCenter,
  boundsKey,
  classifyRisk,
  type RiskClassifyInput,
} from "../src/lib/safeTap";
import type { ClickableElement } from "./uiParser";

export { boundsCenter, boundsKey };

export interface SafeTapContext {
  appPackage: string | null;
  viewport: { width: number; height: number };
}

export interface SkippedElement {
  element: ClickableElement;
  reason: string;
}

function toRiskInput(
  el: ClickableElement,
  ctx: SafeTapContext,
): RiskClassifyInput {
  return {
    text: el.text,
    contentDesc: el.contentDesc,
    resourceId: el.resourceId,
    className: el.className,
    password: el.password,
    packageName: el.packageName,
    bounds: el.bounds,
    appPackage: ctx.appPackage,
    viewport: ctx.viewport,
  };
}

/**
 * Split clickable elements into safe/skipped. Duplicate bounds are collapsed
 * (first wins) so we don't tap the same region twice.
 */
export function filterSafe(
  elements: ClickableElement[],
  ctx: SafeTapContext,
): { safe: ClickableElement[]; skipped: SkippedElement[] } {
  const safe: ClickableElement[] = [];
  const skipped: SkippedElement[] = [];
  const seen = new Set<string>();

  for (const el of elements) {
    const key = boundsKey(el.bounds);
    if (seen.has(key)) {
      skipped.push({ element: el, reason: "duplicate bounds" });
      continue;
    }
    seen.add(key);

    const reason = classifyRisk(toRiskInput(el, ctx));
    if (reason) {
      skipped.push({ element: el, reason });
    } else {
      safe.push(el);
    }
  }

  return { safe, skipped };
}

export type { Bounds };
