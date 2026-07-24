"use client";

import { motion } from "framer-motion";
import type { ArchitectureNode } from "@/types";
import Container from "@/components/layout/Container";

const GROUP_COLORS: Record<string, string> = {
  Frontend: "#3B82F6",
  Architecture: "#8B5CF6",
  Backend: "#10B981",
  Networking: "#F59E0B",
  External: "#EC4899",
  Storage: "#6366F1",
  Optimization: "#14B8A6",
  Interaction: "#F97316",
  Logic: "#EF4444",
  Deployment: "#22C55E",
};

interface ArchitectureFlowProps {
  nodes: ArchitectureNode[];
  accent: string;
}

export default function ArchitectureFlow({ nodes, accent }: ArchitectureFlowProps) {
  return (
    <section className="w-full py-20 lg:py-28 border-t border-zinc-800/60">
      <Container>
        <div className="mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-600">
            Architecture
          </p>
          <h2 className="text-3xl font-bold text-zinc-100">
            How the pieces fit together.
          </h2>
        </div>

        <div className="flex flex-col items-center gap-0 max-w-lg mx-auto lg:mx-0">
          {nodes.map((node, i) => {
            const color = GROUP_COLORS[node.group] ?? accent;
            return (
              <div key={node.label} className="flex flex-col items-center w-full">
                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  }}
                  className="w-full flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-4 hover:border-zinc-700 hover:bg-zinc-900/70 transition-colors cursor-default"
                >
                  {/* Color dot */}
                  <div
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 0 4px ${color}20`,
                    }}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-zinc-100">{node.label}</p>
                    <p className="text-xs text-zinc-500">{node.sublabel}</p>
                  </div>
                  {/* Group badge */}
                  <span
                    className="hidden sm:inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold"
                    style={{
                      color,
                      borderColor: `${color}30`,
                      backgroundColor: `${color}10`,
                    }}
                  >
                    {node.group}
                  </span>
                </motion.div>

                {/* Connector line */}
                {i < nodes.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                    style={{ transformOrigin: "top" }}
                    className="w-px h-8 bg-gradient-to-b from-zinc-700 to-zinc-800"
                  />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
