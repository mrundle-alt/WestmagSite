"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/westmag/content";

type Props = {
  onContactClick: () => void;
};

export function MobileMenu({ onContactClick }: Props) {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center border border-[var(--orange)]"
      >
        <span className="text-[var(--orange)] text-2xl leading-none">{open ? "\u2715" : "\u2630"}</span>
      </button>
      {open && (
        <nav className="absolute left-0 right-0 top-full mt-4 flex flex-col items-stretch gap-1 bg-[#2f2f2f] px-4 pb-6 pt-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3 font-mono text-base font-medium uppercase text-[var(--orange)] transition-opacity hover:opacity-75"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onContactClick();
            }}
            className="mt-3 w-full bg-[var(--orange)] py-4 font-mono text-base font-medium uppercase text-white transition-opacity hover:opacity-75"
          >
            CONTACT
          </button>
        </nav>
      )}
    </>
  );
}
