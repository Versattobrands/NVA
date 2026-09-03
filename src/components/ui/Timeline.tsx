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
    year: "2015",
    title: "ITATEC",
    image: ASSETS.logos.itatec,
    description: "Início das operações com a marca ITATEC."
  },
  {
    year: "2015",
    title: "SC.MT",
    image: ASSETS.logos.scMt,
    description: "Atuação sob a marca SC.MT."
  },
  {
    year: "2019",
    title: "NovaAG",
    image: ASSETS.logos.novaAgAntigoSvg,
    description: "Evolução do modelo de negócio e marca NovaAG."
  },
  {
    year: "2023",
    title: "ENBI",
    image: ASSETS.logos.enbi,
    description: "Modernização industrial consolidando o Grupo ENBI: Europlant Novaag Biotecnologia Industrial Ltda."
  },
  {
    year: "2024",
    title: "NovaAG",
    image: ASSETS.logos.novaAgAntigo,
    description: "Nova identidade visual NOVAAG."
  },
  {
    year: "2026",
    title: "NVA",
    image: ASSETS.logos.novaAg2026,
    description: "O Futuro: Inovação e expansão como NVA."
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
                <div className="bg-novaag-green p-6 rounded-xl shadow-lg border border-novaag-green/30 hover:border-novaag-gold/50 transition-colors">
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
                        className="h-full object-contain transition-all"
                      />
                    </div>
                  )}
                  
                  <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                  
                  {event.description && (
                    <p className="text-white/80 text-sm">
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
