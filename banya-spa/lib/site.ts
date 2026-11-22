import type { Site } from "@/lib/types";

// Facts from banyaspa.com, Google Maps and public listings (checked 2026-11-22). Never add prices, reviews or stats the spa hasn't given us.
export const site: Site = {
  name: "Massage & Banya Spa of Santa Fe",
  shortName: "Banya Spa Santa Fe",
  url: "https://banya-spa-demo.vercel.app", // TODO: final domain
  metaTitle: "Massage & Banya Spa of Santa Fe | Russian-style banya and massage on Cerrillos Rd",
  metaDescription: "A Russian-style banya and massage spa in Santa Fe. Learn how a banya session works and book by phone or email.",
  theme: { bg: "#f4efe7", surface: "#e8dfd1", ink: "#2a211c", muted: "#5e5147", accent: "#7c3524", accentInk: "#ffffff", line: "#d6cab8", display: "serif", motif: "leaf" },
  nav: [
    { label: "The banya", href: "#banya" },
    { label: "How it works", href: "#ritual" },
    { label: "About", href: "#story" },
    { label: "Visit", href: "#visit" },
  ],
  hero: {
    eyebrow: "Santa Fe · Cerrillos Road",
    headline: "Heat, cold, rest. The banya, in Santa Fe.",
    sub: "A Russian-style banya and massage spa. Come in tired, leave feeling new.",
    primary: { label: "Call to book", href: "tel:+15056603202" },
    secondary: { label: "How a session works", href: "#ritual" },
  },
  proof: [
    { value: "Banya", label: "Russian-style steam ritual" },
    { value: "Massage", label: "Bodywork on site" },
    { value: "Santa Fe", label: "3600 Cerrillos Rd" },
    { value: "Owner-run", label: "By Kelley Koehler" },
  ],
  offerings: {
    id: "banya",
    kicker: "What we offer",
    title: "Two ways to let go.",
    intro: "TODO: confirm the exact services, session lengths and prices with Kelley before launch.",
    items: [
      { name: "Banya session", desc: "Time in the heat, a cold plunge or rinse, and rest between rounds. TODO: length and price." },
      { name: "Massage", desc: "Hands-on bodywork, on its own or after the banya. TODO: modalities and prices." },
      { name: "Banya + massage", desc: "Warm up first so the massage goes deeper. TODO: confirm if offered as a package." },
      { name: "Gift certificates", desc: "TODO: confirm if available." },
    ],
  },
  feature: {
    id: "ritual",
    kicker: "First time in a banya?",
    title: "How a session works.",
    body: "Most first-timers aren't sure what to expect. A short, clear walkthrough removes the nerves and gets the booking. TODO: Kelley to confirm the steps below match how the spa runs sessions.",
    steps: [
      { title: "Heat", desc: "Settle into the steam and let the heat do the work." },
      { title: "Cool", desc: "Step out for cold water to wake everything up." },
      { title: "Rest", desc: "Sit, hydrate and breathe, then go again." },
    ],
    cta: { label: "Call to book", href: "tel:+15056603202" },
  },
  story: {
    kicker: "About the spa",
    title: "A rare tradition on Cerrillos Road.",
    body: [
      "Massage & Banya Spa of Santa Fe is run by owner Kelley Koehler.",
      "TODO: Kelley's story, how she came to the banya tradition, and photos of the space.",
    ],
  },
  visit: {
    locations: [{ name: "Massage & Banya Spa of Santa Fe", address: "3600 Cerrillos Rd, Suite 1001C, Santa Fe, NM 87507", hours: ["TODO: hours"] }],
    phone: "(505) 660-3202",
    email: "shewhosees33@gmail.com",
  },
  closing: { title: "Your next reset is a phone call away.", sub: "Book a banya session or massage today.", cta: { label: "Call (505) 660-3202", href: "tel:+15056603202" } },
};
