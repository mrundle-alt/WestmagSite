"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/westmag/Navbar";
import { Footer } from "@/components/westmag/Footer";
import { ContactModal } from "@/components/westmag/ContactModal";
import { CAREERS, CAREERS_DOVER } from "@/lib/westmag/content";

export default function CareersPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const { embedUrl, linkUrl } = CAREERS_DOVER;

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main className="wm-bg-grain flex flex-col items-center px-[100px] pb-[60px] pt-[140px] max-lg:px-10 max-md:px-6">
        <div className="flex w-full max-w-[1500px] flex-col gap-8">
          <header className="flex flex-col gap-4">
            <h1 className="wm-section-h2 m-0 font-display text-[56px] uppercase leading-[60px] tracking-[-1px] text-black max-md:text-[40px] max-md:leading-[44px]">
              {CAREERS.heading}
            </h1>
            <p className="m-0 max-w-[800px] font-mono text-[18px] leading-[26px] text-black max-md:text-[16px]">
              {CAREERS.body}
            </p>
          </header>

          {/* Dover embed slot */}
          {embedUrl ? (
            <div className="border border-gray-500 bg-white/40 p-[5px]">
              <iframe
                src={embedUrl}
                title="Westmag open roles"
                className="block h-[1100px] w-full border-0 bg-white"
                loading="lazy"
              />
            </div>
          ) : linkUrl ? (
            <div className="flex flex-col gap-4 border border-gray-500 bg-white/40 p-10">
              <p className="m-0 font-mono text-[16px] text-black">
                Browse open roles on our careers portal:
              </p>
              <Link
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wm-btn inline-flex w-fit items-center justify-center bg-[var(--orange)] px-10 py-5 font-mono font-medium uppercase text-white transition-opacity hover:opacity-75"
              >
                View Open Roles
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4 border border-gray-500 bg-white/40 p-10">
              <p className="m-0 font-mono text-[16px] uppercase tracking-wider text-[#737373]">
                Roles posting soon
              </p>
              <p className="m-0 max-w-[700px] font-mono text-[16px] leading-[24px] text-black">
                {CAREERS.contactNote}
              </p>
              <Link
                href="mailto:contact@westmag.com"
                className="wm-btn inline-flex w-fit items-center justify-center bg-[var(--orange)] px-10 py-5 font-mono font-medium uppercase text-white transition-opacity hover:opacity-75"
              >
                Email contact@westmag.com
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
