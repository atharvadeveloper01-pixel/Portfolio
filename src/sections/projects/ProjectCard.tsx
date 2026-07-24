"use client";

import { useRouter } from "next/navigation";
import { Play, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Project } from "@/types";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const href = `/projects/${project.slug}`;
    if ("startViewTransition" in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => {
        router.push(href);
      });
    } else {
      router.push(href);
    }
  }

  return (
    <a
      href={`/projects/${project.slug}`}
      onClick={handleClick}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden cursor-pointer",
        "transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
      )}
      style={{ viewTransitionName: `project-${project.slug}` }}
    >
      {/* Project visual */}
      <div className={cn("relative h-52 w-full bg-gradient-to-br", project.color)}>
        <div className="absolute inset-0 flex flex-col gap-3 p-6 justify-end">
          <div className="flex gap-2 flex-wrap">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 text-[10px] font-medium text-white/70 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 text-[10px] font-medium text-white/50 backdrop-blur-sm">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Project number */}
        <div className="absolute top-4 right-5 text-5xl font-black text-white/5 select-none">
          0{index + 1}
        </div>

        {/* Play Store badge */}
        {project.isPlayStore && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1">
            <Play className="h-3 w-3 fill-emerald-400 text-emerald-400" />
            <span className="text-[10px] font-semibold text-emerald-400">Play Store</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-bold text-zinc-100 mb-2">{project.name}</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">{project.tagline}</p>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-1.5">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-zinc-500">
              <span
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-auto flex items-center gap-3 pt-2 border-t border-zinc-800">
          {project.github && (
            <span
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.github!, "_blank", "noopener,noreferrer");
              }}
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
              role="button"
              aria-label={`GitHub — ${project.name}`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </span>
          )}
          <span
            className="ml-auto flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors"
            style={{
              color: project.accent,
              borderColor: `${project.accent}30`,
              backgroundColor: `${project.accent}10`,
            }}
          >
            View Experience →
          </span>
        </div>
      </div>
    </a>
  );
}
