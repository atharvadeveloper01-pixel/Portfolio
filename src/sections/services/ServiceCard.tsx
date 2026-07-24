import {
  Smartphone, Layers, Database, Link, Palette, Zap, Wrench, Monitor,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types";
import { cn } from "@/lib/cn";

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone, Layers, Database, Link, Palette, Zap, Wrench, Monitor,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Smartphone;

  return (
    <div className={cn(
      "group relative flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6",
      "transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 hover:-translate-y-0.5",
    )}>
      {/* Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
        <Icon className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-accent" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-zinc-100">{service.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-500">{service.description}</p>
      </div>

      {/* Benefits */}
      <ul className="mt-auto flex flex-col gap-1.5">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-xs text-zinc-400">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
