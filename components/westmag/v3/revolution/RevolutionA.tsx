"use client";

// Variant A — Baseline (mirrors v1/v2): three stacked text blocks with
// vertical-line spine. Reference control for the iteration set.

import Image from "next/image";
import { motion } from "framer-motion";
import { REVOLUTION_POINTS_LONG } from "../v3-content";

export function RevolutionA() {
  return (
    <section className="wm-bg-grain flex flex-col items-center justify-center py-[60px]">
      <Image
        src="/westmag/images/america-motors-graphic.png"
        alt=""
        width={1988}
        height={1245}
        sizes="(max-width: 1988px) 100vw, 1988px"
        priority
        className="h-auto w-full max-w-[1500px] object-contain"
      />
      <div className="flex w-full flex-col items-center px-[100px] pt-5 max-lg:px-10 max-md:px-6">
        {REVOLUTION_POINTS_LONG.map((block, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex h-auto min-w-[600px] max-w-[600px] items-center justify-center px-10 py-[30px] max-md:min-w-0 max-md:max-w-full max-md:w-full">
              <p className="m-0 text-center font-mono text-[20px] leading-[24px] text-black max-lg:text-[16px] max-lg:leading-[20px]">
                {block}
              </p>
            </div>
            {idx < REVOLUTION_POINTS_LONG.length - 1 && (
              <div className="h-12 w-px bg-black/50" aria-hidden="true" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
