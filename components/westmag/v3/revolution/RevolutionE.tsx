"use client";

// Variant E — Founder quote as visual anchor (K2 Space-inspired).
// Large centered pull-quote anchors the section; 3 supporting beats
// distill below. Motor-schematic background uses the existing stamp asset.

import { motion } from "framer-motion";
import { FOUNDER_QUOTES, REVOLUTION_POINTS_SHORT } from "../v3-content";

export function RevolutionE() {
  const quote = FOUNDER_QUOTES[0];
  return (
    <section className="wm-bg-stamp relative flex flex-col items-center overflow-hidden px-[100px] py-[120px] max-lg:px-10 max-md:px-6 max-md:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-16">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-[var(--orange)]">
            From the founders
          </span>
          <blockquote className="m-0">
            <p
              className="m-0 font-display text-[56px] font-bold leading-[60px] tracking-[-1px] text-black max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[28px] max-md:leading-[32px]"
              style={{ WebkitTextStroke: "0.5px black" }}
            >
              &ldquo;{quote.quote}&rdquo;
            </p>
          </blockquote>
          <footer className="font-mono text-[14px] uppercase tracking-wider text-black/70">
            — {quote.attribution}
          </footer>
        </motion.div>

        <div className="grid w-full grid-cols-3 gap-4 max-lg:grid-cols-1">
          {REVOLUTION_POINTS_SHORT.map((p, idx) => (
            <motion.div
              key={p.label}
              className="flex flex-col gap-2 border-l-2 border-[var(--orange)] pl-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-black/50">
                Beat {idx + 1}
              </span>
              <h3 className="m-0 font-display text-[18px] font-bold uppercase tracking-wide text-black">
                {p.label}
              </h3>
              <p className="m-0 font-mono text-[14px] leading-[20px] text-black/70">
                {p.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
