import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS } from "@/constants/projects";
import Container from "@/components/layout/Container";

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
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-[100dvh] pt-28 pb-24">
      <Container className="max-w-4xl">
        {/* Back link */}
        <Link
          href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        {/* Hero banner */}
        <div className={`h-64 sm:h-80 w-full rounded-2xl bg-gradient-to-br ${project.color} mb-10 flex items-end p-8`}>
          {project.isPlayStore && (
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-4 py-2">
              <Play className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400">Live on Google Play Store</span>
            </div>
          )}
        </div>

        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-zinc-100 mb-2">{project.name}</h1>
            <p className="text-zinc-400">{project.tagline}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-700 px-5 text-sm font-medium text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
              >
                {project.isPlayStore ? <><Play className="h-4 w-4 fill-white" />Play Store</> : <><ExternalLink className="h-4 w-4" />Live Demo</>}
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <section>
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">The Problem</h2>
              <p className="text-sm leading-relaxed text-zinc-400">{project.problem}</p>
            </section>
            <section>
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">The Solution</h2>
              <p className="text-sm leading-relaxed text-zinc-400">{project.solution}</p>
            </section>
            <section>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">Key Features</h2>
              <ul className="flex flex-col gap-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm text-zinc-300">{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
