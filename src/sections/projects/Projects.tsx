import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants/projects";
import { PERSONAL } from "@/constants/personal";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <Section id="projects" size="lg">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <SectionHeading
            title="Featured Projects"
            subtitle="Real-world applications — built, shipped, and learned from."
          />
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
