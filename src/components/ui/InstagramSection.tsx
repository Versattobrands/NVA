import React, { useEffect } from "react";

/**
 * Instagram Feed Section
 *
 * Uses Behold.so to embed the latest posts from @nva.ind.br
 *
 * SETUP (one-time, free):
 * 1. Go to https://behold.so and create a free account
 * 2. Connect your Instagram account @nva.ind.br
 * 3. Create a feed and copy the Feed ID (looks like: XXXXXXXXXXXXXXXX)
 * 4. Replace "YOUR_FEED_ID_HERE" below with your actual Feed ID
 */

const BEHOLD_FEED_ID = "YOUR_FEED_ID_HERE"; // <-- substitua pelo Feed ID do Behold.so
const INSTAGRAM_URL = "https://www.instagram.com/nva.ind.br/";
const INSTAGRAM_HANDLE = "@nva.ind.br";

/** Inline Instagram SVG icon */
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const InstagramSection: React.FC = () => {
  const feedConfigured = BEHOLD_FEED_ID !== "YOUR_FEED_ID_HERE";

  useEffect(() => {
    if (!feedConfigured) return;
    // Behold.so script loader
    const existing = document.querySelector('script[src*="behold.so"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://w.behold.so/widget.js";
      script.type = "module";
      document.head.appendChild(script);
    }
  }, [feedConfigured]);

  return (
    <section className="py-24 bg-novaag-black border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group mb-4"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <InstagramIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/60 font-bold text-lg group-hover:text-novaag-gold transition-colors">
              {INSTAGRAM_HANDLE}
            </span>
          </a>
          <h2 className="text-3xl md:text-4xl font-title font-black text-white uppercase tracking-tight mb-3">
            Siga-nos no <span className="text-novaag-gold">Instagram</span>
          </h2>
          <p className="text-white/60 max-w-xl">
            Acompanhe as novidades, lançamentos e conteúdos exclusivos da NVA.
          </p>
        </div>

        {/* Feed */}
        {feedConfigured ? (
          /* Behold.so widget — substitua YOUR_FEED_ID_HERE pelo ID real */
          <div className="w-full">
            {/* @ts-ignore */}
            <behold-widget feed-id={BEHOLD_FEED_ID}></behold-widget>
          </div>
        ) : (
          /* Placeholder visual enquanto o Feed ID não está configurado */
          <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full opacity-40 pointer-events-none select-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-novaag-green/20 border border-novaag-green/10 flex items-center justify-center"
                >
                  <InstagramIcon className="w-8 h-8 text-white/20" />
                </div>
              ))}
            </div>
            <div className="bg-novaag-green/10 border border-novaag-green/20 rounded-xl px-6 py-4 max-w-lg text-center">
              <p className="text-white/60 text-sm">
                <span className="font-bold text-novaag-gold block mb-1">Configuração pendente</span>
                Para exibir os posts automáticos do Instagram, é necessário configurar o{" "}
                <a href="https://behold.so" target="_blank" rel="noopener noreferrer" className="text-novaag-gold underline hover:no-underline">
                  Behold.so
                </a>{" "}
                (gratuito) e inserir o Feed ID no componente{" "}
                <code className="bg-white/10 px-1 rounded text-xs">InstagramSection.tsx</code>.
              </p>
            </div>
          </div>
        )}

        {/* CTA button */}
        <div className="flex justify-center mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white border-2 border-white/20 hover:border-novaag-gold hover:text-novaag-gold transition-all duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
            Ver perfil no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
