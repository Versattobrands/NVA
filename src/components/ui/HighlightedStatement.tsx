import React from "react";

interface HighlightedStatementProps {
  prefix?: string;
  highlight: string;
  suffix?: string;
  className?: string;
}

export const HighlightedStatement: React.FC<HighlightedStatementProps> = ({
  prefix,
  highlight,
  suffix,
  className
}) => {
  return (
    <div className={`py-12 md:py-20 text-center px-4 max-w-5xl mx-auto ${className || ""}`}>
      {prefix && (
        <p className="text-xl md:text-2xl text-white/80 mb-4 font-body drop-shadow-md">
          {prefix}
        </p>
      )}
      
      <h3 className="text-4xl md:text-5xl lg:text-7xl font-title font-bold text-white uppercase tracking-tight leading-tight my-6 break-words drop-shadow-lg">
        {highlight}
      </h3>
      
      {suffix && (
        <p className="text-xl md:text-2xl text-white/80 mt-4 font-body drop-shadow-md">
          {suffix}
        </p>
      )}
    </div>
  );
};
