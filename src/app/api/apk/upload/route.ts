import { promises as fs } from "node:fs";
import path from "node:path";

import AppInfoParser from "app-info-parser";
import { type NextRequest, NextResponse } from "next/server";

import {
  absArtifactPath,
  apkRel,
  ensureDir,
} from "~/server/artifacts";
import { db } from "~/server/db";

export const runtime = "nodejs";

function sanitizeFileName(name: string): string {
  const base = path.basename(name);
  return base.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function POST(req: NextRequest) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { error: "Expected multipart/form-data body." },
      { status: 400 },
    );
  }

  const projectId = formData.get("projectId");
  const file = formData.get("file");

  if (typeof projectId !== "string" || projectId.length === 0) {
    return NextResponse.json({ error: "Missing projectId." }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing APK file." }, { status: 400 });
  }
  if (!file.name.toLowerCase().endsWith(".apk")) {
    return NextResponse.json(
      { error: "Only .apk files are supported in V1." },
      { status: 400 },
    );
  }

  const project = await db.project.findUnique({ where: { id: projectId } });
  if (!project) {
    return NextResponse.json({ error: "Project not found." }, { status: 404 });
  }

  const fileName = sanitizeFileName(file.name);

  // Create the record first so we can derive a stable, id-based storage path.
  const build = await db.apkBuild.create({
    data: { projectId, fileName, filePath: "" },
  });

  try {
    const relPath = apkRel(build.id, fileName);
    const absPath = absArtifactPath(relPath);
    await ensureDir(path.dirname(absPath));

    const bytes = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(absPath, bytes);

    // Best-effort metadata extraction; failures here should not fail upload.
    let packageName: string | null = null;
    let versionName: string | null = null;
    let versionCode: string | null = null;
    try {
      const parser = new AppInfoParser(absPath);
      const info = await parser.parse();
      packageName = info.package ?? null;
      versionName = info.versionName ?? null;
      versionCode =
        info.versionCode != null ? String(info.versionCode) : null;
    } catch (err) {
      console.warn(
        `[upload] failed to parse APK metadata for ${build.id}:`,
        err,
      );
    }

    const updated = await db.apkBuild.update({
      where: { id: build.id },
      data: { filePath: relPath, packageName, versionName, versionCode },
    });

    return NextResponse.json({ apkBuild: updated });
  } catch (err) {
    // Roll back the orphaned record if we could not store the file.
    await db.apkBuild.delete({ where: { id: build.id } }).catch(() => undefined);
    console.error(`[upload] failed to store APK for project ${projectId}:`, err);
    return NextResponse.json(
      { error: "Failed to store the uploaded APK." },
      { status: 500 },
    );
  }
}
