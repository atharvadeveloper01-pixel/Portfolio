"use client";

import {
  Shield, Cloud, Tag, Bell, BarChart2, Zap,
  Search, Grid, Maximize, Heart, Download, Smartphone,
  Play, Trophy, Package, Repeat, type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ProjectFeature } from "@/types";
import Container from "@/components/layout/Container";

const ICON_MAP: Record<string, LucideIcon> = {
  Shield, Cloud, Tag, Bell, BarChart2, Zap,
  Search, Grid, Maximize, Heart, Download, Smartphone,
  Play, Trophy, Package, Repeat,
};

interface KeyFeaturesProps {
  features: ProjectFeature[];
  accent: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function KeyFeatures({ features, accent }: KeyFeaturesProps) {
  return (
    <section className="w-full py-20 lg:py-28 border-t border-zinc-800/60">
      <Container>
        <div className="mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-600">
            Key Features
          </p>
          <h2 className="text-3xl font-bold text-zinc-100">
            Everything you need, nothing you don&apos;t.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon] ?? Shield;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
                className="group flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 hover:-translate-y-0.5"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `${accent}30`,
                    backgroundColor: `${accent}10`,
                  }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: accent }}
                  />
                </div>
                <div>
                  <h3 className="mb-1.5 text-sm font-semibold text-zinc-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
