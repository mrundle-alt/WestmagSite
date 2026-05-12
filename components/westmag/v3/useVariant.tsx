"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type SectionKey = "revolution" | "team";

export const REVOLUTION_VARIANTS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] as const;
export const TEAM_VARIANTS = ["A", "B", "C", "D", "E"] as const;

export type RevolutionVariant = (typeof REVOLUTION_VARIANTS)[number];
export type TeamVariant = (typeof TEAM_VARIANTS)[number];

const DEFAULTS: { revolution: RevolutionVariant; team: TeamVariant } = {
  revolution: "A",
  team: "A",
};

function readParam<T extends string>(
  key: SectionKey,
  allowed: readonly T[],
  fallback: T,
): T {
  if (typeof window === "undefined") return fallback;
  const url = new URL(window.location.href);
  const v = url.searchParams.get(key)?.toUpperCase();
  return (v && (allowed as readonly string[]).includes(v) ? v : fallback) as T;
}

type Ctx = {
  revolution: RevolutionVariant;
  team: TeamVariant;
  setVariant: (section: SectionKey, value: string) => void;
};

const VariantContext = createContext<Ctx | null>(null);

export function VariantProvider({ children }: { children: ReactNode }) {
  const [revolution, setRev] = useState<RevolutionVariant>(DEFAULTS.revolution);
  const [team, setTeam] = useState<TeamVariant>(DEFAULTS.team);

  useEffect(() => {
    setRev(readParam("revolution", REVOLUTION_VARIANTS, DEFAULTS.revolution));
    setTeam(readParam("team", TEAM_VARIANTS, DEFAULTS.team));
    const onPop = () => {
      setRev(readParam("revolution", REVOLUTION_VARIANTS, DEFAULTS.revolution));
      setTeam(readParam("team", TEAM_VARIANTS, DEFAULTS.team));
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const setVariant = useCallback((section: SectionKey, value: string) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set(section, value);
    window.history.pushState({}, "", url.toString());
    if (section === "revolution") setRev(value as RevolutionVariant);
    if (section === "team") setTeam(value as TeamVariant);
  }, []);

  return (
    <VariantContext.Provider value={{ revolution, team, setVariant }}>
      {children}
    </VariantContext.Provider>
  );
}

export function useVariant(): Ctx {
  const ctx = useContext(VariantContext);
  if (!ctx) {
    throw new Error("useVariant must be used inside <VariantProvider>");
  }
  return ctx;
}
