import { promises as fs } from "node:fs";

import type { ReviewRunStatus } from "../generated/prisma";
import { absArtifactPath } from "../src/server/artifacts";
import { AndroidDevice, startEmulator, sleep } from "./appium";
import { db } from "./db";
import { createLogger } from "./log";
import {
  captureRootOnly,
  ensureSessionForNode,
  processExplorationAction,
} from "./manualExplore";

const POLL_MS = 3000;
/** How often to check for pending hotspot taps while a session is open. */
const ACTION_POLL_MS = 50;
const log = createLogger("worker");

function appiumUrl(): string {
  return process.env.APPIUM_URL ?? "http://127.0.0.1:4723";
}

async function setStatus(
  runId: string,
  status: ReviewRunStatus,
  extra?: { errorMessage?: string; startedAt?: Date; completedAt?: Date },
): Promise<void> {
  await db.reviewRun.update({
    where: { id: runId },
    data: { status, ...extra },
  });
}

async function failRun(runId: string, message: string): Promise<void> {
  log.error("run failed", { runId, message });
  await setStatus(runId, "failed", {
    errorMessage: message,
    completedAt: new Date(),
  });
}

async function failStuckActions(runId: string): Promise<void> {
  await db.explorationAction.updateMany({
    where: { reviewRunId: runId, status: "running" },
    data: {
      status: "failed",
      errorMessage: "Worker restarted before action finished",
      completedAt: new Date(),
    },
  });
}

/**
 * Interactive V2 session: capture root (or resume), then process ExplorationAction
 * rows until the run is completed/cancelled/failed.
 */
async function processRun(runId: string): Promise<void> {
  const runLog = log.child(runId.slice(0, 8));

  const run = await db.reviewRun.findUnique({
    where: { id: runId },
    include: { apkBuild: true },
  });
  if (!run) {
    runLog.warn("run not found, skipping");
    return;
  }

  const isResume = run.status === "awaiting_input";
  runLog.info(isResume ? "resuming interactive session" : "run picked up");

  let device: AndroidDevice | null = null;

  try {
    if (isResume) {
      await failStuckActions(runId);
    } else {
      await setStatus(runId, "preparing_emulator", { startedAt: new Date() });
    }

    startEmulator(runLog);

    device = await AndroidDevice.waitForDevice({
      appiumUrl: appiumUrl(),
      log: runLog,
    });
    runLog.info("emulator connected via Appium");

    const apkPath = absArtifactPath(run.apkBuild.filePath);
    try {
      await fs.access(apkPath);
    } catch {
      throw new Error(`APK file missing at ${apkPath}`);
    }

    if (!isResume) {
      await setStatus(runId, "installing_apk");
    }
    await device.installApk(apkPath);
    runLog.info("APK installed", { path: apkPath });

    const packageName = run.apkBuild.packageName;
    if (!packageName) {
      throw new Error(
        "Package name unknown — re-upload the APK so metadata can be parsed, or ensure the APK is valid.",
      );
    }
    runLog.info("package name detected", { packageName });

    if (!isResume) {
      await setStatus(runId, "launching_app");
    }
    await device.launchApp(packageName);
    runLog.info("app launched", { packageName });

    if (!isResume) {
      await setStatus(runId, "exploring");
      await captureRootOnly({
        reviewRunId: runId,
        device,
        maxNodes: run.maxNodes,
        log: runLog,
        appPackage: packageName,
      });
    } else if (run.currentNodeId) {
      // Bring emulator back to the last known node before accepting taps.
      await ensureSessionForNode({
        reviewRunId: runId,
        nodeId: run.currentNodeId,
        device,
        appPackage: packageName,
        log: runLog,
        currentNodeId: null,
      });
    }

    await setStatus(runId, "awaiting_input");
    runLog.info(
      isResume
        ? "session resumed; awaiting manual exploration"
        : "root captured; awaiting manual exploration",
    );

    // Keep Appium session alive and process queued actions.
    for (;;) {
      const current = await db.reviewRun.findUnique({
        where: { id: runId },
        select: { status: true },
      });
      if (!current) break;
      if (
        current.status === "completed" ||
        current.status === "cancelled" ||
        current.status === "failed"
      ) {
        runLog.info("session ended", { status: current.status });
        break;
      }
      if (current.status !== "awaiting_input") {
        runLog.warn("unexpected status during action loop", {
          status: current.status,
        });
        break;
      }

      const action = await db.explorationAction.findFirst({
        where: { reviewRunId: runId, status: "pending" },
        orderBy: { createdAt: "asc" },
      });

      if (action) {
        await processExplorationAction({
          actionId: action.id,
          device,
          appPackage: packageName,
          maxNodes: run.maxNodes,
          log: runLog,
        });
      } else {
        await sleep(ACTION_POLL_MS);
      }
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    await failRun(runId, message);
  } finally {
    if (device) {
      await device.quit();
    }
  }
}

async function pollOnce(): Promise<boolean> {
  // Fresh runs first, then orphaned interactive sessions (worker restart).
  const run =
    (await db.reviewRun.findFirst({
      where: { status: "queued" },
      orderBy: { createdAt: "asc" },
    })) ??
    (await db.reviewRun.findFirst({
      where: { status: "awaiting_input" },
      orderBy: { updatedAt: "asc" },
    }));

  if (!run) return false;
  await processRun(run.id);
  return true;
}

async function main(): Promise<void> {
  log.info("APK worker started (V2 interactive)", { appiumUrl: appiumUrl() });

  for (;;) {
    try {
      const worked = await pollOnce();
      if (!worked) await sleep(POLL_MS);
    } catch (err) {
      log.error("poll loop error", {
        error: err instanceof Error ? err.message : String(err),
      });
      await sleep(POLL_MS);
    }
  }
}

main().catch((err) => {
  log.error("worker crashed", {
    error: err instanceof Error ? err.message : String(err),
  });
  process.exit(1);
});
