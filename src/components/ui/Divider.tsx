import { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function Divider({
  className,
  orientation = "horizontal",
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(
        "shrink-0 bg-zinc-800 border-0",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  );
}
