"use client";

// Variant J — Industrial Poster (SeaLand / Fortune-cover brief).
// Asymmetric billboard-scale headline on cream. No chevrons, no dark mode.
// Single orange rule. Reads as a 1960s Fortune cover or Bethlehem Steel
// annual report.

import Image from "next/image";
import { motion } from "framer-motion";
import { REVOLUTION_POINTS_SHORT } from "../v3-content";

export function RevolutionJ() {
  return (
    <section className="wm-bg-cream flex flex-col px-[100px] py-[100px] max-lg:px-10 max-md:px-6 max-md:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-14">
        <div className="grid grid-cols-[1.4fr_1fr] items-end gap-12 max-lg:grid-cols-1">
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-[var(--orange)]">
              MMXXVI · A New American Industry
            </span>
            <h2
              className="m-0 font-display text-[112px] font-black uppercase leading-[100px] tracking-[-3px] text-black max-lg:text-[72px] max-lg:leading-[68px] max-md:text-[48px] max-md:leading-[48px]"
              style={{ WebkitTextStroke: "1px #0a0a0a" }}
            >
              Onshore the Motor.
            </h2>
            <div className="mt-2 h-1 w-32 bg-[var(--orange)]" />
          </motion.div>

          <motion.div
            className="flex items-end justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/westmag/images/america-motors-graphic.png"
              alt=""
              width={1988}
              height={1245}
              className="h-auto w-full max-w-[400px] object-contain mix-blend-multiply"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-10 border-t-2 border-black pt-8 max-lg:grid-cols-1">
          {REVOLUTION_POINTS_SHORT.map((p, idx) => (
            <motion.div
              key={p.label}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--orange)]">
                {String(idx + 1).padStart(2, "0")} / 03
              </span>
              <h3 className="m-0 font-display text-[24px] font-black uppercase tracking-tight text-black">
                {p.label}
              </h3>
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
