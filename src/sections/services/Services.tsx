import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/constants/services";

export default function Services() {
  return (
    <Section id="services" size="lg">
      <Container>
        <SectionHeading
          title="What I Build"
          subtitle="End-to-end Flutter development — from concept to production deployment."
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
