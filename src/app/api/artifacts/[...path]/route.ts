import { promises as fs } from "node:fs";
import path from "node:path";

import { type NextRequest, NextResponse } from "next/server";

import { resolveArtifactPath } from "~/server/artifacts";

export const runtime = "nodejs";

const CONTENT_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path: segments } = await params;

  const absPath = resolveArtifactPath(segments);
  if (!absPath) {
    return NextResponse.json({ error: "Invalid path." }, { status: 400 });
  }

  try {
    const data = await fs.readFile(absPath);
    const ext = path.extname(absPath).toLowerCase();
    const contentType = CONTENT_TYPES[ext] ?? "application/octet-stream";
    return new NextResponse(new Uint8Array(data), {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }
}
