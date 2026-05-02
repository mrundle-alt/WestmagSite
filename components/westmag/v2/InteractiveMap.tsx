"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Approximate positions (% of container W/H) of "live" motor overlays
 * across the US-shaped dot graphic. Roughly: Pacific NW, Bay Area,
 * Texas, Midwest, Northeast, SE/Florida.
 */
const MOTOR_OVERLAYS: Array<{ left: string; top: string; size: number; delay: number }> = [
  { left: "18%", top: "40%", size: 44, delay: 0 },     // Pacific NW
  { left: "23%", top: "60%", size: 38, delay: 0.4 },   // Bay Area
  { left: "42%", top: "70%", size: 50, delay: 0.8 },   // Texas
  { left: "55%", top: "48%", size: 36, delay: 0.2 },   // Kansas / Plains
  { left: "62%", top: "32%", size: 42, delay: 0.6 },   // Great Lakes / Detroit
  { left: "78%", top: "30%", size: 48, delay: 1.0 },   // Northeast / NYC
  { left: "73%", top: "62%", size: 34, delay: 0.5 },   // Florida / SE
];

export function InteractiveMap() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const cursorX = useMotionValue(-1); // -1 = cursor not over map
  const cursorY = useMotionValue(-1);

  const sx = useSpring(cursorX, { stiffness: 120, damping: 20, mass: 0.5 });
  const sy = useSpring(cursorY, { stiffness: 120, damping: 20, mass: 0.5 });

  const mx = useTransform(sx, (v) => `${(v * 100).toFixed(2)}%`);
  const my = useTransform(sy, (v) => `${(v * 100).toFixed(2)}%`);
  const glow = useMotionTemplate`radial-gradient(circle 220px at ${mx} ${my}, rgba(255,57,5,0.85), rgba(255,57,5,0) 65%)`;

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const inside =
        e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) {
        cursorX.set(-1);
        cursorY.set(-1);
        return;
      }
      cursorX.set((e.clientX - r.left) / r.width);
      cursorY.set((e.clientY - r.top) / r.height);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);

  return (
    <div ref={ref} className="relative w-full max-w-[1500px]">
      {/* Base map image */}
      <Image
        src="/westmag/images/america-motors-graphic.png"
        alt=""
        width={1988}
        height={1245}
        sizes="(max-width: 1988px) 100vw, 1988px"
        priority
        className="h-auto w-full object-contain"
      />

      {/* Cursor-follow orange glow — multiply blend lights up the dark motor dots underneath */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-multiply"
          style={{ background: glow }}
        />
      )}

      {/* Live spinning motor overlays */}
      {MOTOR_OVERLAYS.map((m, i) => (
        <SpinningMotor
          key={i}
          left={m.left}
          top={m.top}
          size={m.size}
          delay={m.delay}
          reduce={!!reduce}
          cursorX={sx}
          cursorY={sy}
        />
      ))}
    </div>
  );
}

function SpinningMotor({
  left,
  top,
  size,
  delay,
  reduce,
  cursorX,
  cursorY,
}: {
  left: string;
  top: string;
  size: number;
  delay: number;
  reduce: boolean;
  cursorX: ReturnType<typeof useSpring>;
  cursorY: ReturnType<typeof useSpring>;
}) {
  // Convert "X%" → 0..1 for distance math
  const ownX = parseFloat(left) / 100;
  const ownY = parseFloat(top) / 100;

  // Distance from cursor in normalized space; closer = more "active"
  const proximity = useTransform([cursorX, cursorY], (v: number[]) => {
    const [cx, cy] = v;
    if (cx < 0 || cy < 0) return 0;
    const d = Math.hypot(cx - ownX, cy - ownY);
    // 0 at distance >= 0.18, 1 at distance 0
    return Math.max(0, 1 - d / 0.18);
  });
  const scale = useTransform(proximity, [0, 1], [1, 1.55]);
  const overlayOpacity = useTransform(proximity, [0, 1], [0, 0.9]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        left,
        top,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        scale,
      }}
    >
      {/* Soft halo that brightens with proximity */}
      <motion.div
        className="absolute inset-[-30%] rounded-full bg-[var(--orange)] blur-2xl"
        style={{ opacity: overlayOpacity }}
      />

      {/* The spinning motor SVG */}
      <motion.svg
        viewBox="0 0 40 40"
        className="absolute inset-0 h-full w-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 6 + delay * 2, repeat: Infinity, ease: "linear", delay }}
      >
        {/* Outer stator ring */}
        <circle cx="20" cy="20" r="17" fill="none" stroke="#ff3905" strokeWidth="0.8" opacity="0.55" />
        <circle cx="20" cy="20" r="13" fill="none" stroke="#ff3905" strokeWidth="0.6" opacity="0.35" />
        {/* Rotor spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="20"
            y1="20"
            x2="20"
            y2="6"
            stroke="#ff3905"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.85"
            transform={`rotate(${angle} 20 20)`}
          />
        ))}
        {/* Hub */}
        <circle cx="20" cy="20" r="2.5" fill="#ff3905" />
      </motion.svg>
    </motion.div>
  );
}
