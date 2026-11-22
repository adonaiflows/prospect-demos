"use client";
import SceneMount from "./SceneMount";

const load = () => import("./LiquidCup");

export default function Liquid3D() {
  return <SceneMount load={load} poster="/images/cup-poster.webp" alt="A cup of black coffee seen from above" className="h-full w-full [&>img]:object-contain" />;
}
