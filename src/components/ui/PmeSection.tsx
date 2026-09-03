import React from "react";
import type { Product } from "../../data/products";
import { NutriprotectionFeature } from "./NutriprotectionSection";
import { ProductBenefits } from "./ProductBenefits";

interface PmeSectionProps {
  products: Product[];
}

export const PmeSection: React.FC<PmeSectionProps> = ({ products }) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {products.map(product => (
        <div key={product.slug} className={`rounded-sm overflow-hidden shadow-xl border-t border-white/10 relative bg-[#2a382b]`}>
          <div className="p-8 md:p-12 h-full flex flex-col lg:flex-row gap-8 relative z-10">
            
            {/* Logo Column */}
            <div className="w-full lg:w-2/5 flex-shrink-0 flex items-center justify-center lg:justify-start pb-8 lg:pb-0 lg:pr-8">
              {product.logo ? (
                <img src={product.logo} alt={product.name} className="w-full max-w-[400px] h-auto object-contain drop-shadow-md mx-auto lg:mx-0" />
              ) : (
                <div>
                  <div className="text-white font-black text-lg tracking-widest mb-1">NVA</div>
                  <h3 className="text-4xl font-black font-title text-white uppercase tracking-tight">{product.name}</h3>
                </div>
              )}
            </div>
            
            {/* Content Column (Text + Features + Benefits) */}
            <div className="w-full lg:w-3/5 flex flex-col justify-between">
              
              {product.description && (
                <div className="mb-8">
                  <p className="text-white text-lg md:text-xl leading-relaxed font-medium whitespace-pre-line lg:text-left">
                    {product.description}
                  </p>
                </div>
              )}
              
              <div className="flex justify-start mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 justify-items-start">
                  {product.features.map((feat, idx) => (
                    <NutriprotectionFeature key={idx} name={feat.name} icon={feat.icon} />
                  ))}
                </div>
              </div>

              {product.benefits && (
                <ProductBenefits benefits={product.benefits} />
              )}
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
