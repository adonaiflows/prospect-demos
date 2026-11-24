# Prospect concept demos

Six concept sites for local businesses in the Albuquerque area with no website or a poor one. Each folder is a standalone Next.js app (App Router, TypeScript, Tailwind). None is an official site, and all are `noindex`.

Every pick was checked on Google Maps (open, not closed) and by looking at the current site on Nov 22, 2026.

| Folder | Business | City | Why |
|---|---|---|---|
| `duggans-coffee` | Duggan's Coffee | Albuquerque (UNM) | No website. 390+ Google reviews. Online ordering (`/order`), photo 3D layers, 3 hero styles to choose from. |
| `daily-rituals` | Daily Rituals | Albuquerque (Nob Hill) | No website. New, 4.9 stars. Real photos in 3D layers, online ordering (`/order`) and a separate gift-shop bag (`/shop`), in the café's real colors. |
| `santa-cecilia` | Santa Cecilia | Albuquerque (Old Town) | No website or phone listed. Online ordering (`/order`), photo 3D layers, 3 hero styles to choose from. |
| `homebody` | Homebody Matcha | Albuquerque (Winrock Town Center) | Matcha bar, 4.4 stars from 106 Google reviews. Its Shopify site sells 2 products but has no menu, hours, address or ordering, and the old homebodyabq.com domain has expired. Online ordering (`/order`), photo 3D layers, 3 hero styles (living room, mantel, gallery wall). Checked Nov 24, 2026. |
| `banya-spa` | Massage & Banya Spa of Santa Fe | Santa Fe | Default WordPress site still showing pandemic notices. |
| `x-tactics` | X-Tactics Training & Performance | Rio Rancho | Broken template site, no https. |

Facts come from public sources only; anything the owner must supply is marked `TODO`. The coffee demos use stock photos as placeholders.

All four coffee demos share the same order kit: menu, cart, pickup-time checkout (ASAP or 15-minute slots within opening hours, Albuquerque time) and a demo confirmation. Nothing is sent or charged; the live version would plug into the café's POS. Menus and prices are labeled samples.

The coffee demos use real photos as 3D layers (no WebGL): layers sit at different depths and turn toward the cursor, or with scroll on phones. Duggan's, Santa Cecilia and Homebody show a small "Hero style A · B · C" switcher so the owner can pick a hero; `?hero=b` opens a link on a given style. Remove the switcher before launch.

Lighthouse mobile: Performance 88 to 99, Accessibility 100, Best Practices 100. SEO shows about 60 only because the demos are deliberately `noindex`.

## Deploy on Vercel
For each folder: vercel.com/new, import this repo, set **Root Directory** to the folder name, deploy.

Homebody uses no motion at all beyond the cursor tilt on desktop: the photo depth is fixed in the markup, phones get the same layered 3D standing still, and the process clip only plays when it is on screen (never with reduced motion). Homebody's branded photos (the HB cup, the scoop, the cups, the wellness-bar image) are the café's own, saved from their public posts, plus matcha stock photos; get the owner's OK before launch.
