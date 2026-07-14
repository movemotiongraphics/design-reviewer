/**
 * Shared safe/risky tap classification for worker + web hotspot overlays.
 * Keep in sync with the V1 risky-keyword list.
 */

import type { Bounds } from "./screen";

/** Words that suggest a destructive / irreversible / costly action. */
export const RISKY_WORDS = [
  "delete",
  "remove",
  "send",
  "pay",
  "buy",
  "confirm",
  "submit",
  "transfer",
  "logout",
  "log out",
  "sign out",
  "disconnect",
  "purchase",
  "order",
  "checkout",
] as const;

/** Minimum tappable size (px) on either axis. */
export const MIN_TAP_SIZE = 24;

/** Packages that indicate we've left the app under test. */
export const EXTERNAL_PACKAGES = [
  "com.android.systemui",
  "com.android.vending",
  "com.android.chrome",
  "com.google.android.googlequicksearchbox",
] as const;

export interface RiskClassifyInput {
  text?: string | null;
  contentDesc?: string | null;
  resourceId?: string | null;
  className?: string | null;
  password?: boolean;
  packageName?: string | null;
  bounds?: Bounds;
  appPackage?: string | null;
  viewport?: { width: number; height: number };
}

/**
 * Returns a human-readable skip/risk reason, or null if the element is safe.
 */
export function classifyRisk(el: RiskClassifyInput): string | null {
  if (el.password) return "password field";
  if (el.className?.toLowerCase().includes("password")) return "password field";

  if (el.packageName && (EXTERNAL_PACKAGES as readonly string[]).includes(el.packageName)) {
    return `external package (${el.packageName})`;
  }
  if (
    el.appPackage &&
    el.packageName &&
    el.packageName !== el.appPackage
  ) {
    return `outside app package (${el.packageName})`;
  }

  const haystack = [el.text, el.contentDesc, el.resourceId]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  const risky = RISKY_WORDS.find((w) => haystack.includes(w));
  if (risky) return `risky keyword "${risky}"`;

  if (el.bounds) {
    const [x1, y1, x2, y2] = el.bounds;
    const width = x2 - x1;
    const height = y2 - y1;
    if (width < MIN_TAP_SIZE || height < MIN_TAP_SIZE) {
      return `too small (${width}x${height})`;
    }
    if (el.viewport) {
      const { width: vw, height: vh } = el.viewport;
      if (x2 <= 0 || y2 <= 0 || x1 >= vw || y1 >= vh) {
        return "outside viewport";
      }
    }
  }

  return null;
}

/** True when the reason is a "risky keyword" (vs size/package filters). */
export function isRiskyKeywordReason(reason: string | null): boolean {
  return reason?.startsWith('risky keyword "') ?? false;
}

export function boundsKey(b: Bounds): string {
  return b.join(",");
}

export function boundsCenter(b: Bounds): { x: number; y: number } {
  const [x1, y1, x2, y2] = b;
  return { x: Math.round((x1 + x2) / 2), y: Math.round((y1 + y2) / 2) };
}
