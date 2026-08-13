import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { type Product } from "../../data/products";
import { ProductFeature } from "./ProductFeature";
import { Button } from "./Button";

interface ProductRowProps {
  product: Product;
  index: number;
}

export const ProductRow: React.FC<ProductRowProps> = ({ product, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="py-20 border-b border-white/10 last:border-0 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "flex flex-col gap-12 lg:gap-20",
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        )}>
          
          {/* Image Side */}
          <div className="w-full lg:w-5/12 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] lg:aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-8">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              ) : (
                <div className="text-white/30 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-product opacity-50">{product.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium">Imagem indisponível</span>
                </div>
              )}
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-novaag-green/30 text-novaag-gold border border-novaag-gold/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6 self-start">
              Linha {product.area}
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-product text-white mb-6">
              {product.name}
            </h3>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
              {product.description}
            </p>
            
            {product.features && product.features.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-10 pt-2">
                {product.features.map((feature, idx) => (
                  <ProductFeature key={idx} feature={feature} />
                ))}
              </div>
            )}
            
            {product.validationRequired && (
              <div className="bg-novaag-gold/20 border border-novaag-gold/50 text-novaag-gold p-4 rounded-lg mb-10 text-sm">
                <strong className="block mb-1">Status: Pendente Validação Técnica</strong>
                {product.notes}
              </div>
            )}
            
            {product.featured && (
              <div className="mt-auto self-start">
                <Button asChild size="lg" variant="accent">
                  <Link to={`/${product.slug}`}>
                    Conheça o {product.name}
                  </Link>
                </Button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};
