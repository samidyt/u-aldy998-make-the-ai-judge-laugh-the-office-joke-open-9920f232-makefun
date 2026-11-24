// Make the AI Judge Laugh: the Office Joke Open
// One-line office joke, written to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Gate: UTF-8 text, 1-200 characters, not only whitespace, exactly one line.
// The entry is a fixed string: output is deterministic across runs.

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My boss said we need to think outside the box. I suggested we start by leaving the box at 5pm.";

// Gate self-check: 1-200 chars, exactly one line, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry length ${JOKE.length} is outside the 1-200 char gate`);
}
if (JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("entry must be exactly one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote entry.txt (${JOKE.length} chars)`);
