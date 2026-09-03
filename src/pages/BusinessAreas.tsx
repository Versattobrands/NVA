import React, { useEffect } from "react";
import { BusinessAreaSection } from "../components/ui/BusinessAreaSection";
import { BUSINESS_AREAS } from "../data/businessAreas";
import { APLITEC_PRODUCTS, STIMULUS_PRODUCTS, NUTRIPROTECTION_PRODUCTS, PME_PRODUCTS } from "../data/products";
import { AplitecSection } from "../components/ui/AplitecSection";
import { StimulusSection } from "../components/ui/StimulusSection";
import { NutriprotectionSection } from "../components/ui/NutriprotectionSection";
import { PmeSection } from "../components/ui/PmeSection";
import { CTASection } from "../components/ui/CTASection";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";
import { ASSETS } from "../data/assetsMap";

export const BusinessAreas: React.FC = () => {
  const agroArea = BUSINESS_AREAS.find(a => a.id === "agro");
  const comexArea = BUSINESS_AREAS.find(a => a.id === "comex");
  const industrialArea = BUSINESS_AREAS.find(a => a.id === "industrial");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  }, []);

  return (
    <div className="flex flex-col w-full bg-novaag-black min-h-screen pt-24 relative">
      {/* Decorative Line */}
      <div className="absolute top-24 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-novaag-red to-transparent opacity-30" />

      {/* Intro Banner */}
      <div className="w-full relative py-32 overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${ASSETS.images.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-novaag-black/80 z-10" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic font-title text-white uppercase tracking-tight drop-shadow-2xl">
            NOSSAS <span className="block mt-2 text-[#FF1A1A]">SOLUÇÕES</span>
          </h1>
        </div>
      </div>

      {/* Cards Preview Section */}
      <section className="py-16 md:py-24 bg-novaag-black border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-novaag-gold font-bold uppercase tracking-widest text-xs md:text-sm">
              Conheça em detalhes
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-title text-white uppercase tracking-tight mt-2">
              ÁREAS DE ATUAÇÃO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Agro */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => scrollToSection("agro")}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-novaag-green/20 cursor-pointer border border-white/5 hover:border-novaag-lime/30 transition-colors shadow-2xl"
            >
              <img 
                src={ASSETS.images.field1} 
                alt="Agro" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novaag-black via-novaag-black/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-title font-bold text-white mb-4">Agro</h3>
                <p className="text-white/80 mb-6 line-clamp-3">
                  Especialidades agrícolas, fertilizantes, biofertilizantes e soluções técnicas para os desafios reais do campo.
                </p>
                <Button asChild variant="accent" className="w-full">
                  <a 
                    href="#agro" 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection("agro");
                    }}
                  >
                    Conheça o Agro
                  </a>
                </Button>
              </div>
            </motion.div>
            
            {/* Comex */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => scrollToSection("comex")}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-novaag-green/20 cursor-pointer border border-white/5 hover:border-novaag-lime/30 transition-colors shadow-2xl"
            >
              <img 
                src={ASSETS.images.worldMap} 
                alt="Comex - Expansão Global" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novaag-black via-novaag-black/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-title font-bold text-white mb-4">Comex</h3>
                <p className="text-white/80 mb-6 line-clamp-3">
                  Expansão do know-how brasileiro através de alianças estratégicas e parcerias duradouras.
                </p>
                <Button asChild variant="accent" className="w-full">
                  <a 
                    href="#comex" 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection("comex");
                    }}
                  >
                    Conheça o Comex
                  </a>
                </Button>
              </div>
            </motion.div>
            
            {/* Industrial */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => scrollToSection("industrial")}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-novaag-green/20 cursor-pointer border border-white/5 hover:border-novaag-lime/30 transition-colors shadow-2xl"
            >
              <img 
                src={ASSETS.images.industry} 
                alt="Industrial" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novaag-black via-novaag-black/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-title font-bold text-white mb-4">Industrial</h3>
                <p className="text-white/80 mb-6 line-clamp-3">
                  Insumos especiais, terceirizações e desenvolvimento de soluções para diferentes cadeias produtivas.
                </p>
                <Button asChild variant="accent" className="w-full">
                  <a 
                    href="#industrial" 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection("industrial");
                    }}
                  >
                    Conheça o Industrial
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agro Section */}
      {agroArea && (
        <div id="agro" className="scroll-mt-28">
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

              <div className="container mx-auto px-4 lg:px-12 pb-16">
                <StimulusSection products={STIMULUS_PRODUCTS} />
              </div>

              {/* NUTRIPROTECTION SECTION */}
              <div className="w-full relative py-24 mb-16 overflow-hidden flex items-center justify-center border-t-4 border-novaag-red">
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${ASSETS.images.nutriprotectionBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
                
                <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center">
                  <div className="text-novaag-red font-black text-xl tracking-[0.3em] mb-2">LINHA</div>
                  <h2 className="text-5xl md:text-7xl font-black font-title text-white uppercase tracking-tight drop-shadow-lg">
                    NUTRIPROTECTION
                  </h2>
                </div>
              </div>

              <div className="container mx-auto px-4 lg:px-12 pb-16">
                <NutriprotectionSection products={NUTRIPROTECTION_PRODUCTS} />
              </div>

              {/* PME SECTION */}
              <div className="w-full relative py-24 mb-16 overflow-hidden flex items-center justify-center border-t-4 border-novaag-red">
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${ASSETS.images.pmeBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
                
                <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center">
                  <div className="text-white font-bold text-xl md:text-2xl tracking-[0.1em] mb-2 drop-shadow-md">
                    AGRO-LINHA:
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black font-title text-white uppercase tracking-tight drop-shadow-lg italic">
                    PÓ<br/>MICRONIZADO<br/>ESPECIAL
                  </h2>
                </div>
              </div>

              <div className="container mx-auto px-4 lg:px-12 pb-16">
                <PmeSection products={PME_PRODUCTS} />
              </div>

            </div>
          )}
        </div>
      )}

      {/* Comex Section */}
      {comexArea && (
        <div id="comex" className="scroll-mt-28">
          <BusinessAreaSection area={comexArea} index={1} />
        </div>
      )}

      {/* Industrial Section */}
      {industrialArea && (
        <div id="industrial" className="scroll-mt-28">
          <BusinessAreaSection area={industrialArea} index={2} />
        </div>
      )}

      {/* Footer CTA */}
      <CTASection 
        title="Fale com a NVA."
        text="Conheça nossas áreas de atuação, produtos e possibilidades de parceria."
        buttonText="Fale com um especialista"
        buttonLink="/contato"
      />
    </div>
  );
};
