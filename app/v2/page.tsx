"use client";

import { useState } from "react";
import { Navbar } from "@/components/westmag/Navbar";
import { Footer } from "@/components/westmag/Footer";
import { ContactModal } from "@/components/westmag/ContactModal";
import { HeroV2 } from "@/components/westmag/v2/HeroV2";
import { RevolutionV2 } from "@/components/westmag/v2/RevolutionV2";
import { FactoryV2 } from "@/components/westmag/v2/FactoryV2";
import { CommonCoreV2 } from "@/components/westmag/v2/CommonCoreV2";
import { VerticalV2 } from "@/components/westmag/v2/VerticalV2";
import { ScalingV2 } from "@/components/westmag/v2/ScalingV2";
import { TeamV2 } from "@/components/westmag/v2/TeamV2";
import { ScrollProgress } from "@/components/westmag/v2/ScrollProgress";

export default function HomePageV2() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <ScrollProgress />
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main>
        <HeroV2 />
        <RevolutionV2 />
        <FactoryV2 />
        <CommonCoreV2 />
        <VerticalV2 />
        <ScalingV2 onContactClick={() => setContactOpen(true)} />
        <TeamV2 />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
