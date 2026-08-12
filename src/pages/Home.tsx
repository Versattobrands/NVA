import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FeatureCard, ProductCard, StatCard } from "../components/ui/Cards";
import {
  Settings,
  Zap,
  ArrowRight,
  ShieldCheck,
  Droplet,
  Sprout,
  Combine,
  ChevronRight,
} from "lucide-react";

export const Home = () => {
  return (
    <div className="flex flex-col w-full">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-campo.png')" }}
        />

        {/* Dark green overlay para legibilidade */}
        <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(44,63,52,0.82)' }} />

        {/* Acento vermelho no canto — detalhe visual de marca */}
        <div className="absolute bottom-0 left-0 w-full h-1 z-20 bg-novaag-red" />
        <div className="absolute top-0 right-0 w-2 h-full z-20 bg-novaag-red opacity-60" />

        {/* Conteúdo */}
        <div className="container relative z-20 mx-auto px-4 md:px-6 pt-36 pb-24">
          <div className="flex flex-col md:flex-row items-center gap-16">

            {/* Coluna de texto */}
            <div className="flex-1 text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 mt-4">
                Inovação e honra{" "}
                <span className="block text-novaag-gold">no campo.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
                Soluções biotecnológicas e químicas desenvolvidas para apoiar
                uma agricultura mais eficiente, sustentável e preparada para
                os desafios do campo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/produtos">Conheça nossas soluções</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white text-white hover:bg-[#F5A823] hover:text-[#0A0A0A] hover:border-[#F5A823]"
                >
                  <Link to="/contato">Fale com um especialista</Link>
                </Button>
              </div>

              {/* Badges de credibilidade */}
              <div className="mt-12 flex flex-wrap gap-6">
                {[
                  { n: "25+", l: "Anos de mercado" },
                  { n: "100+", l: "Produtos desenvolvidos" },
                  { n: "∞", l: "Compromisso com o campo" },
                ].map((s) => (
                  <div key={s.n} className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-novaag-gold">{s.n}</span>
                    <span className="text-white/60 text-sm leading-tight">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* A imagem lateral foi removida conforme solicitado */}

          </div>
        </div>
      </section>

      {/* ─── POSICIONAMENTO ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-novaag-black mb-6">
              Tecnologia que entende o campo.
            </h2>
            <p className="text-lg text-novaag-black/60 leading-relaxed">
              A Novaag atua no desenvolvimento e na industrialização de soluções
              para o agronegócio, transformando conhecimento técnico e experiência
              de mercado em alternativas práticas para diferentes desafios agrícolas.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DIFERENCIAIS ─────────────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Uma nova forma de desenvolver soluções para o agro."
            dark
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "Dinamismo", desc: "Respostas ágeis e adaptação constante às demandas do setor." },
              { icon: <Settings className="w-6 h-6" />, title: "Customização", desc: "Soluções desenvolvidas para realidades específicas de cada produtor." },
              { icon: <Combine className="w-6 h-6" />, title: "Flexibilidade", desc: "Integração facilitada em diferentes manejos e culturas." },
              { icon: <Sprout className="w-6 h-6" />, title: "Inovação", desc: "Biotecnologia e formulações químicas de última geração." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Valor Justo", desc: "Otimização de custos sem abrir mão da máxima eficiência." },
            ].map((f) => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.desc}
                className="bg-white/5 border-white/10 hover:bg-white/10 text-white [&_h3]:text-white [&_p]:text-white/60"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUTOS ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <SectionHeading
              title="Soluções para diferentes desafios do campo."
              subtitle="Da nutrição e bioestimulação à qualidade das aplicações, a Novaag reúne produtos desenvolvidos para apoiar estratégias agrícolas mais eficientes."
              align="left"
              className="mb-0"
            />
            <Button variant="ghost" asChild className="shrink-0 group text-novaag-green hover:text-novaag-red">
              <Link to="/produtos">
                Ver todo o portfólio
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              title="Adjuvantes Agrícolas"
              description="Tecnologias para otimizar a qualidade físico-química da calda e a performance da pulverização."
              tags={["Emulsificante", "Espalhante", "Anti-deriva"]}
            />
            <ProductCard
              title="Nutrição e Biofertilizantes"
              description="Complementos desenvolvidos para suprir demandas nutricionais em momentos críticos."
            />
            <ProductCard
              title="Bioestimulação"
              description="Alternativas biotecnológicas para potencializar o metabolismo e a resistência da planta."
            />
            <ProductCard
              title="Proteção e Manejo"
              description="Soluções de apoio defensivo pensadas para o cenário tropical brasileiro."
            />
          </div>
        </div>
      </section>

      {/* ─── TROPPOIL DESTAQUE ────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden text-white" style={{ backgroundColor: '#2C3F34' }}>
        {/* Detalhe dourado decorativo */}
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: '#F5A823' }} />
        <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#F5A823' }} />
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-novaag-gold/20 opacity-30" />
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-novaag-gold/20 opacity-20" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Texto */}
          <div className="flex-1">
            <span className="inline-block text-novaag-gold font-bold uppercase tracking-widest text-sm mb-4">
              Produto em Destaque
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Troppoil: mais eficiência na qualidade da aplicação.
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              De origem mineral e com aditivos vegetais, Troppoil foi desenvolvido
              para atuar em diferentes aspectos da calda e da pulverização agrícola.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {["Emulsificante", "Espalhante", "Adesivo", "Dispersante", "Anti-deriva", "Tank Mix"].map(
                (feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-novaag-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-white/90">{feature}</span>
                  </div>
                )
              )}
            </div>

            <Button variant="accent" size="lg" asChild>
              <Link to="/troppoil">Conheça o Troppoil</Link>
            </Button>
          </div>

          {/* Card visual do produto */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="aspect-[3/4] bg-white/10 border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-4 backdrop-blur-sm p-8">
                <div className="w-24 h-32 bg-novaag-black rounded-lg shadow-xl flex flex-col items-center justify-end pb-4 border border-novaag-gold/30">
                  <div className="w-3/4 h-1.5 bg-novaag-gold rounded-sm mb-2" />
                  <span className="text-novaag-gold text-[10px] font-bold tracking-widest uppercase">Troppoil</span>
                </div>
                <Droplet className="w-8 h-8 text-novaag-gold opacity-60" />
                <p className="text-white/60 text-xs text-center">Embalagem ilustrativa</p>
              </div>
              {/* Badge de destaque */}
              <div className="absolute -top-4 -right-4 bg-novaag-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
                Destaque
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSTITUCIONAL / HISTÓRIA ─────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Bloco visual — imagem + badge */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-novaag-green/10 border border-novaag-green/20 flex items-center justify-center">
                <img
                  src="/hero-campo.png"
                  alt="Novaag — Experiência no campo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge de anos */}
              <div className="absolute -bottom-6 -right-6 bg-novaag-red text-white p-6 rounded-xl shadow-xl text-center">
                <div className="text-4xl font-bold leading-none">25<span className="text-novaag-gold text-2xl">+</span></div>
                <div className="text-xs font-semibold mt-1 uppercase tracking-wider opacity-90">Anos de<br />experiência</div>
              </div>
              {/* Detalhe verde */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-novaag-green/20 border-2 border-novaag-green/30" />
            </div>

            {/* Texto */}
            <div className="w-full lg:w-1/2 lg:pl-6">
              <span className="inline-block text-novaag-red font-bold uppercase tracking-widest text-sm mb-4">
                Quem somos
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-novaag-black mb-6">
                Experiência, técnica e visão de futuro.
              </h2>
              <p className="text-lg text-novaag-black/60 mb-10 leading-relaxed">
                Com cerca de 25 anos de experiência no mercado agrícola brasileiro,
                a Novaag constrói sua trajetória associando técnica, conhecimento e
                experiência para promover soluções sustentáveis e inovadoras.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/quem-somos">Conheça nossa história</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#D91E2D' }}>
        {/* Detalhe decorativo */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px"
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <span className="inline-block text-novaag-gold font-bold uppercase tracking-widest text-sm mb-4">
            Vamos conversar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos encontrar a melhor solução para o seu desafio?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Fale com a equipe Novaag e saiba mais sobre nossas tecnologias,
            produtos e possibilidades de parceria.
          </p>
          <Button variant="accent" size="lg" asChild className="text-lg px-12 shadow-xl">
            <Link to="/contato">Fale com um especialista</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};
