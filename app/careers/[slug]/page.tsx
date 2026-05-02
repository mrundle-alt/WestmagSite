import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JOBS } from "@/lib/westmag/content";
import { JobDetail } from "@/components/westmag/JobDetail";

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) return { title: "WESTMAG \u2013 CAREERS" };
  return {
    title: `${job.title} \u2013 Westmag Careers`,
    description: job.blurb,
  };
}

export default async function JobPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) notFound();
  return <JobDetail job={job} />;
}
