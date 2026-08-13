import React, { useState } from "react";
import { Button } from "./Button";
import { SITE_CONTENT } from "../../data/siteContent";

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    // Simulando form visual
    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-novaag-black/5">
      {status === "success" ? (
        <div className="text-center py-20 animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-novaag-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-novaag-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold font-title text-novaag-black mb-2">Mensagem Enviada!</h3>
          <p className="text-novaag-black/70">{SITE_CONTENT.contact.successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-novaag-black">Nome Completo</label>
              <input required type="text" id="name" className="p-4 rounded-lg bg-novaag-black/5 border border-transparent focus:border-novaag-gold focus:bg-white transition-colors outline-none" placeholder="Seu nome" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-bold text-novaag-black">Empresa</label>
              <input required type="text" id="company" className="p-4 rounded-lg bg-novaag-black/5 border border-transparent focus:border-novaag-gold focus:bg-white transition-colors outline-none" placeholder="Nome da empresa" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-novaag-black">E-mail</label>
              <input required type="email" id="email" className="p-4 rounded-lg bg-novaag-black/5 border border-transparent focus:border-novaag-gold focus:bg-white transition-colors outline-none" placeholder="seu@email.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-bold text-novaag-black">Telefone / WhatsApp</label>
              <input required type="tel" id="phone" className="p-4 rounded-lg bg-novaag-black/5 border border-transparent focus:border-novaag-gold focus:bg-white transition-colors outline-none" placeholder="(00) 00000-0000" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="area" className="text-sm font-bold text-novaag-black">Área de Interesse</label>
              <select required id="area" className="p-4 rounded-lg bg-novaag-black/5 border border-transparent focus:border-novaag-gold focus:bg-white transition-colors outline-none appearance-none">
                <option value="" disabled selected>Selecione uma área</option>
                <option value="agro">Agro</option>
                <option value="comex">Comex</option>
                <option value="industrial">Industrial</option>
                <option value="troppoil">Troppoil</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="product" className="text-sm font-bold text-novaag-black">Produto de Interesse (Opcional)</label>
              <input type="text" id="product" className="p-4 rounded-lg bg-novaag-black/5 border border-transparent focus:border-novaag-gold focus:bg-white transition-colors outline-none" placeholder="Ex: Stimatrix Gold, etc." />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-bold text-novaag-black">Mensagem</label>
            <textarea required id="message" rows={5} className="p-4 rounded-lg bg-novaag-black/5 border border-transparent focus:border-novaag-gold focus:bg-white transition-colors outline-none resize-none" placeholder="Como podemos ajudar?" />
          </div>

          <Button type="submit" size="lg" variant="primary" className="w-full md:w-auto md:self-end px-12">
            Enviar Mensagem
          </Button>
        </form>
      )}
    </div>
  );
};
