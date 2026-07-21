import { promises as fs } from "node:fs";
import path from "node:path";

import type { Prisma } from "../generated/prisma";
import {
  findPathToNode,
  parseBoundsJson,
  type Bounds,
  type UiTreeSummary,
} from "../src/lib/screen";
import {
  absArtifactPath,
  ensureDir,
  screenshotRel,
  uiRel,
} from "../src/server/artifacts";
import { sleep, type AndroidDevice } from "./appium";
import { db } from "./db";
import { hashScreenshot } from "./hash";
import { runLocaleTest } from "./localeTest";
import type { Logger } from "./log";
import { isBlankBlackFrame } from "./pngUtil";
import {
  captureStableScreenshot,
  waitForStableScreen,
} from "./stability";
import { boundsCenter } from "./safeTap";
import { parseClickables, type ClickableElement } from "./uiParser";

/** Between path-replay taps (screen must settle before the next tap). */
const SETTLE_MS = 350;
/** Max time to wait for the app to become foreground after install/launch. */
const APP_FOREGROUND_TIMEOUT_MS = 12_000;
/** Max time to wait for a non-blank first paint (TWA/WebView). */
const FIRST_PAINT_TIMEOUT_MS = 15_000;
/** Poll interval while waiting for the first real frame. */
const FIRST_PAINT_POLL_MS = 400;

export interface ScreenRecord {
  id: string;
  hash: string;
  depth: number;
}

function elementLabel(el: {
  text?: string | null;
  contentDesc?: string | null;
  resourceId?: string | null;
}): string | null {
  const text = el.text?.trim();
  if (text) return text;
  const desc = el.contentDesc?.trim();
  if (desc) return desc;
  const id = el.resourceId?.split("/").pop();
  return id ?? null;
}

export function buildUiSummary(
  activity: string | null,
  clickables: ClickableElement[],
): UiTreeSummary {
  return {
    activity,
    clickableCount: clickables.length,
    clickables: clickables.slice(0, 40).map((el) => ({
      label: elementLabel(el),
      className: el.className,
      resourceId: el.resourceId,
      bounds: el.bounds,
      text: el.text,
      contentDesc: el.contentDesc,
    })),
  };
}

export interface CaptureContext {
  reviewRunId: string;
  device: AndroidDevice;
  maxNodes: number;
  log: Logger;
  /** In-memory hash → node for this session. */
  hashToNode: Map<string, ScreenRecord>;
  /** Next screenshot index (1-based). */
  nextIndex: { value: number };
}

export async function captureScreen(
  ctx: CaptureContext,
  depth: number,
  activity: string | null,
  /** Pre-captured settled frame (from `waitForStableScreen`); avoids re-capturing. */
  pngIn?: Buffer,
): Promise<{ record: ScreenRecord; isExisting: boolean } | null> {
  const { reviewRunId, device, log: runLog } = ctx;

  if (ctx.hashToNode.size >= ctx.maxNodes) {
    // Still allow matching an existing hash even at the cap.
    const pngProbe = pngIn ?? (await device.screenshotBuffer());
    const hashProbe = hashScreenshot(pngProbe);
    const existing = ctx.hashToNode.get(hashProbe);
    if (existing) return { record: existing, isExisting: true };
    runLog.info("maxNodes reached, skipping capture");
    return null;
  }

  ctx.nextIndex.value += 1;
  const idx = ctx.nextIndex.value;
  const shotRel = screenshotRel(reviewRunId, idx);
  const uiRelPath = uiRel(reviewRunId, idx);
  const shotAbs = absArtifactPath(shotRel);
  const uiAbs = absArtifactPath(uiRelPath);

  await ensureDir(path.dirname(shotAbs));
  await ensureDir(path.dirname(uiAbs));

  let png: Buffer;
  try {
    png = await captureStableScreenshot(device, shotAbs, {
      log: runLog,
      pngIn,
    });
    runLog.info("screenshot captured", { index: idx, depth });
  } catch (err) {
    throw new Error(
      `Screenshot capture failed: ${err instanceof Error ? err.message : String(err)}`,
    );
  }

  let xml = "";
  try {
    xml = await device.dumpUiHierarchy();
  } catch (err) {
    runLog.warn("UI hierarchy dump failed", {
      error: err instanceof Error ? err.message : String(err),
    });
  }

  const clickables = parseClickables(xml);
  const hash = hashScreenshot(png);

  const existing = ctx.hashToNode.get(hash);
  if (existing) {
    runLog.info("node reused (duplicate hash)", {
      hash: hash.slice(0, 12),
      nodeId: existing.id,
    });
    await fs.unlink(shotAbs).catch(() => undefined);
    return { record: existing, isExisting: true };
  }

  // Also check DB in case hashToNode was rebuilt incompletely.
  const dbExisting = await db.screenNode.findFirst({
    where: { reviewRunId, hash },
  });
  if (dbExisting) {
    const record: ScreenRecord = {
      id: dbExisting.id,
      hash: dbExisting.hash,
      depth: dbExisting.depth,
    };
    ctx.hashToNode.set(hash, record);
    await fs.unlink(shotAbs).catch(() => undefined);
    return { record, isExisting: true };
  }

  const uiSummary = buildUiSummary(activity, clickables);
  await fs.writeFile(
    uiAbs,
    JSON.stringify({ xml, summary: uiSummary }, null, 2),
  );

  const created = await db.screenNode.create({
    data: {
      reviewRunId,
      screenshotPath: shotRel,
      activityName: activity,
      stateName: activity,
      uiTreeJson: uiSummary as unknown as Prisma.InputJsonValue,
      depth,
      hash,
      clickableCount: clickables.length,
    },
  });

  const record: ScreenRecord = { id: created.id, hash, depth };
  ctx.hashToNode.set(hash, record);
  runLog.info("node created", {
    nodeId: created.id,
    depth,
    clickables: clickables.length,
  });
  return { record, isExisting: false };
}

