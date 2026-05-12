"use client";

// Team Variant D — Text-only + role grid (minimalist). Headline + a 6-cell
// grid of open roles. Founders relegated to a tiny attribution row at the
// bottom — page is recruiting-forward, not founder-forward.

import Link from "next/link";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/westmag/content";

const OPEN_ROLES = [
  { title: "Manufacturing Engineer", location: "South SF · On-site" },
  { title: "Supply Chain Manager", location: "South SF · On-site" },
  { title: "Operations Lead", location: "South SF · On-site" },
  { title: "Production Technician", location: "South SF · On-site" },
  { title: "Sr. Motor Designer", location: "South SF · On-site" },
  { title: "Quality Engineer", location: "South SF · On-site" },
];

export function TeamD() {
  return (
    <section
      id="aboutus-start"
      className="wm-bg-grain flex scroll-mt-24 flex-col items-center px-[100px] pt-[80px] pb-[80px] max-lg:px-10 max-md:px-6"
    >
      <div className="flex w-full max-w-[1500px] flex-col gap-12">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-[var(--orange)]">
            Hiring now
          </span>
          <h2 className="wm-section-h2 m-0 max-w-[1100px] font-display text-[72px] font-black uppercase leading-[76px] tracking-[-1px] text-black max-lg:text-[48px] max-lg:leading-[52px] max-md:text-[36px] max-md:leading-[40px]">
            {TEAM.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-0 border-t-2 border-black max-lg:grid-cols-2 max-md:grid-cols-1">
          {OPEN_ROLES.map((r, idx) => (
            <motion.div
              key={r.title}
              className="flex flex-col gap-2 border-b-2 border-r-2 border-black/80 p-6 last:border-r-0 max-lg:[&:nth-child(2n)]:border-r-0 max-md:border-r-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--orange)]">
                Role {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 font-display text-[20px] font-bold uppercase tracking-tight text-black">
                {r.title}
              </h3>
              <p className="m-0 font-mono text-[12px] uppercase tracking-wide text-black/60">
                {r.location}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
          <p className="m-0 max-w-[700px] font-mono text-[14px] leading-[20px] text-black/70">
            Founded by {TEAM.members.map((m) => m.name).join(" + ")}. {TEAM.body}
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
