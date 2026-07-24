import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/constants/projects";
import ExperienceRenderer from "@/features/experience/ExperienceRenderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Atharva Jahagirdar`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Atharva Jahagirdar`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ExperienceRenderer project={project} />;
}
