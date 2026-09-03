import React from "react";
import { type ProductFeature as ProductFeatureType } from "../../data/products";

interface ProductFeatureProps {
  feature: ProductFeatureType;
}

export const ProductFeature: React.FC<ProductFeatureProps> = ({ feature }) => {
  return (
    <div className="flex items-center justify-center mb-4 mr-2 md:mr-4">
      {/* Icon Circle - only icon, no text */}
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-3 shrink-0">
        {feature.icon ? (
          <img
            src={feature.icon}
            alt={feature.name}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-5 h-5 rounded-full bg-novaag-green" />
        )}
      </div>
    </div>
  );
};
