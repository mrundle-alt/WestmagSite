"use client";

// Variant F — Tabbed 001/002/003 panels (Saronic-inspired). Interactive
// tab control; click a number to reveal that point's content at
// section-height. The only interactive Revolution variant in the set.

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { REVOLUTION_HEADLINES, REVOLUTION_POINTS_SHORT } from "../v3-content";

const PANELS = REVOLUTION_POINTS_SHORT.map((p, idx) => ({
  num: String(idx + 1).padStart(3, "0"),
  ...p,
}));

export function RevolutionF() {
  const [active, setActive] = useState(0);

  return (
    <section className="wm-bg-grain flex flex-col px-[100px] py-[80px] max-lg:px-10 max-md:px-6">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-10">
        <motion.h2
          className="wm-section-h2 m-0 max-w-[900px] font-display text-[48px] uppercase leading-[52px] tracking-[-1px] text-black max-md:text-[32px] max-md:leading-[36px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {REVOLUTION_HEADLINES.tabbed}
        </motion.h2>

        <div className="flex border-b-2 border-black">
          {PANELS.map((panel, idx) => (
            <button
              key={panel.num}
              type="button"
              onClick={() => setActive(idx)}
              className={
                "flex flex-1 flex-col items-start gap-2 px-6 py-6 text-left transition-colors " +
                (active === idx
                  ? "bg-black text-white"
                  : "bg-transparent text-black hover:bg-black/5")
              }
            >
              <span className="font-mono text-[12px] uppercase tracking-widest">
                {panel.num}
              </span>
              <span className="font-display text-[24px] font-bold uppercase leading-[28px] max-md:text-[18px] max-md:leading-[22px]">
                {panel.label}
              </span>
            </button>
          ))}
        </div>

        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <span className="font-mono text-[14px] uppercase tracking-widest text-[var(--orange)]">
                {PANELS[active].num} — {PANELS[active].label}
              </span>
              <p className="m-0 max-w-[800px] font-mono text-[24px] leading-[32px] text-black max-md:text-[18px] max-md:leading-[24px]">
                {PANELS[active].copy}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
