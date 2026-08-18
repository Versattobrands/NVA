import React from "react";
import { HighlightedStatement } from "../components/ui/HighlightedStatement";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Timeline } from "../components/ui/Timeline";
import { CTASection } from "../components/ui/CTASection";
import { SITE_CONTENT } from "../data/siteContent";
import { ASSETS } from "../data/assetsMap";

export const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-novaag-black text-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[60vh] flex items-center bg-novaag-green">
        <div className="absolute inset-0 z-0">
          <img src={ASSETS.images.aboutHero} alt="Sobre nós" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-novaag-black/50 to-novaag-black"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-title font-bold tracking-tight mb-8">
            {SITE_CONTENT.aboutPage.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            {SITE_CONTENT.aboutPage.hero.subheadline}
          </p>
        </div>
      </section>

      {/* QUEM SOMOS TEXT */}
      <section className="py-24 bg-white text-novaag-black">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.home.aboutSummary.title} align="center" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl text-novaag-black/80 leading-relaxed mb-12 font-medium">
              {SITE_CONTENT.home.aboutSummary.text}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {SITE_CONTENT.home.aboutSummary.pillars.map((pillar, idx) => (
                <span key={idx} className="px-5 py-2 rounded-lg bg-novaag-black/5 border border-novaag-black/10 text-novaag-green font-bold uppercase tracking-wider text-sm">
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA / TIMELINE */}
      <section className="py-24 bg-novaag-black border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.aboutPage.history.title} dark align="center" />
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-white/80 leading-relaxed">
              {SITE_CONTENT.aboutPage.history.text}
            </p>
          </div>
          
          <Timeline />
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section className="py-24 bg-[url('/img-soy.jpeg')] bg-cover bg-fixed relative">
        <div className="absolute inset-0 bg-novaag-black/90 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10 space-y-12">
          <HighlightedStatement 
            prefix="Nossa missão é ser"
            highlight={SITE_CONTENT.institutional.mission.highlight}
            suffix="e desenvolver alternativas viáveis para os desafios técnicos da agricultura."
          />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <HighlightedStatement 
            prefix="Otimizar custos e margens por meio de"
            highlight={SITE_CONTENT.institutional.vision.highlights[0]}
            suffix="com velocidade, assertividade e eficiência."
          />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <HighlightedStatement 
            highlight={SITE_CONTENT.institutional.values.highlight}
            suffix="Gestão transparente e compartilhada, honestidade e ética."
          />
        </div>
      </section>

      {/* ESTRUTURA E CAPACIDADE */}
      <section className="py-24 bg-white text-novaag-black">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.aboutPage.structure.title} align="center" />
          <p className="text-xl text-center text-novaag-black/70 max-w-2xl mx-auto mb-16">
            {SITE_CONTENT.aboutPage.structure.text}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="p-8 bg-novaag-black/5 rounded-2xl border border-novaag-black/10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-novaag-green/30">
              <h4 className="text-2xl font-title font-bold text-novaag-green mb-4">Agro</h4>
              <p className="text-novaag-black/70">Soluções biotecnológicas e químicas para o campo.</p>
            </div>
            <div className="p-8 bg-novaag-black/5 rounded-2xl border border-novaag-black/10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-novaag-green/30">
              <h4 className="text-2xl font-title font-bold text-novaag-green mb-4">Industrial</h4>
              <p className="text-novaag-black/70">Insumos especiais e terceirizações.</p>
            </div>
            <div className="p-8 bg-novaag-black/5 rounded-2xl border border-novaag-black/10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-novaag-green/30">
              <h4 className="text-2xl font-title font-bold text-novaag-green mb-4">Food</h4>
              <p className="text-novaag-black/70">Proteínas e aditivos para health food.</p>
            </div>
            <div className="p-8 bg-novaag-gold/10 rounded-2xl border border-novaag-gold/30 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-novaag-gold/20 hover:border-novaag-gold/60">
              <div className="absolute top-2 right-2 bg-novaag-gold text-novaag-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Em breve</div>
              <h4 className="text-2xl font-title font-bold text-novaag-gold mb-4 mt-2">Atitude</h4>
              <p className="text-novaag-black/70">Propósito, bens de consumo e projetos especiais.</p>
            </div>
          </div>
          
          <div className="bg-novaag-green text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
              <img src={ASSETS.images.map} alt="Mapa" className="w-full h-full object-cover mix-blend-overlay" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-title font-bold mb-8">Nossa Presença</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold text-novaag-gold mb-1">Sorriso – MT</h5>
                  <p className="text-sm text-white/70">Estoque estratégico</p>
                </div>
                <div>
                  <h5 className="font-bold text-novaag-gold mb-1">Campo Novo do Parecis – MT</h5>
                  <p className="text-sm text-white/70">Planta industrial</p>
                </div>
                <div>
                  <h5 className="font-bold text-novaag-gold mb-1">Dumont – SP</h5>
                  <p className="text-sm text-white/70">Planta industrial</p>
                </div>
                <div>
                  <h5 className="font-bold text-novaag-gold mb-1">Jacareí – SP</h5>
                  <p className="text-sm text-white/70">Futura planta industrial</p>
                </div>
                <div>
                  <h5 className="font-bold text-novaag-gold mb-1">Patrocínio de Minas – MG</h5>
                </div>
                <div>
                  <h5 className="font-bold text-novaag-gold mb-1">Jardinópolis – SP</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Vamos construir o futuro juntos?"
        text="Conheça nossas soluções integradas e descubra como podemos otimizar seus resultados."
        buttonText="Fale com um especialista"
        buttonLink="/contato"
      />
    </div>
  );
};
