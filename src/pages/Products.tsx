import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { ProductCard } from "../components/ui/Cards";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { PORTFOLIO } from "../data/products";

export const Products = () => {
  const [activeLineId, setActiveLineId] = useState("aplitec");
  
  const activeLine = PORTFOLIO.find(line => line.id === activeLineId) || PORTFOLIO[0];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
        {/* Imagem de Fundo com Transparência */}
        <div className="absolute inset-0 z-0">
          <img src="/images/products_hero.png" alt="Campo agrícola amanhecendo" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 to-[#2C3F34]/95"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            Portfólio de Soluções.
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Conheça as linhas de produtos e serviços desenvolvidos para otimizar as estratégias de manejo, nutrição e proteção da sua lavoura.
          </p>
        </div>
      </section>

      {/* NAVEGAÇÃO E LISTAGEM DE PRODUTOS */}
      <section className="py-16 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Navegação das Linhas */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {PORTFOLIO.map(line => (
              <button
                key={line.id}
                onClick={() => setActiveLineId(line.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300",
                  activeLineId === line.id 
                    ? "text-white shadow-md"
                    : "text-black hover:bg-black/5"
                )}
                style={activeLineId === line.id ? { backgroundColor: '#D91E2D' } : { backgroundColor: '#f3f4f6' }}
              >
                {line.name}
              </button>
            ))}
          </div>

          {/* Descrição Institucional da Linha Selecionada */}
          <div className="max-w-4xl mx-auto mb-16 text-center p-8 rounded-2xl border" style={{ borderColor: 'rgba(10,10,10,0.1)', backgroundColor: '#f9fafb' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#0A0A0A' }}>Linha {activeLine.name}</h2>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#0A0A0A', opacity: 0.8 }}>
              "{activeLine.description}"
            </p>
            
            {/* Highlights da linha */}
            {activeLine.highlights.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-6 pt-6 border-t" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
                {activeLine.highlights.map((highlight, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md text-xs font-semibold" style={{ backgroundColor: 'rgba(44,63,52,0.1)', color: '#2C3F34' }}>
                    {highlight}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Grid de Produtos */}
          {activeLine.products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activeLine.products.map(product => (
                <ProductCard 
                  key={product.id}
                  title={product.name}
                  description={product.description}
                  tags={product.features}
                  highlight={product.isHero}
                  link={product.isHero ? `/${product.id}` : undefined}
                  warning={product.warning}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed rounded-xl" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0A0A0A' }}>Portfólio em atualização</h3>
              <p style={{ color: '#0A0A0A', opacity: 0.6 }}>Os produtos desta linha estão sendo cadastrados pela nossa equipe técnica.</p>
            </div>
          )}
          
        </div>
      </section>

      {/* ORIENTAÇÃO CTA */}
      <section className="py-24 border-t" style={{ backgroundColor: '#f9fafb', borderColor: 'rgba(10,10,10,0.1)' }}>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-8" style={{ color: '#D91E2D' }}>
            <Search className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0A0A0A' }}>
            Ainda não encontrou o que procurava?
          </h2>
          <p className="text-lg mb-10" style={{ color: '#0A0A0A', opacity: 0.8 }}>
            Consulte a equipe técnica da Novaag para verificar o portfólio completo ou discutir projetos específicos de customização.
          </p>
          <Button asChild size="lg" className="px-10" style={{ backgroundColor: '#F5A823', color: '#0A0A0A' }}>
            <Link to="/contato">Falar com Atendimento</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
