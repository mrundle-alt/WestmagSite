"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  strength?: number;
};

/**
 * Cursor-follow magnetic button. Slight pull toward the cursor when hovering.
 */
export function MagneticButton({
  children,
  onClick,
  className,
  type = "button",
  strength = 0.25,
}: Props) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 14, mass: 0.4 });

  function onMove(e: MouseEvent<HTMLButtonElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
