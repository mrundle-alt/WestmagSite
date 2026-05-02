"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ContactModal } from "./ContactModal";

type Props = {
  title: string;
  subtitle?: string;
};

export function StubPage({ title, subtitle }: Props) {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main className="wm-bg-grain flex min-h-[80svh] flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-black max-md:text-[32px] max-md:leading-[36px]">
          {title}
        </h1>
        {subtitle && (
          <p className="t1 mt-4 max-w-[600px] font-mono text-[20px] leading-[24px] text-black max-lg:text-[16px] max-lg:leading-[20px]">
            {subtitle}
          </p>
        )}
        <p className="mt-8 font-mono text-sm uppercase tracking-wider text-[#737373]">
          Coming soon
        </p>
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
