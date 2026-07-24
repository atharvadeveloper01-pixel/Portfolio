import Link from "next/link";
import { ArrowLeft, Play, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Project } from "@/types";
import Container from "@/components/layout/Container";
import InteractivePhone from "./InteractivePhone";
import FloatingBadges from "./FloatingBadges";

interface MobileHeroProps {
  project: Project;
}

export default function MobileHero({ project }: MobileHeroProps) {
  const { name, tagline, tech, accent, color, github, demo, isPlayStore, screens, floatingCards, results } = project;

  return (
    <section id="overview" className="relative w-full min-h-[92vh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* Project-tinted radial background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-70`}
        aria-hidden="true"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, ${accent} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Top-right glow orb */}
      <div
        className="absolute -top-32 right-0 w-[700px] h-[700px] rounded-full blur-[140px] opacity-[0.12] pointer-events-none"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* ── Left — Text content ── */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">
            {/* Back link */}
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors w-fit"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All Projects
            </Link>

            {/* Play Store badge */}
            {isPlayStore && (
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5">
                <Play className="h-3 w-3 fill-emerald-400 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400">
                  Live on Google Play Store
                </span>
              </div>
            )}

            {/* Name + tagline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-100 mb-4 leading-none">
                {name}
              </h1>
              <p className="text-lg text-zinc-400 leading-relaxed max-w-md">
                {tagline}
              </p>
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2">
              {tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-3 py-1 text-xs font-medium text-zinc-300"
                  style={{ borderColor: `${accent}40`, backgroundColor: `${accent}10` }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-6 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all hover:border-zinc-500 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                  Source Code
                </Link>
              )}
              {demo && (
                <Link
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
                  style={{ backgroundColor: accent }}
                >
                  {isPlayStore ? (
                    <><Play className="h-4 w-4 fill-white" />Play Store</>
                  ) : (
                    <><ExternalLink className="h-4 w-4" />Live Demo</>
                  )}
                </Link>
              )}
            </div>

            {/* Key results strip */}
            <div className="flex gap-3 flex-wrap">
              {results.slice(0, 3).map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm px-4 py-3"
                >
                  <p
                    className="text-sm font-bold leading-none"
                    style={{ color: accent }}
                  >
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Phone + Floating Badges ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Floating badges around the phone */}
              <FloatingBadges cards={floatingCards} accent={accent} />

              {/* Interactive phone */}
              <InteractivePhone screens={screens} accent={accent} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
