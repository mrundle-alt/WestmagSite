import type { Metadata } from "next";
import { StubPage } from "@/components/westmag/StubPage";

export const metadata: Metadata = { title: "WESTMAG \u2013 TECHNOLOGY" };

export default function TechnologyPage() {
  return (
    <StubPage
      title="Technology"
      subtitle="Common core, many applications. Drone motors and robot actuators built on a shared BLDC architecture."
    />
  );
}
