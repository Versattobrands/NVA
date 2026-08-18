import React from "react";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = "left", 
  className,
  dark = false
}) => {
  return (
    <div className={cn(
      "flex flex-col gap-4 mb-12",
      align === "center" && "items-center text-center",
      align === "right" && "items-end text-right",
      className
    )}>
      {subtitle && (
        <span className={cn(
          "text-sm font-bold uppercase tracking-[0.2em]",
          dark ? "text-novaag-gold" : "text-novaag-red"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-5xl md:text-6xl font-['Aptos',_sans-serif] italic font-black uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]",
        dark ? "text-white" : "text-novaag-black"
      )}>
        {title}
      </h2>
      <div className={cn(
        "w-16 h-1 mt-2",
        dark ? "bg-novaag-gold" : "bg-novaag-red"
      )} />
    </div>
  );
};
