import { TIMELINE } from "@/constants/personal";

export default function AboutTimeline() {
  return (
    <div className="relative flex flex-col gap-0">
      {/* Vertical line */}
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-800" aria-hidden="true" />

      {TIMELINE.map((item, index) => (
        <div key={item.year} className="relative flex gap-5 pb-10 last:pb-0">
          {/* Dot */}
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 mt-0.5">
            <div className="h-2 w-2 rounded-full bg-accent" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1 pt-1.5">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">
              {item.year}
            </span>
            <h3 className="text-sm font-semibold text-zinc-100">{item.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
