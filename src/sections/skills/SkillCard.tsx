import type { Skill, SkillLevel } from "@/types";
import { cn } from "@/lib/cn";

const LEVEL_COLORS: Record<SkillLevel, string> = {
  Expert: "text-white bg-white/15 border-white/20",
  Advanced: "text-accent bg-accent/15 border-accent/25",
  Intermediate: "text-zinc-300 bg-zinc-800 border-zinc-700",
  Beginner: "text-zinc-500 bg-zinc-900 border-zinc-800",
};

const LEVEL_DOTS: Record<SkillLevel, number> = {
  Expert: 4, Advanced: 3, Intermediate: 2, Beginner: 1,
};

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const filled = LEVEL_DOTS[skill.level];

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-3 transition-colors hover:border-zinc-700 hover:bg-zinc-900/60">
      <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
      <div className="flex items-center gap-2 shrink-0">
        {/* Dot indicator */}
        <div className="flex gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                i < filled ? "bg-accent" : "bg-zinc-700"
              )}
            />
          ))}
        </div>
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 text-[10px] font-semibold",
            LEVEL_COLORS[skill.level]
          )}
        >
          {skill.level}
        </span>
      </div>
    </div>
  );
}
