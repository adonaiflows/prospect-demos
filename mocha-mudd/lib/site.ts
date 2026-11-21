import type { Site } from "@/lib/types";

// Very few public facts exist: address and hours from Birdeye (checked 2026-11-21). Everything else is a marked TODO for the owner.
export const site: Site = {
  name: "Mocha Mudd",
  shortName: "Mocha Mudd",
  url: "https://mocha-mudd-demo.vercel.app", // TODO: final domain
  metaTitle: "Mocha Mudd | Coffee on Deborah Rd in Rio Rancho",
  metaDescription: "Neighborhood coffee in Rio Rancho, open daily 6am to 3pm at 1400 Deborah Rd SE. See the menu, get directions and order ahead.",
  theme: { bg: "#f3ebe1", surface: "#e6d7c4", ink: "#2a1a12", muted: "#5d4636", accent: "#7a4a2b", accentInk: "#ffffff", line: "#d8c6b0", display: "sans", motif: "steam" },
  nav: [
    { label: "Menu", href: "#menu" },
    { label: "Order ahead", href: "#order" },
    { label: "Visit", href: "#visit" },
  ],
  hero: {
    eyebrow: "Rio Rancho · Open daily 6am to 3pm",
    headline: "Your neighborhood coffee stop.",
    sub: "Fresh coffee on Deborah Rd SE, every day of the week. See what's brewing, get directions, and order ahead so it's ready when you pull up.",
    primary: { label: "Get directions", href: "https://www.google.com/maps/search/?api=1&query=Mocha%20Mudd%201400%20Deborah%20Rd%20SE%20Rio%20Rancho%20NM" },
    secondary: { label: "See the menu", href: "#menu" },
  },
  proof: [
    { value: "7 days", label: "Open every day" },
    { value: "6am", label: "Early enough for your commute" },
  ],
  offerings: {
    id: "menu",
    kicker: "Menu",
    title: "What's brewing.",
    intro: "TODO: menu items, prices and photos come from the owner. This section is ready for them.",
    items: [
      { name: "Hot coffee", desc: "TODO: drinks and sizes from the owner." },
      { name: "Iced & blended", desc: "TODO: drinks from the owner." },
      { name: "Bites", desc: "TODO: food items, if any." },
    ],
  },
  feature: {
    id: "order",
    kicker: "Order ahead",
    title: "Skip the wait.",
    body: "Let regulars order from their phone and pick up without waiting in line. TODO: connect the shop's POS online ordering (Square, Toast or similar).",
    steps: [
      { title: "Order on your phone", desc: "Pick your drink and customize it." },
      { title: "We start brewing", desc: "Your order goes straight to the bar." },
      { title: "Grab it and go", desc: "It's ready when you arrive." },
    ],
    cta: { label: "Order ahead (coming soon)", href: "#order" },
  },
  story: {
    kicker: "About",
    title: "Local coffee for Rio Rancho.",
    body: ["TODO: the owner's story, how long the shop has been open, and what makes it different."],
  },
  visit: {
    locations: [{ name: "Mocha Mudd", address: "1400 Deborah Rd SE, Rio Rancho, NM 87124", hours: ["Daily 6am to 3pm (per Birdeye; TODO: confirm)"] }],
    email: "info@mochamuddnm.com",
  },
  closing: { title: "See you in the morning.", sub: "Open daily from 6am on Deborah Rd SE.", cta: { label: "Get directions", href: "https://www.google.com/maps/search/?api=1&query=Mocha%20Mudd%201400%20Deborah%20Rd%20SE%20Rio%20Rancho%20NM" } },
};
