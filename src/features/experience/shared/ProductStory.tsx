import type { Project } from "@/types";
import Container from "@/components/layout/Container";

interface ProductStoryProps {
  project: Pick<Project, "problem" | "approach" | "results">;
}

const CHAPTERS = [
  {
    num: "01",
    title: "The Challenge",
    key: "problem" as const,
    accent: "text-red-400",
    borderAccent: "border-red-500/20",
    bgAccent: "bg-red-500/5",
  },
  {
    num: "02",
    title: "The Approach",
    key: "approach" as const,
    accent: "text-amber-400",
    borderAccent: "border-amber-500/20",
    bgAccent: "bg-amber-500/5",
  },
];

export default function ProductStory({ project }: ProductStoryProps) {
  return (
    <section className="w-full py-20 lg:py-28">
      <Container>
        {/* Section label */}
        <p className="mb-14 text-xs font-bold uppercase tracking-widest text-zinc-600">
          Product Story
        </p>

        <div className="flex flex-col gap-0 divide-y divide-zinc-800/60">
          {CHAPTERS.map(({ num, title, key, accent, borderAccent, bgAccent }) => (
            <div
              key={num}
              className={`group grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16 py-12 transition-colors hover:bg-zinc-900/20`}
            >
              {/* Left — chapter header */}
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-zinc-800 transition-colors group-hover:text-zinc-700">
                  {num}
                </span>
                <span className={`text-sm font-bold ${accent}`}>{title}</span>
              </div>

              {/* Right — content */}
              <div className={`rounded-2xl border ${borderAccent} ${bgAccent} p-6 lg:p-8`}>
                <p className="text-base leading-relaxed text-zinc-300 lg:text-lg">
                  {project[key]}
                </p>
              </div>
            </div>
          ))}

          {/* Results row */}
          {project.results.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16 py-12">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-zinc-800">03</span>
                <span className="text-sm font-bold text-emerald-400">The Results</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.results.map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 flex flex-col gap-1"
                  >
                    <span className="text-2xl font-black text-emerald-400 leading-none">
                      {value}
                    </span>
                    <span className="text-xs text-zinc-500 leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
