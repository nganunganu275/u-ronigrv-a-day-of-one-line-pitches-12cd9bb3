// One-line pitch entry: writes a single sentence to /output/entry.txt.
// Deterministic: the same sentence every run, no input, no arguments needed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "That app idea in your head is closer than you think — describe it in plain words to an AI agent on make.fun and it builds a working version you can tap and try, free, with no coding and you in charge of what it becomes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 240 || !LINE.trim()) {
  throw new Error(`pitch fails the gate: ${LINE.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
