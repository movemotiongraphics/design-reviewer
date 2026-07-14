import type { Bounds } from "../src/lib/screen";
import type { ClickableElement } from "./uiParser";

/** Words that suggest a destructive / irreversible / costly action. */
const RISKY_WORDS = [
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
];

/** Minimum tappable size (px) on either axis. */
const MIN_SIZE = 24;

/** Packages that indicate we've left the app under test. */
const EXTERNAL_PACKAGES = [
  "com.android.systemui",
  "com.android.vending", // Play Store
  "com.android.chrome",
  "com.google.android.googlequicksearchbox",
];

export interface SafeTapContext {
  appPackage: string | null;
  viewport: { width: number; height: number };
}

export interface SkippedElement {
  element: ClickableElement;
  reason: string;
}

export function boundsKey(b: Bounds): string {
  return b.join(",");
}

function haystack(el: ClickableElement): string {
  return [el.text, el.contentDesc, el.resourceId]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function classifySkip(
  el: ClickableElement,
  ctx: SafeTapContext,
): string | null {
  const [x1, y1, x2, y2] = el.bounds;
  const width = x2 - x1;
  const height = y2 - y1;

  if (el.password) return "password field";
  if (el.className?.toLowerCase().includes("password"))
    return "password field";

  if (el.packageName && EXTERNAL_PACKAGES.includes(el.packageName))
    return `external package (${el.packageName})`;
  if (
    ctx.appPackage &&
    el.packageName &&
    el.packageName !== ctx.appPackage
  )
    return `outside app package (${el.packageName})`;

  const text = haystack(el);
  const risky = RISKY_WORDS.find((w) => text.includes(w));
  if (risky) return `risky keyword "${risky}"`;

  if (width < MIN_SIZE || height < MIN_SIZE)
    return `too small (${width}x${height})`;

  const { width: vw, height: vh } = ctx.viewport;
  if (x2 <= 0 || y2 <= 0 || x1 >= vw || y1 >= vh)
    return "outside viewport";

  return null;
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

    const reason = classifySkip(el, ctx);
    if (reason) {
      skipped.push({ element: el, reason });
    } else {
      safe.push(el);
    }
  }

  return { safe, skipped };
}

export function boundsCenter(b: Bounds): { x: number; y: number } {
  const [x1, y1, x2, y2] = b;
  return { x: Math.round((x1 + x2) / 2), y: Math.round((y1 + y2) / 2) };
}
