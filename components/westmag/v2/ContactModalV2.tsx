"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ContactModalV2({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      dialogRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus();
    }, 80);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal"
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={onClose}
        >
          {/* Scrim */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

          {/* Panel */}
          <motion.div
            ref={dialogRef}
            className="relative z-10 w-full max-w-[640px] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
            initial={reduce ? false : { opacity: 0, y: 30, scale: 0.96 }}
            animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--orange)] to-transparent" />

            {/* Header */}
            <div className="relative flex items-start justify-between gap-6 px-10 pt-9 pb-2 max-md:px-6 max-md:pt-7">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--orange)]">
                  Get in touch
                </span>
                <h2
                  id="contact-modal-title"
                  className="m-0 font-display text-[32px] font-bold uppercase leading-[36px] tracking-[-0.5px] text-white max-md:text-[26px] max-md:leading-[30px]"
                >
                  Let&apos;s talk motors
                </h2>
                <p className="m-0 max-w-[420px] font-mono text-[13px] leading-[20px] text-white/60">
                  Tell us about your program. We respond within 48 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 1l12 12M13 1L1 13" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: wire to api/contact when backend lands
              }}
              className="flex flex-col gap-7 px-10 pb-10 pt-7 max-md:px-6 max-md:pb-7"
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-7 max-md:grid-cols-1">
                <UnderlineField id="name" label="Name" required />
                <UnderlineField id="email" label="Email" type="email" required />
                <UnderlineField id="phone" label="Phone" type="tel" />
                <UnderlineField id="company" label="Company" />
              </div>
              <UnderlineField id="message" label="Message" multiline />

              <button
                type="submit"
                className="wm-btn group relative mt-2 flex w-full items-center justify-center gap-3 overflow-hidden bg-[var(--orange)] py-5 font-mono text-sm font-medium uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90"
              >
                <span className="relative z-10">Send message</span>
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 5h14M11 1l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* shine sweep */}
                <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Underline-style field. Label sits above; input is borderless except a 1px bottom
 * line that turns orange on focus. Works as input or textarea (via `multiline`).
 */
function UnderlineField({
  id,
  label,
  type = "text",
  required = false,
  multiline = false,
}: {
  id: string;
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  multiline?: boolean;
}) {
  const baseInputClasses =
    "peer w-full border-0 border-b border-white/15 bg-transparent px-0 pb-2 pt-1 font-mono text-[15px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--orange)]";
  return (
    <label htmlFor={id} className="group flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 transition-colors group-focus-within:text-[var(--orange)]">
        {label}
        {required && <span className="text-[var(--orange)]"> *</span>}
      </span>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          maxLength={5000}
          rows={4}
          className={`${baseInputClasses} resize-none leading-[22px]`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          maxLength={256}
          className={baseInputClasses}
        />
      )}
    </label>
  );
}
