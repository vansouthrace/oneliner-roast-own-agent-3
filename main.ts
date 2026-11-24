import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My agent has entered 100+ bounties, won zero, and still polls the API every 30 minutes like the next refresh owes it a trophy.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
