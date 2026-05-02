"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/westmag/Navbar";
import { Footer } from "@/components/westmag/Footer";
import { ContactModal } from "@/components/westmag/ContactModal";

const LAST_UPDATED = "May 2, 2026";

export default function TermsPage() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main className="wm-bg-grain flex flex-col items-center px-[100px] pb-[80px] pt-[140px] max-lg:px-10 max-md:px-6">
        <article className="flex w-full max-w-[860px] flex-col gap-8 text-black">
          <header className="flex flex-col gap-3">
            <h1 className="wm-section-h2 m-0 font-display text-[48px] uppercase leading-[52px] tracking-[-1px] max-md:text-[36px] max-md:leading-[40px]">
              Terms and Conditions
            </h1>
            <p className="m-0 font-mono text-sm uppercase tracking-wider text-[#737373]">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <Section title="1. Agreement">
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website
              westmag.com and any related services (collectively, the &quot;Site&quot;), operated by
              Western Magnetics Company, a Delaware corporation (&quot;Westmag,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              By accessing or using the Site, you agree to be bound by these Terms. If you do not agree,
              do not use the Site.
            </p>
          </Section>

          <Section title="2. Use of the Site">
            <p>
              The Site is provided for general informational purposes about Westmag and our products.
              You may not use the Site to:
            </p>
            <ul>
              <li>Violate any applicable law or regulation;</li>
              <li>
                Infringe or misappropriate any intellectual-property right, privacy right, or other
                right of Westmag or any third party;
              </li>
              <li>
                Transmit any virus, worm, malicious code, or attempt to interfere with the integrity,
                security, or proper operation of the Site;
              </li>
              <li>
                Engage in unauthorized scraping, framing, or systematic retrieval of content beyond
                ordinary browsing;
              </li>
              <li>
                Misrepresent your identity or affiliation in any communication submitted through the
                Site.
              </li>
            </ul>
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              All content on the Site &mdash; including text, graphics, logos, images, video, software,
              product designs, and the &quot;Westmag&quot; name and marks &mdash; is the property of
              Westmag or its licensors and is protected by United States and international intellectual-property
              laws. You are granted a limited, non-exclusive, non-transferable, revocable license to view
              the Site for your personal, non-commercial use. No other rights are granted by implication,
              estoppel, or otherwise.
            </p>
          </Section>

          <Section title="4. Forward-Looking Statements">
            <p>
              The Site may contain forward-looking statements about Westmag&apos;s products, technology,
              manufacturing capacity, customers, and business plans. These statements are based on current
              expectations and assumptions and are subject to risks and uncertainties. Actual results may
              differ materially. We undertake no obligation to update any forward-looking statement
              except as required by law.
            </p>
          </Section>

          <Section title="5. Compliance and Export Control">
            <p>
              Westmag products may be subject to U.S. export-control laws and regulations, including the
              Export Administration Regulations (EAR) and the International Traffic in Arms Regulations
              (ITAR). You agree not to export, re-export, or transfer Westmag information, products, or
              technology in violation of any applicable law. The Site is operated from the United States;
              we make no representation that the Site is appropriate or available for use in other locations.
            </p>
          </Section>

          <Section title="6. Submissions">
            <p>
              Any feedback, suggestions, ideas, or other materials you submit to Westmag through the
              contact form or by email are submitted on a non-confidential, non-proprietary basis. You
              grant Westmag a worldwide, royalty-free, perpetual license to use, reproduce, and
              incorporate such submissions for any purpose without compensation or attribution.
            </p>
          </Section>

          <Section title="7. Third-Party Links">
            <p>
              The Site may contain links to third-party websites and services that are not owned or
              controlled by Westmag. We are not responsible for the content, privacy practices, or
              availability of any third-party site, and your use of any such site is at your own risk.
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              THE SITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF
              ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WESTMAG DOES NOT
              WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, WESTMAG AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND
              AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO
              YOUR USE OF THE SITE, REGARDLESS OF THE LEGAL THEORY ON WHICH ANY CLAIM IS BASED. IN NO
              EVENT SHALL WESTMAG&apos;S AGGREGATE LIABILITY EXCEED ONE HUNDRED U.S. DOLLARS ($100).
            </p>
          </Section>

          <Section title="10. Indemnification">
            <p>
              You agree to defend, indemnify, and hold harmless Westmag, its affiliates, and their
              respective officers, directors, employees, and agents from any claim, loss, liability,
              damages, or expense (including reasonable attorneys&apos; fees) arising out of your use of
              the Site or your violation of these Terms.
            </p>
          </Section>

          <Section title="11. Governing Law and Disputes">
            <p>
              These Terms are governed by the laws of the State of California, without regard to its
              conflict-of-laws principles. Any dispute arising out of or relating to these Terms or the
              Site shall be brought exclusively in the state or federal courts located in San Mateo County,
              California, and you consent to the personal jurisdiction of those courts.
            </p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>
              We may update these Terms from time to time. The &quot;Last updated&quot; date at the top
              of this page reflects the most recent revision. Continued use of the Site after a revision
              becomes effective constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>
              Questions about these Terms? Contact us at{" "}
              <Link href="mailto:contact@westmag.com" className="text-[var(--orange)] underline">
                contact@westmag.com
              </Link>
              .
            </p>
            <p className="mt-2">
              Western Magnetics Company
              <br />
              South San Francisco, CA
            </p>
          </Section>
        </article>
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="m-0 font-mono text-[20px] font-medium uppercase leading-[26px] text-black">
        {title}
      </h2>
      <div className="flex flex-col gap-3 font-mono text-[15px] leading-[24px] text-black [&_li]:ml-5 [&_li]:list-disc [&_p]:m-0 [&_ul]:ml-2 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1">
        {children}
      </div>
    </section>
  );
}
