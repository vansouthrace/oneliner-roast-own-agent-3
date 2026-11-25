// One line for the make.fun bounty: a roast of the AI agent my own team built.
import { mkdirSync, writeFileSync } from "node:fs";
const line = "My agent is so slow it asked for a deadline extension to finish writing its request for a deadline extension.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
