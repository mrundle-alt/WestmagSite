"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { REVOLUTION } from "@/lib/westmag/content";

export function RevolutionV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: mapProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"],
  });
  const mapScale = useTransform(mapProgress, [0, 0.5, 1], [0.92, 1, 1.05]);
  const mapY = useTransform(mapProgress, [0, 1], ["8%", "-8%"]);
  const mapOpacity = useTransform(mapProgress, [0, 0.2, 0.85, 1], [0.4, 1, 1, 0.85]);

  return (
    <section
      id="revolution"
      ref={sectionRef}
      className="wm-bg-grain relative flex flex-col items-center justify-center py-[60px]"
    >
      <motion.div
        ref={mapRef}
        style={{ scale: mapScale, y: mapY, opacity: mapOpacity }}
        className="w-full max-w-[1500px]"
      >
        <Image
          src="/westmag/images/america-motors-graphic.png"
          alt=""
          width={1988}
          height={1245}
          sizes="(max-width: 1988px) 100vw, 1988px"
          className="h-auto w-full object-contain"
        />
      </motion.div>

      <div className="flex w-full flex-col items-center px-[100px] pt-5 max-lg:px-10 max-md:px-6">
        {REVOLUTION.blocks.map((block, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -32 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="wm-textbox flex h-auto min-w-[600px] max-w-[600px] items-center justify-center px-10 py-[30px] max-md:min-w-0 max-md:max-w-full max-md:w-full">
              <p className="t1 m-0 text-center font-mono text-[20px] leading-[24px] text-black max-lg:text-[16px] max-lg:leading-[20px]">
                {block}
              </p>
            </div>
            {idx < REVOLUTION.blocks.length - 1 && (
              <motion.div
                className="wm-vert-line"
                aria-hidden="true"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                style={{ transformOrigin: "top" }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
