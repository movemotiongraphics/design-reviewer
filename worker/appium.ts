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
    "Assuming an Android emulator is already running (V1 does not boot AVDs).",
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
        "appium:newCommandTimeout": 300,
        "appium:autoGrantPermissions": true,
        "appium:noReset": false,
        "appium:fullReset": false,
      },
    });
    return new AndroidDevice(driver, opts.log);
  }

  async installApk(apkPath: string): Promise<void> {
    await this.driver.installApp(apkPath);
  }

  async launchApp(packageName: string): Promise<void> {
    await this.driver.activateApp(packageName);
  }

  /** Capture a screenshot and return the raw PNG bytes. */
  async screenshotBuffer(): Promise<Buffer> {
    const base64 = await this.driver.takeScreenshot();
    return Buffer.from(base64, "base64");
  }

  /** Capture a screenshot and also write it to disk. */
  async captureScreenshot(outputPath: string): Promise<Buffer> {
    const buf = await this.screenshotBuffer();
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
