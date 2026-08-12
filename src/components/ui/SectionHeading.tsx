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
  align = "center",
  className,
  dark = false,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-12",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          dark ? "text-white" : "text-novaag-black"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-3xl text-lg text-balance leading-relaxed",
            dark ? "text-white/70" : "text-novaag-black/60"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
