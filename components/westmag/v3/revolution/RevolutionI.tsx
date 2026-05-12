"use client";

// Variant I — Trade Catalog Spec Sheet (SeaLand / 1960s industrial brief).
// Static, no interaction. Three numbered columns inside a black-ruled frame
// with FIG. A/B/C tags and a SECTION III · 1957 header. Cream background,
// ink-black rule lines, single orange accent.

import { motion } from "framer-motion";
import { REVOLUTION_POINTS_SHORT } from "../v3-content";

export function RevolutionI() {
  return (
    <section className="wm-bg-cream flex flex-col items-stretch px-[100px] py-[80px] max-lg:px-10 max-md:px-6">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-10">
        <div className="flex items-baseline justify-between border-b-2 border-black pb-4">
          <h2 className="m-0 font-display text-[40px] font-black uppercase leading-[44px] tracking-[-0.5px] text-black max-md:text-[28px] max-md:leading-[32px]">
            Specifications &amp; Mission
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-black">
            SECTION III · 1957
          </span>
        </div>

        <div className="grid grid-cols-3 gap-0 border-2 border-black max-lg:grid-cols-1">
          {REVOLUTION_POINTS_SHORT.map((p, idx) => (
            <motion.div
              key={p.label}
              className="flex flex-col gap-5 border-r-2 border-black p-8 last:border-r-0 max-lg:border-b-2 max-lg:border-r-0 max-lg:last:border-b-0"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="font-display text-[96px] font-black leading-[1] tracking-[-3px] text-black max-md:text-[72px]"
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 inline-flex h-6 items-center bg-[var(--orange)] px-2 font-mono text-[10px] uppercase tracking-widest text-white">
                  FIG. {String.fromCharCode(65 + idx)}
                </span>
              </div>
              <div className="h-px w-full bg-black" />
              <div className="flex flex-col gap-2">
                <h3 className="m-0 font-display text-[18px] font-bold uppercase tracking-tight text-black">
                  {p.label}
                </h3>
                <p className="m-0 font-mono text-[14px] leading-[20px] text-black/80">
                  {p.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="m-0 max-w-[800px] font-mono text-[13px] leading-[19px] text-black/70">
          Westmag designs and manufactures motors and actuators in South San
          Francisco. Vertically integrated, NDAA-compliant from day one,
          built for the production volumes the drone and robot industries
          will demand.
        </p>
      </div>
    </section>
  );
}
