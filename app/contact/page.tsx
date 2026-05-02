"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/westmag/Navbar";
import { Footer } from "@/components/westmag/Footer";
import { ContactModal } from "@/components/westmag/ContactModal";

export default function ContactPage() {
  const [open, setOpen] = useState(true);
  // Auto-open the modal on this route; closing routes the user back to home.
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <>
      <Navbar onContactClick={() => setOpen(true)} />
      <main className="wm-bg-grain flex min-h-[80svh] flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-black max-md:text-[32px] max-md:leading-[36px]">
          Contact
        </h1>
        <p className="t1 mt-4 max-w-[600px] font-mono text-[20px] leading-[24px] text-black max-lg:text-[16px] max-lg:leading-[20px]">
          contact@westmag.com
        </p>
      </main>
      <Footer />
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
