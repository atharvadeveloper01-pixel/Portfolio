import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Container({ 
  children, 
  className,
  as: Component = "div" 
}: ContainerProps) {
  return (
    <Component 
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </Component>
  );
}
