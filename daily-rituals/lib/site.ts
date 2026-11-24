// Facts: Google Maps listing (checked Nov 22, 2026) and Adonai (sister shop House of Stickks & Stones shares a wall and an open doorway).
export const PHONE = "(504) 377-1751";
export const TEL = "tel:+15043771751";
export const ADDRESS = "3409 Central Ave NE, Albuquerque, NM 87106";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=Daily+Rituals+3409+Central+Ave+NE+Albuquerque";
export const MAP_EMBED = "https://www.google.com/maps?q=3409+Central+Ave+NE,+Albuquerque,+NM+87106&output=embed";

export const hours = [
  ["Sunday – Thursday", "8 am – 3 pm"],
  ["Friday – Saturday", "8 am – 5 pm"],
] as const;

/** Opening hours by weekday (0 = Sunday), in minutes after midnight, Albuquerque time. */
export const openByDay: Record<number, [number, number]> = {
  0: [480, 900], 1: [480, 900], 2: [480, 900], 3: [480, 900], 4: [480, 900], 5: [480, 1020], 6: [480, 1020],
};
