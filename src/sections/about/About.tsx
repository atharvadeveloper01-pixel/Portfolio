import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import AboutStory from "./AboutStory";
import AboutTimeline from "./AboutTimeline";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <Section id="about" size="lg">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="A developer who builds with intention — not just code."
          className="mb-16"
        />
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <AboutStory />
          <AboutTimeline />
        </div>
      </Container>
    </Section>
  );
}
