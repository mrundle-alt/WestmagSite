"use client";

// Variant D — Comparative split (K2 Space-inspired). Left column: "Made here"
// with bullet supply chain. Right column: "Built overseas" with dimmed
// abstract supply chain. The 3 Revolution points distill at the bottom.

import { motion } from "framer-motion";
import {
  COMPARATIVE_SPLIT,
  REVOLUTION_HEADLINES,
  REVOLUTION_POINTS_SHORT,
} from "../v3-content";

function Column({
  side,
  title,
  bullets,
}: {
  side: "left" | "right";
  title: string;
  bullets: readonly string[];
}) {
  const isLeft = side === "left";
  return (
    <motion.div
      className={
        "flex flex-col gap-4 p-8 " +
        (isLeft ? "bg-black text-white" : "bg-black/15 text-black/60")
      }
      initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-between">
        <h3
          className="m-0 font-display text-[32px] font-black uppercase leading-[36px] tracking-[-0.5px]"
          style={{
            WebkitTextStroke: isLeft ? "1px #fff" : "0",
            color: isLeft ? "transparent" : "rgb(0 0 0 / 0.6)",
          }}
        >
          {title}
        </h3>
        {isLeft && (
          <span className="font-mono text-[12px] uppercase text-[var(--orange)]">
            WESTMAG
          </span>
        )}
      </div>
      <ul className="m-0 flex flex-col gap-2 pl-0">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 font-mono text-[15px] leading-[20px]"
          >
            <span
              className={isLeft ? "text-[var(--orange)]" : "text-black/40"}
            >
              ▸
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function RevolutionD() {
  return (
    <section className="wm-bg-grain flex flex-col items-center px-[100px] py-[80px] max-lg:px-10 max-md:px-6">
      <div className="flex w-full max-w-[1500px] flex-col gap-10">
        <motion.h2
          className="wm-section-h2 m-0 max-w-[900px] font-display text-[56px] uppercase leading-[60px] tracking-[-1px] text-black max-md:text-[36px] max-md:leading-[40px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {REVOLUTION_HEADLINES.comparative}
        </motion.h2>

        <div className="grid grid-cols-2 gap-0 max-lg:grid-cols-1">
          <Column side="left" {...COMPARATIVE_SPLIT.left} />
          <Column side="right" {...COMPARATIVE_SPLIT.right} />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {REVOLUTION_POINTS_SHORT.map((p, idx) => (
            <motion.div
              key={p.label}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-[12px] uppercase tracking-widest text-[var(--orange)]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[16px] font-bold uppercase text-black">
                {p.label}
              </span>
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
