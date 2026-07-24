import Container from "@/components/layout/Container";

interface TechStackGridProps {
  techGroups: Record<string, string[]>;
  accent: string;
}

export default function TechStackGrid({ techGroups, accent }: TechStackGridProps) {
  return (
    <section className="w-full py-20 lg:py-28 border-t border-zinc-800/60">
      <Container>
        <div className="mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-600">
            Tech Stack
          </p>
          <h2 className="text-3xl font-bold text-zinc-100">
            The right tools for the job.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(techGroups).map(([group, techs]) => (
            <div key={group} className="flex flex-col gap-3">
              <h3
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: accent }}
              >
                {group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
