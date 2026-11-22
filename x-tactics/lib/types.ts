export type Motif = "steam" | "breath" | "leaf" | "drip";

export type Link = { label: string; href: string };

export type Site = {
  name: string;
  shortName: string;
  url: string; // TODO: replace with the final domain
  metaTitle: string;
  metaDescription: string;
  theme: {
    bg: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    accentInk: string;
    line: string;
    display: "serif" | "sans";
    motif: Motif;
  };
  nav: Link[];
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    primary: Link;
    secondary?: Link;
  };
  /** Only real, publicly stated facts. */
  proof: { value: string; label: string }[];
  offerings: {
    id: string;
    kicker: string;
    title: string;
    intro: string;
    items: { name: string; desc: string }[];
  };
  feature: {
    id: string;
    kicker: string;
    title: string;
    body: string;
    steps: { title: string; desc: string }[];
    cta: Link;
  };
  story: { kicker: string; title: string; body: string[] };
  visit: {
    locations: { name: string; address: string; hours?: string[] }[];
    phone?: string;
    email?: string;
  };
  closing: { title: string; sub: string; cta: Link };
};
