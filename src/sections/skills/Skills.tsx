import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "./SkillCard";
import { SKILLS } from "@/constants/skills";
import type { SkillCategory } from "@/types";

const CATEGORIES: SkillCategory[] = [
  "Mobile",
  "Backend & Cloud",
  "State & Architecture",
  "Languages",
  "Tools",
];

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  "Mobile": "Mobile Development",
  "Backend & Cloud": "Backend & Cloud",
  "State & Architecture": "Architecture",
  "Languages": "Languages",
  "Tools": "Tools & IDEs",
};

export default function Skills() {
  return (
    <Section id="skills" size="lg">
      <Container>
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies I work with — rated by real project experience."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => {
            const skills = SKILLS.filter((s) => s.category === category);
            return (
              <div key={category} className="flex flex-col gap-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
                  {CATEGORY_LABELS[category]}
                </h3>
                <div className="flex flex-col gap-2">
                  {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
