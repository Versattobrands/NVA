import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { HighlightedStatement } from "../components/ui/HighlightedStatement";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/ui/CTASection";
import { SITE_CONTENT } from "../data/siteContent";
import { ASSETS } from "../data/assetsMap";
import { AGRO_PRODUCTS } from "../data/products";
import { motion } from "framer-motion";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-novaag-black text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.images.hero} 
            alt="Campo agrícola institucional" 
            className="w-full h-full object-cover filter brightness-[0.35]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-novaag-black/50 via-novaag-black/20 to-novaag-black"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center max-w-4xl pt-12 pb-24">
          <div className="mb-6 animate-in slide-in-from-bottom-4 duration-700">
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-widest text-novaag-gold">
              {SITE_CONTENT.home.hero.stamp}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-title font-black italic uppercase tracking-tight mb-8 animate-in slide-in-from-bottom-6 duration-1000">
            {SITE_CONTENT.home.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mb-12 animate-in slide-in-from-bottom-8 duration-1000 delay-150">
            {SITE_CONTENT.home.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button asChild size="lg" variant="accent" className="font-bold text-lg px-8">
              <Link to="/quem-somos">Conheça a Novaag</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8 bg-transparent border-white/30 text-white hover:bg-white/10">
              <Link to="/areas-de-atuacao">Áreas de atuação</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS RESUMIDO */}
      <section className="py-24 bg-novaag-black border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.home.aboutSummary.title} dark align="center" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl text-white/80 leading-relaxed mb-12">
              {SITE_CONTENT.home.aboutSummary.text}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {SITE_CONTENT.home.aboutSummary.pillars.map((pillar, idx) => (
                <span key={idx} className="px-5 py-2 rounded-lg bg-novaag-green/50 border border-novaag-green text-novaag-gold font-bold uppercase tracking-wider text-sm">
                  {pillar}
                </span>
              ))}
            </div>
            <Button asChild variant="outline" className="border-novaag-gold text-novaag-gold hover:bg-novaag-gold hover:text-novaag-black">
              <Link to="/quem-somos">Conheça nossa história</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO, VALORES */}
      <section className="py-24 bg-novaag-green bg-cover bg-center relative" style={{ backgroundImage: "url('/images/background-conexao-nva.png')" }}>
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex flex-col gap-6">
            
            {/* MISSÃO */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 w-full">
              <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end pr-0 md:pr-8">
                <h2 className="text-4xl md:text-5xl font-title font-black text-white italic tracking-widest uppercase drop-shadow-md">MISSÃO</h2>
              </div>
              <div className="w-full md:w-2/3 bg-[#243525]/90 border border-[#3b593d] rounded-tl-sm rounded-bl-sm rounded-tr-[2rem] rounded-br-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#478f44]"></div>
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed font-body">
                  Ser <span className="font-black italic">REFERÊNCIA EM INOVAÇÕES</span> e alternativas viáveis aos problemas técnicos da agricultura.
                </p>
              </div>
            </div>

            {/* VISÃO */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 w-full">
              <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end pr-0 md:pr-8">
                <h2 className="text-4xl md:text-5xl font-title font-black text-white italic tracking-widest uppercase drop-shadow-md">VISÃO</h2>
              </div>
              <div className="w-full md:w-2/3 bg-[#243525]/90 border border-[#3b593d] rounded-tl-sm rounded-bl-sm rounded-tr-[2rem] rounded-br-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#478f44]"></div>
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed font-body">
                  Otimizar custos e margens das lavouras defendendo o ponto de vista do agricultor através de <span className="font-black italic">SOLUÇÕES SUSTENTÁVEIS</span> apoiados pela filosofia de velocidade, assertividade e eficiência.
                </p>
              </div>
            </div>

            {/* VALORES */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 w-full">
              <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end pr-0 md:pr-8">
                <h2 className="text-4xl md:text-5xl font-title font-black text-white italic tracking-widest uppercase drop-shadow-md">VALORES</h2>
              </div>
              <div className="w-full md:w-2/3 bg-[#243525]/90 border border-[#3b593d] rounded-tl-sm rounded-bl-sm rounded-tr-[2rem] rounded-br-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#478f44]"></div>
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed font-body">
                  <span className="font-black italic">PAIXÃO PELO AGRONEGÓCIO</span>, gestão transparente e compartilhada, honestidade e ética.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO PREVIEW */}
      <section className="py-24 bg-novaag-black">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.home.businessAreas.title} dark align="center" />
          <p className="text-xl text-center text-white/70 max-w-2xl mx-auto mb-16">
            {SITE_CONTENT.home.businessAreas.text}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Agro */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-novaag-green/20"
            >
              <img src={ASSETS.images.field1} alt="Agro" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-novaag-black via-novaag-black/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-title font-bold text-white mb-4">Agro</h3>
                <p className="text-white/80 mb-6 line-clamp-3">
                  Especialidades agrícolas, fertilizantes, biofertilizantes e soluções técnicas para os desafios reais do campo.
                </p>
                <Button asChild variant="accent" className="w-full">
                  <Link to="/areas-de-atuacao#agro">Conheça o Agro</Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Comex */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-novaag-green/20"
            >
              <img src={ASSETS.images.map} alt="Comex" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-novaag-black via-novaag-black/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-title font-bold text-white mb-4">Comex</h3>
                <p className="text-white/80 mb-6 line-clamp-3">
                  Expansão do know-how brasileiro através de alianças estratégicas e parcerias duradouras.
                </p>
                <Button asChild variant="accent" className="w-full">
                  <Link to="/areas-de-atuacao#comex">Conheça o Comex</Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Industrial */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-novaag-green/20"
            >
              <img src={ASSETS.images.industry} alt="Industrial" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-novaag-black via-novaag-black/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-title font-bold text-white mb-4">Industrial</h3>
                <p className="text-white/80 mb-6 line-clamp-3">
                  Insumos especiais, terceirizações e desenvolvimento de soluções para diferentes cadeias produtivas.
                </p>
                <Button asChild variant="accent" className="w-full">
                  <Link to="/areas-de-atuacao#industrial">Conheça o Industrial</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* PRODUTOS AGRO PREVIEW */}
      <section className="py-24 bg-white text-novaag-black">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={SITE_CONTENT.home.agroProducts.title} align="center" />
          <p className="text-xl text-center text-novaag-black/70 max-w-2xl mx-auto mb-16">
            {SITE_CONTENT.home.agroProducts.text}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
            {AGRO_PRODUCTS.map(p => (
              <span key={p.slug} className="px-4 py-2 bg-novaag-black/5 rounded-full font-product text-lg text-novaag-black/80">
                {p.name}
              </span>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="accent" className="px-12 bg-novaag-green text-white hover:bg-novaag-green/90">
              <Link to="/areas-de-atuacao#produtos">Conheça todos os produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TROPPOIL HIGHLIGHT */}
      <section className="py-24 bg-novaag-green relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-20">
          <img src={ASSETS.images.troppoilBackground} alt="" className="w-full h-full object-cover object-left filter grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-novaag-green to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center">
            <img src={ASSETS.aplitecIcons.troppoil.produto} alt="Troppoil" className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl scale-110" />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-5xl md:text-7xl font-product text-novaag-gold mb-6">
              {SITE_CONTENT.home.troppoil.title}
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              {SITE_CONTENT.home.troppoil.text}
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-10 text-white font-bold">
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-novaag-gold"/> Emulsificante</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-novaag-gold"/> Espalhante</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-novaag-gold"/> Adesivo</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-novaag-gold"/> Anti-deriva</li>
            </ul>
            <Button asChild size="lg" variant="primary">
              <Link to="/troppoil">Conheça o Troppoil</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASection 
        title={SITE_CONTENT.home.cta.title}
        text={SITE_CONTENT.home.cta.text}
        buttonText="Fale com um especialista"
        buttonLink="/contato"
      />
    </div>
  );
};
