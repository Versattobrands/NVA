import React from "react";
import { cn } from "../../lib/utils";
import { ASSETS } from "../../data/assetsMap";

interface TimelineEvent {
  year: string;
  title: string;
  image?: string;
  description?: string;
}

const EVENTS: TimelineEvent[] = [
  {
    year: "199X",
    title: "Início da trajetória",
    image: ASSETS.logos.enbi,
    description: "Com cerca de 25 anos de experiência no mercado agrícola brasileiro..."
  },
  {
    year: "2015",
    title: "NovaAG",
    image: ASSETS.logos.novaAgAntigo,
    description: "Consolidação da empresa no mercado promovendo sustentabilidade e inovação."
  },
  {
    year: "2019",
    title: "Evolução da marca",
    image: ASSETS.logos.novaAgAntigoSvg
  },
  {
    year: "2023",
    title: "Itatec",
    image: ASSETS.logos.itatec,
    description: "TODO: Inserir descrição do marco Itatec."
  },
  {
    year: "2024",
    title: "Planta Industrial",
    image: ASSETS.logos.scMt,
    description: "Planta em Campo Novo do Parecis - MT."
  },
  {
    year: "2026",
    title: "O Futuro",
    image: ASSETS.logos.novaAg2026,
    description: "Inovação e expansão."
  }
];

export const Timeline: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-12">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-novaag-green/20 transform md:-translate-x-1/2" />
      
      <div className="flex flex-col gap-12">
        {EVENTS.map((event, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-novaag-red transform -translate-x-[6px] md:-translate-x-1/2 z-10 border-4 border-white" />
              
              {/* Content Box */}
              <div className={cn(
                "w-full md:w-1/2 pl-12 md:pl-0",
                isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
              )}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-novaag-black/5 hover:border-novaag-gold/50 transition-colors">
                  <span className="text-novaag-gold font-bold text-2xl mb-2 block font-title">
                    {event.year}
                  </span>
                  
                  {event.image && (
                    <div className={cn(
                      "h-16 mb-4 flex",
                      isEven ? "md:justify-end" : "md:justify-start"
                    )}>
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                  )}
                  
                  <h4 className="text-xl font-bold text-novaag-black mb-2">{event.title}</h4>
                  
                  {event.description && (
                    <p className="text-novaag-black/70 text-sm">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
