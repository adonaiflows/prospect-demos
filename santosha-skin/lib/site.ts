import type { Site } from "@/lib/types";

// Facts from santosha.skin (checked 2026-11-21). No invented prices, results claims or testimonials.
export const site: Site = {
  name: "Santosha Skin Holistic + Integrative",
  shortName: "Santosha Skin",
  url: "https://santosha-skin-demo.vercel.app", // TODO: final domain
  metaTitle: "Santosha Skin | Holistic Facials & Esthetics Training in Albuquerque",
  metaDescription: "Holistic facials with whole-body energetic grounding, brows, lash lifts and botanical high-desert skincare, plus state-approved continuing education for estheticians.",
  theme: { bg: "#f8f2ee", surface: "#efe2da", ink: "#3a2723", muted: "#6b524b", accent: "#9c5b47", accentInk: "#ffffff", line: "#e3d1c7", display: "serif", motif: "leaf" },
  nav: [
    { label: "Treatments", href: "#treatments" },
    { label: "Courses", href: "#courses" },
    { label: "About Jess", href: "#story" },
    { label: "Visit", href: "#visit" },
  ],
  hero: {
    eyebrow: "Holistic esthetics · Albuquerque",
    headline: "Skin care that brings you back to center.",
    sub: "Santosha is Sanskrit for contentment. Holistic facials with whole-body energetic grounding, botanical high-desert skincare, and more than seventeen years of hands-on experience.",
    primary: { label: "Book an appointment", href: "https://santoshaskin.glossgenius.com/" },
    secondary: { label: "Explore courses", href: "#courses" },
  },
  proof: [
    { value: "17+ years", label: "Licensed esthetics experience" },
    { value: "CE provider", label: "State board certified since 2022" },
    { value: "Craniosacral", label: "Trained in Costa Rica, 2016" },
    { value: "Botanical", label: "Our own high-desert skincare line" },
  ],
  offerings: {
    id: "treatments",
    kicker: "Treatments",
    title: "Gentle, grounded, personal.",
    intro: "Every service is shaped around your skin and how you want to feel when you leave. TODO: add durations and prices from the menu.",
    items: [
      { name: "Signature holistic facial", desc: "Skin care paired with whole-body energetic grounding." },
      { name: "Eyebrow shaping", desc: "Natural, balanced brows that suit your face." },
      { name: "Lash lifts", desc: "A soft lift for lashes that look awake all day." },
      { name: "Waxing", desc: "Careful, comfortable hair removal." },
      { name: "Botanical skincare", desc: "Our own formulas made for high-desert skin. TODO: product list and online shop." },
      { name: "Craniosacral focus", desc: "Gentle bodywork woven into the facial experience." },
    ],
  },
  feature: {
    id: "courses",
    kicker: "For estheticians",
    title: "Continuing education, taught by a practitioner.",
    body: "Santosha Skin is a state board certified continuing education provider. Advanced esthetics courses for professionals who want to work more holistically. TODO: add course dates, length and fees.",
    steps: [
      { title: "Pick a course", desc: "See upcoming advanced esthetics trainings." },
      { title: "Reserve your seat", desc: "Small groups, so seats are limited." },
      { title: "Earn CE credit", desc: "Approved by the state board for license renewal." },
    ],
    cta: { label: "Ask about the next course", href: "#visit" },
  },
  story: {
    kicker: "Meet Jess",
    title: "Jessica Brown, owner and founder.",
    body: [
      "Jess has held her esthetics license for more than seventeen years. In 2016 she graduated from the Costa Rica School of Massage Therapy, and her work now centers on craniosacral therapy and holistic skin care.",
      "TODO: add a portrait and Jess's story in her own words.",
    ],
  },
  visit: {
    locations: [{ name: "Santosha Skin", address: "1761 Bellamah Ave NW, Suite B, Albuquerque, NM 87104", hours: ["Wed 10am to 2pm", "Thu and Fri 10am to 6pm", "Sat 10am to 4pm", "Sun to Tue closed"] }],
    phone: "505-391-9099 (call or text)",
  },
  closing: { title: "Come back to center.", sub: "Book your next facial online.", cta: { label: "Book an appointment", href: "https://santoshaskin.glossgenius.com/" } },
};
