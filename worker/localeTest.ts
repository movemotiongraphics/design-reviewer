/**
 * "Test in different locales" execution.
 *
 * For each requested locale the worker:
 *   1. navigates to the app's own Language screen (Settings -> Language),
 *      preferring a path through the already-explored graph and falling back
 *      to a live keyword search,
 *   2. taps the option matching that locale (native name matching works even
 *      once the app UI is already in another language),
 *   3. re-navigates to the source screen via edge replay, and
 *   4. captures a screenshot stored per locale (not as a graph node).
 *
 * Per-locale failures are isolated; the whole action only fails if nothing
 * could be captured. Afterwards the app language is restored to English.
 */

import type { ExplorationAction } from "../generated/prisma";
import { findPathToNode, parseBoundsJson, parseUiTree } from "../src/lib/screen";
import {
  RESTORE_LOCALE_CODE,
  isLanguageKeyword,
  isSettingsKeyword,
  labelMatchesLocale,
  localeLabel,
  matchLocaleByLabel,
} from "../src/lib/locales";
import { absArtifactPath, localeShotRel } from "../src/server/artifacts";
import { sleep, type AndroidDevice } from "./appium";
import { db } from "./db";
import type { Logger } from "./log";
import {
  SETTLE_MS,
  setCurrentNode,
  waitForAppForeground,
  waitForFirstPaint,
} from "./manualExplore";
import { frameSignature, signatureDiffRatio } from "./pngUtil";
import { boundsCenter } from "./safeTap";
import { captureStableScreenshot, waitForStableScreen } from "./stability";
import { parseClickables, type ClickableElement } from "./uiParser";

/** Minimum number of language-name matches for a node to count as the Language screen. */
const LANGUAGE_NODE_MIN_MATCHES = 3;
/** Max swipe attempts when hunting for an off-screen option. */
const MAX_SCROLLS = 6;
/**
 * The app's Settings live behind the bottom-right item of the bottom nav bar
 * (a ViewGroup or Button without a useful label), so we open it by finding
 * the nav row (aligned bottom tabs), then tapping the rightmost tab's center
 * — or tapping by position as a fallback.
 */
const BOTTOM_NAV_SETTINGS_X_FRAC = 0.9;
/** ~0.96: matches the tab-center tap (972, 2307) proven to work on CoinGecko. */
const BOTTOM_NAV_SETTINGS_Y_FRAC = 0.96;
/** Nav tabs sit on (or very near) the bottom edge of the window. */
const BOTTOM_NAV_BOTTOM_EDGE_FRAC = 0.92;
/** A single tab is a fraction of the width, not a full-bleed bar/row. */
const BOTTOM_NAV_MAX_WIDTH_FRAC = 0.4;
/** Tabs whose top edges differ by no more than this belong to the same row. */
const BOTTOM_NAV_ROW_TOLERANCE_PX = 24;
/** Attempts for the nav tap (WebView tap handlers may not be attached yet). */
const NAV_TAP_MAX_ATTEMPTS = 3;
/** Wait before retrying a nav tap that had no visible effect. */
const NAV_TAP_RETRY_WAIT_MS = 2000;
/**
 * Screens differing by more than this thumbnail fraction count as "changed".
 * Deliberately well above ticker noise (live prices on the homepage) — a real
 * homepage -> Settings navigation redraws most of the screen.
 */
const SCREEN_CHANGED_MIN_DIFF = 0.05;

function isBottomNavClass(className: string | null): boolean {
  if (!className) return false;
  return (
    className.endsWith("ViewGroup") ||
    className.endsWith("Button") ||
    className.endsWith("ImageButton")
  );
}

/** True for a bottom-tab shaped ViewGroup/Button (not ad chrome or list rows). */
function isLikelyBottomNavTab(
  el: ClickableElement,
  width: number,
  height: number,
): boolean {
  if (!isBottomNavClass(el.className)) return false;
  const [x1, y1, x2, y2] = el.bounds;
  const w = x2 - x1;
  const h = y2 - y1;
  if (y2 < height * BOTTOM_NAV_BOTTOM_EDGE_FRAC) return false;
  if (w > width * BOTTOM_NAV_MAX_WIDTH_FRAC) return false;
  if (h < 48 || h > height * 0.25) return false;
  return true;
}

/**
 * From bottom-tab candidates, keep only those forming the bottommost aligned
 * row (same top edge within tolerance) — the actual nav bar. Filters out ad
 * chrome or stray clickables that merely sit near the bottom.
 */
