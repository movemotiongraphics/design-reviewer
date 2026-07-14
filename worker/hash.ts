import { createHash } from "node:crypto";

/**
 * Hash a screenshot for duplicate-screen detection.
 *
 * V1 uses an exact byte hash: two screens collapse into one node only when
 * their PNG bytes are identical.
 *
 * TODO(perceptual): replace this with a perceptual hash (e.g. dHash/pHash on a
 * downscaled grayscale image) plus a Hamming-distance similarity threshold so
 * that near-identical screens (minor animations, blinking cursors, timestamps)
 * collapse into a single node instead of exploding the graph.
 */
export function hashScreenshot(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex");
}
