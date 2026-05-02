"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // ESC to close + body scroll lock
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus first field
    setTimeout(() => {
      dialogRef.current?.querySelector<HTMLInputElement>("input[name=name]")?.focus();
    }, 0);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={dialogRef}
        className="wm-bg-modal relative h-auto w-[80%] max-w-[800px] border border-gray-500 px-5 pb-5 pt-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute right-0 top-0 flex h-[30px] w-[30px] cursor-pointer items-center justify-center border-b border-l border-gray-500 text-white"
        >
          X
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: wire up submission (api route or third-party form service)
          }}
          className="flex flex-col gap-2"
        >
          <h2 id="contact-modal-title" className="m-0 font-mono text-[28px] font-medium uppercase leading-[34px] text-white">
            CONTACT US
          </h2>
          <Field id="name" label="Name*" required />
          <Field id="email" label="Email Address*" type="email" required />
          <Field id="phone" label="Phone number" type="tel" />
          <Field id="company" label="company" />
          <Label htmlFor="message">MESSAGE</Label>
          <textarea
            id="message"
            name="message"
            maxLength={5000}
            className="min-h-[150px] w-full border border-gray-500 bg-white/15 p-2 text-white"
          />
          <button
            type="submit"
            className="wm-btn mt-[10px] flex w-full items-center justify-center bg-[var(--orange)] py-5 font-mono font-medium uppercase text-white transition-opacity hover:opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="pt-[5px] font-mono text-base font-medium uppercase text-white">
      {children}
    </label>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
}) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        maxLength={256}
        className="min-h-[30px] w-full border border-gray-500 bg-white/15 p-2 text-white outline-none focus:border-[var(--orange)]"
      />
    </>
  );
}
