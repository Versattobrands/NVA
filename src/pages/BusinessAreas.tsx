import React from "react";
import { BusinessAreaSection } from "../components/ui/BusinessAreaSection";
import { ProductRow } from "../components/ui/ProductRow";
import { SectionHeading } from "../components/ui/SectionHeading";
import { BUSINESS_AREAS } from "../data/businessAreas";
import { CTASection } from "../components/ui/CTASection";

export const BusinessAreas: React.FC = () => {
  const agroArea = BUSINESS_AREAS.find(a => a.id === "agro");
  const comexArea = BUSINESS_AREAS.find(a => a.id === "comex");
  const industrialArea = BUSINESS_AREAS.find(a => a.id === "industrial");

  return (
    <div className="flex flex-col w-full bg-novaag-black min-h-screen pt-24">
      {/* Agro Section */}
      {agroArea && (
        <div id="agro">
          <BusinessAreaSection area={agroArea} index={0} />
          
          {/* Produtos Agro */}
          {agroArea.products && agroArea.products.length > 0 && (
            <div id="produtos" className="bg-novaag-green py-24">
              <div className="container mx-auto px-4 md:px-6 mb-16">
                <SectionHeading 
                  title="Produtos" 
                  subtitle="Atuação Agro" 
                  dark 
                  align="center"
                />
              </div>
              
              <div className="flex flex-col">
                {agroArea.products.map((product, idx) => (
                  <ProductRow key={product.slug} product={product} index={idx} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Comex Section */}
      {comexArea && (
        <div id="comex">
          <BusinessAreaSection area={comexArea} index={1} />
        </div>
      )}

      {/* Industrial Section */}
      {industrialArea && (
        <div id="industrial">
          <BusinessAreaSection area={industrialArea} index={2} />
        </div>
      )}

      {/* Footer CTA */}
      <CTASection 
        title="Fale com a Novaag."
        text="Conheça nossas áreas de atuação, produtos e possibilidades de parceria."
        buttonText="Fale com um especialista"
        buttonLink="/contato"
      />
    </div>
  );
};
