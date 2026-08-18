import React from "react";
import { type Product } from "../../data/products";
import { cn } from "../../lib/utils";

interface AplitecFeatureProps {
  name: string;
  icon?: string;
  darkText?: boolean;
  iconOnly?: boolean;
}

const AplitecFeature: React.FC<AplitecFeatureProps> = ({ name, icon, darkText = false, iconOnly = false }) => {
  if (iconOnly) {
    // Só o ícone, sem texto — o nome já está dentro da imagem PNG
    return (
      <div className="flex items-center justify-center">
        {icon ? (
          <img src={icon} alt={name} className="h-20 w-auto object-contain drop-shadow-lg" />
        ) : (
          <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white" />
        )}
      </div>
    );
  }

  // Ícone direto (sem círculo) + texto à direita + linha embaixo
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        {icon ? (
          <img src={icon} alt={name} className="h-14 w-auto object-contain drop-shadow-md" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white" />
        )}
      </div>
      <div className="flex-1 border-b-[3px] border-white pb-1">
        <span className={cn("font-bold text-[10px] md:text-xs leading-tight tracking-wide block uppercase", darkText ? "text-novaag-black" : "text-white")}>
          {name}
        </span>
      </div>
    </div>
  );
};

interface AplitecSectionProps {
  products: Product[];
}

export const AplitecSection: React.FC<AplitecSectionProps> = ({ products }) => {
  const troppoil = products.find(p => p.slug === "troppoil");
  const otherProducts = products.filter(p => p.slug !== "troppoil");

  return (
    <div className="w-full flex flex-col gap-12">
      
      {/* TROPPOIL BANNER */}
      {troppoil && (
        <div className="relative w-full rounded-[2rem] overflow-hidden bg-novaag-green text-white shadow-2xl border-t-8 border-novaag-red flex flex-col md:flex-row pb-6 md:pb-0">
          {/* Fundo decorativo */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img src={troppoil.image} alt="" className="w-full h-full object-cover filter blur-md" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-novaag-black via-novaag-black/90 to-novaag-black/30 z-0" />
          
          {/* Conteúdo */}
          <div className="relative z-10 w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
            <div className="text-novaag-red font-bold text-2xl mb-1 tracking-widest uppercase flex items-center gap-2">
              <span>NVA</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-black font-title uppercase tracking-tighter mb-2 leading-none">
              {troppoil.name}
            </h2>
            {troppoil.subtitle && (
              <p className="text-xl md:text-3xl font-light tracking-wide mb-12 border-b-2 border-white/40 pb-4 inline-block w-fit">
                {troppoil.subtitle}
              </p>
            )}
            
            <div className="flex flex-row flex-wrap gap-8 mt-4">
              {troppoil.features.map((feat, idx) => (
                <AplitecFeature key={idx} name={feat.name} icon={feat.icon} iconOnly />
              ))}
            </div>
          </div>
          
          <div className="relative z-10 w-full md:w-2/5 flex items-center justify-center min-h-[400px] overflow-hidden">
             <img src={troppoil.image} alt="Troppoil" className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-8 bg-novaag-red transform -skew-x-[20deg] origin-left z-20 translate-y-1/2 scale-110"></div>
        </div>
      )}

      {/* GRID OUTROS PRODUTOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {otherProducts.map(product => (
          <div key={product.slug} className="bg-[#1C2C23] rounded-sm overflow-hidden shadow-xl border-t-8 border-novaag-red relative">
            <div className="p-8 h-full flex flex-col relative z-10">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                <div className="flex-shrink-0">
                  <div className="text-novaag-red font-black text-lg tracking-widest mb-1 flex items-center gap-2">
                    NVA
                  </div>
                  <h3 className="text-4xl font-black font-title text-white uppercase tracking-tight">{product.name}</h3>
                </div>
                {product.description && (
                  <p className="text-white/90 text-sm md:text-right max-w-[280px] leading-relaxed font-medium">
                    {product.description}
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-auto pt-8 border-t border-white/5">
                {product.features.map((feat, idx) => (
                  <AplitecFeature key={idx} name={feat.name} icon={feat.icon} />
                ))}
              </div>
              
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
