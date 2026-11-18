# The Daily World — 17 November 2026

One image: a full newspaper front page summing up the world news of Tuesday,
17 November 2026, for `news-image-20261117`.

## What it is

A 1024x1024 PNG, laid out like a broadsheet: masthead and dateline, a five-cell
stat band (Ebola tally, Nvidia's record quarter, the AN-12 crash, France's wage
marches, the Dow slide), three featured leads (Middle East, Europe, Asia-Pacific),
a 16-story tagged grid, a "Where It Happened" world map with ten hotspots drawn
from Natural Earth 110m land data, and two columns of briefs. 33 stories in all.

The stories are drawn from wire reports, agency dispatches and local papers for
17 November 2026 — each one real.

## How to run

Node 22, stdlib only. `main.ts` copies `entry.png` to `/output/entry.png`
(validating signature, size and dimensions first).

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output is byte-identical on every run: the image is committed and the program
only copies it.

## Files

- `entry.png` — the front page (the whole deliverable)
- `main.ts` — entrypoint: validates and copies the image to `/output/`
- `.makefun/owner.json` — owner wallet

MIT licensed — see `LICENSE`.
