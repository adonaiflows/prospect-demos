"use client";
import SceneMount from "./SceneMount";

const load = () => import("./RitualCup");

export default function Cup3D() {
  return <SceneMount load={load} poster="/images/cup-poster.webp" alt="A latte with leaf art in a white cup" className="h-full w-full [&>img]:object-contain [&>img]:p-10" />;
}
