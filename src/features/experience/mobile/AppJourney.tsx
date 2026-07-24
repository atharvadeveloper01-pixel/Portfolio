"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AppScreen } from "@/types";
import AppScreenRenderer from "./AppScreen";
import Container from "@/components/layout/Container";

interface AppJourneyProps {
  screens: AppScreen[];
  accent: string;
}

const EASE: [number, number, number, number] = [0.32, 0, 0.67, 0];

export default function AppJourney({ screens, accent }: AppJourneyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function navigate(i: number) {
    if (i === activeIndex) return;
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
  }

  return (
    <section id="journey" className="w-full py-20 lg:py-28 border-t border-zinc-800/60">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-600">
            App Journey
          </p>
          <h2 className="text-3xl font-bold text-zinc-100">
            Follow the user&apos;s journey.
          </h2>
          <p className="mt-3 text-sm text-zinc-500 max-w-md">
            Click any step to explore that screen. Each view was designed to solve
            a specific user need — nothing exists without purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left — clickable steps ── */}
          <div className="relative flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-zinc-800" />

            {screens.map((screen, i) => (
              <button
                key={screen.id}
                onClick={() => navigate(i)}
                className="relative flex gap-5 py-4 text-left focus:outline-none group"
                aria-label={`Navigate to ${screen.label} screen`}
              >
                {/* Step bubble */}
                <div
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300"
                  style={{
                    borderColor: i === activeIndex ? accent : "#27272a",
                    backgroundColor: i === activeIndex ? `${accent}18` : "#09090b",
                  }}
                >
                  <span
                    className="text-[11px] font-black tabular-nums transition-colors duration-300"
                    style={{ color: i === activeIndex ? accent : "#52525b" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 pt-1.5 flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold transition-colors duration-300 leading-none"
                    style={{ color: i === activeIndex ? "#fafafa" : "#71717a" }}
                  >
                    {screen.label}
                  </p>

                  {/* Description — expands when active */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: i === activeIndex ? "120px" : "0px" }}
                  >
                    {screen.description && (
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-400 pr-4">
                        {screen.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Accent glow on active */}
                {i === activeIndex && (
                  <motion.div
                    layoutId="journey-active-bg"
                    className="absolute inset-0 -mx-3 rounded-xl pointer-events-none"
                    style={{ backgroundColor: `${accent}08` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* ── Right — controlled phone ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-10 rounded-full blur-3xl opacity-15 pointer-events-none transition-colors duration-700"
                style={{ backgroundColor: accent }}
              />

              {/* Phone shell */}
              <div
                className="relative z-10 w-[240px] h-[500px] rounded-[2.5rem] border-2 bg-zinc-900 overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)]"
                style={{ borderColor: `${accent}35` }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-6 w-20 rounded-b-xl bg-zinc-900 border-b border-x border-zinc-800" />

                {/* Animated screen */}
                <div className="absolute inset-0 overflow-hidden rounded-[2.4rem]">
                  <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      initial={{ x: direction * 220, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.28, ease: EASE },
                      }}
                      exit={{
                        x: direction * -220,
                        opacity: 0,
                        transition: { duration: 0.22, ease: EASE },
                      }}
                      className="absolute inset-0"
                    >
                      <AppScreenRenderer screen={screens[activeIndex]} accent={accent} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-20 rounded-full bg-zinc-700" />

                {/* Side buttons */}
                <div className="absolute right-[-3px] top-20 h-12 w-1 rounded-l bg-zinc-700" />
                <div className="absolute left-[-3px] top-16 h-7 w-1 rounded-r bg-zinc-700" />
                <div className="absolute left-[-3px] top-28 h-7 w-1 rounded-r bg-zinc-700" />
              </div>

              {/* Screen label badge */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full border px-4 py-1 text-xs font-semibold whitespace-nowrap"
                style={{
                  color: accent,
                  borderColor: `${accent}30`,
                  backgroundColor: `${accent}10`,
                }}
              >
                {screens[activeIndex]?.label}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
