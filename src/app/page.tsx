import Hero from "@/sections/hero/Hero";
import TrustStrip from "@/sections/trust/TrustStrip";
import About from "@/sections/about/About";
import Services from "@/sections/services/Services";
import Projects from "@/sections/projects/Projects";
import Skills from "@/sections/skills/Skills";
import Process from "@/sections/process/Process";
import WhyMe from "@/sections/whyme/WhyMe";
import FAQ from "@/sections/faq/FAQ";
import Contact from "@/sections/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Hero — Attention + First impression */}
      <Hero />

      {/* 2. Trust Strip — Instant technical credibility */}
      <TrustStrip />

      {/* 3. About — Story + Emotional connection */}
      <About />

      {/* 4. Services — "What can this dev build for me?" */}
      <Services />

      {/* 5. Projects — Proof of work */}
      <Projects />

      {/* 6. Skills — Technical breadth */}
      <Skills />

      {/* 7. Process — Reduce uncertainty */}
      <Process />

      {/* 8. Why Me — Trust + differentiation */}
      <WhyMe />

      {/* 9. FAQ — Remove objections */}
      <FAQ />

      {/* 10. Contact — Convert */}
      <Contact />

      <Footer />
    </>
  );
}
