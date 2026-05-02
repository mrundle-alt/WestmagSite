"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Disables animation entirely (useful for above-the-fold content). */
  immediate?: boolean;
};

/**
 * Light wrapper around framer-motion's whileInView.
 * The original Webflow site has no entrance reveals, so we keep this subtle:
 * 16px translateY + opacity fade, single-shot, exits early for reduced-motion users.
 */
export function ScrollReveal({ children, className, delay = 0, immediate = false }: Props) {
  const prefersReduced = useReducedMotion();
  if (immediate || prefersReduced) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
