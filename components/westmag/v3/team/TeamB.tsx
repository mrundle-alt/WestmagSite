"use client";

// Team Variant B — Inline roles list + small founder bios right.
// Per ADVISOR [38:23]: "We're building a world class team. Here's the
// roles, and then a little snippet of you and David to the right of that."
// No headshots; reduces friction to seeing open roles directly.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/westmag/content";

const OPEN_ROLES = [
  { title: "Manufacturing Engineer", team: "Engineering" },
  { title: "Supply Chain Manager", team: "Operations" },
  { title: "Operations Lead", team: "Operations" },
  { title: "Production Technician", team: "Manufacturing" },
  { title: "Quality Engineer", team: "Engineering" },
  { title: "Sr. Motor Designer", team: "Engineering" },
] as const;

export function TeamB() {
  return (
    <section
      id="aboutus-start"
      className="wm-bg-grain flex scroll-mt-24 flex-col items-center px-[100px] pt-[80px] pb-[60px] max-lg:px-10 max-md:px-6"
    >
      <div className="flex w-full max-w-[1500px] flex-col gap-10">
        <motion.h2
          className="wm-section-h2 m-0 font-display text-[56px] uppercase leading-[60px] tracking-[-1px] text-black max-md:text-[36px] max-md:leading-[40px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {TEAM.heading}
        </motion.h2>

        <div className="grid grid-cols-[1.5fr_1fr] gap-10 max-lg:grid-cols-1">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-[var(--orange)]">
              Open Roles
            </span>
            <ul className="m-0 flex flex-col gap-0 p-0">
              {OPEN_ROLES.map((r, idx) => (
                <motion.li
                  key={r.title}
                  className="flex items-baseline justify-between gap-4 border-b border-black/20 py-4"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                >
                  <span className="font-display text-[22px] font-medium uppercase tracking-tight text-black">
                    {r.title}
                  </span>
                  <span className="font-mono text-[12px] uppercase tracking-widest text-black/60">
                    {r.team}
                  </span>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/careers"
              className="wm-btn mt-6 inline-flex w-fit items-center justify-center bg-[var(--orange)] px-8 py-4 font-mono font-medium uppercase text-white transition-opacity hover:opacity-90"
            >
              View all open roles
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-[var(--orange)]">
              Founders
            </span>
            {TEAM.members.map((m, idx) => (
              <motion.div
                key={m.name}
                className="flex flex-col gap-2 border-l-2 border-black pl-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <h3 className="m-0 font-display text-[20px] font-bold uppercase tracking-tight text-black">
                  {m.name}
                </h3>
                <p className="m-0 font-mono text-[13px] uppercase tracking-wider text-black/70">
                  {m.role}
                </p>
                <Link
                  href={m.social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={m.social.label}
                  className="inline-flex w-fit items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-black/80 hover:text-[var(--orange)]"
                >
                  <Image
                    src={`/westmag/icons/${m.social.kind}.svg`}
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  {m.social.kind === "x" ? "@X" : "LinkedIn"}
                </Link>
              </motion.div>
            ))}
            <p className="m-0 mt-4 font-mono text-[13px] leading-[18px] text-black/60">
              {TEAM.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
