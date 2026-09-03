import React from "react";

interface ProductBenefitsProps {
  benefits?: string[];
  className?: string;
  titleClassName?: string;
  itemClassName?: string;
}

export const ProductBenefits: React.FC<ProductBenefitsProps> = ({
  benefits,
  className = "",
  titleClassName = "",
  itemClassName = ""
}) => {
  if (!benefits || benefits.length === 0) return null;

  return (
    <div className={`mt-6 pt-6 border-t border-white/10 ${className}`}>
      <h4 className={`text-xs md:text-sm font-bold tracking-[0.2em] text-[#05a44d] uppercase mb-4 flex items-center gap-2 ${titleClassName}`}>
        <span className="inline-block w-2 h-2 rounded-full bg-[#05a44d]" />
        BENEFÍCIOS
      </h4>
      <ul className="space-y-2.5">
        {benefits.map((benefit, idx) => (
          <li
            key={idx}
            className={`flex items-start gap-2.5 text-white/90 text-sm md:text-base leading-relaxed ${itemClassName}`}
          >
            <span className="text-[#05a44d] font-black text-base leading-none select-none shrink-0 mt-0.5">
              ✓
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
