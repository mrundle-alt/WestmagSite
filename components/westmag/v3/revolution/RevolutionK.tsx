"use client";

// Variant K — Domestic / Allied Supply (equal-weight, confidence framing).
// SeaLand-era trade-catalog comparison: both columns lit, no dimming, no
// "vs overseas" attack. Equal black-ruled frames with FIG. A / FIG. B
// labels. Cream background.

import { motion } from "framer-motion";
import { REVOLUTION_POINTS_SHORT } from "../v3-content";

const SUPPLY = {
  domestic: {
    title: "DOMESTIC SUPPLY",
    sub: "United States",
    bullets: [
      "Designed in South San Francisco",
      "NDAA-compliant by design",
      "Direct factory control",
      "Materials from US sources",
    ],
  },
  allied: {
    title: "ALLIED SUPPLY",
    sub: "Partner Nations",
    bullets: [
      "Strategic upstream investments",
      "Vetted suppliers",
      "Long-term partnerships",
      "Resilient to single-region shocks",
    ],
  },
} as const;

function Column({
  title,
  sub,
  bullets,
  fig,
}: {
  title: string;
  sub: string;
  bullets: readonly string[];
  fig: string;
}) {
  return (
    <motion.div
      className="flex flex-col gap-4 border-2 border-black p-8"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-baseline justify-between border-b border-black pb-3">
        <h3 className="m-0 font-display text-[28px] font-black uppercase leading-[32px] tracking-[-0.3px] text-black">
          {title}
        </h3>
        <span className="inline-flex h-6 items-center bg-[var(--orange)] px-2 font-mono text-[10px] uppercase tracking-widest text-white">
          {fig}
        </span>
      </div>
      <span className="font-mono text-[11px] uppercase tracking-widest text-black/60">
        {sub}
      </span>
      <ul className="m-0 flex flex-col gap-2 pl-0">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 font-mono text-[15px] leading-[20px] text-black"
          >
            <span className="text-[var(--orange)]">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function RevolutionK() {
  return (
    <section className="wm-bg-cream flex flex-col items-center px-[100px] py-[80px] max-lg:px-10 max-md:px-6">
      <div className="flex w-full max-w-[1500px] flex-col gap-10">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-[var(--orange)]">
            Vertical Integration
          </span>
          <h2 className="m-0 max-w-[1100px] font-display text-[56px] font-black uppercase leading-[60px] tracking-[-1px] text-black max-md:text-[36px] max-md:leading-[40px]">
            Built on a supply chain that holds.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          <Column {...SUPPLY.domestic} fig="FIG. A" />
          <Column {...SUPPLY.allied} fig="FIG. B" />
        </div>

        <div className="grid grid-cols-3 gap-6 border-t-2 border-black pt-8 max-lg:grid-cols-1">
          {REVOLUTION_POINTS_SHORT.map((p, idx) => (
            <motion.div
              key={p.label}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--orange)]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[16px] font-bold uppercase text-black">
                {p.label}
              </span>
              <p className="m-0 font-mono text-[14px] leading-[20px] text-black/80">
                {p.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
