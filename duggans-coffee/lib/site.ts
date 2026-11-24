// Facts: Duggan's Google Maps listing (checked Nov 22, 2026). Anything not verified is marked TODO.
export const PHONE = "(505) 525-8190";
export const TEL = "tel:+15055258190";
export const ADDRESS = "2227 Lead Ave SE, Albuquerque, NM 87106";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=Duggan%27s+Coffee+2227+Lead+Ave+SE+Albuquerque";

export const hours = [
  ["Monday", "7:30 am – 3 pm"],
  ["Tuesday – Friday", "7:30 am – 5 pm"],
  ["Saturday & Sunday", "7:30 am – 2 pm"],
] as const;

/** Opening hours by weekday (0 = Sunday), in minutes after midnight, Albuquerque time. */
export const openByDay: Record<number, [number, number]> = {
  0: [450, 840], 1: [450, 900], 2: [450, 1020], 3: [450, 1020], 4: [450, 1020], 5: [450, 1020], 6: [450, 840],
};
