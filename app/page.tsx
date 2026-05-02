"use client";

import { useState } from "react";
import { Navbar } from "@/components/westmag/Navbar";
import { Hero } from "@/components/westmag/Hero";
import { RevolutionSection } from "@/components/westmag/RevolutionSection";
import { FactorySection } from "@/components/westmag/FactorySection";
import { CommonCoreSection } from "@/components/westmag/CommonCoreSection";
import { VerticalIntegration } from "@/components/westmag/VerticalIntegration";
import { ScalingCTA } from "@/components/westmag/ScalingCTA";
import { TeamSection } from "@/components/westmag/TeamSection";
import { Footer } from "@/components/westmag/Footer";
import { ContactModal } from "@/components/westmag/ContactModal";

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <Navbar onContactClick={openContact} />
      <main>
        <Hero />
        <RevolutionSection />
        <FactorySection />
        <CommonCoreSection />
        <VerticalIntegration />
        <ScalingCTA onContactClick={openContact} />
        <TeamSection />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
