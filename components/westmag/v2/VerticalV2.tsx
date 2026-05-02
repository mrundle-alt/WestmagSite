"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VERTICAL } from "@/lib/westmag/content";

export function VerticalV2() {
  return (
    <section id="vertical" className="wm-bg-grain relative flex flex-col items-center px-[100px] pb-[60px] pt-0 max-lg:px-10 max-md:px-6">
      <div className="flex h-auto w-full max-w-[1500px] flex-col gap-5">
        <motion.div
          className="flex items-center justify-between gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex w-full flex-col gap-[10px]">
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-black max-md:text-[32px] max-md:leading-[36px]">
              {VERTICAL.heading}
            </h2>
          </div>
        </motion.div>
        <div className="flex flex-col items-center">
          <motion.div
            className="flex items-stretch justify-between gap-0 max-lg:flex-col max-lg:gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-12%" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.18 } },
            }}
          >
            {VERTICAL.cards.map((card, idx) => (
              <div key={card.title} className="contents">
                <motion.div
                  className="group relative h-auto min-h-[400px] w-full overflow-hidden border border-gray-500 bg-[#9191912b] p-[5px] max-lg:min-h-[300px]"
                  variants={{
                    hidden: { opacity: 0, y: 40, rotateX: 8 },
                    show: { opacity: 1, y: 0, rotateX: 0 },
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformPerspective: 800 }}
                >
                  {/* Sweeping orange line on hover */}
                  <div className="pointer-events-none absolute left-0 top-0 z-20 h-px w-0 bg-[var(--orange)] transition-all duration-700 group-hover:w-full" />
                  <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-px w-0 bg-[var(--orange)] transition-all duration-700 group-hover:w-full" />
                  <div className="flex h-full min-h-[400px] max-h-[400px] flex-col items-start justify-start gap-[10px] overflow-auto border border-gray-500 px-10 pb-10 pt-[60px] max-lg:min-h-[300px] max-lg:max-h-none">
                    <div className="flex items-center gap-[14px]">
                      <motion.div
                        className="h-[15px] w-[15px] rounded-full bg-[var(--orange)]"
                        animate={{ scale: [1, 1.18, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                      />
                      <h3 className="m-0 font-mono text-[28px] font-medium uppercase leading-[34px] text-black">
                        {card.title}
                      </h3>
                    </div>
                    <p className="m-0 font-mono text-sm leading-5 text-black">{card.body}</p>
                  </div>
                </motion.div>
                {idx < VERTICAL.cards.length - 1 && (
                  <div className="hidden h-[50px] w-px bg-gray-500 max-lg:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="mt-5 flex w-full items-start justify-between max-lg:hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          >
            <Image
              src="/westmag/icons/connector-line.svg"
              alt=""
              width={1500}
              height={60}
              className="h-[60px] w-full"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
