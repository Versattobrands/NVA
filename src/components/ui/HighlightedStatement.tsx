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
        <p className="text-xl md:text-2xl text-novaag-black/70 mb-4 font-body">
          {prefix}
        </p>
      )}
      
      <h3 className="text-4xl md:text-5xl lg:text-7xl font-title font-bold text-novaag-green uppercase tracking-tight leading-tight my-6 break-words">
        {highlight}
      </h3>
      
      {suffix && (
        <p className="text-xl md:text-2xl text-novaag-black/70 mt-4 font-body">
          {suffix}
        </p>
      )}
    </div>
  );
};
