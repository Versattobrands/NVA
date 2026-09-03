import React from "react";
import type { Product } from "../../data/products";
import { NutriprotectionFeature } from "./NutriprotectionSection";
import { ProductBenefits } from "./ProductBenefits";

interface PmeSectionProps {
  products: Product[];
}

export const PmeSection: React.FC<PmeSectionProps> = ({ products }) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {products.map(product => (
        <React.Fragment key={product.slug}>
          <div className={`rounded-sm overflow-hidden shadow-xl border-t border-white/10 relative bg-[#2a382b]`}>
            <div className="p-8 md:p-12 h-full flex flex-col lg:flex-row gap-8 relative z-10">
              
              {/* Logo Column */}
              <div className="w-full lg:w-2/5 flex-shrink-0 flex items-center justify-center lg:justify-start pb-8 lg:pb-0 lg:pr-8">
                {product.logo ? (
                  <img src={product.logo} alt={product.name} className="w-full max-w-[400px] h-auto object-contain drop-shadow-md mx-auto lg:mx-0" />
                ) : (
                  <div>
                    <div className="text-white font-black text-lg tracking-widest mb-1">NVA</div>
                    <h3 className="text-4xl font-black font-title text-white uppercase tracking-tight">{product.name}</h3>
                  </div>
                )}
              </div>
              
              {/* Content Column (Text + Features + Benefits) */}
              <div className="w-full lg:w-3/5 flex flex-col justify-between">
                
                {product.description && (
                  <div className="mb-8">
                    <p className="text-white text-lg md:text-xl leading-relaxed font-medium whitespace-pre-line lg:text-left">
                      {product.description}
                    </p>
                  </div>
                )}
                
                <div className="flex justify-start mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 justify-items-start">
                    {product.features.map((feat, idx) => (
                      <NutriprotectionFeature key={idx} name={feat.name} icon={feat.icon} />
                    ))}
                  </div>
                </div>

                {product.benefits && (
                  <ProductBenefits benefits={product.benefits} />
                )}
                
              </div>
            </div>
          </div>

          {/* Tabelas técnicas do PHN — aparecem logo após o card PHN */}
          {product.slug === "phn" && (
            <div className="w-full relative py-16 overflow-hidden rounded-sm">
              <div
                className="absolute inset-0 z-0 rounded-sm"
                style={{
                  backgroundImage: 'url("/images/background-pme.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-[#1A251E]/90 z-0 rounded-sm" />

              <div className="relative z-10 px-8 md:px-12">
                <h3 className="text-2xl md:text-4xl font-title font-black text-white uppercase tracking-tight mb-10">
                  Informações Técnicas sobre Nutrição de Planta
                </h3>

                <div className="flex flex-col gap-10">
                  <div>
                    <p className="text-white font-bold text-sm md:text-base mb-4">Tabela de Produtos PHN — Nutrientes</p>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/images/PNH/3e3bd24a-d41c-4ddf-9b9c-283c719d34ac.png" alt="Tabela produtos PHN" className="w-full h-auto object-contain bg-[#2a5c3a]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm md:text-base mb-4">Efeito do pH na Disponibilidade dos Nutrientes e na Solubilidade do Alumínio no solo</p>
                    <div className="rounded-2xl overflow-hidden shadow-2xl max-w-3xl">
                      <img src="/images/PNH/3e74413c-d78a-48e6-b5ca-bdd9e16794ea.png" alt="Gráfico pH e nutrientes" className="w-full h-auto object-contain bg-[#2a5c3a]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm md:text-base mb-4">Chave Simplificada para Diagnose Visual de Deficiências</p>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/images/PNH/228f2911-5069-410b-839f-8901937ed35b.png" alt="Diagnose visual de deficiências" className="w-full h-auto object-contain bg-[#2a5c3a]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm md:text-base mb-4">Dinâmica dos nutrientes no Sistema Solo-Planta</p>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/images/PNH/b57bff96-f41d-410d-af5a-3560e180fcf8.png" alt="Dinâmica dos nutrientes" className="w-full h-auto object-contain bg-[#2a5c3a]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tabelas técnicas do PME — aparecem logo após o card PME */}
          {product.slug === "pme" && (
            <div className="w-full relative py-16 overflow-hidden rounded-sm">
              <div
                className="absolute inset-0 z-0 rounded-sm"
                style={{
                  backgroundImage: 'url("/images/background-pme.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-[#1A251E]/90 z-0 rounded-sm" />

              <div className="relative z-10 px-8 md:px-12">
                <h3 className="text-2xl md:text-4xl font-title font-black text-white uppercase tracking-tight mb-10">
                  Informações Técnicas sobre Nutrição de Planta
                </h3>

                <div className="flex flex-col gap-10">
                  {/* Tabela de Produtos PME - 100% */}
                  <div>
                    <p className="text-white font-bold text-sm md:text-base mb-4">Tabela de Produtos PME — Nutrientes</p>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/images/PME/84fc966f-b253-4f69-8df3-a4dfc94e1ae7.png" alt="Tabela produtos PME" className="w-full h-auto object-contain bg-[#2a5c3a]" />
                    </div>
                  </div>
                  
                  {/* As duas últimas tabelas - 50% cada lado a lado */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <p className="text-white font-bold text-sm md:text-base mb-4">Valores de Referência para Interpretação de Análise de Solo</p>
                      <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
                        <img src="/images/PME/cb049eee-038f-4422-a6c4-55e9ebf89598.png" alt="Referências de análise de solo" className="w-full h-full object-contain bg-[#2a5c3a]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm md:text-base mb-4">Exportação de Nutrientes pelas Principais Culturas do Brasil</p>
                      <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
                        <img src="/images/PME/ef6a5410-ec21-4308-85a8-40276781a78e.png" alt="Exportação de nutrientes por cultura" className="w-full h-full object-contain bg-[#2a5c3a]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
