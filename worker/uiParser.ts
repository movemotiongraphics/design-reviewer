import { XMLParser } from "fast-xml-parser";

import type { Bounds } from "../src/lib/screen";

export interface ClickableElement {
  className: string | null;
  text: string | null;
  contentDesc: string | null;
  resourceId: string | null;
  packageName: string | null;
  bounds: Bounds;
  clickable: boolean;
  enabled: boolean;
  password: boolean;
  scrollable: boolean;
}

/** Parse an Android uiautomator bounds string `[x1,y1][x2,y2]`. */
export function parseBounds(raw: string | undefined): Bounds | null {
  if (!raw) return null;
  const match = /\[(-?\d+),(-?\d+)\]\[(-?\d+),(-?\d+)\]/.exec(raw);
  if (!match) return null;
  const [, x1, y1, x2, y2] = match;
  return [Number(x1), Number(y1), Number(x2), Number(y2)];
}

type Attrs = Record<string, string>;
type XmlNode = Record<string, unknown>;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  preserveOrder: true,
});

function attrString(attrs: Attrs, key: string): string | null {
  const v = attrs[key];
  return v != null && v !== "" ? v : null;
}

function collect(attrs: Attrs, out: ClickableElement[]): void {
  const bounds = parseBounds(attrs.bounds);
  if (!bounds) return;
  out.push({
    className: attrString(attrs, "class"),
    text: attrString(attrs, "text"),
    contentDesc: attrString(attrs, "content-desc"),
    resourceId: attrString(attrs, "resource-id"),
    packageName: attrString(attrs, "package"),
    bounds,
    clickable: attrs.clickable === "true",
    enabled: attrs.enabled !== "false",
    password: attrs.password === "true",
    scrollable: attrs.scrollable === "true",
  });
}

function walk(nodes: XmlNode[], out: ClickableElement[]): void {
  for (const node of nodes) {
    const attrs = (node[":@"] as Attrs | undefined) ?? {};
    for (const key of Object.keys(node)) {
      if (key === ":@" || key === "#text") continue;
      const children = node[key];
      if (Array.isArray(children)) {
        collect(attrs, out);
        walk(children as XmlNode[], out);
      }
    }
  }
}

/** Parse an Appium/UiAutomator2 page source into all clickable elements. */
export function parseClickables(xml: string): ClickableElement[] {
  let tree: XmlNode[];
  try {
    tree = parser.parse(xml) as XmlNode[];
  } catch {
    return [];
  }
  const all: ClickableElement[] = [];
  walk(tree, all);
  return all.filter((el) => el.clickable && el.enabled);
}
