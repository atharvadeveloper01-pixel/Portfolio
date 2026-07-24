import type { ProjectChallenge } from "@/types";
import Container from "@/components/layout/Container";

interface ChallengesProps {
  challenges: ProjectChallenge[];
  lessons: string[];
  accent: string;
}

export default function LessonsLearned({ challenges, lessons, accent }: ChallengesProps) {
  return (
    <section className="w-full py-20 lg:py-28 border-t border-zinc-800/60">
      <Container>
        {/* Challenges */}
        <div className="mb-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-600">
            Engineering Challenges
          </p>
          <h2 className="mb-12 text-3xl font-bold text-zinc-100">
            Hard problems, real solutions.
          </h2>

          <div className="flex flex-col gap-6">
            {challenges.map((c, i) => (
              <div
                key={c.title}
                className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-0 rounded-2xl border border-zinc-800 bg-zinc-900/20 overflow-hidden"
              >
                {/* Problem */}
                <div className="p-6 border-b lg:border-b-0 lg:border-r border-zinc-800">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-red-400">
                    Challenge {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-2 text-sm font-semibold text-zinc-100">{c.title}</h3>
                  <p className="text-xs leading-relaxed text-zinc-500">{c.description}</p>
                </div>

                {/* Decision */}
                <div className="p-6 border-b lg:border-b-0 lg:border-r border-zinc-800">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Decision
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-400">{c.decision}</p>
                </div>

                {/* Result */}
                <div className="p-6">
                  <p
                    className="mb-2 text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: accent }}
                  >
                    Result
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-400">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lessons */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-600">
            Lessons Learned
          </p>
          <h2 className="mb-10 text-3xl font-bold text-zinc-100">
            What I&apos;d do differently.
          </h2>

          <div className="flex flex-col gap-3 max-w-3xl">
            {lessons.map((lesson, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4"
              >
                <span
                  className="mt-0.5 text-xs font-black tabular-nums"
                  style={{ color: accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-zinc-300">{lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
