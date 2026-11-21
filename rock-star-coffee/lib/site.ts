import type { Site } from "@/lib/types";

// Facts from rockstarcoffee.rocks and joe.coffee (checked 2026-11-21). Prices are the shop's own listed range.
export const site: Site = {
  name: "Rock Star Coffee Company",
  shortName: "Rock Star Coffee",
  url: "https://rock-star-coffee-demo.vercel.app", // TODO: final domain
  metaTitle: "Rock Star Coffee | Fair Trade Coffee from Rio Rancho, Shipped to All 50 States",
  metaDescription: "Fair trade coffee from Mexico, Guatemala, Papua New Guinea, Peru and Ethiopia. $4.95 flat-rate shipping or free pickup in Rio Rancho. Subscribe and never run out.",
  theme: { bg: "#121212", surface: "#1d1d1d", ink: "#f5f1ea", muted: "#b9b2a7", accent: "#e8b33a", accentInk: "#121212", line: "#333333", display: "sans", motif: "drip" },
  nav: [
    { label: "Roasts", href: "#roasts" },
    { label: "Subscribe", href: "#subscribe" },
    { label: "About", href: "#story" },
    { label: "Visit", href: "#visit" },
  ],
  hero: {
    eyebrow: "Rio Rancho · Ships to all 50 states",
    headline: "Loud flavor. Fair trade beans.",
    sub: "Fair trade coffee sourced from Mexico, Guatemala, Papua New Guinea, Peru, Ethiopia and beyond. $4.95 flat-rate shipping, or free pickup at our Quantum Rd shop.",
    primary: { label: "Shop coffee", href: "https://www.rockstarcoffee.rocks/category/all-products" },
    secondary: { label: "Start a subscription", href: "#subscribe" },
  },
  proof: [
    { value: "50 states", label: "We ship anywhere in the US" },
    { value: "$4.95", label: "Flat-rate shipping" },
    { value: "Free", label: "Store pickup in Rio Rancho" },
    { value: "Fair trade", label: "And organic options" },
  ],
  offerings: {
    id: "roasts",
    kicker: "The lineup",
    title: "Find your roast.",
    intro: "Our top sellers run $16.95 to $18.95 a bag. TODO: add tasting notes and roast level for each coffee from the roaster.",
    items: [
      { name: "Country Road", desc: "A customer favorite. TODO: roast level and tasting notes." },
      { name: "Blood Moon", desc: "One of our top sellers. TODO: roast level and tasting notes." },
      { name: "Free", desc: "One of our top sellers. TODO: roast level and tasting notes." },
      { name: "Light roasts", desc: "Bright and nuanced. TODO: list the light roasts." },
      { name: "Medium roasts", desc: "Balanced and easy to love. TODO: list the medium roasts." },
      { name: "Dark roasts", desc: "Bold and smoky. TODO: list the dark roasts." },
    ],
  },
  feature: {
    id: "subscribe",
    kicker: "Subscriptions",
    title: "Your coffee, on repeat.",
    body: "Pick a roast and get it monthly or twice a month. Sold out? Pre-order and we'll ship when it's back.",
    steps: [
      { title: "Choose a coffee", desc: "Start with a top seller or try something new." },
      { title: "Set your rhythm", desc: "Monthly or twice a month. Change it anytime." },
      { title: "We roast and ship", desc: "Delivered anywhere in the US, or picked up free." },
    ],
    cta: { label: "See subscription plans", href: "https://www.rockstarcoffee.rocks/pricing-plans/list" },
  },
  story: {
    kicker: "About us",
    title: "Coffee with the volume turned up.",
    body: [
      "Rock Star Coffee is dedicated to sourcing the finest local and international beans, fair trade, from our shop on Quantum Rd in Rio Rancho.",
      "TODO: add the founder's story and photos of the roaster.",
    ],
  },
  visit: {
    locations: [{ name: "Rock Star Coffee", address: "661 Quantum Rd NE #16, Rio Rancho, NM 87124", hours: ["Daily 7:30am to 5pm (per joe.coffee; TODO: confirm)"] }],
    phone: "505.738.6500",
    email: "sales@rockstarcoffee.rocks",
  },
  closing: { title: "Ready to rock your morning?", sub: "Order a bag today, shipped or picked up free.", cta: { label: "Shop coffee", href: "https://www.rockstarcoffee.rocks/category/all-products" } },
};
