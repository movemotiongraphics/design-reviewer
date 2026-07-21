import { promises as fs } from "node:fs";
import path from "node:path";

import { remote } from "webdriverio";

import type { Logger } from "./log";

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type Driver = Awaited<ReturnType<typeof remote>>;

export interface ConnectOptions {
  appiumUrl: string;
  log: Logger;
  /** adb serial (e.g. "emulator-5554") to bind this session to a specific device. */
  udid?: string;
  /** UiAutomator2 systemPort; must be unique across concurrent sessions. */
  systemPort?: number;
}

/**
 * Documented no-op for V1: the emulator is expected to already be running (see
 * README). Kept as a named utility so a future version can boot an AVD here.
 *
 * TODO: optionally shell out to `emulator -avd <name> -no-window ...` and wait
 * for boot when no device is connected.
 */
export function startEmulator(log: Logger): void {
  log.info(
    "Assuming an Android emulator is already running (worker does not boot AVDs).",
  );
}

/**
 * Thin wrapper over a webdriverio/UiAutomator2 session exposing the small set
 * of device primitives the crawler needs.
 */
export class AndroidDevice {
  private constructor(
    private readonly driver: Driver,
    private readonly log: Logger,
  ) {}

  /** Connect to the Appium server and start a UiAutomator2 session. */
  static async waitForDevice(opts: ConnectOptions): Promise<AndroidDevice> {
    const u = new URL(opts.appiumUrl);
    const driver = await remote({
      protocol: u.protocol.replace(":", "") as "http" | "https",
      hostname: u.hostname,
      port: Number(u.port) || (u.protocol === "https:" ? 443 : 80),
      path: u.pathname && u.pathname !== "/" ? u.pathname : "/",
      logLevel: "error",
      connectionRetryTimeout: 180_000,
      capabilities: {
        platformName: "Android",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "Android Emulator",
        // Bind to a specific emulator when provided so two devices can run at once.
        ...(opts.udid ? { "appium:udid": opts.udid } : {}),
        ...(opts.systemPort
          ? { "appium:systemPort": opts.systemPort }
          : {}),
        // Long-lived interactive sessions; reset on each Appium command.
        "appium:newCommandTimeout": 3600,
        "appium:autoGrantPermissions": true,
        "appium:noReset": false,
        "appium:fullReset": false,
        // Skip window/transition animations so screens settle much faster.
        "appium:disableWindowAnimation": true,
      },
    });
    const device = new AndroidDevice(driver, opts.log);
    await device.disableAnimations();
    return device;
  }

  /**
   * Zero out Android animator / transition scales so UI transitions are
   * instantaneous. Safe to call repeatedly; best-effort if shell is denied.
   */
  async disableAnimations(): Promise<void> {
    const keys = [
      "window_animation_scale",
      "transition_animation_scale",
      "animator_duration_scale",
    ] as const;
    for (const key of keys) {
      try {
        await this.driver.execute("mobile: shell", {
          command: "settings",
          args: ["put", "global", key, "0"],
        });
      } catch (err) {
        this.log.warn("failed to disable animation setting", {
          key,
          error: err instanceof Error ? err.message : String(err),
        });
        return;
      }
    }
    this.log.info("device animations disabled");
  }

  async installApk(apkPath: string): Promise<void> {
    await this.driver.installApp(apkPath);
  }

  async launchApp(packageName: string): Promise<void> {
    await this.driver.activateApp(packageName);
  }

  /**
   * Force-stop the app so the next `launchApp` is a cold start from the
   * default entry screen (activateApp alone only resumes the existing task).
   */
  async terminateApp(packageName: string): Promise<void> {
    try {
      await this.driver.execute("mobile: terminateApp", {
        appId: packageName,
      });
    } catch (err) {
      this.log.warn("terminateApp failed (continuing)", {
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  /**
   * Capture a screenshot immediately and return the raw PNG bytes.
   * Timing (waiting for the screen to settle) is the caller's concern —
   * see `waitForStableScreen` in stability.ts.
   */
  async screenshotBuffer(): Promise<Buffer> {
    const base64 = await this.driver.takeScreenshot();
    return Buffer.from(base64, "base64");
  }

  /**
   * Write a screenshot to disk. Uses `png` when provided (e.g. a settled
   * frame from `waitForStableScreen`) instead of capturing a new one.
   */
  async captureScreenshot(outputPath: string, png?: Buffer): Promise<Buffer> {
    const buf = png ?? (await this.screenshotBuffer());
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, buf);
    return buf;
  }

  async dumpUiHierarchy(): Promise<string> {
    return this.driver.getPageSource();
  }

  async getCurrentActivity(): Promise<string | null> {
    try {
      return await this.driver.getCurrentActivity();
    } catch {
      return null;
    }
  }

  async getCurrentPackage(): Promise<string | null> {
    try {
      return await this.driver.getCurrentPackage();
    } catch {
      return null;
    }
  }

  async windowSize(): Promise<{ width: number; height: number }> {
    const rect = await this.driver.getWindowRect();
    return { width: rect.width, height: rect.height };
  }

  async tap(x: number, y: number): Promise<void> {
    await this.driver
      .action("pointer", { parameters: { pointerType: "touch" } })
      .move({ x, y })
      .down()
      .pause(60)
      .up()
      .perform();
  }

  /** Drag from one point to another (used to scroll lists into view). */
  async swipe(
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    durationMs = 400,
  ): Promise<void> {
    await this.driver
      .action("pointer", { parameters: { pointerType: "touch" } })
      .move({ x: Math.round(fromX), y: Math.round(fromY) })
      .down()
      .pause(100)
      .move({ duration: durationMs, x: Math.round(toX), y: Math.round(toY) })
      .up()
      .perform();
  }

  async pressBack(): Promise<void> {
    await this.driver.back();
  }

  async quit(): Promise<void> {
    try {
      await this.driver.deleteSession();
    } catch (err) {
      this.log.warn("failed to close Appium session", {
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
}
