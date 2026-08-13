import React from "react";
import { type ProductFeature as ProductFeatureType } from "../../data/products";

interface ProductFeatureProps {
  feature: ProductFeatureType;
}

export const ProductFeature: React.FC<ProductFeatureProps> = ({ feature }) => {
  return (
    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-novaag-gold/50 transition-colors">
      {feature.icon ? (
        <div className="w-10 h-10 shrink-0 bg-white/10 rounded-full flex items-center justify-center p-2">
          <img src={feature.icon} alt="" className="w-full h-full object-contain filter brightness-0 invert" />
        </div>
      ) : (
        <div className="w-2 h-2 rounded-full bg-novaag-gold shrink-0 mx-4" />
      )}
      <span className="text-white text-base font-medium">{feature.name}</span>
    </div>
  );
};
