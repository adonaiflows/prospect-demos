# Whispering Bean Coffee Roasters: concept demo

A one-page concept site built to show Whispering Bean Coffee Roasters what a faster, clearer website could look like. It is **not** the official site and is set to `noindex`.

**Why:** The live site has placeholder nav pages ('New Page', 'Partners'), photos from 2017 and no clear path to buy beans or order ahead.

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS. Static, no client data, ambient motion is CSS/SVG only and respects `prefers-reduced-motion`.

## Edit content
All copy lives in `lib/site.ts`. Every fact comes from the business's own site or public listings. Items marked `TODO` (prices, menu, photos, reviews, owner story) must come from the owner; nothing has been invented.

## Run
```
npm install
npm run dev
npm run build
```

## Deploy
Import this repo at vercel.com/new (Next.js preset is detected via `vercel.json`).
