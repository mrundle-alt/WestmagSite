"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FACTORY } from "@/lib/westmag/content";

export function FactoryV2() {
  const ref = useRef<HTMLElement>(null);
  const picRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: picRef,
    offset: ["start end", "end start"],
  });
  // Background image moves at slower speed (parallax effect)
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      id="factory"
      ref={ref}
      className="wm-bg-dark relative flex flex-col items-center px-[100px] py-[60px] max-lg:px-[100px] max-md:px-6"
    >
      <div className="flex h-auto w-full max-w-[1500px] flex-col gap-5">
        <div className="mt-[10px] flex items-center justify-between gap-10 max-lg:flex-col">
          <motion.div
            className="flex w-[70%] flex-col gap-[10px] max-lg:w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-white max-md:text-[32px] max-md:leading-[36px]">
              {FACTORY.heading}
            </h2>
            <p className="t1 m-0 text-left font-mono text-[20px] leading-[24px] text-white max-lg:text-[16px] max-lg:leading-[20px]">
              {FACTORY.body}
            </p>
          </motion.div>
          <motion.div
            className="h-[200px] w-[30%] max-lg:h-[250px] max-lg:w-full"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="h-full w-full border border-gray-500 object-cover"
            >
              <source src="/westmag/videos/factory.webm" type="video/webm" />
              <source src="/westmag/videos/factory.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
        {/* Parallax SF panorama */}
        <div ref={picRef} className="mb-[10px] h-[60svh] w-full overflow-hidden">
          <motion.div
            className="wm-bg-sanfran h-[140%] w-full"
            style={{ y: bgY }}
            aria-label="South San Francisco facility"
          />
        </div>
      </div>
    </section>
  );
}
