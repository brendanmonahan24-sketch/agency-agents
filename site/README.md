# Hypernym — Marketing Site

Multi-page Next.js + Tailwind site for **Hypernym**, a fictional boutique
consultancy that designs knowledge maps and ontologies for emerging AI
companies.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first config in `app/globals.css`)
- `next/font` for Fraunces (display), Inter (body), JetBrains Mono (accents)

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Editing copy

All text content lives in `lib/content.ts` (services, case studies,
principles, founder bios). Navigation links live in `lib/nav.ts`.
Pages are intentionally declarative — they read from these files and render.

## Deploy (Vercel)

The site lives in a subdirectory of the repo, so the only non-default
setting at import time is the **Root Directory**.

1. Go to https://vercel.com/new and import
   `brendanmonahan24-sketch/agency-agents-claude1`.
2. Under **Configure Project**, set **Root Directory** to `site`.
   (Click "Edit" next to Root Directory and pick the `site` folder.)
3. Leave Framework (Next.js), Build Command, and Output Directory at
   their auto-detected defaults.
4. Click **Deploy**.

Every push to the `claude/knowledge-map-ontology-site-FkAqB` branch will
get its own preview URL (e.g. `hypernym-site-git-claude-…vercel.app`).
The production URL (`hypernym-site.vercel.app`) builds from `main` once
the branch is merged.

No `vercel.json` is checked in — Vercel's Next.js preset is sufficient.
