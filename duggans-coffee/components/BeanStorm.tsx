"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/** A roasted coffee bean: squashed sphere with the seam pressed into the flat side. */
function makeBean() {
  const g = new THREE.SphereGeometry(1, 36, 24);
  const p = g.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    v.x *= 0.72; v.z *= 0.52;
    if (v.z > 0) {
      v.z -= Math.exp(-(v.x * v.x) / 0.008) * 0.24 * (1 - Math.abs(v.y) * 0.6);
      v.x += Math.sin(v.y * 2.2) * 0.04;
    }
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

type Bean = { x: number; y: number; z: number; vx: number; vy: number; s: number; rx: number; ry: number; spin: number; fall: number };

/** Beans fall through the hero like a grinder hopper; the cursor (or a tap) pushes them away. */
function Beans({ active, count }: { active: boolean; count: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const geo = useMemo(makeBean, []);
  const { viewport } = useThree();
  const pointer = useRef({ x: 99, y: 99 });
  const beans = useMemo<Bean[]>(
    () => Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 10, y: Math.random() * 8 - 4, z: -Math.random() * 4 + 0.6,
      vx: 0, vy: 0, s: 0.14 + Math.random() * 0.2,
      rx: Math.random() * 6, ry: Math.random() * 6, spin: 0.4 + Math.random() * 1.2, fall: 0.35 + Math.random() * 0.5,
    })),
    [count]
  );
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * viewport.width;
      pointer.current.y = -(e.clientY / window.innerHeight - 0.5) * viewport.height;
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerdown", move); };
  }, [viewport.width, viewport.height]);

  useFrame((_, rawDt) => {
    if (!active || !mesh.current) return;
    const dt = Math.min(rawDt, 0.05);
    const top = viewport.height / 2 + 1, bottom = -viewport.height / 2 - 1;
    beans.forEach((b, i) => {
      const dx = b.x - pointer.current.x, dy = b.y - pointer.current.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < 2.2) { const f = (2.2 - d2) * 6; b.vx += (dx / Math.sqrt(d2 + 0.01)) * f * dt; b.vy += (dy / Math.sqrt(d2 + 0.01)) * f * dt; }
      b.vx *= 0.94; b.vy *= 0.94;
      b.x += b.vx * dt; b.y += (b.vy - b.fall) * dt;
      if (b.y < bottom) { b.y = top; b.x = (Math.random() - 0.5) * viewport.width; b.vx = b.vy = 0; }
      b.rx += b.spin * dt + Math.abs(b.vx) * dt; b.ry += b.spin * 0.7 * dt;
      dummy.position.set(b.x, b.y, b.z);
      dummy.rotation.set(b.rx, b.ry, 0.3);
      dummy.scale.setScalar(b.s);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[geo, undefined, count]} frustumCulled={false}>
      <meshStandardMaterial color="#3b2114" roughness={0.32} metalness={0.08} />
    </instancedMesh>
  );
}

export default function BeanStorm({ active }: { active: boolean }) {
  const [dpr, setDpr] = useState(1.5);
  const [count] = useState(() => (typeof window !== "undefined" && window.innerWidth < 700 ? 18 : 38));
  return (
    <Canvas dpr={[1, Math.min(dpr, 1.75)]} frameloop={active ? "always" : "never"} camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}>
      <PerformanceMonitor onDecline={() => setDpr(1)} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 6, 5]} intensity={2.6} color="#ffd6a3" />
      <pointLight position={[-4, -3, 3]} intensity={18} color="#f0a04b" />
      <Beans active={active} count={count} />
    </Canvas>
  );
}
