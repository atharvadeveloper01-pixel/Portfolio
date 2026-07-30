"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectScreen } from "@/types";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface InteractivePhoneProps {
  screens: ProjectScreen[];
  accent: string;
  slug: string;
}

const SLIDE_DURATION = 0.3;
const SLIDE_EASE: [number, number, number, number] = [0.32, 0, 0.67, 0];

export default function InteractivePhone({ screens, accent, slug }: InteractivePhoneProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const navigate = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex) return;
      setDirection(nextIndex > activeIndex ? 1 : -1);
      setActiveIndex(nextIndex);
    },
    [activeIndex]
  );

  const handlePrev = () => navigate(Math.max(0, activeIndex - 1));
  const handleNext = () => navigate(Math.min(screens.length - 1, activeIndex + 1));

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir * 220,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: SLIDE_DURATION, ease: SLIDE_EASE },
    },
    exit: (dir: number) => ({
      x: dir * -220,
      opacity: 0,
      transition: { duration: SLIDE_DURATION, ease: SLIDE_EASE },
    }),
  };

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      {/* Screen label */}
      <div className="flex items-center gap-2 h-7">
        <span className="text-xs font-medium text-zinc-500">
          {screens[activeIndex]?.title}
        </span>
        <span className="text-xs text-zinc-700">
          {activeIndex + 1} / {screens.length}
        </span>
      </div>

      {/* Phone frame */}
      <div className="relative">
        {/* Glow behind phone */}
        <div
          className="absolute -inset-8 rounded-[50%] blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: accent }}
        />

        {/* Phone outer shell */}
        <div
          className="relative z-10 w-[260px] h-[540px] rounded-[2.75rem] border-2 border-zinc-700 bg-zinc-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
          style={{ borderColor: `${accent}30` }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-6 w-24 rounded-b-2xl bg-zinc-900 border-b-2 border-x-2 border-zinc-800 flex items-center justify-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            <div className="h-1 w-6 rounded-full bg-zinc-800" />
          </div>

          {/* Screen content with AnimatePresence */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.6rem]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) handleNext();
                  else if (info.offset.x > 50) handlePrev();
                }}
              >
                <Image 
                  src={`/projects/${slug}/screens/${screens[activeIndex].image}`}
                  alt={screens[activeIndex].title}
                  fill
                  className="object-cover"
                  sizes="260px"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-zinc-700" />

          {/* Side buttons (decorative) */}
          <div className="absolute right-[-3px] top-20 h-14 w-1 rounded-l bg-zinc-700" />
          <div className="absolute left-[-3px] top-16 h-8 w-1 rounded-r bg-zinc-700" />
          <div className="absolute left-[-3px] top-28 h-8 w-1 rounded-r bg-zinc-700" />
          <div className="absolute left-[-3px] top-40 h-8 w-1 rounded-r bg-zinc-700" />
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center gap-4">
        {/* Prev button */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous screen"
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all",
            activeIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:border-zinc-600 hover:text-zinc-200 cursor-pointer"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => navigate(i)}
              aria-label={`Go to screen ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "20px" : "6px",
                height: "6px",
                backgroundColor: i === activeIndex ? accent : "#3f3f46",
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={activeIndex === screens.length - 1}
          aria-label="Next screen"
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all",
            activeIndex === screens.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:border-zinc-600 hover:text-zinc-200 cursor-pointer"
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <p className="text-[10px] text-zinc-600">
        Use arrows or swipe to navigate screens
      </p>
    </div>
  );
}