export async function createEdge(opts: {
  reviewRunId: string;
  fromNodeId: string | null;
  toNodeId: string;
  actionType: string;
  targetLabel?: string | null;
  targetText?: string | null;
  targetBounds?: Bounds | null;
  log: Logger;
}): Promise<void> {
  // Avoid duplicate edges for the same from→to + action.
  const existing = await db.screenEdge.findFirst({
    where: {
      reviewRunId: opts.reviewRunId,
      fromNodeId: opts.fromNodeId,
      toNodeId: opts.toNodeId,
      actionType: opts.actionType,
    },
  });
  if (existing) return;

  await db.screenEdge.create({
    data: {
      reviewRunId: opts.reviewRunId,
      fromNodeId: opts.fromNodeId,
      toNodeId: opts.toNodeId,
      actionType: opts.actionType,
      targetLabel: opts.targetLabel ?? null,
      targetText: opts.targetText ?? null,
      targetBounds: opts.targetBounds ?? undefined,
    },
  });
  opts.log.info("edge created", {
    from: opts.fromNodeId ?? "launch",
    to: opts.toNodeId,
    label: opts.targetLabel,
    action: opts.actionType,
  });
}

export async function loadHashMap(
  reviewRunId: string,
): Promise<{ hashToNode: Map<string, ScreenRecord>; nextIndex: number }> {
  const nodes = await db.screenNode.findMany({
    where: { reviewRunId },
    orderBy: { createdAt: "asc" },
  });
  const hashToNode = new Map<string, ScreenRecord>();
  for (const n of nodes) {
    hashToNode.set(n.hash, { id: n.id, hash: n.hash, depth: n.depth });
  }
  return { hashToNode, nextIndex: nodes.length };
}

export async function setCurrentNode(
  reviewRunId: string,
  nodeId: string,
): Promise<void> {
  await db.reviewRun.update({
    where: { id: reviewRunId },
    data: { currentNodeId: nodeId },
  });
}

/**
 * Capture the root screen only and mark the run as awaiting manual input.
 * Waits until the app is foreground and the first real frame has painted
 * (not a blank/black TWA splash).
 */
export async function captureRootOnly(opts: {
  reviewRunId: string;
  device: AndroidDevice;
  maxNodes: number;
  log: Logger;
  /** Package under test — used to wait until the app is foreground. */
  appPackage?: string;
}): Promise<ScreenRecord> {
  if (opts.appPackage) {
    await waitForAppForeground(opts.device, opts.appPackage, opts.log);
  }
  await waitForFirstPaint(opts.device, opts.log);

  const { hashToNode, nextIndex } = await loadHashMap(opts.reviewRunId);
  const ctx: CaptureContext = {
    reviewRunId: opts.reviewRunId,
    device: opts.device,
    maxNodes: opts.maxNodes,
    log: opts.log,
    hashToNode,
    nextIndex: { value: nextIndex },
  };

  const activity = await opts.device.getCurrentActivity();
  const result = await captureScreen(ctx, 0, activity);
  if (!result) {
    throw new Error("Failed to capture root screen");
  }
  await setCurrentNode(opts.reviewRunId, result.record.id);
  return result.record;
}

/**
 * Poll until the installed app is in the foreground.
 */
