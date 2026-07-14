import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Local filesystem layout for run/build artifacts:
 *
 *   <root>/apks/<apkBuildId>/<fileName>.apk
 *   <root>/runs/<reviewRunId>/screenshots/node-001.png
 *   <root>/runs/<reviewRunId>/ui/node-001.json
 *
 * Paths stored in the database are POSIX-style *relative* to the artifacts root
 * so they stay portable and can be served through `/api/artifacts/<relPath>`.
 *
 * This module intentionally reads `process.env` directly (rather than the
 * validated `~/env` module) so the standalone worker process can import it
 * without pulling in Next.js-specific env plumbing.
 */
export function artifactsRoot(): string {
  const configured = process.env.ARTIFACTS_DIR;
  return configured
    ? path.resolve(configured)
    : path.join(process.cwd(), "artifacts");
}

/** Absolute path for a DB-stored relative artifact path. */
export function absArtifactPath(relPath: string): string {
  return path.join(artifactsRoot(), relPath);
}

export function nodeBaseName(index: number): string {
  return `node-${String(index).padStart(3, "0")}`;
}

/** Relative path (POSIX) to the stored APK file for a build. */
export function apkRel(apkBuildId: string, fileName: string): string {
  return path.posix.join("apks", apkBuildId, fileName);
}

/** Relative path (POSIX) to a node screenshot within a run. */
export function screenshotRel(reviewRunId: string, index: number): string {
  return path.posix.join(
    "runs",
    reviewRunId,
    "screenshots",
    `${nodeBaseName(index)}.png`,
  );
}

/** Relative path (POSIX) to a node UI-hierarchy dump within a run. */
export function uiRel(reviewRunId: string, index: number): string {
  return path.posix.join("runs", reviewRunId, "ui", `${nodeBaseName(index)}.json`);
}

/** Browser URL for a DB-stored relative artifact path. */
export function toArtifactUrl(relPath: string): string {
  const clean = relPath.split(path.sep).join("/");
  return `/api/artifacts/${clean}`;
}

/**
 * Safely resolve request path segments to an absolute path inside the artifacts
 * root. Returns `null` when the resolved path would escape the root (path
 * traversal guard).
 */
export function resolveArtifactPath(segments: string[]): string | null {
  const root = artifactsRoot();
  const target = path.resolve(root, ...segments);
  const rel = path.relative(root, target);
  if (rel === "" || rel.startsWith("..") || path.isAbsolute(rel)) {
    return null;
  }
  return target;
}

export async function ensureDir(dir: string): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
}
