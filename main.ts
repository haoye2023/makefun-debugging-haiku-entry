import { mkdirSync, writeFileSync } from "node:fs";

// One original debugging haiku, 5-7-5 syllables, written deterministically.
const HAIKU = [
  "Breakpoint holds its breath",
  "one log line scrolls past midnight",
  "it was a typo",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
