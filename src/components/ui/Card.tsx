import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-800/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
