import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/cn";

type SectionSize = "sm" | "md" | "lg" | "full";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: SectionSize;
  as?: ElementType;
}

export default function Section({ 
  children, 
  className, 
  id, 
  size = "md",
  as: Component = "section" 
}: SectionProps) {
  
  const sizes: Record<SectionSize, string> = {
    sm: "py-8 md:py-10",
    md: "py-10 md:py-14 lg:py-20",
    lg: "py-14 md:py-20 lg:py-28",
    full: "min-h-[100dvh] py-24 flex flex-col justify-center",
  };

  return (
    <Component 
      id={id} 
      className={cn(
        "relative w-full",
        sizes[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
