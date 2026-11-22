"use client";
import SceneMount from "./SceneMount";

const load = () => import("./BeanStorm");

export default function Hero3D() {
  return <SceneMount load={load} className="h-full w-full" />;
}
