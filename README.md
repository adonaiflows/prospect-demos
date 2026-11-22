# Prospect concept demos

Five concept sites for local businesses in the Albuquerque area with no website or a poor one. Each folder is a standalone Next.js app (App Router, TypeScript, Tailwind). None is an official site, and all are `noindex`.

Every pick was checked on Google Maps (open, not closed) and by looking at the current site on Nov 22, 2026.

| Folder | Business | City | Why |
|---|---|---|---|
| `duggans-coffee` | Duggan's Coffee | Albuquerque (UNM) | No website. 390+ Google reviews. 3D: falling coffee beans you push with the cursor. |
| `daily-rituals` | Daily Rituals | Albuquerque (Nob Hill) | No website. New, 4.9 stars. Calm, photo-led design in the café's real colors (no 3D, by request). |
| `santa-cecilia` | Santa Cecilia | Albuquerque (Old Town) | No website or phone listed. 3D: coffee surface that ripples when touched. |
| `banya-spa` | Massage & Banya Spa of Santa Fe | Santa Fe | Default WordPress site still showing pandemic notices. |
| `x-tactics` | X-Tactics Training & Performance | Rio Rancho | Broken template site, no https. |

Facts come from public sources only; anything the owner must supply is marked `TODO`. The coffee demos use stock photos as placeholders.

3D scenes load only after the visitor first moves, scrolls or taps, and never with reduced motion, so they don't slow the first paint. Lighthouse mobile: Performance 88 to 99, Accessibility 100, Best Practices 100. SEO shows about 60 only because the demos are deliberately `noindex`.

## Deploy on Vercel
For each folder: vercel.com/new, import this repo, set **Root Directory** to the folder name, deploy.
