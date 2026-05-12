"use client";

// Variant H — Big Numbers Manifesto. Stats-led trade-catalog statement
// of the problem and the answer, rendered at billboard scale. SeaLand /
// Fortune-magazine restraint: numerals do the work, no decoration.

import { motion } from "framer-motion";

const STATS = [
  { value: "04", caption: "motors per drone" },
  { value: "10+", caption: "actuators per humanoid robot" },
  { value: "00", caption: "currently made in America" },
];

export function RevolutionH() {
  return (
    <section className="wm-bg-cream flex flex-col items-stretch px-[100px] py-[100px] max-lg:px-10 max-md:px-6 max-md:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-14">
        <div className="flex items-baseline justify-between border-b-2 border-black pb-4">
          <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-[var(--orange)]">
            The Arithmetic of the Next Industry
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/60">
            EXHIBIT A
          </span>
        </div>

        <div className="grid grid-cols-3 gap-0 max-lg:grid-cols-1">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.caption}
              className="flex flex-col gap-3 border-r-2 border-black px-8 py-4 last:border-r-0 max-lg:border-b-2 max-lg:border-r-0 max-lg:py-8 max-lg:last:border-b-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                className="font-display text-[180px] font-black leading-[1] tracking-[-6px] text-black max-lg:text-[140px] max-md:text-[120px]"
                style={{ WebkitTextStroke: "1px black" }}
              >
                {stat.value}
              </span>
              <span className="font-mono text-[14px] uppercase tracking-[0.2em] text-black/80">
                {stat.caption}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col gap-5 border-t-2 border-black pt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="m-0 max-w-[1100px] font-display text-[64px] font-black uppercase leading-[68px] tracking-[-1px] text-black max-lg:text-[44px] max-lg:leading-[48px] max-md:text-[32px] max-md:leading-[36px]"
            style={{ WebkitTextStroke: "0.5px black" }}
          >
            Westmag is changing the third number.
          </h2>
          <p className="m-0 max-w-[800px] font-mono text-[16px] leading-[24px] text-black/80">
            Designing and manufacturing BLDC motors, drone motors, and robot
            actuators in South San Francisco. Vertically integrated. NDAA-
            compliant from day one. Built for the production volumes the
            drone and robot industries will demand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
