import type { Project } from "@/types";
import MobileExperience from "./mobile/MobileExperience";

/**
 * Switches between experience templates based on project.type.
 * Add new experience types here without modifying any existing experience.
 */
interface ExperienceRendererProps {
  project: Project;
}

export default function ExperienceRenderer({ project }: ExperienceRendererProps) {
  switch (project.type) {
    case "mobile":
      return <MobileExperience project={project} />;

    // Future experience types — add without touching existing code
    // case "web":
    //   return <WebExperience project={project} />;
    // case "dashboard":
    //   return <DashboardExperience project={project} />;

    default:
      return <MobileExperience project={project} />;
  }
}
