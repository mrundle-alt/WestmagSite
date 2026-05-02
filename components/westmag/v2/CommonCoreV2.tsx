"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMMON_CORE, PRODUCTS } from "@/lib/westmag/content";

export function CommonCoreV2() {
  return (
    <section
      id="technology-start"
      className="wm-bg-grain relative flex scroll-mt-24 flex-col items-center px-[100px] py-[60px] max-lg:px-10 max-md:px-6"
    >
      <div className="flex h-auto w-full max-w-[1500px] flex-col gap-5">
        <motion.div
          className="flex items-center justify-between gap-10 max-lg:flex-col"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex w-full flex-col gap-[10px]">
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-black max-md:text-[32px] max-md:leading-[36px]">
              {COMMON_CORE.heading}
            </h2>
            <p className="t1 m-0 text-left font-mono text-[20px] leading-[24px] text-black max-lg:text-[16px] max-lg:leading-[20px]">
              {COMMON_CORE.body}
            </p>
          </div>
        </motion.div>
        <div className="flex items-stretch justify-between gap-10 max-lg:flex-col">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.title}
              className="group relative h-auto w-1/2 border border-gray-500 bg-[#4f4f4f42] p-[5px] max-lg:w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.8, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              {/* Hover orange wash */}
              <div className="pointer-events-none absolute inset-0 z-0 bg-[var(--orange)] opacity-0 transition-opacity duration-300 group-hover:opacity-15 mix-blend-overlay" />
              <div className="relative z-10 flex h-auto items-center justify-center overflow-hidden border border-gray-500 px-0 py-5 max-lg:p-5">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="will-change-transform"
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={600}
                    height={500}
                    sizes="(max-width: 479px) 100vw, 600px"
                    className="h-[500px] w-[600px] object-contain max-lg:h-auto max-lg:w-full max-lg:max-w-full"
                  />
                </motion.div>
              </div>
              <div className="relative z-10 flex h-auto flex-col items-start justify-start gap-[30px] px-[10px] pb-[10px] pt-[15px]">
                <div className="flex flex-col gap-[10px]">
                  <h3 className="m-0 font-mono text-[28px] font-medium uppercase leading-[34px] text-black">
                    {product.title}
                  </h3>
                  <p className="m-0 text-left font-mono text-[15px] leading-5 text-black">
                    {product.body}
                  </p>
                </div>
                <div className="flex w-full flex-col gap-2">
                  {product.specs.map((spec, sIdx) => (
                    <motion.div
                      key={spec.label}
                      className="flex items-center gap-5"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.5, delay: idx * 0.18 + 0.4 + sIdx * 0.08 }}
                    >
                      <div className="flex w-[100px] items-center gap-2 font-mono text-sm text-black">
                        <span className="text-[var(--orange)]">{"\u2022"}</span>
                        <span>{spec.label}</span>
                      </div>
                      <div className="font-mono text-sm text-black">{spec.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
