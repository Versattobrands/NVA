import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { ImagePlaceholder } from "../components/ui/ImagePlaceholder";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: '#2C3F34' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#2C3F34] z-0 opacity-80"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            Atendimento Comercial e Técnico.
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Consulte nossa equipe para obter cotações, suporte agronômico ou informações sobre distribuição de produtos na sua região.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            
            {/* INFORMAÇÕES (Esquerda) */}
            <div className="w-full lg:w-2/5 flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0A0A0A' }}>Canais de Contato</h3>
                <p style={{ color: '#0A0A0A', opacity: 0.8 }}>
                  Nossa equipe está capacitada para entender sua demanda de campo e direcionar a solução química ou biológica adequada.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#f3f4f6', color: '#D91E2D' }}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#0A0A0A' }}>E-mail</h4>
                    <p className="text-sm" style={{ color: '#0A0A0A', opacity: 0.8 }}>contato@novaag.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#f3f4f6', color: '#D91E2D' }}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#0A0A0A' }}>Telefone / Celular</h4>
                    <p className="text-sm" style={{ color: '#0A0A0A', opacity: 0.8 }}>(00) 0000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#f3f4f6', color: '#D91E2D' }}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#0A0A0A' }}>Horário Comercial</h4>
                    <p className="text-sm" style={{ color: '#0A0A0A', opacity: 0.8 }}>Seg. a Sex. das 08h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#f3f4f6', color: '#D91E2D' }}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#0A0A0A' }}>Unidade Matriz</h4>
                    <p className="text-sm" style={{ color: '#0A0A0A', opacity: 0.8 }}>Endereço logístico/industrial<br/>Cidade, Estado, 00000-000</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-48 rounded-2xl overflow-hidden shadow-md border" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
                <ImagePlaceholder text="[Mapa]" className="bg-transparent border-none" />
              </div>
            </div>

            {/* FORMULÁRIO (Direita) */}
            <div className="w-full lg:w-3/5">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
                <h3 className="text-2xl font-bold mb-8" style={{ color: '#0A0A0A' }}>Solicite Atendimento</h3>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                    <CheckCircle2 className="w-16 h-16 mb-6" style={{ color: '#2C3F34' }} />
                    <h4 className="text-2xl font-bold mb-2" style={{ color: '#0A0A0A' }}>Enviado.</h4>
                    <p style={{ color: '#0A0A0A', opacity: 0.8 }}>
                      Recebemos seus dados. O retorno do departamento responsável será feito em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium" style={{ color: '#0A0A0A' }}>Nome completo</label>
                        <input type="text" id="name" required className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="Nome" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-sm font-medium" style={{ color: '#0A0A0A' }}>Fazenda / CNPJ</label>
                        <input type="text" id="company" className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="Opcional" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium" style={{ color: '#0A0A0A' }}>E-mail</label>
                        <input type="email" id="email" required className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="seu@email.com" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-medium" style={{ color: '#0A0A0A' }}>Celular</label>
                        <input type="tel" id="phone" required className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="(00) 00000-0000" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="state" className="text-sm font-medium" style={{ color: '#0A0A0A' }}>Cidade / Estado</label>
                        <input type="text" id="state" className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="Localidade" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="text-sm font-medium" style={{ color: '#0A0A0A' }}>Motivo</label>
                        <select id="subject" className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }}>
                          <option>Cotação de Produto</option>
                          <option>Dúvida Técnica</option>
                          <option>Seja um Distribuidor</option>
                          <option>Outros</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium" style={{ color: '#0A0A0A' }}>Detalhes do contato</label>
                      <textarea id="message" rows={4} required className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent resize-none" style={{ borderColor: 'rgba(10,10,10,0.2)', backgroundColor: '#f9fafb' }} placeholder="Como podemos auxiliar?"></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full mt-4 flex items-center justify-center gap-2 text-lg shadow-md hover:opacity-90" style={{ backgroundColor: '#D91E2D', color: '#FFFFFF' }}>
                      Enviar Dados <Send className="w-5 h-5" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};