function bottomNavRow(candidates: ClickableElement[]): ClickableElement[] {
  if (candidates.length === 0) return [];
  const rowTop = Math.max(...candidates.map((el) => el.bounds[1]));
  return candidates.filter(
    (el) => rowTop - el.bounds[1] <= BOTTOM_NAV_ROW_TOLERANCE_PX,
  );
}

/**
 * Tap point for a nav tab: its geometric center. Exploration edges recorded
 * with center taps (e.g. (972, 2307) on CoinGecko) are proven to open the tab.
 */
function bottomNavTapPoint(bounds: ClickableElement["bounds"]): {
  x: number;
  y: number;
} {
  const { x, y } = boundsCenter(bounds);
  return { x: Math.round(x), y: Math.round(y) };
}

/** Did the screen visibly change between two frames? (True when undecidable.) */
function screenVisiblyChanged(before: Buffer, after: Buffer): boolean {
  const a = frameSignature(before);
  const b = frameSignature(after);
  if (!a || !b) return true;
  return signatureDiffRatio(a, b) > SCREEN_CHANGED_MIN_DIFF;
}

function elementLabel(el: ClickableElement): string | null {
  const text = el.text?.trim();
  if (text) return text;
  const desc = el.contentDesc?.trim();
  if (desc) return desc;
  const id = el.resourceId?.split("/").pop();
  return id ?? null;
}

function parseLocaleCodes(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === "string" && v.length > 0);
}

async function dumpClickables(device: AndroidDevice): Promise<ClickableElement[]> {
  try {
    return parseClickables(await device.dumpUiHierarchy());
  } catch {
    return [];
  }
}

async function scrollDown(device: AndroidDevice): Promise<void> {
  const { width, height } = await device.windowSize();
  await device.swipe(width / 2, height * 0.72, width / 2, height * 0.28, 250);
  await sleep(250);
}

/**
 * Find (scrolling as needed) and tap the first clickable whose label satisfies
 * `predicate`. Returns false if no match appears within the scroll budget.
 */
async function tapClickableMatching(
  device: AndroidDevice,
  predicate: (label: string | null) => boolean,
  log: Logger,
): Promise<boolean> {
  for (let attempt = 0; attempt <= MAX_SCROLLS; attempt += 1) {
    const clickables = await dumpClickables(device);
    const match = clickables.find((c) => predicate(elementLabel(c)));
    if (match) {
      const { x, y } = boundsCenter(match.bounds);
      await device.tap(x, y);
      await sleep(SETTLE_MS);
      return true;
    }
    if (attempt < MAX_SCROLLS) await scrollDown(device);
  }
  log.warn("no clickable matched predicate within scroll budget");
  return false;
}

/**
 * Locate the Language screen among already-explored nodes by scoring how many
 * of its clickables read as known language names. Returns the node id (whose
 * path we can replay) or null.
 */
async function findLanguageNodeInGraph(
  reviewRunId: string,
): Promise<string | null> {
  const nodes = await db.screenNode.findMany({ where: { reviewRunId } });
  let bestId: string | null = null;
  let bestScore = 0;
  for (const node of nodes) {
    const tree = parseUiTree(node.uiTreeJson);
    if (!tree) continue;
    let score = 0;
    for (const clickable of tree.clickables) {
      if (matchLocaleByLabel(clickable.label ?? clickable.text ?? null)) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestId = node.id;
    }
  }
  return bestScore >= LANGUAGE_NODE_MIN_MATCHES ? bestId : null;
}

async function launchAndWait(
  device: AndroidDevice,
  appPackage: string,
  log: Logger,
): Promise<void> {
  await device.launchApp(appPackage);
  await waitForAppForeground(device, appPackage, log);
  await waitForFirstPaint(device, log);
}

/**
 * Make sure the app is on the home/root screen. Only the homepage's bottom-right
 * nav item opens Settings, but `activateApp` just resumes wherever the app was.
 * Back-press walking is unreliable here (the app is a TWA — Back navigates web
 * history or is consumed by the web app), so we force-stop and relaunch: a cold
 * start always opens the app's entry/home screen.
 */
async function launchToHome(
  device: AndroidDevice,
  appPackage: string,
  log: Logger,
): Promise<void> {
  log.info("cold-restarting app to reach home screen");
  await device.terminateApp(appPackage);
  await sleep(500);
  await launchAndWait(device, appPackage, log);
  // Give the web content a moment beyond first paint to become interactive.
  await sleep(SETTLE_MS);
}

/**
 * Replay the stored root-to-node tap path, but anchored at the real home
 * screen. The shared `replayPathToNode` only resumes the app (`activateApp`),
 * so if the app is sitting on Settings/Language the replayed taps land on the
 * wrong screens. Going back to home first makes the stored coordinates valid.
 */
