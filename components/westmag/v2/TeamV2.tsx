"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/westmag/content";
import { MagneticButton } from "./MagneticButton";

export function TeamV2() {
  return (
    <section
      id="aboutus-start"
      className="wm-bg-grain flex scroll-mt-24 flex-col items-center px-[100px] pt-0 pb-0 max-lg:px-10 max-md:px-6"
    >
      <div className="flex h-auto w-full max-w-[1500px] flex-col gap-5 pt-[60px]">
        <motion.div
          className="flex items-center justify-between gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex w-[70%] flex-col gap-[10px] max-lg:w-full">
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-black max-md:text-[32px] max-md:leading-[36px]">
              {TEAM.heading}
            </h2>
          </div>
        </motion.div>
        <div className="flex items-center justify-between gap-5 max-lg:flex-col">
          {TEAM.members.map((member, idx) => (
            <motion.div
              key={member.name}
              className="group relative h-[400px] w-1/2 overflow-hidden bg-[#a4a4a475] max-lg:w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Hover orange wash that wipes from bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-0 bg-[var(--orange)] transition-all duration-500 ease-out group-hover:h-full" />
              <div className="absolute inset-x-0 bottom-0 z-10 flex h-1/5 items-center justify-between px-5">
                <div className="h-full w-1/2">
                  <h3 className="m-0 font-mono text-[28px] font-medium uppercase leading-[34px] text-black transition-colors duration-300 group-hover:text-white">
                    {member.name}
                  </h3>
                  <p className="t1 m-0 text-left font-mono text-[16px] leading-[20px] text-black transition-colors duration-300 group-hover:text-white">
                    {member.role}
                  </p>
                </div>
                <Link
                  href={member.social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={member.social.label}
                  className="transition-opacity hover:opacity-75"
                >
                  <Image
                    src={`/westmag/icons/${member.social.kind}.svg`}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex w-full items-center justify-between gap-10 pb-0 pt-[60px] max-lg:flex-col"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex w-1/2 max-lg:w-full">
            <p className="t1 m-0 text-left font-mono text-[20px] leading-[24px] text-black max-lg:text-[16px] max-lg:leading-[20px]">
              {TEAM.body}
            </p>
          </div>
          <div className="flex w-1/2 items-center justify-end max-lg:w-full">
            <MagneticButton
              onClick={() => {
                window.location.href = "/careers";
              }}
              className="wm-btn flex w-full items-center justify-center bg-[var(--orange)] py-5 font-mono font-medium uppercase text-white transition-opacity hover:opacity-90"
            >
              {TEAM.cta}
            </MagneticButton>
          </div>
        </motion.div>
        <div className="h-[60px]" />
      </div>
    </section>
  );
}
