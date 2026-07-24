import { TRUST_STRIP_ITEMS } from "@/constants/skills";

export default function TrustStrip() {
  // Duplicate for seamless infinite scroll
  const doubled = [...TRUST_STRIP_ITEMS, ...TRUST_STRIP_ITEMS];

  return (
    <section aria-label="Technologies" className="relative w-full py-12 border-y border-zinc-800/60 overflow-hidden">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee gap-8">
        {doubled.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-zinc-800 bg-zinc-900/40 px-5 py-2.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-zinc-300">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
