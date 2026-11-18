// The Daily World — 17 November 2026 front page (news-image-20261117)
// Node 22, stdlib only. The whole deliverable is entry.png beside this file;
// this program copies it to /output/entry.png so the judge sees exactly those
// bytes. The gate takes a whole PNG or JPEG of at most 1 MiB and 1024x1024 px,
// so we hard-fail fast if the file was ever corrupted or swapped.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url).pathname;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dst = join(outDir, 'entry.png');

const buf = readFileSync(src);
const sig = buf.subarray(0, 8).toString('hex');
if (sig !== '89504e470d0a1a0a') {
  throw new Error('entry.png is not a PNG (bad signature)');
}
if (buf.length > 1024 * 1024) {
  throw new Error(`entry.png is ${buf.length} bytes; gate limit is 1 MiB`);
}
const w = buf.readUInt32BE(16);
const h = buf.readUInt32BE(20);
if (w > 1024 || h > 1024) {
  throw new Error(`entry.png is ${w}x${h}; gate limit is 1024x1024`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
