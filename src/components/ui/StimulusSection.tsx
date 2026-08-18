import React from "react";
import { type Product } from "../../data/products";

interface StimulusFeatureProps {
  name: string;
  icon?: string;
}

const StimulusFeature: React.FC<StimulusFeatureProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center justify-start">
      {icon ? (
        <img src={icon} alt={name} className="h-16 md:h-20 w-auto object-contain drop-shadow-md" />
      ) : (
        <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white" />
      )}
    </div>
  );
};

interface StimulusSectionProps {
  products: Product[];
}

export const StimulusSection: React.FC<StimulusSectionProps> = ({ products }) => {
  const stimatrixGold = products.find(p => p.slug === "stimatrix-gold");
  const otherProducts = products.filter(p => p.slug !== "stimatrix-gold");

  return (
    <div className="w-full flex flex-col gap-12">
      
      {/* STIMATRIX GOLD HERO */}
      {stimatrixGold && (
        <div className="relative w-full rounded-[2rem] overflow-hidden text-white shadow-2xl flex flex-col pb-6 md:pb-12">
          {/* Fundo de imagem cobrindo todo o bloco */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/images/background-stimatrix.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="relative z-10 w-full p-8 md:p-12 lg:p-16 flex flex-col">
            {/* Logo */}
            {stimatrixGold.logo && (
              <div className="w-full border-b border-novaag-red pb-8 mb-8">
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
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-x-8 gap-y-12">
              {stimatrixGold.features.map((feat, idx) => (
                <StimulusFeature key={idx} name={feat.name} icon={feat.icon} />
              ))}
            </div>
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
              
              {/* Content Column (Text + Features) */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between">
                
                {/* Description Text */}
                {product.description && (
                  <div className="mb-12">
                    <p className="text-white text-sm md:text-base leading-relaxed font-medium whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>
                )}
                
                {/* Features (Icons) */}
                <div className="flex flex-row flex-wrap gap-x-8 gap-y-8">
                  {product.features.map((feat, idx) => (
                    <StimulusFeature key={idx} name={feat.name} icon={feat.icon} />
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
