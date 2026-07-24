import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "I learn about your goals, users, and requirements before writing a single line of code.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Architecture, tech stack selection, timeline estimation, and feature breakdown.",
  },
  {
    step: "03",
    title: "Development",
    description: "Iterative builds with regular updates — clean code, structured commits, and consistent progress.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Manual testing across devices and screen sizes. Edge cases handled before they become bugs.",
  },
  {
    step: "05",
    title: "Optimization",
    description: "Performance tuning — 60fps rendering, reduced app size, and efficient data loading.",
  },
  {
    step: "06",
    title: "Deployment",
    description: "Play Store submission, production Firebase setup, and full handover with documentation.",
  },
];

export default function Process() {
  return (
    <Section size="lg">
      <Container>
        <SectionHeading
          title="How I Work"
          subtitle="A transparent process so you always know what's being built and why."
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map(({ step, title, description }) => (
            <div
              key={step}
              className="group relative flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <span className="text-4xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors select-none">
                {step}
              </span>
              <div>
                <h3 className="text-base font-semibold text-zinc-100 mb-1">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
