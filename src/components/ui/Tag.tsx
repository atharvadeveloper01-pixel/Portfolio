import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-zinc-800/80 px-3 py-1 text-sm font-medium text-zinc-300 ring-1 ring-inset ring-zinc-700/50",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
