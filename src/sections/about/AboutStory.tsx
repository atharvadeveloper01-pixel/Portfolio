import { PERSONAL } from "@/constants/personal";

const PHILOSOPHY = [
  {
    label: "I build to ship.",
    body: "Clean code matters — but a working app in the hands of real users matters more. I balance quality with pragmatism.",
  },
  {
    label: "I learn by building.",
    body: "Every project I take on is chosen to push me into uncomfortable territory. That's where the real growth is.",
  },
  {
    label: "I care about the user.",
    body: "Performance, responsiveness, and UX aren't afterthoughts. They're the first things I think about when designing any screen.",
  },
];

export default function AboutStory() {
  return (
    <div className="flex flex-col gap-8">
      {/* Story */}
      <div className="flex flex-col gap-4 text-zinc-400 leading-relaxed">
        <p>
          My journey into software development started with a simple question:{" "}
          <span className="text-zinc-200 font-medium">
            &ldquo;How do the apps I use every day actually work?&rdquo;
          </span>
        </p>
        <p>
          That curiosity led me to programming — first through C++ and Java at{" "}
          <span className="text-zinc-300">{PERSONAL.institution}</span>, then to Flutter,
          which completely changed how I thought about building software. A single codebase.
          Beautiful UIs. Native performance. I was hooked.
        </p>
        <p>
          Since then, I&apos;ve built task managers, wallpaper apps, and published a game to the
          Google Play Store — each project teaching me something the previous one couldn&apos;t.
          I&apos;m currently deepening my skills through a Flutter internship, working with
          Firebase, REST APIs, and production-grade architecture.
        </p>
        <p>
          I don&apos;t just write code. I think about the problem, the user, and the system —
          then build something that solves it cleanly.
        </p>
      </div>

      {/* Philosophy cards */}
      <div className="flex flex-col gap-4 mt-2">
        {PHILOSOPHY.map(({ label, body }) => (
          <div key={label} className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
            <div>
              <p className="text-sm font-semibold text-zinc-100 mb-0.5">{label}</p>
              <p className="text-sm text-zinc-500 leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