async function replayPathFromHome(opts: {
  reviewRunId: string;
  nodeId: string;
  device: AndroidDevice;
  appPackage: string;
  log: Logger;
}): Promise<void> {
  const { reviewRunId, nodeId, device, appPackage, log } = opts;

  const [nodes, edges] = await Promise.all([
    db.screenNode.findMany({ where: { reviewRunId } }),
    db.screenEdge.findMany({ where: { reviewRunId } }),
  ]);
  const path = findPathToNode(
    nodes.map((n) => ({ id: n.id, depth: n.depth, hash: n.hash })),
    edges,
    nodeId,
  );
  if (path === null) {
    throw new Error(
      "Could not find a path from root to this node. Restart the run.",
    );
  }

  await launchToHome(device, appPackage, log);

  log.info("replaying path from home", { nodeId, steps: path.length });
  for (const edge of path) {
    if (edge.actionType === "back") {
      await device.pressBack();
      await sleep(SETTLE_MS);
      continue;
    }
    const bounds = parseBoundsJson(edge.targetBounds);
    if (!bounds) {
      throw new Error(
        `Edge ${edge.id} has no tap bounds; cannot replay. Restart the run.`,
      );
    }
    const { x, y } = boundsCenter(bounds);
    await device.tap(x, y);
    await sleep(SETTLE_MS);
  }

  // Keep the interactive session's position accurate for follow-up taps.
  await setCurrentNode(reviewRunId, nodeId);
}

/** Locate the bottom-right nav tap point: rightmost tab of the nav row, or positional. */
async function findBottomRightNavPoint(
  device: AndroidDevice,
  log: Logger,
): Promise<{ x: number; y: number }> {
  const { width, height } = await device.windowSize();

  const clickables = await dumpClickables(device);
  const candidates = clickables.filter((el) =>
    isLikelyBottomNavTab(el, width, height),
  );
  // The nav bar is the bottommost row of aligned tabs (Buttons on CoinGecko,
  // ViewGroups on GeckoTerminal); the Settings/profile tab is its rightmost.
  const row = bottomNavRow(candidates);
  if (row.length > 0) {
    const best = row.reduce((a, b) =>
      boundsCenter(b.bounds).x > boundsCenter(a.bounds).x ? b : a,
    );
    const point = bottomNavTapPoint(best.bounds);
    log.info("bottom-right nav element located", {
      ...point,
      className: best.className,
      bounds: best.bounds,
      rowTabs: row.length,
    });
    return point;
  }

  const point = {
    x: Math.round(width * BOTTOM_NAV_SETTINGS_X_FRAC),
    y: Math.round(height * BOTTOM_NAV_SETTINGS_Y_FRAC),
  };
  log.info("bottom-right nav not found in tree; using positional tap", point);
  return point;
}

/**
 * Open Settings by tapping the bottom-right nav item (ViewGroup or Button).
 *
 * On TWA/WebView apps the nav can appear in the UI tree before the web
 * content's tap handlers are attached, so an early tap silently does nothing
 * and we'd carry on believing we're on Settings. After each tap we verify the
 * screen actually changed, and retry (re-locating the tab) when it didn't.
 */
async function tapBottomRightNav(
  device: AndroidDevice,
  log: Logger,
): Promise<void> {
  for (let attempt = 1; attempt <= NAV_TAP_MAX_ATTEMPTS; attempt += 1) {
    const { x, y } = await findBottomRightNavPoint(device, log);
    const before = await device.screenshotBuffer();
    log.info("tapping bottom-right nav to open Settings", { x, y, attempt });
    await device.tap(x, y);
    const settled = await waitForStableScreen(device, {
      log,
      changedFrom: before,
    });
    if (screenVisiblyChanged(before, settled)) {
      await sleep(SETTLE_MS);
      return;
    }
    if (attempt < NAV_TAP_MAX_ATTEMPTS) {
      log.warn("nav tap had no visible effect (app may not be interactive yet)", {
        attempt,
      });
      await sleep(NAV_TAP_RETRY_WAIT_MS);
    }
  }
  log.warn("bottom-right nav tap never changed the screen; continuing anyway");
}