export async function waitForAppForeground(
  device: AndroidDevice,
  appPackage: string,
  log: Logger,
): Promise<void> {
  const deadline = Date.now() + APP_FOREGROUND_TIMEOUT_MS;
  log.info("waiting for app foreground", {
    appPackage,
    timeoutMs: APP_FOREGROUND_TIMEOUT_MS,
  });

  while (Date.now() < deadline) {
    const pkg = await device.getCurrentPackage();
    if (pkg === appPackage) {
      log.info("app foreground detected", { appPackage });
      return;
    }
    await sleep(150);
  }

  log.warn("app not foreground before timeout; continuing", { appPackage });
}

/**
 * TWAs/WebViews often report as foreground before Chromium has painted,
 * which yields a solid-black screenshot. Poll until we get a real frame
 * (or UI clickables appear).
 */
export async function waitForFirstPaint(
  device: AndroidDevice,
  log: Logger,
): Promise<void> {
  const deadline = Date.now() + FIRST_PAINT_TIMEOUT_MS;
  let attempt = 0;

  log.info("waiting for first paint", { timeoutMs: FIRST_PAINT_TIMEOUT_MS });

  while (Date.now() < deadline) {
    attempt += 1;
    const png = await device.screenshotBuffer();
    const blank = isBlankBlackFrame(png);

    let clickables = 0;
    try {
      clickables = parseClickables(await device.dumpUiHierarchy()).length;
    } catch {
      // ignore dump failures while the tree is still coming up
    }

    if (!blank) {
      log.info("first paint ready", { attempt, clickables, blank: false });
      return;
    }

    // Accessibility tree sometimes populates a beat before the framebuffer.
    if (clickables > 0) {
      log.info("UI ready but frame still blank; retrying paint", {
        attempt,
        clickables,
      });
    } else {
      log.info("first paint not ready", { attempt, blank: true, clickables });
    }

    await sleep(FIRST_PAINT_POLL_MS);
  }

  log.warn("first paint timeout; capturing anyway");
}

export async function ensureSessionForNode(opts: {
  reviewRunId: string;
  nodeId: string;
  device: AndroidDevice;
  appPackage: string;
  log: Logger;
  currentNodeId: string | null;
}): Promise<void> {
  if (opts.currentNodeId === opts.nodeId) return;
  await replayPathToNode(opts);
}

