"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerformanceMonitor, PresentationControls, ContactShadows } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

const swirlVert = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

// Latte-art style swirl: milk foam spiralling into espresso. uStir speeds it up while you stir.
const swirlFrag = /* glsl */ `
varying vec2 vUv;
uniform float uTime;
uniform float uStir;
void main() {
  vec2 p = vUv - 0.5;
  float r = length(p) * 2.0;
  float a = atan(p.y, p.x);
  float spiral = sin(a * 2.0 + r * 9.0 - uTime * (0.6 + uStir * 3.0) + sin(r * 5.0 + uTime) * 0.6);
  float heart = smoothstep(0.55, 0.0, r);
  float foam = smoothstep(0.1, 0.5, spiral * 0.5 + 0.5) * smoothstep(0.98, 0.2, r);
  vec3 espresso = vec3(0.29, 0.16, 0.09);
  vec3 crema = vec3(0.71, 0.47, 0.27);
  vec3 milk = vec3(0.95, 0.90, 0.95);
  vec3 lav = vec3(0.74, 0.64, 0.86);
  vec3 col = mix(espresso, crema, smoothstep(1.0, 0.3, r));
  col = mix(col, milk, clamp(foam * 0.85 + heart * 0.5, 0.0, 1.0));
  col = mix(col, lav, foam * smoothstep(0.2, 0.8, r) * 0.35);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;

function Buds({ active }: { active: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const N = 40;
  const seeds = useMemo(() => Array.from({ length: N }, (_, i) => ({ a: (i / N) * Math.PI * 2, r: 1.8 + Math.random() * 0.7, y: 0.3 + Math.random() * 2.0, s: 0.022 + Math.random() * 0.022, sp: 0.15 + Math.random() * 0.2 })), []);
  const d = useMemo(() => new THREE.Object3D(), []);
  useFrame((state) => {
    if (!active || !mesh.current) return;
    const t = state.clock.elapsedTime;
    seeds.forEach((b, i) => {
      const a = b.a + t * b.sp;
      d.position.set(Math.cos(a) * b.r, b.y + Math.sin(t * 0.8 + i) * 0.15, Math.sin(a) * b.r);
      d.rotation.set(t * 0.5 + i, a, 0.4);
      d.scale.set(b.s, b.s * 1.7, b.s);
      d.updateMatrix();
      mesh.current!.setMatrixAt(i, d.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, N]} frustumCulled={false}>
      <sphereGeometry args={[1, 12, 10]} />
      <meshStandardMaterial color="#8f7bb3" roughness={0.6} />
    </instancedMesh>
  );
}

function Mug({ active }: { active: boolean }) {
  // speckled stoneware, like the cups and bowls on the café shelves
  const speckle = useMemo(() => {
    const c = document.createElement("canvas"); c.width = c.height = 512;
    const g = c.getContext("2d")!;
    g.fillStyle = "#efe8dc"; g.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 900; i++) {
      g.fillStyle = `rgba(${60 + Math.random() * 40},${45 + Math.random() * 30},${35},${0.35 + Math.random() * 0.5})`;
      g.beginPath(); g.arc(Math.random() * 512, Math.random() * 512, 0.6 + Math.random() * 1.8, 0, Math.PI * 2); g.fill();
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 1);
    return t;
  }, []);
  const group = useRef<THREE.Group>(null);
  const stir = useRef(0);
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uStir: { value: 0 } }), []);
  const body = useMemo(() => {
    const pts: THREE.Vector2[] = [];
    // outer wall up, then inner wall down: a simple ceramic cup profile
    pts.push(new THREE.Vector2(0, 0));
    pts.push(new THREE.Vector2(0.72, 0));
    pts.push(new THREE.Vector2(0.8, 0.08));
    for (let i = 0; i <= 12; i++) { const t = i / 12; pts.push(new THREE.Vector2(0.8 + t * 0.32 + Math.sin(t * Math.PI) * 0.04, 0.08 + t * 1.3)); }
    pts.push(new THREE.Vector2(1.06, 1.38));
    for (let i = 12; i >= 0; i--) { const t = i / 12; pts.push(new THREE.Vector2(0.74 + t * 0.32, 0.16 + t * 1.22)); }
    pts.push(new THREE.Vector2(0, 0.16));
    return new THREE.LatheGeometry(pts, 72);
  }, []);
  useFrame((state, dt) => {
    if (!active) return;
    stir.current = Math.max(0, stir.current - dt * 0.6);
    uniforms.uTime.value += dt;
    uniforms.uStir.value = stir.current;
    if (group.current) group.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.05;
  });
  return (
    <group ref={group} onPointerMove={() => { stir.current = Math.min(1.2, stir.current + 0.05); }}>
      <mesh geometry={body} castShadow>
        <meshStandardMaterial map={speckle} roughness={0.6} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 1.24, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.02, 64]} />
        <shaderMaterial vertexShader={swirlVert} fragmentShader={swirlFrag} uniforms={uniforms} />
      </mesh>
      <mesh position={[1.12, 0.72, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.32, 0.07, 16, 40, Math.PI * 1.2]} />
        <meshStandardMaterial map={speckle} roughness={0.6} />
      </mesh>
      <mesh position={[0, -0.02, 0]}>
        <cylinderGeometry args={[1.65, 1.5, 0.08, 64]} />
        <meshStandardMaterial color="#8a5a36" roughness={0.75} />
      </mesh>
    </group>
  );
}

export default function RitualCup({ active }: { active: boolean }) {
  const [dpr, setDpr] = useState(1.5);
  return (
    <Canvas dpr={[1, Math.min(dpr, 1.75)]} frameloop={active ? "always" : "never"} camera={{ position: [0, 3.4, 5.6], fov: 40 }} gl={{ alpha: true, antialias: true }} onCreated={({ camera }) => camera.lookAt(0, 0.7, 0)}>
      <PerformanceMonitor onDecline={() => setDpr(1)} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 6, 4]} intensity={2.4} color="#fff4e6" />
      <directionalLight position={[-4, 2, -3]} intensity={0.8} color="#c98b5a" />
      <PresentationControls global={false} snap polar={[-0.2, 0.3]} azimuth={[-0.8, 0.8]} cursor>
        <Mug active={active} />
        <Buds active={active} />
      </PresentationControls>
      <ContactShadows position={[0, -0.06, 0]} opacity={0.35} scale={6} blur={2.6} far={2} />
    </Canvas>
  );
}
