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
      "inline-flex items-center justify-center gap-2 rounded-md font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#05a44d] disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      // Verde escuro — ação principal verde
      primary: "bg-[#2C3F34] text-white hover:bg-[#05a44d] hover:text-white shadow-sm",
      // Vermelho — ação de destaque / CTA principal
      danger: "bg-[#D91E2D] text-white hover:bg-[#05a44d] hover:text-white shadow-sm",
      // Verde limão — botão de acento / CTA
      accent: "bg-[#05a44d] text-white hover:bg-[#04883f] shadow-sm",
      // Outline
      outline: "border-2 border-current text-current hover:bg-[#05a44d] hover:text-white hover:border-[#05a44d]",
      // Ghost
      ghost: "text-[#2C3F34] hover:bg-[#05a44d] hover:text-white",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    // Support asChild pattern — wrap children in a span with all styles
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(baseStyles, variants[variant], sizes[size], className, child.props.className),
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
