"use client";

// Variant C — Numbered 01/02/03 horizontal cards (Mach Industries-inspired).
// Mission floats as a centered substantial block below the 3 numbered cards.

import { motion } from "framer-motion";
import { REVOLUTION_HEADLINES, REVOLUTION_POINTS_SHORT } from "../v3-content";

export function RevolutionC() {
  return (
    <section className="wm-bg-grain flex flex-col items-center px-[100px] py-[80px] max-lg:px-10 max-md:px-6">
      <div className="flex w-full max-w-[1500px] flex-col gap-12">
        <motion.h2
          className="wm-section-h2 m-0 text-center font-display text-[48px] uppercase leading-[52px] tracking-[-1px] text-black max-md:text-[32px] max-md:leading-[36px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {REVOLUTION_HEADLINES.numbered}
        </motion.h2>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {REVOLUTION_POINTS_SHORT.map((p, idx) => (
            <motion.div
              key={p.label}
              className="flex flex-col gap-3 border-t-2 border-black pt-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="wm-section-h2 font-display text-[120px] font-black leading-[1] tracking-[-3px] text-black max-md:text-[80px]"
                style={{ WebkitTextStroke: "1.5px #000" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-display text-[20px] font-bold uppercase tracking-wider text-black">
                {p.label}
              </h3>
              <p className="m-0 font-mono text-[16px] leading-[22px] text-black/80">
                {p.copy}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="m-0 max-w-[800px] text-center font-mono text-[18px] leading-[26px] text-black">
            Westmag exists to build the integrated American motor company that
            underpins the rapid growth of the drone and robot industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
