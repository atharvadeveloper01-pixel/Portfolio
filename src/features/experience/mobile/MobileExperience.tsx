import type { Project } from "@/types";
import MobileHero from "./MobileHero";
import AppJourney from "./AppJourney";
import ScreenGallery from "./ScreenGallery";
import ProductStory from "../shared/ProductStory";
import KeyFeatures from "../shared/KeyFeatures";
import ArchitectureFlow from "../shared/ArchitectureFlow";
import TechStackGrid from "../shared/TechStackGrid";
import LessonsLearned from "../shared/LessonsLearned";
import ExperienceCTA from "../shared/ExperienceCTA";
import ProjectStickyNav from "../shared/ProjectStickyNav";
import Container from "@/components/layout/Container";
import InteractivePhone from "./InteractivePhone";

interface MobileExperienceProps {
  project: Project;
}

export default function MobileExperience({ project }: MobileExperienceProps) {
  return (
    <main className="min-h-[100dvh] bg-zinc-950">
      {/* ── Sticky in-experience navigation ── */}
      <ProjectStickyNav
        projectName={project.name}
        github={project.github}
        accent={project.accent}
      />

      {/* 1 — Hero (Attention) */}
      <MobileHero project={project} />

      {/* 2 — App Journey ⭐ (Curiosity → Interaction) */}
      <AppJourney screens={project.screens} accent={project.accent} />

      {/* 3 — Interactive Phone (Free Exploration) */}
      <section id="interactive" className="w-full py-20 lg:py-28 border-t border-zinc-800/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Text */}
            <div className="flex flex-col gap-5 order-2 lg:order-1">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-600">
                  Interactive Preview
                </p>
                <h2 className="text-3xl font-bold text-zinc-100 mb-4">
                  Explore freely.
                </h2>
                <p className="text-zinc-400 leading-relaxed text-sm max-w-sm">
                  Navigate through every app screen at your own pace — swipe, tap,
                  or use the arrows. Every screen is a real Flutter view.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {project.screens.map((screen, i) => (
                  <div key={screen.id} className="flex items-center gap-3">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                      style={{ backgroundColor: project.accent }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm text-zinc-300 font-medium leading-none">{screen.label}</p>
                      {screen.description && (
                        <p className="text-xs text-zinc-600 mt-0.5 line-clamp-1">{screen.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex justify-center order-1 lg:order-2">
              <InteractivePhone screens={project.screens} accent={project.accent} />
            </div>
          </div>
        </Container>
      </section>

      {/* 4 — Product Story (Understanding) */}
      <div id="features">
        <ProductStory project={project} />
      </div>

      {/* 5 — Key Features (Technical detail) */}
      <KeyFeatures features={project.detailFeatures} accent={project.accent} />

      {/* 6 — Screen Gallery (Visual immersion) */}
      <ScreenGallery screens={project.screens} accent={project.accent} />

      {/* 7 — Architecture (Technical confidence) */}
      <div id="architecture">
        <ArchitectureFlow nodes={project.architecture} accent={project.accent} />
      </div>

      {/* 8 — Challenges + Lessons (Trust) */}
      <div id="challenges">
        <LessonsLearned
          challenges={project.challenges}
          lessons={project.lessons}
          accent={project.accent}
        />
      </div>

      {/* 9 — Tech Stack */}
      <div id="stack">
        <TechStackGrid techGroups={project.techGroups} accent={project.accent} />
      </div>

      {/* 10 — CTA (Conversion) */}
      <ExperienceCTA
        github={project.github}
        demo={project.demo}
        isPlayStore={project.isPlayStore}
        accent={project.accent}
        projectName={project.name}
      />
    </main>
  );
}
