import React from "react";
import { cn } from "../../lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FeatureCard = ({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-white p-8 rounded-xl shadow-sm border border-novaag-black/10 hover:shadow-md transition-all duration-300 group hover:-translate-y-1",
      className
    )}
  >
    <div className="w-12 h-12 rounded-lg bg-novaag-green/10 text-novaag-green flex items-center justify-center mb-6 group-hover:bg-novaag-red group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-novaag-black mb-3">{title}</h3>
    <p className="text-novaag-black/60 leading-relaxed">{description}</p>
  </div>
);

export const ProductCard = ({
  title,
  description,
  tags,
  link,
  highlight = false,
  warning,
  imageUrl,
  className,
}: {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  highlight?: boolean;
  warning?: string;
  imageUrl?: string;
  className?: string;
}) => (
  <div
    className={cn(
      "flex flex-col bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      className
    )}
    style={{ borderColor: highlight ? '#D91E2D' : 'rgba(10,10,10,0.1)' }}
  >
    {/* Card image area */}
    <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'rgba(10,10,10,0.06)' }}>
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-20 h-28 rounded-md shadow-md flex flex-col justify-end items-center pb-2 relative z-10" style={{ backgroundColor: '#2C3F34' }}>
          <div className="w-3/4 h-1.5 mb-1 rounded-sm" style={{ backgroundColor: '#F5A823' }} />
          <div className="text-[9px] font-bold text-white text-center px-1">{title}</div>
        </div>
      )}
    </div>
    <div className="p-6 flex-1 flex flex-col">
      {highlight && (
        <span className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#D91E2D' }}>
          Produto em Destaque
        </span>
      )}
      <h3 className="text-xl font-bold mb-3" style={{ color: '#0A0A0A' }}>{title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ color: '#0A0A0A', opacity: 0.7 }}>{description}</p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-semibold rounded-full border"
              style={{ backgroundColor: 'rgba(245,168,35,0.15)', color: '#2C3F34', borderColor: 'rgba(245,168,35,0.3)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {warning && (
        <div className="mb-6 p-3 rounded bg-red-50 text-xs border border-red-200" style={{ color: '#D91E2D' }}>
          <strong>Atenção:</strong> {warning}
        </div>
      )}

      {link ? (
        <Link
          to={link}
          className="inline-flex items-center font-semibold transition-colors group"
          style={{ color: '#2C3F34' }}
        >
          Conhecer produto{" "}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <span className="inline-flex items-center font-medium cursor-not-allowed text-sm" style={{ color: 'rgba(10,10,10,0.3)' }}>
          Consulte nossa equipe
        </span>
      )}
    </div>
  </div>
);

export const StatCard = ({
  number,
  label,
  className,
}: {
  number: string;
  label: string;
  className?: string;
}) => (
  <div className={cn("text-center p-6 border-l-4 border-novaag-red", className)}>
    <div className="text-4xl md:text-5xl font-bold text-novaag-black mb-2">{number}</div>
    <div className="text-sm font-semibold text-novaag-black/50 uppercase tracking-wider">{label}</div>
  </div>
);

export const IconFeature = ({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => (
  <div className={cn("flex gap-4 items-start", className)}>
    <div className="mt-1 w-10 h-10 rounded-full bg-novaag-gold/20 text-novaag-gold flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-novaag-black mb-1">{title}</h4>
      <p className="text-novaag-black/60 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);
