import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FeatureCard } from "../components/ui/Cards";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { Map, Target, Eye, Heart, Zap, Settings, Combine, Sprout, ShieldCheck } from "lucide-react";

export const About = () => {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: '#2C3F34' }}>
        {/* Usando inline styles no background para blindar o Tailwind */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#2C3F34] z-0 opacity-80"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-white">
            Estrutura e experiência no agronegócio.
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            A Novaag é uma indústria focada no desenvolvimento e fabricação de soluções biotecnológicas e químicas, entregando alternativas práticas e eficientes para as demandas diárias do campo.
          </p>
        </div>
      </section>

      {/* NOSSA HISTÓRIA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Uma trajetória construída no campo." 
            subtitle="Com cerca de 25 anos de mercado, consolidamos nossa atuação a partir da união entre conhecimento técnico e experiência prática agrícola."
          />
          
          {/* Linha do tempo visual */}
          <div className="relative max-w-4xl mx-auto mt-20">
            {/* Linha central (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2"></div>
            
            <div className="flex flex-col gap-12">
              {[
                { year: "2015", title: "Fundação", text: "Início das operações focadas na fabricação de adjuvantes e soluções químicas." },
                { year: "2019", title: "Expansão", text: "Aumento da capacidade produtiva e logística para atendimento em novas regiões." },
                { year: "2023", title: "Inovação", text: "Estruturação das linhas biotecnológicas, com soluções de alta performance." },
                { year: "2024", title: "Consolidação", text: "Fortalecimento do portfólio no cenário agrícola nacional." },
                { year: "2026", title: "Futuro", text: "Expansão industrial e foco contínuo no desenvolvimento de formulações modernas." },
              ].map((item, index) => (
                <div key={item.year} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Ponto na linha (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10" style={{ backgroundColor: '#D91E2D' }}></div>
                  
                  <div className={`md:w-1/2 flex flex-col ${index % 2 !== 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} text-center`}>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#F5A823' }}>{item.year}</div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#0A0A0A' }}>{item.title}</h3>
                    <p className="max-w-sm" style={{ color: '#0A0A0A', opacity: 0.8 }}>{item.text}</p>
                  </div>
                  
                  {/* Empty space for the other half */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section className="py-24 border-y" style={{ backgroundColor: '#f9fafb', borderColor: 'rgba(10,10,10,0.1)' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border text-center flex flex-col items-center hover:shadow-md transition-shadow" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(217,30,45,0.1)', color: '#D91E2D' }}>
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A0A0A' }}>Missão</h3>
              <p className="leading-relaxed" style={{ color: '#0A0A0A', opacity: 0.8 }}>
                Ser referência no fornecimento de formulações que resolvem os desafios operacionais e técnicos da agricultura diária.
              </p>
            </div>
            
            <div className="text-white p-10 rounded-2xl shadow-lg border text-center flex flex-col items-center md:-translate-y-4" style={{ backgroundColor: '#2C3F34', borderColor: 'rgba(44,63,52,0.8)' }}>
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-white/90 leading-relaxed">
                Otimizar as margens do produtor rural, apresentando alternativas industriais eficientes e com excelente custo-benefício.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border text-center flex flex-col items-center hover:shadow-md transition-shadow" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(217,30,45,0.1)', color: '#D91E2D' }}>
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A0A0A' }}>Valores</h3>
              <p className="leading-relaxed" style={{ color: '#0A0A0A', opacity: 0.8 }}>
                Ética comercial, transparência na formulação, honestidade e foco na construção de parcerias de longo prazo no agro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Nossos Princípios Operacionais" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
             <div className="flex flex-col items-center text-center group">
               <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2" style={{ backgroundColor: '#f3f4f6', color: '#2C3F34' }}>
                 <Zap className="w-10 h-10 group-hover:text-[#D91E2D]" />
               </div>
               <h4 className="font-bold text-lg" style={{ color: '#0A0A0A' }}>Agilidade</h4>
             </div>
             <div className="flex flex-col items-center text-center group">
               <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2" style={{ backgroundColor: '#f3f4f6', color: '#2C3F34' }}>
                 <Settings className="w-10 h-10 group-hover:text-[#D91E2D]" />
               </div>
               <h4 className="font-bold text-lg" style={{ color: '#0A0A0A' }}>Desenvolvimento</h4>
             </div>
             <div className="flex flex-col items-center text-center group">
               <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2" style={{ backgroundColor: '#f3f4f6', color: '#2C3F34' }}>
                 <Combine className="w-10 h-10 group-hover:text-[#D91E2D]" />
               </div>
               <h4 className="font-bold text-lg" style={{ color: '#0A0A0A' }}>Integração</h4>
             </div>
             <div className="flex flex-col items-center text-center group">
               <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2" style={{ backgroundColor: '#f3f4f6', color: '#2C3F34' }}>
                 <Sprout className="w-10 h-10 group-hover:text-[#D91E2D]" />
               </div>
               <h4 className="font-bold text-lg" style={{ color: '#0A0A0A' }}>Qualidade</h4>
             </div>
             <div className="flex flex-col items-center text-center group">
               <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2" style={{ backgroundColor: '#f3f4f6', color: '#2C3F34' }}>
                 <ShieldCheck className="w-10 h-10 group-hover:text-[#D91E2D]" />
               </div>
               <h4 className="font-bold text-lg" style={{ color: '#0A0A0A' }}>Transparência</h4>
             </div>
          </div>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="py-24 text-white relative overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Capacidade industrial e logística." 
            subtitle="Nossa estrutura fabril e nossos polos de estoque estratégico garantem a produção contínua e a distribuição eficiente de nossas formulações."
            dark
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="w-full aspect-video md:aspect-square lg:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <ImagePlaceholder 
                text="[Imagem: Estrutura Industrial]" 
                icon={<Map className="w-16 h-16 mb-4 opacity-50" />}
                className="bg-white/5 border-none"
              />
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(217,30,45,0.2)', borderColor: '#D91E2D' }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D91E2D' }}></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Planta Industrial</h4>
                  <p className="text-white/70">Linhas de envase e reatores dedicados para formulações químicas e biológicas de alto padrão.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Armazenagem Estratégica</h4>
                  <p className="text-white/70">Logística estruturada para suportar as janelas e as demandas de safra com rapidez.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Atendimento Direto</h4>
                  <p className="text-white/70">Equipe comercial e técnica focada em entregar informações precisas sobre nossa linha.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative" style={{ backgroundColor: '#F5A823' }}>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-10" style={{ color: '#0A0A0A' }}>
            Consulte nosso portfólio completo.
          </h2>
          <Button asChild size="lg" className="text-lg px-10 shadow-xl" style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
            <Link to="/produtos">Ver Linha de Produtos</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
