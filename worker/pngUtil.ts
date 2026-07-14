import { inflateSync } from "node:zlib";

/**
 * Detect blank/black frames (common with TWA/WebView before first paint).
 * A real dark-themed UI still has luminance variance; a blank frame does not.
 */
export function isBlankBlackFrame(png: Buffer): boolean {
  const pixels = decodePngRgb(png);
  if (!pixels || pixels.width * pixels.height === 0) return false;

  const { data, width, height } = pixels;
  const total = width * height;
  // Sample up to ~4k pixels for speed.
  const step = Math.max(1, Math.floor(total / 4096));
  let sum = 0;
  let sumSq = 0;
  let n = 0;

  for (let i = 0; i < total; i += step) {
    const o = i * 3;
    const y = 0.2126 * data[o]! + 0.7152 * data[o + 1]! + 0.0722 * data[o + 2]!;
    sum += y;
    sumSq += y * y;
    n += 1;
  }

  if (n === 0) return false;
  const mean = sum / n;
  const variance = sumSq / n - mean * mean;
  // Near-solid black (splash / unpainted SurfaceView).
  return mean < 12 && variance < 40;
}

function decodePngRgb(
  png: Buffer,
): { data: Uint8Array; width: number; height: number } | null {
  if (png.length < 24) return null;
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (!png.subarray(0, 8).equals(sig)) return null;

  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = -1;
  const idat: Buffer[] = [];

  let offset = 8;
  while (offset + 8 <= png.length) {
    const len = png.readUInt32BE(offset);
    const type = png.toString("ascii", offset + 4, offset + 8);
    const dataStart = offset + 8;
    const dataEnd = dataStart + len;
    if (dataEnd + 4 > png.length) break;

    if (type === "IHDR") {
      width = png.readUInt32BE(dataStart);
      height = png.readUInt32BE(dataStart + 4);
      bitDepth = png[dataStart + 8]!;
      colorType = png[dataStart + 9]!;
    } else if (type === "IDAT") {
      idat.push(png.subarray(dataStart, dataEnd));
    } else if (type === "IEND") {
      break;
    }

    offset = dataEnd + 4; // skip CRC
  }

  if (!width || !height || bitDepth !== 8) return null;
  if (colorType !== 2 && colorType !== 6) return null;

  let raw: Buffer;
  try {
    raw = inflateSync(Buffer.concat(idat));
  } catch {
    return null;
  }

  const bpp = colorType === 6 ? 4 : 3;
  const stride = width * bpp;
  const expected = (stride + 1) * height;
  if (raw.length < expected) return null;

  const out = new Uint8Array(width * height * 3);
  const prev = new Uint8Array(stride);
  const cur = new Uint8Array(stride);
  let rawOff = 0;
  let outOff = 0;

  for (let y = 0; y < height; y++) {
    const filter = raw[rawOff++]!;
    cur.set(raw.subarray(rawOff, rawOff + stride));
    rawOff += stride;

    if (filter === 1) {
      // Sub
      for (let i = bpp; i < stride; i++) cur[i] = (cur[i]! + cur[i - bpp]!) & 255;
    } else if (filter === 2) {
      // Up
      for (let i = 0; i < stride; i++) cur[i] = (cur[i]! + prev[i]!) & 255;
    } else if (filter === 3) {
      // Average
      for (let i = 0; i < stride; i++) {
        const a = i < bpp ? 0 : cur[i - bpp]!;
        cur[i] = (cur[i]! + Math.floor((a + prev[i]!) / 2)) & 255;
      }
    } else if (filter === 4) {
      // Paeth
      for (let i = 0; i < stride; i++) {
        const a = i < bpp ? 0 : cur[i - bpp]!;
        const b = prev[i]!;
        const c = i < bpp ? 0 : prev[i - bpp]!;
        cur[i] = (cur[i]! + paeth(a, b, c)) & 255;
      }
    } else if (filter !== 0) {
      return null;
    }

    for (let x = 0; x < width; x++) {
      const s = x * bpp;
      out[outOff++] = cur[s]!;
      out[outOff++] = cur[s + 1]!;
      out[outOff++] = cur[s + 2]!;
    }
    prev.set(cur);
  }

  return { data: out, width, height };
}

function paeth(a: number, b: number, c: number): number {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}
