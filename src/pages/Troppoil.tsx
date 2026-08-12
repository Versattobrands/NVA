import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FeatureCard } from "../components/ui/Cards";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { cn } from "../lib/utils";
import { 
  Droplet, 
  Droplets, 
  Minimize2, 
  Layers, 
  Wind, 
  Network, 
  ChevronDown, 
  CheckCircle2 
} from "lucide-react";

export const Troppoil = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Qual a composição principal do Troppoil?",
      a: "É um adjuvante formulado a partir de base mineral refinada associada a aditivos vegetais específicos, projetado para estabilidade de calda."
    },
    {
      q: "O produto possui ação anti-deriva?",
      a: "Sim. A formulação auxilia na padronização do espectro de gotas, diminuindo o potencial de arraste pelo vento durante a aplicação."
    },
    {
      q: "Pode ser utilizado em qualquer cultura?",
      a: "O Troppoil apresenta versatilidade para diversas culturas agrícolas. Para orientações específicas de dosagem e misturas (tank mix), consulte nossa equipe técnica."
    },
    {
      q: "Onde consigo a Ficha de Informações de Segurança (FISPQ)?",
      a: "Você pode solicitar a FISPQ e o boletim técnico completo através do nosso formulário de contato abaixo."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION - HOT PAGE */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: '#2C3F34' }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-[#2C3F34] opacity-90"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <span className="inline-block py-1 px-3 rounded-full border text-sm font-bold tracking-wider uppercase mb-6 shadow-sm" style={{ backgroundColor: 'rgba(217,30,45,0.2)', borderColor: '#D91E2D', color: '#FFFFFF' }}>
              Linha de Adjuvantes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight flex flex-col gap-2">
              <span style={{ fontFamily: 'RrBeaver, sans-serif', fontSize: '1.4em', letterSpacing: '2px', fontWeight: 'normal', color: '#FFFFFF' }}>
                Troppoil.
              </span>
              <span><span style={{ color: '#F5A823' }}>Qualidade</span> na aplicação.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed border-l-4 pl-4" style={{ borderColor: '#D91E2D', color: 'rgba(255,255,255,0.9)' }}>
              Adjuvante agrícola multifuncional, desenvolvido para atuar na padronização da calda e reduzir perdas operacionais na pulverização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild style={{ backgroundColor: '#D91E2D', color: '#FFFFFF' }}>
                <a href="#contato-troppoil">Consultar equipe técnica</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10" asChild style={{ color: '#FFFFFF' }}>
                <a href="#contato-troppoil">Solicitar Ficha Técnica</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 flex justify-center animate-in fade-in slide-in-from-right-8 duration-1000">
             <div className="relative w-full max-w-[320px] aspect-[3/4]">
                <div className="absolute inset-0 blur-3xl rounded-full" style={{ backgroundColor: 'rgba(245,168,35,0.2)' }}></div>
                <ImagePlaceholder 
                  text="[Embalagem Troppoil]" 
                  className="bg-white/5 border border-white/20 text-white shadow-2xl rounded-2xl backdrop-blur-sm relative z-10"
                  icon={<Droplet className="w-16 h-16 opacity-50 mb-4" style={{ color: '#F5A823' }} />}
                />
             </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO & CARACTERÍSTICAS */}
      <section className="py-24 border-b" style={{ backgroundColor: '#f9fafb', borderColor: 'rgba(10,10,10,0.1)' }}>
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Características Físico-Químicas." 
            subtitle="Formulações com foco em reduzir a tensão superficial, garantir a homogeneidade da mistura e aumentar a deposição no alvo biológico."
            className="mb-20"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Network />}
              title="Emulsificante"
              description="Estabiliza misturas complexas, evitando a separação de fases na calda."
              className="bg-white border shadow-sm"
              style={{ borderColor: 'rgba(10,10,10,0.1)' }}
            />
            <FeatureCard 
              icon={<Minimize2 />}
              title="Espalhante"
              description="Quebra a gota para ampliar a área de contato foliar."
              className="bg-white border shadow-sm"
              style={{ borderColor: 'rgba(10,10,10,0.1)' }}
            />
            <FeatureCard 
              icon={<Layers />}
              title="Adesivo"
              description="Reduz o escorrimento e favorece a fixação do produto."
              className="bg-white border shadow-sm"
              style={{ borderColor: 'rgba(10,10,10,0.1)' }}
            />
            <FeatureCard 
              icon={<Droplets />}
              title="Compatibilidade"
              description="Avaliado positivamente para a maior parte das estratégias de tank mix."
              className="bg-white border shadow-sm"
              style={{ borderColor: 'rgba(10,10,10,0.1)' }}
            />
            <FeatureCard 
              icon={<Wind />}
              title="Anti-deriva"
              description="Maior controle sobre as gotas finas que se perdem pela ação do vento."
              className="bg-white border shadow-sm"
              style={{ borderColor: 'rgba(10,10,10,0.1)' }}
            />
            <FeatureCard 
              icon={<Droplet />}
              title="Dispersante"
              description="Mantém partículas sólidas distribuídas homogeneamente."
              className="bg-white border shadow-sm"
              style={{ borderColor: 'rgba(10,10,10,0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* APLICAÇÃO (Visual Composition) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <SectionHeading 
                title="Desempenho operacional superior." 
                align="left"
                className="mb-8"
              />
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#0A0A0A', opacity: 0.8 }}>
                O manejo moderno exige que a calda atinja o alvo nas quantidades e condições ideais. O uso de um adjuvante especializado minimiza as falhas operacionais e maximiza a rentabilidade da aplicação.
              </p>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: 'rgba(217,30,45,0.1)', color: '#D91E2D' }}>
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1" style={{ color: '#0A0A0A' }}>Preparo</h4>
                    <p style={{ color: '#0A0A0A', opacity: 0.8 }}>Mistura rápida e homogênea no tanque.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: 'rgba(217,30,45,0.1)', color: '#D91E2D' }}>
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1" style={{ color: '#0A0A0A' }}>Pulverização</h4>
                    <p style={{ color: '#0A0A0A', opacity: 0.8 }}>Gota pesada e no diâmetro correto, reduzindo perdas por deriva.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: 'rgba(217,30,45,0.1)', color: '#D91E2D' }}>
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1" style={{ color: '#0A0A0A' }}>Deposição</h4>
                    <p style={{ color: '#0A0A0A', opacity: 0.8 }}>Produto absorvido pela folha em vez de perdido para o solo.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative h-[500px]">
              <div className="absolute inset-0 rounded-3xl border shadow-inner overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#f9fafb', borderColor: 'rgba(10,10,10,0.1)' }}>
                <ImagePlaceholder 
                  text="[Foto Real: Pulverizador em ação]" 
                  className="bg-transparent border-none" 
                  icon={<Wind className="w-20 h-20 opacity-20" style={{ color: '#2C3F34' }} />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAÇÃO E FORMULÁRIO (CONVERSÃO) */}
      <section id="contato-troppoil" className="py-24 text-white relative" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contexto */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Dados técnicos.
              </h2>
              <p className="text-lg mb-12" style={{ color: 'rgba(255,255,255,0.8)' }}>
                A Novaag disponibiliza documentação completa e corpo técnico qualificado para sanar dúvidas quanto a dosagem, volume de calda e mistura de tanque.
              </p>
              
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Informações Complementares</h3>
                <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Solicite a ficha técnica do produto informando os dados abaixo. Nossa equipe comercial responderá com a documentação em anexo.
                </p>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl relative" style={{ color: '#0A0A0A' }}>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white" style={{ backgroundColor: '#D91E2D' }}>
                <CheckCircle2 className="w-6 h-6" />
              </div>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 className="w-16 h-16 mb-6" style={{ color: '#2C3F34' }} />
                  <h4 className="text-2xl font-bold mb-2">Solicitação recebida.</h4>
                  <p style={{ opacity: 0.8 }}>
                    A documentação solicitada será enviada para o e-mail cadastrado.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Receber Documentação</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input type="text" required className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="Nome completo" />
                      <input type="text" className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="CNPJ / Fazenda" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input type="email" required className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="E-mail profissional" />
                      <input type="tel" required className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="Celular" />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-5">
                      <input type="text" className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="Cidade / Estado" />
                    </div>
                    
                    <textarea rows={2} className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent resize-none" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="Cultura principal (Opcional)"></textarea>

                    <Button type="submit" size="lg" className="w-full mt-2 text-lg shadow-md hover:opacity-90" style={{ backgroundColor: '#D91E2D', color: '#FFFFFF' }}>
                      Solicitar Material Técnico
                    </Button>
                  </form>
                </>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeading title="Perguntas Frequentes" className="mb-12" />
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border rounded-xl overflow-hidden transition-all duration-300"
                style={{ borderColor: 'rgba(10,10,10,0.1)' }}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold" style={{ color: '#0A0A0A' }}>{faq.q}</span>
                  <ChevronDown className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    activeFaq === index ? "rotate-180" : ""
                  )} style={{ color: '#2C3F34' }} />
                </button>
                
                <div className={cn(
                  "px-6 leading-relaxed overflow-hidden transition-all duration-300",
                  activeFaq === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                )} style={{ color: '#0A0A0A', opacity: 0.8 }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-white border-t" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0A0A0A' }}>
            Proteja seu investimento em defensivos.
          </h2>
          <p className="text-lg mb-10" style={{ color: '#0A0A0A', opacity: 0.8 }}>
            Utilize o adjuvante correto e evite perdas na lavoura.
          </p>
          <Button asChild size="lg" className="px-10 shadow-md" style={{ backgroundColor: '#F5A823', color: '#0A0A0A' }}>
            <Link to="/contato">Falar com um Especialista</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
