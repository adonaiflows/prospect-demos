import type { Site } from "@/lib/types";

// Facts from unwind.yoga and public listings (checked 2026-11-21). Never add prices, reviews or stats that the studio hasn't given us.
export const site: Site = {
  name: "Unwind Yoga",
  shortName: "Unwind Yoga",
  url: "https://unwind-yoga-demo.vercel.app", // TODO: final domain
  metaTitle: "Unwind Yoga | Yoga, Pilates & Grounding in Northeast Albuquerque",
  metaDescription: "Award-winning Albuquerque yoga studio pairing the ancient art of yoga with biomedical technology: infrared heat, grounding and a UV-disinfected space. Book your first class.",
  theme: { bg: "#f4f1ea", surface: "#e7e4d8", ink: "#1f2a24", muted: "#4d5a52", accent: "#3f6b55", accentInk: "#ffffff", line: "#d3cfc1", display: "serif", motif: "breath" },
  nav: [
    { label: "Classes", href: "#classes" },
    { label: "First visit", href: "#first-visit" },
    { label: "About", href: "#story" },
    { label: "Visit", href: "#visit" },
  ],
  hero: {
    eyebrow: "Northeast Albuquerque · Best of the City 2023 & 2024",
    headline: "Yoga, grounded in science.",
    sub: "The ancient art of yoga combined with biomedical technology: infrared heat, earthing and a UV-disinfected studio. Classes, privates and a yoga school on Louisiana Blvd.",
    primary: { label: "Book a class", href: "https://www.unwind.yoga/schedule-1" },
    secondary: { label: "Plan your first visit", href: "#first-visit" },
  },
  proof: [
    { value: "2024", label: "Best of the City winner" },
    { value: "2023", label: "Best of the City winner" },
    { value: "Top 5", label: "Best of the City, 2019 to 2022" },
    { value: "Yoga school", label: "Teacher training on site" },
  ],
  offerings: {
    id: "classes",
    kicker: "What we offer",
    title: "Every way to practice, under one roof.",
    intro: "Group classes for every level, plus one-on-one work when you want to go deeper.",
    items: [
      { name: "Yoga classes", desc: "Group classes in an infrared-heated, UV-disinfected studio." },
      { name: "Pilates & strength", desc: "Build the strength that supports your practice." },
      { name: "Private sessions", desc: "One-on-one instruction shaped around your body and goals." },
      { name: "Workshops & events", desc: "Deeper dives into technique, philosophy and practice." },
      { name: "Yoga school", desc: "Train to teach, with applications open on our site." },
      { name: "Grounding & wellness", desc: "Earthing, meditation, Reiki, nutrition, and life and grief coaching." },
    ],
  },
  feature: {
    id: "first-visit",
    kicker: "Your first class",
    title: "New here? Three steps and you're on the mat.",
    body: "A clear path for first-timers turns curious visitors into regulars. TODO: add the studio's real intro offer and price once confirmed.",
    steps: [
      { title: "Pick a class", desc: "Browse the live schedule and choose a time that fits your week." },
      { title: "Create your account", desc: "Sign up once, then book any class in a couple of taps." },
      { title: "Arrive 10 minutes early", desc: "We'll show you around, set you up and answer questions." },
    ],
    cta: { label: "See the schedule", href: "https://www.unwind.yoga/schedule-1" },
  },
  story: {
    kicker: "About the studio",
    title: "Where ancient practice meets modern recovery.",
    body: [
      "Unwind Yoga brings together traditional yoga and wellness technology, from grounding to infrared heat, in a calm studio in Northeast Albuquerque.",
      "Albuquerque readers have named the studio Best of the City in 2023 and 2024. TODO: add the owner's story and photos of the studio.",
    ],
  },
  visit: {
    locations: [{ name: "Unwind Yoga", address: "8110 Louisiana Blvd NE, Suite D2, Albuquerque, NM 87113" }],
    phone: "505-908-0356",
    email: "info@unwindyoga.fit",
  },
  closing: { title: "Your mat is waiting.", sub: "Book a class today and feel the difference a grounded practice makes.", cta: { label: "Book a class", href: "https://www.unwind.yoga/schedule-1" } },
};
