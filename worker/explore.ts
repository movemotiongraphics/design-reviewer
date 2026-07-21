import { promises as fs } from "node:fs";
import path from "node:path";

import type { Prisma } from "../generated/prisma";
import type { UiTreeSummary } from "../src/lib/screen";
import {
  absArtifactPath,
  ensureDir,
  screenshotRel,
  uiRel,
} from "../src/server/artifacts";
import { AndroidDevice, sleep } from "./appium";
import { hashScreenshot } from "./hash";
import type { Logger } from "./log";
import {
  captureStableScreenshot,
  waitForStableScreen,
} from "./stability";
import { boundsCenter, filterSafe } from "./safeTap";
import { parseClickables, type ClickableElement } from "./uiParser";
import { db } from "./db";

const SETTLE_MS = 350;

export interface ExploreOptions {
  reviewRunId: string;
  device: AndroidDevice;
  appPackage: string;
  maxDepth: number;
  maxNodes: number;
  maxTapsPerScreen: number;
  log: Logger;
}

interface ScreenRecord {
  id: string;
  hash: string;
  depth: number;
}

function elementLabel(el: ClickableElement): string | null {
  return (
    el.text?.trim() ||
    el.contentDesc?.trim() ||
    el.resourceId?.split("/").pop() ||
    null
  );
}

function buildUiSummary(
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
    })),
  };
}

/**
 * Conservative depth-first crawler: capture the current screen, then tap up to
 * `maxTapsPerScreen` safe elements. After each tap we recurse (if within
 * `maxDepth`), create an edge, and press Back to return before the next tap.
 * Duplicate screens (exact screenshot hash) reuse existing nodes.
 */
export async function exploreApp(opts: ExploreOptions): Promise<void> {
  const { reviewRunId, device, appPackage, log } = opts;
  const runLog = log.child(reviewRunId.slice(0, 8));

  const hashToNode = new Map<string, ScreenRecord>();
  const exploredHashes = new Set<string>();
  let nodeIndex = 0;

  const viewport = await device.windowSize();

  async function captureScreen(
    depth: number,
    activity: string | null,
    /** Pre-captured settled frame (from `waitForStableScreen`), if available. */
    pngIn?: Buffer,
  ): Promise<ScreenRecord | null> {
    if (hashToNode.size >= opts.maxNodes) {
      runLog.info("maxNodes reached, skipping capture");
      return null;
    }

    nodeIndex += 1;
    const idx = nodeIndex;
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

    const existing = hashToNode.get(hash);
    if (existing) {
      runLog.info("node reused (duplicate hash)", {
        hash: hash.slice(0, 12),
        nodeId: existing.id,
      });
      await fs.unlink(shotAbs).catch(() => undefined);
      return existing;
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
    hashToNode.set(hash, record);
    runLog.info("node created", {
      nodeId: created.id,
      depth,
      clickables: clickables.length,
    });
    return record;
  }

  async function createEdge(
    fromNodeId: string | null,
    toNodeId: string,
    el: ClickableElement,
  ): Promise<void> {
    const label = elementLabel(el);
    await db.screenEdge.create({
      data: {
        reviewRunId,
        fromNodeId,
        toNodeId,
        actionType: "tap",
        targetLabel: label,
        targetText: el.text,
        targetBounds: el.bounds,
      },
    });
    runLog.info("edge created", {
      from: fromNodeId ?? "launch",
      to: toNodeId,
      label,
    });
  }

  async function visitScreen(
    depth: number,
    fromNodeId: string | null,
    viaElement: ClickableElement | null,
    pngIn?: Buffer,
  ): Promise<ScreenRecord | null> {
    if (hashToNode.size >= opts.maxNodes) return null;

    const activity = await device.getCurrentActivity();
    const screen = await captureScreen(depth, activity, pngIn);
    if (!screen) return null;

    if (viaElement && fromNodeId) {
      await createEdge(fromNodeId, screen.id, viaElement);
    }

    if (exploredHashes.has(screen.hash)) {
      return screen;
    }
    exploredHashes.add(screen.hash);

    if (depth >= opts.maxDepth) {
      return screen;
    }

    let xml = "";
    try {
      xml = await device.dumpUiHierarchy();
    } catch (err) {
      runLog.warn("UI hierarchy dump failed during explore", {
        nodeId: screen.id,
        error: err instanceof Error ? err.message : String(err),
      });
      return screen;
    }

    const clickables = parseClickables(xml);
    const { safe, skipped } = filterSafe(clickables, {
      appPackage,
      viewport,
    });

    runLog.info("clickable elements found", {
      nodeId: screen.id,
      total: clickables.length,
      safe: safe.length,
      skipped: skipped.length,
    });
    for (const s of skipped.slice(0, 5)) {
      runLog.info("element skipped", {
        reason: s.reason,
        label: elementLabel(s.element),
      });
    }

    const toTap = safe.slice(0, opts.maxTapsPerScreen);

    for (const el of toTap) {
      if (hashToNode.size >= opts.maxNodes) break;

      const { x, y } = boundsCenter(el.bounds);
      const label = elementLabel(el);
      runLog.info("tapping element", { label, x, y });

      const preTap = await device.screenshotBuffer();
      try {
        await device.tap(x, y);
      } catch (err) {
        runLog.warn("tap failed", {
          label,
          error: err instanceof Error ? err.message : String(err),
        });
        continue;
      }

      const settled = await waitForStableScreen(device, {
        log: runLog,
        changedFrom: preTap,
      });

      const childPkg = await device.getCurrentPackage();
      if (childPkg && childPkg !== appPackage) {
        runLog.warn("left app package after tap, pressing back", {
          package: childPkg,
        });
        await device.pressBack();
        await sleep(SETTLE_MS);
        continue;
      }

      const childHashBefore = hashScreenshot(settled);
      const childExisting = hashToNode.get(childHashBefore);

      if (childExisting) {
        await createEdge(screen.id, childExisting.id, el);
        runLog.info("node reused (duplicate hash)", {
          hash: childHashBefore.slice(0, 12),
          nodeId: childExisting.id,
        });
      } else {
        await visitScreen(depth + 1, screen.id, el, settled);
      }

      await device.pressBack();
      await sleep(SETTLE_MS);
    }

    return screen;
  }

  await visitScreen(0, null, null);
}
