import { promises as fs } from "node:fs";

import type { ReviewRunStatus } from "../generated/prisma";
import { absArtifactPath } from "../src/server/artifacts";
import { AndroidDevice, startEmulator } from "./appium";
import { db } from "./db";
import { exploreApp } from "./explore";
import { createLogger } from "./log";

const POLL_MS = 3000;
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

async function processRun(runId: string): Promise<void> {
  const runLog = log.child(runId.slice(0, 8));
  runLog.info("run picked up");

  const run = await db.reviewRun.findUnique({
    where: { id: runId },
    include: { apkBuild: true },
  });
  if (!run) {
    runLog.warn("run not found, skipping");
    return;
  }

  let device: AndroidDevice | null = null;

  try {
    await setStatus(runId, "preparing_emulator", { startedAt: new Date() });
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

    await setStatus(runId, "installing_apk");
    await device.installApk(apkPath);
    runLog.info("APK installed", { path: apkPath });

    const packageName = run.apkBuild.packageName;
    if (!packageName) {
      throw new Error(
        "Package name unknown — re-upload the APK so metadata can be parsed, or ensure the APK is valid.",
      );
    }
    runLog.info("package name detected", { packageName });

    await setStatus(runId, "launching_app");
    await device.launchApp(packageName);
    runLog.info("app launched", { packageName });

    await setStatus(runId, "exploring");
    await exploreApp({
      reviewRunId: runId,
      device,
      appPackage: packageName,
      maxDepth: run.maxDepth,
      maxNodes: run.maxNodes,
      maxTapsPerScreen: run.maxTapsPerScreen,
      log: runLog,
    });

    await setStatus(runId, "completed", { completedAt: new Date() });
    runLog.info("run completed");
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
  const run = await db.reviewRun.findFirst({
    where: { status: "queued" },
    orderBy: { createdAt: "asc" },
  });
  if (!run) return false;
  await processRun(run.id);
  return true;
}

async function main(): Promise<void> {
  log.info("APK worker started", { appiumUrl: appiumUrl() });

  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      const processed = await pollOnce();
      if (!processed) {
        await new Promise((r) => setTimeout(r, POLL_MS));
      }
    } catch (err) {
      log.error("poll loop error", {
        error: err instanceof Error ? err.message : String(err),
      });
      await new Promise((r) => setTimeout(r, POLL_MS));
    }
  }
}

main().catch((err) => {
  log.error("worker crashed", {
    error: err instanceof Error ? err.message : String(err),
  });
  process.exit(1);
});
