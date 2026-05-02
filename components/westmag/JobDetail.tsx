"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/westmag/Navbar";
import { Footer } from "@/components/westmag/Footer";
import { ContactModal } from "@/components/westmag/ContactModal";
import type { Job } from "@/lib/westmag/content";

export function JobDetail({ job }: { job: Job }) {
  const [contactOpen, setContactOpen] = useState(false);

  const applyHref =
    job.applyUrl ??
    `mailto:contact@westmag.com?subject=${encodeURIComponent(`Application \u2014 ${job.title}`)}`;

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />

      <main>
        {/* HEADER */}
        <section className="wm-bg-dark relative flex flex-col items-center px-[100px] pb-[60px] pt-[140px] max-lg:px-10 max-md:px-6 max-md:pt-[110px]">
          <div className="flex w-full max-w-[1100px] flex-col gap-6 text-white">
            <Link
              href="/careers"
              className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--orange)] transition-opacity hover:opacity-75"
            >
              {"\u2190"} Back to careers
            </Link>
            <motion.div
              className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span>{job.team}</span>
              <span className="text-[var(--orange)]">{"\u00b7"}</span>
              <span>{job.location}</span>
              <span className="text-[var(--orange)]">{"\u00b7"}</span>
              <span>{job.type}</span>
            </motion.div>
            <motion.h1
              className="wm-section-h2 m-0 font-display text-[56px] uppercase leading-[60px] tracking-[-1px] max-md:text-[36px] max-md:leading-[40px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {job.title}
            </motion.h1>
            <motion.p
              className="m-0 max-w-[820px] font-mono text-[18px] leading-[28px] text-white/85 max-md:text-[16px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {job.blurb}
            </motion.p>
            <div>
              <Link
                href={applyHref}
                {...(job.applyUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="wm-btn inline-flex items-center justify-center bg-[var(--orange)] px-12 py-5 font-mono font-medium uppercase text-white transition-opacity hover:opacity-75"
              >
                Apply now
              </Link>
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="wm-bg-grain px-[100px] py-[80px] max-lg:px-10 max-md:px-6 max-md:py-[60px]">
          <div className="mx-auto grid w-full max-w-[1100px] grid-cols-3 gap-12 max-lg:grid-cols-1">
            {/* Sticky meta column */}
            <aside className="flex flex-col gap-6 max-lg:order-2">
              <MetaBlock label="Team" value={job.team} />
              <MetaBlock label="Location" value={job.location} />
              <MetaBlock label="Type" value={job.type} />
              {job.comp && <MetaBlock label="Compensation" value={job.comp} />}
              <div className="border-t border-black/15 pt-6">
                <Link
                  href={applyHref}
                  {...(job.applyUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="wm-btn inline-flex items-center justify-center bg-[var(--orange)] px-8 py-4 font-mono font-medium uppercase text-white transition-opacity hover:opacity-75"
                >
                  Apply now
                </Link>
              </div>
            </aside>

            {/* JD column */}
            <div className="col-span-2 flex flex-col gap-10 text-black max-lg:order-1">
              <Block title="About the role">
                <p>{job.about}</p>
              </Block>
              <Block title="What you'll do">
                <ul>
                  {job.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </Block>
              <Block title="What we're looking for">
                <ul>
                  {job.qualifications.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </Block>
              {job.niceToHave && job.niceToHave.length > 0 && (
                <Block title="Nice to have">
                  <ul>
                    {job.niceToHave.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </Block>
              )}
              <div className="flex flex-col gap-4 border-t border-black/15 pt-8">
                <p className="m-0 font-mono text-[15px] leading-[24px] text-black">
                  Sound like you? Apply now and we&apos;ll be in touch.
                </p>
                <Link
                  href={applyHref}
                  {...(job.applyUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="wm-btn inline-flex w-fit items-center justify-center bg-[var(--orange)] px-12 py-5 font-mono font-medium uppercase text-white transition-opacity hover:opacity-75"
                >
                  Apply for {job.title}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--orange)]">
        {label}
      </span>
      <span className="font-mono text-[14px] leading-[20px] text-black">{value}</span>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="m-0 font-mono text-[18px] font-medium uppercase leading-[24px] text-black">
        {title}
      </h2>
      <div className="flex flex-col gap-3 font-mono text-[15px] leading-[24px] text-black [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[10px] [&_li]:before:h-[6px] [&_li]:before:w-[6px] [&_li]:before:bg-[var(--orange)] [&_p]:m-0 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
        {children}
      </div>
    </section>
  );
}
