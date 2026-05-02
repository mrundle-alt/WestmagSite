"use client";

import { motion } from "framer-motion";
import { SCALING } from "@/lib/westmag/content";
import { MagneticButton } from "./MagneticButton";

type Props = {
  onContactClick: () => void;
};

export function ScalingV2({ onContactClick }: Props) {
  return (
    <section id="scaling" className="wm-bg-dark relative flex flex-col items-center px-[100px] py-[60px] max-lg:px-[100px] max-md:px-6">
      <motion.div
        className="relative h-[50svh] min-h-[50svh] w-full max-w-[1500px] overflow-hidden border border-gray-500 bg-[#36363636] p-[5px] max-lg:h-auto max-lg:min-h-0"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Slowly drifting stamp pattern */}
        <motion.div
          className="wm-bg-stamp pointer-events-none absolute inset-[5px] z-0"
          animate={{ backgroundPositionY: ["0%", "100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 flex h-full w-full items-center justify-center gap-[240px] border border-gray-500 px-[60px] py-10 max-lg:flex-col max-lg:gap-5 max-lg:px-6">
          <motion.h2
            className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-white max-md:text-[32px] max-md:leading-[36px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {SCALING.heading}
          </motion.h2>
          <motion.div
            className="flex w-1/2 flex-col gap-5 max-lg:w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="t1 m-0 text-left font-mono text-[20px] leading-[24px] text-white max-lg:text-[16px] max-lg:leading-[20px]">
              {SCALING.body}
            </p>
            <MagneticButton
              onClick={onContactClick}
              className="wm-btn relative flex w-full items-center justify-center overflow-hidden bg-[var(--orange)] py-5 font-mono font-medium uppercase text-white"
            >
              <span className="relative z-10">{SCALING.cta}</span>
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 hover:translate-x-0" />
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
