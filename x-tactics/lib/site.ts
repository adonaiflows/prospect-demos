import type { Site } from "@/lib/types";

// Facts from xtacticstps.com and Google Maps (checked 2026-11-22). Membership prices are as listed on their current site.
export const site: Site = {
  name: "X-Tactics Training and Performance Systems",
  shortName: "X-Tactics",
  url: "https://x-tactics-demo.vercel.app", // TODO: final domain
  metaTitle: "X-Tactics Training & Performance | Gym and personal training in Rio Rancho",
  metaDescription: "Rio Rancho gym and personal training led by Exevius Seals, a former military and law-enforcement trainer with 27 years of experience. Book a free consult.",
  theme: { bg: "#111315", surface: "#1b1f23", ink: "#f2f1ed", muted: "#a9afb5", accent: "#d9a520", accentInk: "#111315", line: "#2c3237", display: "sans", motif: "breath" },
  nav: [
    { label: "Training", href: "#training" },
    { label: "Memberships", href: "#start" },
    { label: "Coach", href: "#story" },
    { label: "Visit", href: "#visit" },
  ],
  hero: {
    eyebrow: "Rio Rancho · Golf Course Rd",
    headline: "Train with 27 years of military and law-enforcement experience.",
    sub: "Strength, conditioning and personal training at X-Tactics, led by owner and head coach Exevius Seals.",
    primary: { label: "Book a free consult", href: "tel:+15058912452" },
    secondary: { label: "See memberships", href: "#start" },
  },
  proof: [
    { value: "27 yrs", label: "Training experience" },
    { value: "Military", label: "and law-enforcement background" },
    { value: "From $45", label: "Monthly membership" },
    { value: "Rio Rancho", label: "2115 Golf Course Rd SE" },
  ],
  offerings: {
    id: "training",
    kicker: "Training",
    title: "Built for real-world performance.",
    intro: "TODO: confirm the class types and personal-training options with Exevius.",
    items: [
      { name: "Personal training", desc: "One-on-one coaching built around your goals. TODO: session prices." },
      { name: "Strength & conditioning", desc: "Get stronger, faster and harder to stop." },
      { name: "Open gym", desc: "Train on your own schedule. TODO: confirm open-gym hours." },
      { name: "Tactical prep", desc: "TODO: confirm if programs for military, police or fire candidates are offered." },
    ],
  },
  feature: {
    id: "start",
    kicker: "Memberships",
    title: "Bronze $45 · Silver $85 · Gold $116 a month.",
    body: "Prices as listed on the current X-Tactics site. TODO: confirm what each tier includes before launch.",
    steps: [
      { title: "Book a free consult", desc: "Tell Coach Seals where you are and where you want to be." },
      { title: "Pick your tier", desc: "Bronze, Silver or Gold, depending on how much coaching you want." },
      { title: "Start training", desc: "Show up and follow the plan. TODO: confirm intake process." },
    ],
    cta: { label: "Call (505) 891-2452", href: "tel:+15058912452" },
  },
  story: {
    kicker: "Your coach",
    title: "Exevius Seals, owner and CEO.",
    body: [
      "Exevius brings 27 years of experience training people in the military and law enforcement to everyday athletes in Rio Rancho.",
      "TODO: his own words on why he started X-Tactics, plus real photos of the gym and coaching.",
    ],
  },
  visit: {
    locations: [{ name: "X-Tactics", address: "2115 Golf Course Rd SE, Suite 104, Rio Rancho, NM 87124", hours: ["TODO: hours"] }],
    phone: "(505) 891-2452",
    email: "xtacticstps@gmail.com",
  },
  closing: { title: "Your first session is free to talk about.", sub: "Call to set up a consult with Coach Seals.", cta: { label: "Call (505) 891-2452", href: "tel:+15058912452" } },
};
