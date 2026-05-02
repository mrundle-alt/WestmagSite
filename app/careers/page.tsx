import type { Metadata } from "next";
import { StubPage } from "@/components/westmag/StubPage";

export const metadata: Metadata = { title: "WESTMAG \u2013 CAREERS" };

export default function CareersPage() {
  return (
    <StubPage
      title="Careers"
      subtitle="World-class talent in motor design, manufacturing engineering, and production automation. Drawing from Waterloo, UBC, MIT, Cornell, and leaders in automotive scale."
    />
  );
}
