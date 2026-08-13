import React from "react";
import { type ProductFeature as ProductFeatureType } from "../../data/products";

interface ProductFeatureProps {
  feature: ProductFeatureType;
}

export const ProductFeature: React.FC<ProductFeatureProps> = ({ feature }) => {
  return (
    <div className="flex items-end mb-4 mr-2 md:mr-6">
      {/* Icon Circle */}
      <div className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center p-3 z-10 shrink-0">
        {feature.icon ? (
          <img 
            src={feature.icon} 
            alt={feature.name} 
            className="w-full h-full object-contain" 
          />
        ) : (
          <div className="w-4 h-4 rounded-full bg-novaag-green" />
        )}
      </div>
      
      {/* Line and Text */}
      <div className="border-b-[3px] border-white -ml-8 pl-10 pr-2 pb-1 flex items-end">
        <span className="text-white font-bold uppercase text-[11px] md:text-xs tracking-widest leading-tight max-w-[130px]">
          {feature.name}
        </span>
      </div>
    </div>
  );
};
