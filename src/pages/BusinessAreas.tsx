import React from "react";
import { BusinessAreaSection } from "../components/ui/BusinessAreaSection";
import { BUSINESS_AREAS } from "../data/businessAreas";
import { APLITEC_PRODUCTS, STIMULUS_PRODUCTS } from "../data/products";
import { AplitecSection } from "../components/ui/AplitecSection";
import { StimulusSection } from "../components/ui/StimulusSection";
import { CTASection } from "../components/ui/CTASection";
import { ASSETS } from "../data/assetsMap";

export const BusinessAreas: React.FC = () => {
  const agroArea = BUSINESS_AREAS.find(a => a.id === "agro");
  const comexArea = BUSINESS_AREAS.find(a => a.id === "comex");
  const industrialArea = BUSINESS_AREAS.find(a => a.id === "industrial");

  return (
    <div className="flex flex-col w-full bg-novaag-black min-h-screen pt-24 relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 opacity-10">
        <img src={ASSETS.images.hero} alt="" className="w-full h-full object-cover filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-novaag-black/50"></div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col">
      {/* Agro Section */}
      {agroArea && (
        <div id="agro">
          <BusinessAreaSection area={agroArea} index={0} />
          
          {/* Produtos Agro */}
          {agroArea.products && agroArea.products.length > 0 && (
            <div id="produtos" className="bg-[#1A251E] py-24 border-t border-white/5">
              <div className="w-full relative py-24 mb-16 overflow-hidden flex items-center justify-center">
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${ASSETS.images.aplitecBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                
                <div className="relative z-20 container mx-auto px-4 text-center">
                  <h2 className="text-5xl md:text-7xl font-black font-title text-white uppercase tracking-tight">
                    APLITEC
                  </h2>
                </div>
              </div>

              <div className="container mx-auto px-4 lg:px-12 pb-16">
                <AplitecSection products={APLITEC_PRODUCTS} />
              </div>

              {/* STIMULUS SECTION */}
              <div className="w-full relative py-24 mb-16 overflow-hidden flex items-center justify-center border-t-4 border-novaag-red">
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${ASSETS.images.stimulusBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
                
                <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center">
                  <div className="text-novaag-red font-black text-xl tracking-[0.3em] mb-2">LINHA</div>
                  <h2 className="text-5xl md:text-7xl font-black font-title text-white uppercase tracking-tight drop-shadow-lg">
                    STIMULUS
                  </h2>
                </div>
              </div>

              <div className="container mx-auto px-4 lg:px-12">
                <StimulusSection products={STIMULUS_PRODUCTS} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Comex Section */}
      {comexArea && (
        <div id="comex">
          <BusinessAreaSection area={comexArea} index={1} />
        </div>
      )}

      {/* Industrial Section */}
      {industrialArea && (
        <div id="industrial">
          <BusinessAreaSection area={industrialArea} index={2} />
        </div>
      )}

      {/* Footer CTA */}
      <CTASection 
        title="Fale com a Novaag."
        text="Conheça nossas áreas de atuação, produtos e possibilidades de parceria."
        buttonText="Fale com um especialista"
        buttonLink="/contato"
      />
      </div>
    </div>
  );
};
