import type { CSSProperties } from "react";

/** Places a photo layer at a depth (px toward the viewer) inside a [data-stage] scene, with an optional fixed tilt. */
export const z = (depth: number, extra = ""): CSSProperties => ({ transform: `translateZ(${depth}px) ${extra}`.trim() });
