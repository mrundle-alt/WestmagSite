"use client";

import { useState } from "react";
import { Navbar } from "@/components/westmag/Navbar";
import { Footer } from "@/components/westmag/Footer";
import { ContactModalV2 } from "@/components/westmag/v2/ContactModalV2";
import { HeroV2 } from "@/components/westmag/v2/HeroV2";
import { FactoryV2 } from "@/components/westmag/v2/FactoryV2";
import { CommonCoreV2 } from "@/components/westmag/v2/CommonCoreV2";
import { VerticalV2 } from "@/components/westmag/v2/VerticalV2";
import { ScalingV2 } from "@/components/westmag/v2/ScalingV2";
import { ScrollProgress } from "@/components/westmag/v2/ScrollProgress";

import { useVariant, VariantProvider } from "@/components/westmag/v3/useVariant";
import { VariantSelector } from "@/components/westmag/v3/VariantSelector";

import { RevolutionA } from "@/components/westmag/v3/revolution/RevolutionA";
import { RevolutionB } from "@/components/westmag/v3/revolution/RevolutionB";
import { RevolutionC } from "@/components/westmag/v3/revolution/RevolutionC";
import { RevolutionD } from "@/components/westmag/v3/revolution/RevolutionD";
import { RevolutionE } from "@/components/westmag/v3/revolution/RevolutionE";
import { RevolutionF } from "@/components/westmag/v3/revolution/RevolutionF";
import { RevolutionG } from "@/components/westmag/v3/revolution/RevolutionG";
import { RevolutionH } from "@/components/westmag/v3/revolution/RevolutionH";
import { RevolutionI } from "@/components/westmag/v3/revolution/RevolutionI";
import { RevolutionJ } from "@/components/westmag/v3/revolution/RevolutionJ";
import { RevolutionK } from "@/components/westmag/v3/revolution/RevolutionK";

import { TeamA } from "@/components/westmag/v3/team/TeamA";
import { TeamB } from "@/components/westmag/v3/team/TeamB";
import { TeamC } from "@/components/westmag/v3/team/TeamC";
import { TeamD } from "@/components/westmag/v3/team/TeamD";
import { TeamE } from "@/components/westmag/v3/team/TeamE";

const REVOLUTION_MAP = {
  A: RevolutionA,
  B: RevolutionB,
  C: RevolutionC,
  D: RevolutionD,
  E: RevolutionE,
  F: RevolutionF,
  G: RevolutionG,
  H: RevolutionH,
  I: RevolutionI,
  J: RevolutionJ,
  K: RevolutionK,
} as const;

const TEAM_MAP = {
  A: TeamA,
  B: TeamB,
  C: TeamC,
  D: TeamD,
  E: TeamE,
} as const;

function V3Inner() {
  const [contactOpen, setContactOpen] = useState(false);
  const { revolution, team } = useVariant();
  const Revolution = REVOLUTION_MAP[revolution];
  const Team = TEAM_MAP[team];

  return (
    <>
      <ScrollProgress />
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main>
        <HeroV2 />
        <Revolution />
        <FactoryV2 />
        <CommonCoreV2 />
        <VerticalV2 />
        <ScalingV2 onContactClick={() => setContactOpen(true)} />
        <Team />
      </main>
      <Footer />
      <ContactModalV2 open={contactOpen} onClose={() => setContactOpen(false)} />
      <VariantSelector />
    </>
  );
}

export default function HomePageV3() {
  return (
    <VariantProvider>
      <V3Inner />
    </VariantProvider>
  );
}
