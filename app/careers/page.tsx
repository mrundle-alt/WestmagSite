"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/westmag/Navbar";
import { Footer } from "@/components/westmag/Footer";
import { ContactModal } from "@/components/westmag/ContactModal";
import { CAREERS, CAREERS_PROVIDER, JOBS } from "@/lib/westmag/content";

export default function CareersPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const { embedUrl, linkUrl } = CAREERS_PROVIDER;

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />

      <main>
        {/* HERO */}
        <section className="wm-bg-dark relative flex min-h-[60svh] flex-col items-center justify-center px-[100px] pb-[60px] pt-[160px] max-lg:px-10 max-md:px-6 max-md:pt-[120px]">
          <div className="flex w-full max-w-[1500px] flex-col gap-6 text-white">
            <motion.span
              className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--orange)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Careers {"\u00b7"} South San Francisco, CA
            </motion.span>
            <motion.h1
              className="wm-hero-h1 m-0 max-w-[1100px] font-display text-[64px] font-black uppercase leading-[68px] tracking-[-1px] max-md:text-[40px] max-md:leading-[44px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {CAREERS.heading}
            </motion.h1>
            <motion.p
              className="m-0 max-w-[820px] font-mono text-[18px] leading-[28px] text-white/85 max-md:text-[16px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {CAREERS.intro}
            </motion.p>
          </div>
        </section>

        {/* HIRING AREAS */}
        <section className="wm-bg-grain px-[100px] py-[80px] max-lg:px-10 max-md:px-6 max-md:py-[60px]">
          <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8">
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-black max-md:text-[28px] max-md:leading-[34px]">
              What we&apos;re hiring for
            </h2>
            <div className="grid grid-cols-3 gap-px bg-gray-500 max-lg:grid-cols-2 max-md:grid-cols-1">
              {CAREERS.hiringAreas.map((a, idx) => (
                <motion.div
                  key={a.title}
                  className="flex flex-col gap-3 bg-[#b0b0b0] p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[var(--orange)]" />
                    <h3 className="m-0 font-mono text-[18px] font-medium uppercase leading-[22px] text-black">
                      {a.title}
                    </h3>
                  </div>
                  <p className="m-0 font-mono text-[14px] leading-[22px] text-black">{a.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN ROLES (ATS embed slot) */}
        <section
          id="open-roles"
          className="wm-bg-dark scroll-mt-24 px-[100px] py-[80px] max-lg:px-10 max-md:px-6 max-md:py-[60px]"
        >
          <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8">
            <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
              <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-white max-md:text-[28px] max-md:leading-[34px]">
                Open roles
              </h2>
              <p className="m-0 max-w-[420px] font-mono text-[14px] leading-[22px] text-white/70">
                {CAREERS.contactNote}
              </p>
            </div>

            {/* Native job cards (always rendered).
                Each /careers/[slug] page links Apply to the role's applyUrl when set,
                otherwise falls back to a prefilled mailto. */}
            <div className="grid grid-cols-1 gap-px bg-gray-700">
              {JOBS.map((job) => (
                <Link
                  key={job.slug}
                  href={`/careers/${job.slug}`}
                  className="group flex items-center justify-between gap-6 bg-black/40 px-8 py-6 transition-colors duration-300 hover:bg-[var(--orange)]/15 max-md:flex-col max-md:items-start"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="m-0 font-mono text-[20px] font-medium uppercase leading-[26px] text-white transition-colors group-hover:text-[var(--orange)]">
                      {job.title}
                    </h3>
                    <p className="m-0 font-mono text-[13px] leading-[18px] text-white/70">
                      {job.team} {"\u00b7"} {job.location} {"\u00b7"} {job.type}
                    </p>
                  </div>
                  <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/70 transition-all group-hover:text-[var(--orange)] group-hover:tracking-[0.3em]">
                    View role {"\u2192"}
                  </span>
                </Link>
              ))}
            </div>

            {/* Optional ATS embed below the native list (renders only if configured). */}
            {embedUrl && (
              <div className="border border-gray-500 bg-white/5 p-[5px]">
                <iframe
                  src={embedUrl}
                  title="Westmag open roles"
                  className="block h-[1100px] w-full border-0 bg-white"
                  loading="lazy"
                />
              </div>
            )}
            {!embedUrl && linkUrl && (
              <div className="flex flex-col gap-4 border border-gray-500 bg-white/5 p-10">
                <p className="m-0 font-mono text-[15px] leading-[24px] text-white/85">
                  Browse the full portal:
                </p>
                <Link
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wm-btn inline-flex w-fit items-center justify-center bg-[var(--orange)] px-10 py-5 font-mono font-medium uppercase text-white transition-opacity hover:opacity-75"
                >
                  Open careers portal
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* VALUES */}
        <section className="wm-bg-grain px-[100px] py-[80px] max-lg:px-10 max-md:px-6 max-md:py-[60px]">
          <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8">
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-black max-md:text-[28px] max-md:leading-[34px]">
              How we work
            </h2>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-6 max-md:grid-cols-1">
              {CAREERS.values.map((v, idx) => (
                <motion.li
                  key={v}
                  className="flex items-start gap-4 border-t border-black/15 pt-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <span className="font-mono text-xs text-[var(--orange)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[18px] leading-[26px] text-black max-md:text-[16px]">
                    {v}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section className="wm-bg-dark px-[100px] py-[80px] max-lg:px-10 max-md:px-6 max-md:py-[60px]">
          <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-8 text-white">
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] max-md:text-[28px] max-md:leading-[34px]">
              The process
            </h2>
            <ol className="grid grid-cols-5 gap-px bg-gray-700 max-lg:grid-cols-1">
              {CAREERS.process.map((p, idx) => (
                <motion.li
                  key={p.step}
                  className="flex flex-col gap-3 bg-black/40 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--orange)]">
                    {p.step}
                  </span>
                  <h3 className="m-0 font-mono text-[18px] font-medium uppercase leading-[22px]">
                    {p.title}
                  </h3>
                  <p className="m-0 font-mono text-[14px] leading-[22px] text-white/80">{p.body}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="wm-bg-grain px-[100px] py-[80px] max-lg:px-10 max-md:px-6">
          <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-6 text-center">
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-black max-md:text-[28px] max-md:leading-[34px]">
              Want in?
            </h2>
            <p className="m-0 max-w-[640px] font-mono text-[16px] leading-[24px] text-black">
              {CAREERS.contactNote}
            </p>
            <Link
              href="#open-roles"
              className="wm-btn inline-flex items-center justify-center bg-[var(--orange)] px-12 py-5 font-mono font-medium uppercase text-white transition-opacity hover:opacity-75"
            >
              See open roles
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