async function navigateToLanguageScreen(opts: {
  device: AndroidDevice;
  appPackage: string;
  reviewRunId: string;
  languageNodeId: string | null;
  log: Logger;
}): Promise<void> {
  const { device, appPackage, reviewRunId, languageNodeId, log } = opts;

  if (languageNodeId) {
    // Deterministic route through the explored graph.
    await replayPathFromHome({
      reviewRunId,
      nodeId: languageNodeId,
      device,
      appPackage,
      log,
    });
    return;
  }

  // Live fallback: home -> Settings (bottom-right nav) -> Language.
  await launchToHome(device, appPackage, log);
  await tapBottomRightNav(device, log);
  if (await tapClickableMatching(device, isLanguageKeyword, log)) return;

  // The positional tap may have missed; retry via a labelled Settings entry.
  log.warn("language not found after bottom-right nav; trying labelled Settings");
  await launchToHome(device, appPackage, log);
  if (!(await tapClickableMatching(device, isSettingsKeyword, log))) {
    throw new Error(
      "Could not open Settings (bottom-right nav and labelled entry both failed)",
    );
  }
  if (!(await tapClickableMatching(device, isLanguageKeyword, log))) {
    throw new Error("Could not find a Language option under Settings");
  }
}

/** On the Language screen, find (scrolling if needed) and tap the target locale. */
async function selectLocale(
  device: AndroidDevice,
  code: string,
  log: Logger,
): Promise<boolean> {
  return tapClickableMatching(
    device,
    (label) => labelMatchesLocale(label, code),
    log,
  );
}

async function markShot(
  actionId: string,
  locale: string,
  data: {
    status: string;
    screenshotPath?: string | null;
    errorMessage?: string | null;
  },
): Promise<void> {
  // Rows are pre-created by the tRPC mutation; only update if present.
  const existing = await db.localeShot.findFirst({
    where: { actionId, locale },
  });
  if (!existing) return;
  await db.localeShot.update({ where: { id: existing.id }, data });
}

export async function runLocaleTest(opts: {
  action: ExplorationAction;
  device: AndroidDevice;
  appPackage: string;
  log: Logger;
}): Promise<void> {
  const { action, device, appPackage, log } = opts;
  const sourceNodeId = action.fromNodeId;
  if (!sourceNodeId) throw new Error("Locale test is missing a source node");

  const codes = parseLocaleCodes(action.localeCodes);
  if (codes.length === 0) throw new Error("No locales were requested");

  const reviewRunId = action.reviewRunId;

  // Confirm the source node is reachable before we start switching languages.
  const [nodes, edges] = await Promise.all([
    db.screenNode.findMany({ where: { reviewRunId } }),
    db.screenEdge.findMany({ where: { reviewRunId } }),
  ]);
  const sourcePath = findPathToNode(
    nodes.map((n) => ({ id: n.id, depth: n.depth, hash: n.hash })),
    edges,
    sourceNodeId,
  );
  if (sourcePath === null) {
    throw new Error(
      "Could not find a path from root to this screen. Restart the run.",
    );
  }

  const languageNodeId = await findLanguageNodeInGraph(reviewRunId);
  log.info("locale test starting", {
    sourceNodeId,
    codes,
    languageNodeId: languageNodeId ?? "(live search)",
  });

  let completed = 0;
  let lastError: string | null = null;

  for (const code of codes) {
    try {
      await navigateToLanguageScreen({
        device,
        appPackage,
        reviewRunId,
        languageNodeId,
        log,
      });

      const picked = await selectLocale(device, code, log);
      if (!picked) {
        throw new Error(`Language option not found for ${localeLabel(code)}`);
      }

      // Return to the screen being tested before capturing.
      await replayPathFromHome({
        reviewRunId,
        nodeId: sourceNodeId,
        device,
        appPackage,
        log,
      });

      const rel = localeShotRel(reviewRunId, sourceNodeId, code);
      await captureStableScreenshot(device, absArtifactPath(rel), { log });
      await markShot(action.id, code, {
        status: "captured",
        screenshotPath: rel,
        errorMessage: null,
      });
      completed += 1;
      log.info("locale captured", { code });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      lastError = message;
      log.warn("locale capture failed", { code, message });
      await markShot(action.id, code, { status: "failed", errorMessage: message });
    }
  }

  if (completed === 0) {
    throw new Error(lastError ?? "Locale test failed for all locales");
  }

  // Best-effort: put the app back into English and return to the source screen
  // so the rest of the review session isn't left in a foreign language.
  try {
    await navigateToLanguageScreen({
      device,
      appPackage,
      reviewRunId,
      languageNodeId,
      log,
    });
    await selectLocale(device, RESTORE_LOCALE_CODE, log);
    await replayPathFromHome({
      reviewRunId,
      nodeId: sourceNodeId,
      device,
      appPackage,
      log,
    });
  } catch (err) {
    log.warn("locale restore failed", {
      error: err instanceof Error ? err.message : String(err),
    });
  }
}
