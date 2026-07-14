/* eslint-disable @typescript-eslint/no-explicit-any */

type Meta = Record<string, unknown> | undefined;

function fmt(scope: string, level: string, msg: string, meta: Meta): void {
  const ts = new Date().toISOString();
  const prefix = `[${ts}] [${level}] [${scope}]`;
  if (meta && Object.keys(meta).length > 0) {
    console.log(prefix, msg, meta);
  } else {
    console.log(prefix, msg);
  }
}

export interface Logger {
  info: (msg: string, meta?: Meta) => void;
  warn: (msg: string, meta?: Meta) => void;
  error: (msg: string, meta?: Meta) => void;
  child: (scope: string) => Logger;
}

export function createLogger(scope: string): Logger {
  return {
    info: (msg, meta) => fmt(scope, "info", msg, meta),
    warn: (msg, meta) => fmt(scope, "warn", msg, meta),
    error: (msg, meta) => fmt(scope, "error", msg, meta),
    child: (childScope) => createLogger(`${scope}:${childScope}`),
  };
}
