import React from "react";
import { type Product } from "../../data/products";
import { cn } from "../../lib/utils";
import { ASSETS } from "../../data/assetsMap";

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
      <div className="flex items-center justify-start">
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
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row pb-6 md:pb-0">
          {/* Fundo de imagem cobrindo todo o bloco */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/images/background-troppoil.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-novaag-black/40 mix-blend-multiply z-0" />
          
          {/* Esquerda: Produto */}
          <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center min-h-[400px] overflow-hidden p-8 lg:p-12">
             <img src={ASSETS.aplitecIcons.troppoil.produto} alt="Produto Troppoil" className="w-full h-auto max-w-[500px] object-contain drop-shadow-2xl" />
          </div>
          
          {/* Direita: Conteúdo */}
          <div className="relative z-10 w-full md:w-1/2 p-8 md:py-16 md:pr-16 flex flex-col justify-center items-start">
            <img
              src={ASSETS.aplitecIcons.troppoil.logo}
              alt="Troppoil"
              className="h-24 md:h-32 w-auto object-contain mb-6 drop-shadow-lg"
            />

            <p className="text-white text-lg font-medium leading-relaxed mb-8">
              {troppoil.description || "Uma solução de origem mineral com aditivos vegetais para diferentes aspectos da aplicação agrícola."}
            </p>
            
            <div className="flex flex-row flex-wrap gap-x-8 gap-y-6 mb-10">
              {troppoil.features.map((feat, idx) => (
                <AplitecFeature key={idx} name={feat.name} icon={feat.icon} iconOnly />
              ))}
            </div>

            <a href="/troppoil" className="bg-novaag-gold hover:bg-yellow-500 text-novaag-black font-bold py-3 px-8 rounded-md transition-colors shadow-lg">
              Conheça o Troppoil
            </a>
          </div>
        </div>
      )}

      {/* GRID OUTROS PRODUTOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {otherProducts.map(product => (
          <div key={product.slug} className="bg-[#1C2C23] rounded-sm overflow-hidden shadow-xl border-t-8 border-novaag-red relative">
            <div className="p-8 h-full flex flex-col relative z-10">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                <div className="flex-shrink-0">
                  {product.logo ? (
                    <img src={product.logo} alt={product.name} className="h-20 md:h-24 w-auto object-contain drop-shadow-md" />
                  ) : (
                    <>
                      <div className="text-novaag-red font-black text-lg tracking-widest mb-1">NVA</div>
                      <h3 className="text-4xl font-black font-title text-white uppercase tracking-tight">{product.name}</h3>
                    </>
                  )}
                </div>
                {product.description && (
                  <p className="text-white/90 text-sm md:text-right max-w-[280px] leading-relaxed font-medium">
                    {product.description}
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mt-auto pt-8 border-t border-white/5">
                {product.features.map((feat, idx) => (
                  <AplitecFeature key={idx} name={feat.name} icon={feat.icon} iconOnly />
                ))}
              </div>
              
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
