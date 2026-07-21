import { sleep, type AndroidDevice } from "./appium";
import type { Logger } from "./log";
import { frameSignature, signatureDiffRatio } from "./pngUtil";

export interface StableScreenOptions {
  log: Logger;
  /**
   * Pre-action frame. When set, first wait until the screen visibly differs
   * from it (catches captures taken before the new screen starts rendering).
   */
  changedFrom?: Buffer;
  /** Give up on the "changed" check after this long (the tap may be a no-op). */
  changeTimeoutMs?: number;
  /** Delay between screenshot polls. */
  pollMs?: number;
  /** Give up on stability after this long and capture anyway. */
  stableTimeoutMs?: number;
  /** Max fraction of thumbnail pixels allowed to differ for frames to "match". */
  maxDiffRatio?: number;
}

const DEFAULT_CHANGE_TIMEOUT_MS = 1500;
/** Poll interval between frames. Lower = faster settle when animations are off. */
const DEFAULT_POLL_MS = 150;
const DEFAULT_STABLE_TIMEOUT_MS = 5000;
const DEFAULT_MAX_DIFF_RATIO = 0.005;

/**
 * Wait until the screen has visually settled, then return the settled frame.
 *
 * Two phases, both comparing downscaled grayscale thumbnails:
 *   1. changed  — if `changedFrom` is provided, poll until the screen differs
 *                 from that pre-action frame (i.e. the transition started);
 *   2. settled  — poll until two consecutive frames are near-identical
 *                 (catches spinners, shimmer skeletons, slide-in animations).
 *
 * Both phases time out and fall through to "capture anyway" so a permanently
 * animating screen (video, carousel) cannot hang the crawl. The returned
 * buffer is the last polled screenshot, so callers should persist it instead
 * of capturing again.
 */
export async function waitForStableScreen(
  device: AndroidDevice,
  opts: StableScreenOptions,
): Promise<Buffer> {
  const { log } = opts;
  const changeTimeoutMs = opts.changeTimeoutMs ?? DEFAULT_CHANGE_TIMEOUT_MS;
  const pollMs = opts.pollMs ?? DEFAULT_POLL_MS;
  const stableTimeoutMs = opts.stableTimeoutMs ?? DEFAULT_STABLE_TIMEOUT_MS;
  const maxDiffRatio = opts.maxDiffRatio ?? DEFAULT_MAX_DIFF_RATIO;
  const startedAt = Date.now();

  let png = await device.screenshotBuffer();
  let sig = frameSignature(png);

  // Phase 1: wait until the screen differs from the pre-action frame.
  if (opts.changedFrom && sig) {
    const baseSig = frameSignature(opts.changedFrom);
    if (baseSig) {
      const changeDeadline = startedAt + changeTimeoutMs;
      while (sig && signatureDiffRatio(baseSig, sig) <= maxDiffRatio) {
        if (Date.now() >= changeDeadline) {
          log.info("screen unchanged after action (may be a no-op)", {
            waitedMs: Date.now() - startedAt,
          });
          break;
        }
        await sleep(pollMs);
        png = await device.screenshotBuffer();
        sig = frameSignature(png);
      }
    }
  }

  // Phase 2: wait until two consecutive frames match.
  const stableDeadline = Date.now() + stableTimeoutMs;
  for (;;) {
    await sleep(pollMs);
    const nextPng = await device.screenshotBuffer();
    const nextSig = frameSignature(nextPng);

    if (sig && nextSig) {
      const diff = signatureDiffRatio(sig, nextSig);
      if (diff <= maxDiffRatio) {
        log.info("screen settled", { waitedMs: Date.now() - startedAt });
        return nextPng;
      }
    } else if (!sig && !nextSig) {
      // Decoding failed twice (unexpected PNG format) — cannot compare.
      log.warn("frame signature unavailable; capturing without stability check");
      return nextPng;
    }

    png = nextPng;
    sig = nextSig;

    if (Date.now() >= stableDeadline) {
      log.warn("screen never settled; capturing anyway", {
        waitedMs: Date.now() - startedAt,
      });
      return png;
    }
  }
}

/**
 * Wait for the screen to settle, then write the settled frame to disk.
 * Prefer this over calling `waitForStableScreen` + `captureScreenshot`
 * separately when the only goal is a persisted stable shot.
 */
export async function captureStableScreenshot(
  device: AndroidDevice,
  outputPath: string,
  opts: StableScreenOptions & { pngIn?: Buffer },
): Promise<Buffer> {
  const settled =
    opts.pngIn ?? (await waitForStableScreen(device, opts));
  return device.captureScreenshot(outputPath, settled);
}
