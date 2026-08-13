import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CTASection } from "../components/ui/CTASection";
import { ASSETS } from "../data/assetsMap";
import { AGRO_PRODUCTS } from "../data/products";

export const Troppoil: React.FC = () => {
  const troppoil = AGRO_PRODUCTS.find(p => p.slug === "troppoil");

  return (
    <div className="flex flex-col w-full bg-novaag-black text-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[80vh] flex items-center bg-novaag-green">
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full opacity-20 pointer-events-none">
          <img src={ASSETS.products.troppoil} alt="" className="w-full h-full object-cover md:object-contain object-right filter grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-novaag-green via-novaag-green/90 to-transparent"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex flex-col justify-center mb-12 md:mb-0">
            <span className="text-novaag-gold font-bold tracking-widest uppercase mb-4 text-sm">
              Linha Agro
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-product text-white mb-6">
              Troppoil
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-xl">
              Uma solução de origem mineral com aditivos vegetais para diferentes aspectos da aplicação agrícola.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="accent" className="font-bold">
                <Link to="/contato">Fale com um especialista</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold">
                <a href="#ficha-tecnica">Solicite a ficha técnica</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={ASSETS.products.troppoil} alt="Troppoil" className="max-h-[600px] object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section className="py-24 bg-white text-novaag-black border-t-8 border-novaag-gold">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-title font-bold mb-6">Múltiplas Soluções</h2>
            <p className="text-xl text-novaag-black/70">
              Desenvolvido para atender aos principais desafios da tecnologia de aplicação.
            </p>
          </div>
          
          {troppoil?.features && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {troppoil.features.map((feature, idx) => (
                <div key={idx} className="bg-novaag-black p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-novaag-green transition-colors duration-300">
                  {feature.icon ? (
                    <div className="w-20 h-20 mb-6 bg-white/10 rounded-full flex items-center justify-center p-4">
                      <img src={feature.icon} alt={feature.name} className="w-full h-full object-contain filter brightness-0 invert" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 mb-6 bg-novaag-gold/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-novaag-gold rounded-full" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">{feature.name}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-24 bg-novaag-black relative overflow-hidden">
        <div className="absolute inset-0 bg-novaag-green/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-title font-bold mb-8">A História do Produto</h2>
          <div className="p-8 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm relative">
            <div className="absolute -top-3 -right-3 bg-novaag-gold text-novaag-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Pendente
            </div>
            <p className="text-2xl md:text-3xl font-body leading-relaxed text-white/90 italic">
              "Uma colaboração ítalo-brasileira para o desenvolvimento de uma solução sustentável e biodegradável."
            </p>
            <p className="text-sm text-novaag-red mt-6 font-bold uppercase tracking-widest">
              * Texto sujeito à aprovação final *
            </p>
          </div>
        </div>
      </section>

      {/* FICHA TÉCNICA */}
      <section id="ficha-tecnica" className="py-24 bg-[url('/img-field-4.jpeg')] bg-cover bg-fixed relative">
        <div className="absolute inset-0 bg-novaag-black/80 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-title font-bold mb-6">Quer conhecer todos os detalhes?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Solicite a ficha técnica para consultar informações completas sobre o produto, recomendações e condições de uso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" variant="accent" className="px-8" onClick={() => alert("Funcionalidade de download em desenvolvimento.")}>
              Baixar ficha técnica
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link to="/contato">Falar com um especialista</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASection 
        title="Otimize sua aplicação com Troppoil."
        text="A solução ideal para aumentar a eficiência dos seus tratamentos."
        buttonText="Fale com um especialista"
        buttonLink="/contato"
      />
    </div>
  );
};
