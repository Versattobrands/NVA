import React from "react";
import { type Product } from "../../data/products";
import { ASSETS } from "../../data/assetsMap";

interface NutriprotectionFeatureProps {
  name: string;
  icon?: string;
}

export const NutriprotectionFeature: React.FC<NutriprotectionFeatureProps> = ({ name, icon }) => {
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

interface NutriprotectionSectionProps {
  products: Product[];
}

export const NutriprotectionSection: React.FC<NutriprotectionSectionProps> = ({ products }) => {
  const honra = products.find(p => p.slug === "honra");
  const forcaSanit = products.find(p => p.slug === "forca-sanit");
  const bioshock = products.find(p => p.slug === "bioshock");
  const horizontalProducts = products.filter(p => p.slug !== "honra" && p.slug !== "forca-sanit" && p.slug !== "bioshock");

  const getBgColor = (slug: string) => {
    switch(slug) {
      case "vipmax": return "bg-[#1b365d]";
      case "aminoill": return "bg-[#1a1914]";
      case "essencial": return "bg-[#0f4c3a]";
      case "lemond": return "bg-[#f26b21]";
      case "shock-sk31": return "bg-[#5a2b22]";
      case "suncal": return "bg-[#1b365d]";
      default: return "bg-[#12110c]";
    }
  };

  const getGridCols = (slug: string) => {
    if (["essencial", "lemond", "shock-sk31"].includes(slug)) {
      return "grid-cols-1 md:grid-cols-3";
    }
    return "grid-cols-1 md:grid-cols-2";
  };

  return (
    <div className="w-full flex flex-col gap-12">
      
      {/* HONRA HERO */}
      {honra && (
        <div className="relative w-full rounded-[2rem] overflow-hidden text-white shadow-2xl flex flex-col pb-6 md:pb-12">
          {/* Fundo de imagem cobrindo todo o bloco */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/images/background-honra.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="relative z-10 w-full p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12">
            
            {/* Left side: Logo & Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              {honra.logo && (
                <img
                  src={honra.logo}
                  alt={honra.name}
                  className="w-full max-w-[400px] object-contain drop-shadow-lg mb-8"
                />
              )}
              
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-12">
                {honra.description}
              </p>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-black italic">MULTIAÇÃO</h3>
                <div className="flex flex-row flex-wrap gap-4">
                  <div className="bg-[#2e52b2] text-white font-bold py-3 px-6 border-2 border-[#1b365d] shadow-lg">CONTATO</div>
                  <div className="bg-[#2e52b2] text-white font-bold py-3 px-6 border-2 border-[#1b365d] shadow-lg">RESISTÊNCIA</div>
                  <div className="bg-[#2e52b2] text-white font-bold py-3 px-6 border-2 border-[#1b365d] shadow-lg">NUTRIÇÃO</div>
                </div>
              </div>
            </div>

            {/* Right side: Sidebar Features */}
            <div className="w-full lg:w-1/2 bg-[#2e52b2] rounded-3xl p-8 shadow-2xl border-4 border-[#1b365d]/50 flex flex-col justify-start">
              <div className="flex flex-col gap-8">
                {honra.features.map((feat, idx) => (
                  <NutriprotectionFeature key={idx} name={feat.name} icon={feat.icon} />
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FORÇA SANIT HERO */}
      {forcaSanit && (
        <div className="relative w-full rounded-[2rem] overflow-hidden bg-black text-white shadow-2xl border-b-8 border-novaag-red flex flex-col pb-6 md:pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#000] z-0" />
          
          <div className="relative z-10 w-full p-8 md:p-12 flex flex-col justify-center items-center text-center">
            {forcaSanit.logo && (
              <img
                src={forcaSanit.logo}
                alt={forcaSanit.name}
                className="w-full max-w-[600px] object-contain drop-shadow-lg mb-8"
              />
            )}
            
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-3xl">
              {forcaSanit.description}
            </p>

            <div className="flex flex-row flex-wrap justify-center gap-x-12 gap-y-8">
              {forcaSanit.features.map((feat, idx) => (
                <NutriprotectionFeature key={idx} name={feat.name} icon={feat.icon} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* BIOSHOCK HERO */}
      {bioshock && (
        <div className="relative w-full rounded-[2rem] overflow-hidden bg-[#0e452a] text-white shadow-2xl flex flex-col pb-6 md:pb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b3320] to-[#125936] z-0" />
          
          <div className="relative z-10 w-full p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12">
            
            {/* Left side: Logo & Specificity Boxes */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              {bioshock.logo && (
                <img
                  src={bioshock.logo}
                  alt={bioshock.name}
                  className="w-full max-w-[400px] object-contain drop-shadow-lg mb-12"
                />
              )}
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-[#125936] border-2 border-[#167044] text-white font-bold py-6 px-2 text-center shadow-lg text-sm md:text-base flex items-center justify-center">
                  CONTATO
                </div>
                <div className="bg-[#125936] border-2 border-[#167044] text-white font-bold py-6 px-2 text-center shadow-lg text-sm md:text-base flex items-center justify-center">
                  ESPECIFICIDADE
                </div>
                <div className="bg-[#125936] border-2 border-[#167044] text-white font-bold py-6 px-2 text-center shadow-lg text-sm md:text-base flex items-center justify-center">
                  SINERGIA
                </div>
              </div>

              <div className="flex flex-row justify-between w-full mt-8 gap-4 text-center text-white text-xs md:text-sm font-semibold">
                <div className="flex flex-col items-center flex-1">
                  <div className="w-full aspect-[4/3] rounded-sm mb-2 overflow-hidden bg-[#167044]/50 flex items-center justify-center">
                    <img src={ASSETS.nutriprotectionIcons.bioshock.bugMarrom} alt="Percevejo Marrom" className="w-full h-full object-cover" />
                  </div>
                  <span>Percevejo Marrom<br/><span className="text-[10px] font-normal">(Euschistus Heros)</span></span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-full aspect-[4/3] rounded-sm mb-2 overflow-hidden bg-[#167044]/50 flex items-center justify-center">
                    <img src={ASSETS.nutriprotectionIcons.bioshock.bugVerdePequeno} alt="Percevejo Verde Pequeno" className="w-full h-full object-cover" />
                  </div>
                  <span>Percevejo Verde Pequeno<br/><span className="text-[10px] font-normal">(Piezodorus Guildinii)</span></span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-full aspect-[4/3] rounded-sm mb-2 overflow-hidden bg-[#167044]/50 flex items-center justify-center">
                    <img src={ASSETS.nutriprotectionIcons.bioshock.bugVerde} alt="Percevejo Verde" className="w-full h-full object-cover" />
                  </div>
                  <span>Percevejo Verde<br/><span className="text-[10px] font-normal">(Nezara Viridula)</span></span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-full aspect-[4/3] rounded-sm mb-2 overflow-hidden bg-[#167044]/50 flex items-center justify-center">
                    <img src={ASSETS.nutriprotectionIcons.bioshock.bugBarrigaVerde} alt="Percevejo Barriga Verde" className="w-full h-full object-cover" />
                  </div>
                  <span>Percevejo Barriga Verde<br/><span className="text-[10px] font-normal">(Diceraeus Furcatus)</span></span>
                </div>
              </div>
            </div>

            {/* Right side: Sidebar Features */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start relative">
              <div className="absolute inset-0 bg-[#428135] opacity-20 rounded-3xl z-0" />
              
              <div className="relative z-10 p-8 flex flex-col justify-center h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {bioshock.features.map((feat, idx) => (
                    <NutriprotectionFeature key={idx} name={feat.name} icon={feat.icon} />
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black italic text-right leading-tight drop-shadow-md">
                  Acondicionador<br />
                  para pulverizações<br />
                  EFICIENTES contra<br />
                  PERCEVEJOS
                </h3>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* HORIZONTAL PRODUCTS */}
      <div className="flex flex-col gap-8">
        {horizontalProducts.map(product => (
          <div key={product.slug} className={`rounded-sm overflow-hidden shadow-xl border-t border-white/10 relative ${getBgColor(product.slug)}`}>
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
              
              {/* Content Column (Text + Features) */}
              <div className="w-full lg:w-3/5 flex flex-col justify-between">
                
                {product.description && (
                  <div className="mb-8">
                    <p className="text-white text-sm md:text-base leading-relaxed font-medium whitespace-pre-line text-right">
                      {product.description}
                    </p>
                  </div>
                )}
                
                <div className="flex justify-end">
                  <div className={`grid ${getGridCols(product.slug)} gap-x-8 gap-y-6 justify-items-start`}>
                    {product.features.map((feat, idx) => (
                      <NutriprotectionFeature key={idx} name={feat.name} icon={feat.icon} />
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
