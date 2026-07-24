"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

const SECTIONS = [
  { label: "Overview", id: "overview" },
  { label: "Journey", id: "journey" },
  { label: "Explore", id: "interactive" },
  { label: "Features", id: "features" },
  { label: "Gallery", id: "gallery" },
  { label: "Architecture", id: "architecture" },
  { label: "Challenges", id: "challenges" },
  { label: "Stack", id: "stack" },
] as const;

interface ProjectStickyNavProps {
  projectName: string;
  github: string | null;
  accent: string;
}

export default function ProjectStickyNav({ projectName, github, accent }: ProjectStickyNavProps) {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>("overview");

  // Show nav after hero scrolls out
  useEffect(() => {
    const hero = document.getElementById("overview");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-64px 0px -50% 0px" }
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      className={cn(
        "fixed top-[60px] left-0 right-0 z-40 transition-all duration-300 hidden lg:block pointer-events-none",
        visible ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-3 opacity-0"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-0.5 rounded-b-2xl border border-t-0 border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl px-4 py-2 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]">
          {/* Project name */}
          <span className="mr-5 text-[11px] font-bold text-zinc-500 tracking-wide truncate max-w-[120px]">
            {projectName}
          </span>

          {/* Divider */}
          <div className="mr-4 h-4 w-px bg-zinc-800" />

          {/* Section links */}
          {SECTIONS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-[11px] font-medium transition-all duration-200 whitespace-nowrap",
                activeId === id
                  ? "bg-zinc-800/60"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
              )}
              style={activeId === id ? { color: accent } : undefined}
            >
              {label}
            </button>
          ))}

          {/* GitHub link */}
          {github && (
            <>
              <div className="ml-auto mr-1 h-4 w-px bg-zinc-800" />
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-medium text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
