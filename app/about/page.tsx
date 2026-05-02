import type { Metadata } from "next";
import { StubPage } from "@/components/westmag/StubPage";

export const metadata: Metadata = { title: "WESTMAG \u2013 ABOUT" };

export default function AboutPage() {
  return (
    <StubPage
      title="About"
      subtitle="Building the great American motor company to serve the growing drone and robotics sector, both domestically and abroad."
    />
  );
}
