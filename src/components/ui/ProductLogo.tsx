import React from "react";
import { NvaLogo } from "./NvaLogo";
import { cn } from "../../lib/utils";

interface ProductLogoProps {
  productName: string;
  className?: string;
  textColor?: string;
  lineColor?: string;
  nvaColor?: string;
  subText?: React.ReactNode;
}

export const ProductLogo: React.FC<ProductLogoProps> = ({
  productName,
  className,
  textColor = "text-white",
  lineColor = "border-[#e30613]",
  nvaColor = "text-[#e30613]",
  subText
}) => {
  return (
    <div className={cn("inline-flex flex-col items-start", className)}>
      <div className={cn("w-full border-b-[3px] md:border-b-[4px] pb-1 md:pb-2 flex justify-start", lineColor)}>
        <NvaLogo className={cn("h-4 md:h-6", nvaColor)} />
      </div>
      <div className={cn("font-product font-black uppercase tracking-tighter mt-1 md:mt-2 leading-none", textColor, "text-4xl md:text-6xl")}>
        {productName}
      </div>
      {subText && (
        <div className={cn("font-body mt-2 md:mt-3 text-xs md:text-sm tracking-wide", textColor)}>
          {subText}
        </div>
      )}
    </div>
  );
};
