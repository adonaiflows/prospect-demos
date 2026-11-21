import type { Site } from "@/lib/types";

// Facts from whisperingbean.com, joe.coffee and the Rio Rancho Observer (checked 2026-11-21). No invented prices or reviews.
export const site: Site = {
  name: "Whispering Bean Coffee Roasters",
  shortName: "Whispering Bean",
  url: "https://whispering-bean-demo.vercel.app", // TODO: final domain
  metaTitle: "Whispering Bean Coffee Roasters | Local Micro-Roaster in Albuquerque & Rio Rancho",
  metaDescription: "Best of the City micro-roaster on Coors & Alameda and a Rio Rancho drive-thru. Fresh-roasted house blends and single origins, shipped or picked up.",
  theme: { bg: "#f7f1e8", surface: "#efe4d3", ink: "#2b1d14", muted: "#5e4a3c", accent: "#b5562b", accentInk: "#ffffff", line: "#e0d2bd", display: "serif", motif: "steam" },
  nav: [
    { label: "Coffee", href: "#coffee" },
    { label: "Shop beans", href: "#shop" },
    { label: "Our story", href: "#story" },
    { label: "Visit", href: "#visit" },
  ],
  hero: {
    eyebrow: "Local micro-roaster · Albuquerque & Rio Rancho",
    headline: "Roasted here. Poured with care.",
    sub: "Best of the City coffee, fresh-roasted by a local micro-roaster. Stop by our Coors & Alameda shop, swing through the Rio Rancho drive-thru, or bring the beans home.",
    primary: { label: "Shop our beans", href: "https://www.whisperingbean.com/coffee" },
    secondary: { label: "Find a shop", href: "#visit" },
  },
  proof: [
    { value: "Best of the City", label: "Albuquerque The Magazine winner" },
    { value: "2 shops", label: "Including a Rio Rancho drive-thru" },
    { value: "NM True", label: "New Mexico True Certified" },
    { value: "Fair trade", label: "And organic single origins" },
  ],
  offerings: {
    id: "coffee",
    kicker: "On the menu",
    title: "From espresso to nitro.",
    intro: "Every drink starts with beans we roast ourselves. TODO: add the full menu and photos from the shop.",
    items: [
      { name: "Espresso drinks", desc: "Lattes, cappuccinos and more, pulled from our own roasts." },
      { name: "Pour-over", desc: "One cup at a time, so each single origin can show its character." },
      { name: "Cold brew & nitro", desc: "Slow-steeped and smooth, on tap." },
      { name: "Frozen drinks", desc: "Blended for New Mexico afternoons." },
      { name: "House blends", desc: "Our everyday roasts, available by the bag." },
      { name: "Single origins", desc: "Responsibly sourced, with fair trade and organic options." },
    ],
  },
  feature: {
    id: "shop",
    kicker: "Coffee at home",
    title: "Never run out of your favorite roast.",
    body: "Order beans online and pick them up or have them shipped. TODO: confirm a subscription option and wholesale terms with the owners.",
    steps: [
      { title: "Choose your roast", desc: "Browse house blends and single origins with tasting notes." },
      { title: "Pick grind & schedule", desc: "Whole bean or ground, one-time or on repeat." },
      { title: "Pick up or ship", desc: "Grab it with your drink or have it delivered." },
    ],
    cta: { label: "Shop beans", href: "https://www.whisperingbean.com/coffee" },
  },
  story: {
    kicker: "Our story",
    title: "Family owned, Rio Rancho raised.",
    body: [
      "Whispering Bean is a family-owned micro-roaster run by David and Angie Weigand, Rio Rancho natives who opened a second shop and drive-thru in the City of Vision.",
      "Businesses can buy our coffee wholesale too. TODO: add the founding story in the owners' words and photos of the roaster.",
    ],
  },
  visit: {
    locations: [
      { name: "Albuquerque", address: "10701 Corrales Rd NW, Suite 3, Albuquerque, NM 87114", hours: ["Mon to Fri 6am to 4pm", "Sat 7am to 4pm", "Sun 8am to 3pm"] },
      { name: "Rio Rancho drive-thru", address: "1100 NM-528, Suite B, Rio Rancho, NM 87144", hours: ["Mon to Fri 6am to 4pm", "Sat 7am to 4pm", "Sun 8am to 3pm"] },
    ],
    phone: "(505) 697-9919",
    email: "whisperingbeancoffee@gmail.com",
  },
  closing: { title: "Fresh roast, waiting for you.", sub: "Order beans online or stop by for a cup.", cta: { label: "Shop our beans", href: "https://www.whisperingbean.com/coffee" } },
};
