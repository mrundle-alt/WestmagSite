"use client";

// Variant B — Action verbs + orange-banner slicers (Hadrian-inspired).
// Three modular blocks with declarative-verb sub-headlines, sliced by
// full-width orange CTA banners with angled clip-path corners.

import { motion } from "framer-motion";
import { REVOLUTION_HEADLINES, REVOLUTION_POINTS_ACTION } from "../v3-content";

const SLICER_LINES = [
  "Make motors here.",
  "Build robots here.",
  "Power the next industry — here.",
];

export function RevolutionB() {
  return (
    <section className="wm-bg-grain flex flex-col items-stretch">
      <div className="flex flex-col items-center px-[100px] pt-[80px] pb-10 max-lg:px-10 max-md:px-6">
        <motion.h2
          className="wm-section-h2 m-0 max-w-[1200px] text-center font-display text-[64px] uppercase leading-[68px] tracking-[-1px] text-black max-md:text-[40px] max-md:leading-[44px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {REVOLUTION_HEADLINES.actionVerbs}
        </motion.h2>
      </div>

      {REVOLUTION_POINTS_ACTION.map((p, idx) => (
        <div key={p.label}>
          <motion.div
            className="flex w-full justify-center px-[100px] py-10 max-lg:px-10 max-md:px-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex w-full max-w-[1200px] flex-col gap-3">
              <h3 className="m-0 font-display text-[32px] font-black uppercase leading-[36px] tracking-[-0.5px] text-black max-md:text-[24px] max-md:leading-[28px]">
                {p.label}
              </h3>
              <p className="m-0 max-w-[720px] font-mono text-[18px] leading-[24px] text-black/80">
                {p.copy}
              </p>
            </div>
          </motion.div>

          {idx < REVOLUTION_POINTS_ACTION.length - 1 && (
            <motion.div
              className="wm-btn flex items-center justify-center bg-[var(--orange)] px-10 py-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="m-0 text-center font-display text-[20px] font-black uppercase tracking-wider text-white max-md:text-[16px]">
                {SLICER_LINES[idx]}
              </p>
            </motion.div>
          )}
        </div>
      ))}

      <div className="h-[60px]" />
    </section>
  );
}
