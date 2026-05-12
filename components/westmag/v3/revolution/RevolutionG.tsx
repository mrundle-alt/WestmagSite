"use client";

// Variant G — Asymmetric dark mode with corner chevrons (K2 Space + dark).
// Headline-left, motor-image-right, 3-points stacked below. Dark wm-bg-dark
// background. Orange SVG chevrons in section corners suggest momentum.

import Image from "next/image";
import { motion } from "framer-motion";
import { REVOLUTION_HEADLINES, REVOLUTION_POINTS_SHORT } from "../v3-content";

function Chevron({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const map = {
    tl: { top: "20px", left: "20px", rotate: "0deg" },
    tr: { top: "20px", right: "20px", rotate: "90deg" },
    bl: { bottom: "20px", left: "20px", rotate: "270deg" },
    br: { bottom: "20px", right: "20px", rotate: "180deg" },
  };
  const s = map[pos];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      className="absolute"
      style={{ ...s, transform: `rotate(${s.rotate})` }}
    >
      <path
        d="M4 4 L12 4 L12 12 M4 4 L4 12"
        stroke="#ff3905"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function RevolutionG() {
  return (
    <section className="wm-bg-dark relative flex flex-col px-[100px] py-[100px] max-lg:px-10 max-md:px-6 max-md:py-[60px]">
      <Chevron pos="tl" />
      <Chevron pos="tr" />
      <Chevron pos="bl" />
      <Chevron pos="br" />

      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-16">
        <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-[var(--orange)]">
              The shape of the next industry
            </span>
            <h2
              className="wm-section-h2 m-0 font-display text-[72px] font-black uppercase leading-[76px] tracking-[-1px] text-white max-lg:text-[48px] max-lg:leading-[52px] max-md:text-[40px] max-md:leading-[44px]"
              style={{ WebkitTextStroke: "1.5px #fff" }}
            >
              {REVOLUTION_HEADLINES.asymmetric}
            </h2>
            <p className="m-0 max-w-[480px] font-mono text-[16px] leading-[24px] text-white/80">
              Every drone has four motors. Every robot has tens of actuators.
              Westmag designs and manufactures both — in South San Francisco,
              with a domestic + allied supply chain, for the autonomous-machine
              decade.
            </p>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/westmag/images/america-motors-graphic.png"
              alt=""
              width={1988}
              height={1245}
              className="h-auto w-full max-w-[600px] object-contain invert"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-8 border-t border-white/20 pt-10 max-lg:grid-cols-1">
          {REVOLUTION_POINTS_SHORT.map((p, idx) => (
            <motion.div
              key={p.label}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-[12px] uppercase tracking-widest text-[var(--orange)]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-display text-[20px] font-bold uppercase tracking-wide text-white">
                {p.label}
              </h3>
              <p className="m-0 font-mono text-[14px] leading-[20px] text-white/70">
                {p.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
