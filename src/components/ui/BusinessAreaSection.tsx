import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { type BusinessArea } from "../../data/businessAreas";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

interface BusinessAreaSectionProps {
  area: BusinessArea;
  index: number;
}

export const BusinessAreaSection: React.FC<BusinessAreaSectionProps> = ({ area, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={cn(
          "flex flex-col gap-12 lg:gap-20 items-center",
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        )}>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            {area.id === "comex" ? (
              <img 
                src={area.image} 
                alt={area.name} 
                className="w-full max-w-lg object-contain filter hover:brightness-110 transition-all duration-700 hover:-translate-y-2"
              />
            ) : (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl w-full">
                <div className="absolute inset-0 bg-novaag-green/20 mix-blend-multiply z-10 pointer-events-none" />
                <img 
                  src={area.image} 
                  alt={area.name} 
                  className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none rounded-2xl" />
              </div>
            )}
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <SectionHeading 
              title={area.name} 
              subtitle={area.subtitle || "Área de Atuação"} 
              dark 
            />
            
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              {area.description}
            </p>
            
            {area.subAreas && area.subAreas.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {area.subAreas.map((sub, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h4 className="text-novaag-gold font-bold text-xl mb-2">{sub.name}</h4>
                    <p className="text-white text-sm font-semibold mb-4">{sub.subtitle}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{sub.description}</p>
                  </div>
                ))}
              </div>
            )}
            
            {area.id === "agro" ? (
              <div className="mt-4 self-start">
                <Button size="lg" variant="accent" asChild>
                  <a href="#produtos">Conheça os Produtos</a>
                </Button>
              </div>
            ) : (
              <div className="mt-4 self-start">
                <Button size="lg" variant="primary" asChild>
                  <Link to="/contato">Fale com um especialista</Link>
                </Button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};
