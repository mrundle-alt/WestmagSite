"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Radial orange glow that follows the cursor inside the hero.
 */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const sx = useSpring(x, { stiffness: 80, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 80, damping: 20, mass: 0.6 });

  // Convert 0..1 → "X%"
  const mx = useTransform(sx, (v) => `${(v * 100).toFixed(2)}%`);
  const my = useTransform(sy, (v) => `${(v * 100).toFixed(2)}%`);
  const bg = useMotionTemplate`radial-gradient(circle at ${mx} ${my}, rgba(255,57,5,0.20), transparent 38%)`;

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (e.clientY < r.top || e.clientY > r.bottom) return;
      x.set((e.clientX - r.left) / r.width);
      y.set((e.clientY - r.top) / r.height);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1]"
      style={{ background: bg }}
    />
  );
}
