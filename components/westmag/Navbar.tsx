"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/westmag/content";
import { MobileMenu } from "./MobileMenu";

type Props = {
  onContactClick: () => void;
};

export function Navbar({ onContactClick }: Props) {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const currentScrollY = window.scrollY;
      // jitter dampening (matches original ~10px threshold)
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="wm-navbar fixed inset-x-0 top-0 z-40 max-lg:bg-[#2f2f2f] max-lg:pb-5"
      data-hidden={hidden}
    >
      <div className="mx-auto flex max-w-[95%] items-center justify-between pt-6 max-lg:flex-col max-lg:items-stretch max-lg:gap-4 max-lg:pt-5">
        <div className="flex items-center justify-between max-lg:px-2">
          <Link href="/" aria-label="Westmag home" className="transition-opacity hover:opacity-75">
            <Image
              src="/westmag/logos/westmag-logo.svg"
              alt="Westmag"
              width={87}
              height={32}
              priority
              style={{ height: "auto" }}
              className="w-[87px]"
            />
          </Link>
          <div className="hidden max-lg:block">
            <MobileMenu onContactClick={onContactClick} />
          </div>
        </div>

        <nav className="flex items-center gap-8 max-lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-base font-medium uppercase text-[var(--orange)] transition-opacity hover:opacity-75"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={onContactClick}
            className="wm-btn wm-btn-contact bg-[var(--orange)] px-10 py-[15px] font-mono text-base font-medium uppercase text-white transition-opacity hover:opacity-75"
          >
            CONTACT
          </button>
        </nav>
      </div>
    </header>
  );
}
