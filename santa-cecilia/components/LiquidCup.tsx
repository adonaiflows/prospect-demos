"use client";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { PerformanceMonitor, useTexture } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const MAX = 6;

const vert = /* glsl */ `
uniform float uTime;
uniform vec3 uRip[${MAX}]; // x, y (local plane coords), start time
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vUv = uv;
  vec3 p = position;
  float h = sin(p.x * 3.0 + uTime * 0.8) * 0.012 + cos(p.y * 2.6 - uTime * 0.6) * 0.012;
  for (int i = 0; i < ${MAX}; i++) {
    float age = uTime - uRip[i].z;
    if (age < 0.0 || age > 4.0) continue;
    float d = distance(p.xy, uRip[i].xy);
    float front = age * 0.9;
    h += sin((d - front) * 18.0) * 0.06 * exp(-abs(d - front) * 5.0) * exp(-age * 1.1);
  }
  p.z += h;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;

const frag = /* glsl */ `
uniform sampler2D uTex;
uniform float uTime;
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vec2 c = vUv - 0.5;
  float r = length(c);
  if (r > 0.5) discard;
  // slow swirl: rotate the coffee texture more near the center, like a stirred cup
  float a = uTime * 0.12 + (0.5 - r) * 2.4 + sin(uTime * 0.3 + r * 9.0) * 0.08;
  mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
  vec3 col = texture2D(uTex, rot * c * 0.9 + 0.5).rgb;
  // lighting from the rippled surface
  vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
  vec3 L = normalize(vec3(0.5, 1.0, 0.4));
  vec3 V = normalize(cameraPosition - vPos);
  float spec = pow(max(dot(n, normalize(L + V)), 0.0), 90.0);
  float diff = 0.75 + 0.25 * max(dot(n, L), 0.0);
  col = col * diff + vec3(1.0, 0.93, 0.82) * spec * 0.9;
  col *= smoothstep(0.5, 0.42, r) * 0.35 + 0.65; // darker toward the rim
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;

function Liquid({ active }: { active: boolean }) {
  const tex = useTexture("/images/swirl.webp");
  tex.wrapS = tex.wrapT = THREE.MirroredRepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  const next = useRef(0);
  const lastDrop = useRef(0);
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uTex: { value: tex },
    uRip: { value: Array.from({ length: MAX }, () => new THREE.Vector3(0, 0, -99)) },
  }), [tex]);

  const drop = (x: number, y: number) => {
    uniforms.uRip.value[next.current].set(x, y, uniforms.uTime.value);
    next.current = (next.current + 1) % MAX;
  };

  useFrame((_, dt) => {
    if (!active) return;
    uniforms.uTime.value += Math.min(dt, 0.05);
    const t = uniforms.uTime.value;
    if (t - lastDrop.current > 2.6) { lastDrop.current = t; drop((Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6); }
  });

  const onMove = (e: ThreeEvent<PointerEvent>) => {
    const t = uniforms.uTime.value;
    if (t - lastDrop.current < 0.18) return;
    lastDrop.current = t;
    const p = e.object.worldToLocal(e.point.clone());
    drop(p.x, p.y);
  };

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh onPointerMove={onMove} onPointerDown={onMove}>
        <planeGeometry args={[2, 2, 140, 140]} />
        <shaderMaterial vertexShader={vert} fragmentShader={frag} uniforms={uniforms} />
      </mesh>
      {/* ceramic rim */}
      <mesh position={[0, 0, 0.02]}>
        <torusGeometry args={[1.04, 0.07, 24, 96]} />
        <meshStandardMaterial color="#f4ece0" roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, -0.35]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.11, 0.85, 0.7, 96, 1, true]} />
        <meshStandardMaterial color="#efe6d8" roughness={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function LiquidCup({ active }: { active: boolean }) {
  const [dpr, setDpr] = useState(1.5);
  return (
    <Canvas dpr={[1, Math.min(dpr, 1.75)]} frameloop={active ? "always" : "never"} camera={{ position: [0, 2.6, 1.35], fov: 42 }} gl={{ alpha: true, antialias: true }} onCreated={({ camera }) => camera.lookAt(0, 0, 0.05)}>
      <PerformanceMonitor onDecline={() => setDpr(1)} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 4, 2]} intensity={2} color="#fff1dc" />
      <Suspense fallback={null}>
        <Liquid active={active} />
      </Suspense>
    </Canvas>
  );
}
