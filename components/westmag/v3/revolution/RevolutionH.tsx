"use client";

// Variant H — Section removed entirely (Matt's "easy button" at [28:41]).
// Renders a single thin marker on dev preview so reviewers see the section
// is intentionally absent. The three points fold into Hero + CommonCore in
// a real ship.

export function RevolutionH() {
  return (
    <section className="wm-bg-grain flex flex-col items-center justify-center py-10 text-black/40">
      <div className="flex flex-col items-center gap-2 px-6 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--orange)]/70">
          Variant H · preview marker
        </span>
        <p className="m-0 max-w-[600px] font-mono text-[13px] leading-[18px]">
          Revolution section removed. In a real ship, the three points fold
          into Hero (point 1 + 2) and CommonCore (point 3). This row exists
          only so reviewers can confirm the page still reads cleanly without
          a manifesto block.
        </p>
      </div>
    </section>
  );
}
