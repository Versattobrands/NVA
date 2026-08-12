import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-novaag-gold disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      // Verde escuro — ação principal verde
      primary: "bg-[#2C3F34] text-white hover:bg-[#F5A823] hover:text-[#0A0A0A] shadow-sm",
      // Vermelho — ação de destaque / CTA principal
      danger: "bg-[#D91E2D] text-white hover:bg-[#F5A823] hover:text-[#0A0A0A] shadow-sm",
      // Dourado — botão de acento
      accent: "bg-[#F5A823] text-[#0A0A0A] hover:bg-[#e0981a] shadow-sm",
      // Outline
      outline: "border-2 border-current text-current hover:bg-[#F5A823] hover:text-[#0A0A0A] hover:border-[#F5A823]",
      // Ghost
      ghost: "text-[#2C3F34] hover:bg-[#F5A823] hover:text-[#0A0A0A]",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    // Support asChild pattern — wrap children in a span with all styles
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(baseStyles, variants[variant], sizes[size], className),
      });
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
