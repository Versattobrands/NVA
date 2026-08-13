import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

interface CTASectionProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  text,
  buttonText,
  buttonLink
}) => {
  return (
    <section className="py-24 border-t border-novaag-black/10 bg-novaag-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/img-soy.jpeg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-novaag-black via-novaag-black/80 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-title font-bold mb-6">{title}</h2>
        <p className="text-xl md:text-2xl text-white/80 mb-10">{text}</p>
        <Button size="lg" variant="accent" asChild className="px-10 py-6 text-lg">
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};
