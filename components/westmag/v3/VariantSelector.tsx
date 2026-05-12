"use client";

import {
  REVOLUTION_VARIANTS,
  TEAM_VARIANTS,
  useVariant,
  type RevolutionVariant,
  type TeamVariant,
} from "./useVariant";

const REVOLUTION_LABELS: Record<RevolutionVariant, string> = {
  A: "Baseline — stacked blocks",
  B: "Action verbs + slicer",
  C: "Numbered 01/02/03",
  D: "Comparative split (attack)",
  E: "Founder quote anchor",
  F: "Tabbed 001/002/003",
  G: "Asymmetric dark + chevrons",
  H: "Section removed",
  I: "Trade catalog spec sheet (1957)",
  J: "Industrial poster (Fortune-cover)",
  K: "Domestic / Allied (equal-weight)",
};

const TEAM_LABELS: Record<TeamVariant, string> = {
  A: "Baseline — card grid (wipe-up)",
  B: "Inline roles + bios right",
  C: "Robot avatars",
  D: "Text-only + role grid",
  E: "Industrial portrait plate",
};

export function VariantSelector() {
  const { revolution, team, setVariant } = useVariant();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[320px] flex-col gap-2 rounded border border-white/20 bg-black/85 p-3 font-mono text-[12px] text-white shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-2 border-b border-white/15 pb-2">
        <span className="font-semibold uppercase tracking-wider text-white/80">
          Variant Selector
        </span>
        <span className="text-[10px] text-white/40">v3 preview</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-wider text-white/60">
          Revolution
        </span>
        <div className="flex flex-wrap gap-1">
          {REVOLUTION_VARIANTS.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setVariant("revolution", v)}
              className={
                "w-7 h-7 rounded text-[11px] font-bold transition-colors " +
                (revolution === v
                  ? "bg-[var(--orange)] text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20")
              }
              title={REVOLUTION_LABELS[v]}
            >
              {v}
            </button>
          ))}
        </div>
        <span className="text-[10px] text-white/50">
          {REVOLUTION_LABELS[revolution]}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-wider text-white/60">
          Team
        </span>
        <div className="flex gap-1">
          {TEAM_VARIANTS.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setVariant("team", v)}
              className={
                "w-7 h-7 rounded text-[11px] font-bold transition-colors " +
                (team === v
                  ? "bg-[var(--orange)] text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20")
              }
              title={TEAM_LABELS[v]}
            >
              {v}
            </button>
          ))}
        </div>
        <span className="text-[10px] text-white/50">{TEAM_LABELS[team]}</span>
      </div>

      <div className="border-t border-white/15 pt-2 text-[10px] text-white/40">
        Share: copy URL to lock variants
      </div>
    </div>
  );
}
