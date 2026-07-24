import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <Section 
      id="home" 
      className="min-h-[100dvh] pt-24 md:pt-32 pb-16 flex flex-col justify-center overflow-hidden relative"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </Section>
  );
}
