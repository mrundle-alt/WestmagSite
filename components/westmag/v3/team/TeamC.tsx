"use client";

// Team Variant C — Daft-Punk-style robot avatars per ADVISOR [37:35].
// Stylized SVG robot heads replace headshots. Each founder gets a card
// with the avatar above bio info. Brand-distinctive but goofy — kept
// in the option set as a deliberate contrast.

import Link from "next/link";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/westmag/content";

function RobotAvatar({ seed }: { seed: number }) {
  // Two stylized geometric "robot heads" — differ by visor cut + antenna
  const isFirst = seed === 0;
  return (
    <svg
      viewBox="0 0 160 160"
      width="120"
      height="120"
      aria-hidden="true"
      className="text-black"
    >
      {isFirst ? (
        <>
          <rect x="20" y="30" width="120" height="110" rx="4" fill="currentColor" />
          <rect x="35" y="55" width="90" height="20" fill="#ff3905" />
          <circle cx="50" cy="65" r="4" fill="#000" />
          <circle cx="110" cy="65" r="4" fill="#000" />
          <rect x="60" y="95" width="40" height="6" fill="#fff" />
          <line x1="80" y1="10" x2="80" y2="30" stroke="currentColor" strokeWidth="3" />
          <circle cx="80" cy="8" r="4" fill="#ff3905" />
        </>
      ) : (
        <>
          <path
            d="M30 50 L130 50 L140 70 L140 130 L20 130 L20 70 Z"
            fill="currentColor"
          />
          <polygon points="40,70 120,70 110,90 50,90" fill="#ff3905" />
          <rect x="65" y="105" width="30" height="4" fill="#fff" />
          <rect x="20" y="60" width="6" height="20" fill="#ff3905" />
          <rect x="134" y="60" width="6" height="20" fill="#ff3905" />
        </>
      )}
    </svg>
  );
}

export function TeamC() {
  return (
    <section
      id="aboutus-start"
      className="wm-bg-grain flex scroll-mt-24 flex-col items-center px-[100px] pt-[80px] pb-[80px] max-lg:px-10 max-md:px-6"
    >
      <div className="flex w-full max-w-[1500px] flex-col gap-12">
        <motion.h2
          className="wm-section-h2 m-0 max-w-[1000px] font-display text-[48px] uppercase leading-[52px] tracking-[-1px] text-black max-md:text-[32px] max-md:leading-[36px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {TEAM.heading}
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          {TEAM.members.map((m, idx) => (
            <motion.div
              key={m.name}
              className="flex flex-col items-center gap-4 bg-black/5 p-8 text-center"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <RobotAvatar seed={idx} />
              <div className="flex flex-col gap-1">
                <h3 className="m-0 font-display text-[24px] font-bold uppercase tracking-tight text-black">
                  {m.name}
                </h3>
                <p className="m-0 font-mono text-[14px] uppercase tracking-wider text-black/70">
                  {m.role}
                </p>
              </div>
              <Link
                href={m.social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] uppercase tracking-widest text-[var(--orange)] hover:opacity-75"
              >
                {m.social.kind === "x" ? "@x" : "linkedin"} ↗
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="m-0 max-w-[800px] font-mono text-[16px] leading-[24px] text-black">
          {TEAM.body}
        </p>

        <Link
          href="/careers"
          className="wm-btn inline-flex w-fit items-center justify-center bg-[var(--orange)] px-8 py-4 font-mono font-medium uppercase text-white"
        >
          {TEAM.cta}
        </Link>
      </div>
    </section>
  );
}