export async function replayPathToNode(opts: {
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

  log.info("replaying path to node", {
    nodeId,
    steps: path.length,
  });

  await device.launchApp(appPackage);
  await waitForAppForeground(device, appPackage, log);
  await waitForFirstPaint(device, log);

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

  // TODO: replace exact hash check with perceptual matching for resilience.
  const expected = nodes.find((n) => n.id === nodeId);
  if (expected) {
    const png = await device.screenshotBuffer();
    const hash = hashScreenshot(png);
    if (hash !== expected.hash) {
      log.warn("replay hash mismatch (continuing anyway)", {
        expected: expected.hash.slice(0, 12),
        actual: hash.slice(0, 12),
      });
      // Soft failure for V2: warn but continue so exploration can proceed.
      // Strict mode could throw here.
    }
  }

  await setCurrentNode(reviewRunId, nodeId);
}

/**
 * Tap a hotspot and wait for the resulting screen to visually settle.
 * Returns the settled frame so the caller can persist it without re-capturing.
 */
export async function performTapFromHotspot(opts: {
  reviewRunId: string;
  nodeId: string;
  bounds: Bounds;
  device: AndroidDevice;
  appPackage: string;
  log: Logger;
  currentNodeId: string | null;
}): Promise<Buffer> {
  await ensureSessionForNode({
    reviewRunId: opts.reviewRunId,
    nodeId: opts.nodeId,
    device: opts.device,
    appPackage: opts.appPackage,
    log: opts.log,
    currentNodeId: opts.currentNodeId,
  });

  const preTap = await opts.device.screenshotBuffer();
  const { x, y } = boundsCenter(opts.bounds);
  opts.log.info("tapping hotspot", { x, y, nodeId: opts.nodeId });
  await opts.device.tap(x, y);
  const settled = await waitForStableScreen(opts.device, {
    log: opts.log,
    changedFrom: preTap,
  });

  const pkg = await opts.device.getCurrentPackage();
  if (pkg && pkg !== opts.appPackage) {
    opts.log.warn("left app package after tap, pressing back", { package: pkg });
    await opts.device.pressBack();
    await sleep(SETTLE_MS);
    throw new Error("Tap left the app under test");
  }

  return settled;
}

export async function captureCurrentScreenAsNode(opts: {
  reviewRunId: string;
  parentNodeId: string | null;
  depth: number;
  actionType: string;
  targetLabel?: string | null;
  targetText?: string | null;
  targetBounds?: Bounds | null;
  device: AndroidDevice;
  maxNodes: number;
  log: Logger;
  /** Pre-captured settled frame from a stability wait, if the caller has one. */
  png?: Buffer;
}): Promise<{ record: ScreenRecord; isExisting: boolean }> {
  const { hashToNode, nextIndex } = await loadHashMap(opts.reviewRunId);
  const ctx: CaptureContext = {
    reviewRunId: opts.reviewRunId,
    device: opts.device,
    maxNodes: opts.maxNodes,
    log: opts.log,
    hashToNode,
    nextIndex: { value: nextIndex },
  };

  const activity = await opts.device.getCurrentActivity();
  const result = await captureScreen(ctx, opts.depth, activity, opts.png);
  if (!result) {
    throw new Error("Failed to capture screen (max nodes reached?)");
  }

  if (opts.parentNodeId) {
    await createEdge({
      reviewRunId: opts.reviewRunId,
      fromNodeId: opts.parentNodeId,
      toNodeId: result.record.id,
      actionType: opts.actionType,
      targetLabel: opts.targetLabel,
      targetText: opts.targetText,
      targetBounds: opts.targetBounds,
      log: opts.log,
    });
  }

  await setCurrentNode(opts.reviewRunId, result.record.id);
  return result;
}

export async function processExplorationAction(opts: {
  actionId: string;
  device: AndroidDevice;
  appPackage: string;
  maxNodes: number;
  log: Logger;
}): Promise<void> {
  const action = await db.explorationAction.findUnique({
    where: { id: opts.actionId },
  });
  if (action?.status !== "pending") return;

  const claimed = await db.explorationAction.updateMany({
    where: { id: opts.actionId, status: "pending" },
    data: { status: "running" },
  });
  if (claimed.count === 0) return;

  const run = await db.reviewRun.findUnique({
    where: { id: action.reviewRunId },
  });
  if (!run) {
    await failAction(opts.actionId, "Run not found");
    return;
  }

  const log = opts.log;

  try {
    let resultNodeId: string | null = null;
    let isExisting = false;

    switch (action.type) {
      case "tap": {
        if (!action.fromNodeId) {
          throw new Error("Tap action missing fromNodeId");
        }
        const bounds = parseBoundsJson(action.targetBounds);
        if (!bounds) {
          throw new Error("Tap action missing bounds");
        }
        const parent = await db.screenNode.findUnique({
          where: { id: action.fromNodeId },
        });
        if (!parent) throw new Error("Parent node not found");

        const settled = await performTapFromHotspot({
          reviewRunId: action.reviewRunId,
          nodeId: action.fromNodeId,
          bounds,
          device: opts.device,
          appPackage: opts.appPackage,
          log,
          currentNodeId: run.currentNodeId,
        });

        const captured = await captureCurrentScreenAsNode({
          reviewRunId: action.reviewRunId,
          parentNodeId: action.fromNodeId,
          depth: parent.depth + 1,
          actionType: "tap",
          targetLabel: action.targetLabel,
          targetBounds: bounds,
          device: opts.device,
          maxNodes: opts.maxNodes,
          log,
          png: settled,
        });
        resultNodeId = captured.record.id;
        isExisting = captured.isExisting;
        break;
      }

      case "back": {
        const fromId = action.fromNodeId ?? run.currentNodeId;
        if (!fromId) throw new Error("No node to press back from");
        const parent = await db.screenNode.findUnique({ where: { id: fromId } });
        if (!parent) throw new Error("Parent node not found");

        if (run.currentNodeId !== fromId) {
          await ensureSessionForNode({
            reviewRunId: action.reviewRunId,
            nodeId: fromId,
            device: opts.device,
            appPackage: opts.appPackage,
            log,
            currentNodeId: run.currentNodeId,
          });
        }

        const preBack = await opts.device.screenshotBuffer();
        await opts.device.pressBack();
        const settled = await waitForStableScreen(opts.device, {
          log,
          changedFrom: preBack,
        });

        const captured = await captureCurrentScreenAsNode({
          reviewRunId: action.reviewRunId,
          parentNodeId: fromId,
          depth: Math.max(0, parent.depth - 1),
          actionType: "back",
          device: opts.device,
          maxNodes: opts.maxNodes,
          log,
          png: settled,
        });
        resultNodeId = captured.record.id;
        isExisting = captured.isExisting;
        break;
      }

      case "reset_to_root": {
        await opts.device.launchApp(opts.appPackage);
        await waitForAppForeground(opts.device, opts.appPackage, log);
        await waitForFirstPaint(opts.device, log);

        const root = await db.screenNode.findFirst({
          where: { reviewRunId: action.reviewRunId, depth: 0 },
          orderBy: { createdAt: "asc" },
        });
        if (!root) throw new Error("Root node not found");

        // Re-capture to refresh hash/UI; if hash matches root, reuse it.
        const { hashToNode, nextIndex } = await loadHashMap(action.reviewRunId);
        const ctx: CaptureContext = {
          reviewRunId: action.reviewRunId,
          device: opts.device,
          maxNodes: opts.maxNodes,
          log,
          hashToNode,
          nextIndex: { value: nextIndex },
        };
        const activity = await opts.device.getCurrentActivity();
        const captured = await captureScreen(ctx, 0, activity);
        if (!captured) throw new Error("Failed to capture after reset");

        resultNodeId = captured.isExisting ? captured.record.id : root.id;
        // Prefer the known root if hash matches an existing depth-0 node.
        if (captured.isExisting) {
          resultNodeId = captured.record.id;
        } else {
          // New hash after reset — still set current to new node and edge from root? For reset we just land on root-like screen.
          resultNodeId = captured.record.id;
        }
        isExisting = captured.isExisting;
        await setCurrentNode(action.reviewRunId, resultNodeId);
        break;
      }

      case "resume_from_node": {
        if (!action.targetNodeId) {
          throw new Error("Resume action missing targetNodeId");
        }
        await replayPathToNode({
          reviewRunId: action.reviewRunId,
          nodeId: action.targetNodeId,
          device: opts.device,
          appPackage: opts.appPackage,
          log,
        });
        resultNodeId = action.targetNodeId;
        isExisting = true;
        break;
      }

      case "refresh_screenshot": {
        if (!action.fromNodeId) {
          throw new Error("Refresh screenshot missing fromNodeId");
        }
        const node = await db.screenNode.findUnique({
          where: { id: action.fromNodeId },
        });
        if (!node) throw new Error("Node not found");

        await ensureSessionForNode({
          reviewRunId: action.reviewRunId,
          nodeId: action.fromNodeId,
          device: opts.device,
          appPackage: opts.appPackage,
          log,
          currentNodeId: run.currentNodeId,
        });

        const shotAbs = absArtifactPath(node.screenshotPath);
        const png = await captureStableScreenshot(opts.device, shotAbs, { log });
        const hash = hashScreenshot(png);

        let xml = "";
        try {
          xml = await opts.device.dumpUiHierarchy();
        } catch (err) {
          log.warn("UI hierarchy dump failed during refresh", {
            error: err instanceof Error ? err.message : String(err),
          });
        }
        const clickables = parseClickables(xml);
        const activity = await opts.device.getCurrentActivity();
        const uiSummary = buildUiSummary(activity, clickables);

        const uiRelPath = node.screenshotPath
          .replace("/screenshots/", "/ui/")
          .replace(/\.png$/i, ".json");
        const uiAbs = absArtifactPath(uiRelPath);
        await ensureDir(path.dirname(uiAbs));
        await fs.writeFile(
          uiAbs,
          JSON.stringify({ xml, summary: uiSummary }, null, 2),
        );

        await db.screenNode.update({
          where: { id: node.id },
          data: {
            hash,
            activityName: activity,
            stateName: activity ?? node.stateName,
            uiTreeJson: uiSummary as unknown as Prisma.InputJsonValue,
            clickableCount: clickables.length,
          },
        });

        log.info("screenshot refreshed", {
          nodeId: node.id,
          hash: hash.slice(0, 12),
        });
        resultNodeId = node.id;
        isExisting = true;
        break;
      }

      case "test_locales": {
        if (!action.fromNodeId) {
          throw new Error("Locale test missing source node");
        }
        await runLocaleTest({
          action,
          device: opts.device,
          appPackage: opts.appPackage,
          log,
        });
        resultNodeId = action.fromNodeId;
        isExisting = true;
        break;
      }

      default: {
        const exhaustive: never = action.type;
        throw new Error(`Unknown action type: ${String(exhaustive)}`);
      }
    }

    await db.explorationAction.update({
      where: { id: opts.actionId },
      data: {
        status: "completed",
        resultNodeId,
        isExistingNode: isExisting,
        completedAt: new Date(),
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    log.error("exploration action failed", { actionId: opts.actionId, message });
    await failAction(opts.actionId, message);
  }
}

async function failAction(actionId: string, message: string): Promise<void> {
  await db.explorationAction.update({
    where: { id: actionId },
    data: {
      status: "failed",
      errorMessage: message,
      completedAt: new Date(),
    },
  });
}

export { SETTLE_MS };
