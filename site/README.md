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
