import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { typography, spacing } from "@/constants/theme";

interface SectionHeadingProps {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        spacing.gap.sm,
        {
          "items-start text-left": align === "left",
          "items-center text-center": align === "center",
          "items-end text-right": align === "right",
        },
        className
      )}
    >
      <h2 className={cn(typography.sectionTitle)}>{title}</h2>
      {subtitle && (
        <p className={cn(typography.sectionSubtitle, "max-w-2xl")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
