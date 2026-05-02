"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INVESTORS } from "@/lib/westmag/content";

/**
 * Continuous horizontal marquee of investor logos.
 * Two copies of the row scroll in sync to make the loop seamless.
 */
export function InvestorMarquee() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-[2] overflow-hidden py-10 max-md:relative max-md:inset-auto">
      <motion.div
        className="flex w-max items-center gap-[100px] pr-[100px]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...INVESTORS, ...INVESTORS, ...INVESTORS, ...INVESTORS].map((inv, idx) => (
          <Image
            key={`${inv.name}-${idx}`}
            src={inv.src}
            alt={inv.name}
            width={120}
            height={40}
            style={{ width: "auto" }}
            className="h-10 max-lg:h-[35px]"
          />
        ))}
      </motion.div>
      {/* edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
