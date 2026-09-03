import React from "react";
import type { Product } from "../../data/products";
import { ProductBenefits } from "./ProductBenefits";

interface StimulusSectionProps {
  products: Product[];
}

export const StimulusFeature: React.FC<{ name: string; icon?: string }> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center group">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-105">
        {icon ? (
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        ) : (
          <div className="w-full h-full rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-xs text-white/40">
            N/A
          </div>
        )}
      </div>
      <span className="text-[10px] md:text-xs font-bold text-white max-w-[100px] leading-tight uppercase tracking-wider">
        {name}
      </span>
    </div>
  );
};

export const StimulusSection: React.FC<StimulusSectionProps> = ({ products }) => {
  const stimatrixGold = products.find(p => p.slug === "stimatrix-gold");
  const otherProducts = products.filter(p => p.slug !== "stimatrix-gold");

  return (
    <div className="flex flex-col gap-12 w-full">
      {/* STIMATRIX GOLD HERO */}
      {stimatrixGold && (
        <div className="relative w-full rounded-[2rem] overflow-hidden text-white shadow-2xl border-b-8 border-novaag-red flex flex-col pb-6 md:pb-12">
          {/* Background image & gradient overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/images/background-stimatrix.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
          
          <div className="relative z-10 w-full p-8 md:p-12 flex flex-col justify-center">
            {/* Logo */}
            {stimatrixGold.logo && (
              <div className="mb-10 text-center md:text-left">
                <img
                  src={stimatrixGold.logo}
                  alt={stimatrixGold.name}
                  className="w-full max-w-4xl object-contain drop-shadow-lg mx-auto md:mx-0"
                />
              </div>
            )}
            
            {/* Info Blocks (the 3 dark boxes) */}
            {stimatrixGold.infoBlocks && stimatrixGold.infoBlocks.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {stimatrixGold.infoBlocks.map((block, idx) => (
                  <div key={idx} className="bg-[#12110c] rounded-lg p-6 md:p-8 flex flex-col justify-center items-center text-center shadow-lg border border-white/5">
                    <p className="text-white text-sm md:text-base font-medium mb-2">{block.title}</p>
                    <p className="text-white text-2xl md:text-3xl font-black italic mb-2 tracking-tight">{block.highlight}</p>
                    {block.description && (
                      <p className="text-white/90 text-sm md:text-base font-medium">{block.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Features (Icons) */}
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-x-8 gap-y-12 mb-10">
              {stimatrixGold.features.map((feat, idx) => (
                <StimulusFeature key={idx} name={feat.name} icon={feat.icon} />
              ))}
            </div>

            {/* Benefícios */}
            {stimatrixGold.benefits && (
              <div className="max-w-3xl">
                <ProductBenefits benefits={stimatrixGold.benefits} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* OUTROS PRODUTOS (Horizontal Cards) */}
      <div className="flex flex-col gap-8">
        {otherProducts.map(product => (
          <div key={product.slug} className="bg-[#12110c] rounded-sm overflow-hidden shadow-xl border-t-8 border-novaag-red relative">
            <div className="p-8 md:p-12 h-full flex flex-col lg:flex-row gap-8 relative z-10">
              
              {/* Logo Column */}
              <div className="w-full lg:w-1/3 flex-shrink-0 flex items-center border-b lg:border-b-0 lg:border-r border-novaag-red/50 pb-8 lg:pb-0 lg:pr-8">
                {product.logo ? (
                  <img src={product.logo} alt={product.name} className="w-full max-w-[300px] h-auto object-contain drop-shadow-md mx-auto lg:mx-0" />
                ) : (
                  <div>
                    <div className="text-novaag-red font-black text-lg tracking-widest mb-1">NVA</div>
                    <h3 className="text-4xl font-black font-title text-white uppercase tracking-tight">{product.name}</h3>
                  </div>
                )}
              </div>
              
              {/* Content Column (Text + Features + Benefits) */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between">
                
                {/* Description Text */}
                {product.description && (
                  <div className="mb-8">
                    <p className="text-white text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>
                )}
                
                {/* Features (Icons) */}
                <div className="flex flex-row flex-wrap gap-x-8 gap-y-8 mb-8">
                  {product.features.map((feat, idx) => (
                    <StimulusFeature key={idx} name={feat.name} icon={feat.icon} />
                  ))}
                </div>

                {/* Benefícios */}
                {product.benefits && (
                  <ProductBenefits benefits={product.benefits} />
                )}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
