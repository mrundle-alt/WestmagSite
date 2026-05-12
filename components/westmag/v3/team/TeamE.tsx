"use client";

// Team Variant E — Industrial Portrait Plate (SeaLand / 1960s annual-report).
// No images. Big founder names + role caption + one-line credential. Framed
// in black rule lines like a postwar manufacturing leadership plate.

import Link from "next/link";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/westmag/content";

const FOUNDER_CREDENTIALS: Record<string, string> = {
  "DAVID HANSEN":
    "Previously led production engineering at scale. Operating from South San Francisco.",
  "JORDAN SANDERS":
    "Motor and actuator design across drone and robotics platforms.",
};

export function TeamE() {
  return (
    <section
      id="aboutus-start"
      className="wm-bg-cream flex scroll-mt-24 flex-col items-center px-[100px] pt-[100px] pb-[100px] max-lg:px-10 max-md:px-6 max-md:py-[60px]"
    >
      <div className="flex w-full max-w-[1500px] flex-col gap-10">
        <div className="flex items-baseline justify-between border-b-2 border-black pb-4 max-md:flex-col max-md:items-start max-md:gap-2">
          <h2 className="m-0 font-display text-[40px] font-black uppercase leading-[44px] tracking-[-0.5px] text-black max-md:text-[28px] max-md:leading-[32px]">
            Leadership
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/60">
            Western Magnetics Co. · Est. MMXXVI
          </span>
        </div>

        <div className="grid grid-cols-2 gap-0 border-2 border-black max-lg:grid-cols-1">
          {TEAM.members.map((m, idx) => (
            <motion.div
              key={m.name}
              className="flex flex-col gap-6 border-r-2 border-black p-10 last:border-r-0 max-lg:border-b-2 max-lg:border-r-0 max-lg:last:border-b-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--orange)]">
                  No. {String(idx + 1).padStart(2, "0")}
                </span>
                <Link
                  href={m.social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-widest text-black/70 hover:text-[var(--orange)]"
                  aria-label={m.social.label}
                >
                  {m.social.kind === "x" ? "X ↗" : "LinkedIn ↗"}
                </Link>
              </div>
              <h3 className="m-0 font-display text-[36px] font-black uppercase leading-[40px] tracking-[-0.5px] text-black max-md:text-[28px] max-md:leading-[32px]">
                {m.name}
              </h3>
              <div className="h-px w-16 bg-[var(--orange)]" />
              <p className="m-0 font-mono text-[12px] uppercase tracking-[0.2em] text-black/70">
                {m.role}
              </p>
              <p className="m-0 font-mono text-[14px] leading-[20px] text-black/90">
                {FOUNDER_CREDENTIALS[m.name] ?? ""}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <p className="m-0 max-w-[800px] font-mono text-[14px] leading-[20px] text-black/80">
            {TEAM.body}
          </p>
          <Link
            href="/careers"
            className="wm-btn inline-flex w-fit items-center justify-center bg-[var(--orange)] px-8 py-4 font-mono font-medium uppercase text-white hover:opacity-90"
          >
            {TEAM.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
