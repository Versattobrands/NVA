import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CTASection } from "../components/ui/CTASection";
import { ASSETS } from "../data/assetsMap";
import { AGRO_PRODUCTS } from "../data/products";

export const Troppoil: React.FC = () => {
  const troppoil = AGRO_PRODUCTS.find(p => p.slug === "troppoil");

  return (
    <div className="flex flex-col w-full text-white relative bg-[#1f3329]">
      
      {/* 1. BACKGROUND GLOBAL (Imagem Exata Completa) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <img 
          src="/images/backgroundcompleto.jpg" 
          alt="Troppoil Background Completo" 
          className="w-full h-full object-cover object-top" 
        />
      </div>

      {/* 2. TOP SECTION (Hero Centralizado) */}
      <section className="relative pt-40 pb-16 z-10 min-h-[80vh] flex flex-col justify-start items-center text-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          
          <span className="text-[#05a44d] font-title font-black tracking-widest uppercase mb-6 text-base md:text-xl drop-shadow-sm block">
            Linha Agro
          </span>
          <img 
            src="/images/troppoil/logo_troppoil2.png" 
            alt="Troppoil" 
            className="w-full max-w-[500px] md:max-w-[800px] mb-10 drop-shadow-md" 
          />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-title font-black mb-8 uppercase tracking-tighter text-novaag-black drop-shadow-md">
            Origem Mineral com Aditivos
          </h2>
          
          <p className="text-2xl md:text-3xl text-novaag-black font-body font-semibold mb-14 leading-relaxed max-w-4xl drop-shadow-sm">
            Uma solução de origem mineral com aditivos vegetais para diferentes aspectos da aplicação agrícola.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 relative z-50 mb-16">
            <Button asChild size="lg" variant="accent" className="font-title font-bold text-lg md:text-xl px-10 py-6 shadow-xl hover:-translate-y-1 transition-transform">
              <Link to="/contato">Fale com um especialista</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-title font-bold text-lg md:text-xl px-10 py-6 border-2 border-novaag-black/50 text-novaag-black hover:bg-novaag-black/10 bg-white/30 backdrop-blur-sm">
              <a href="#ficha-tecnica">Ficha técnica</a>
            </Button>
          </div>


        </div>
      </section>

      {/* Todo o resto da página flui com fundo transparente sobre a cor sólida #1f3329 */}
      <div className="relative z-10 w-full">
        
        {/* CARACTERÍSTICAS */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            
            {/* Painel de Vidro Escuro que abraça toda a seção para dar leitura e estrutura */}
            <div className="bg-black/60 border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-md shadow-2xl max-w-6xl mx-auto">
              
              {/* Título e Subtítulo */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center gap-3 mb-8 bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
                  <svg className="w-8 h-8 text-[#05a44d]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/></svg>
                  <span className="font-bold text-white uppercase tracking-wider text-sm md:text-base">Química Verde Sustentável Biodegradável</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-title font-bold mb-6 text-novaag-gold drop-shadow-md">Múltiplas Soluções</h2>
                <p className="text-xl text-white drop-shadow-sm font-medium">
                  Desenvolvido para atender aos principais desafios da tecnologia de aplicação.
                </p>
              </div>

              {(troppoil?.features || troppoil?.benefits) && (
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 lg:gap-24 mt-12">
                  
                  {/* Coluna Esquerda: Ícones (1 coluna) */}
                  {troppoil?.features && (
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6">
                      {troppoil.features.map((feature, idx) => (
                        <div key={idx} className="flex justify-center items-center w-full max-w-[350px]">
                          {feature.icon && (
                            <img 
                              src={feature.icon} 
                              alt={feature.name} 
                              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" 
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Coluna Direita: Benefícios (Texto Branco) */}
                  {troppoil?.benefits && (
                    <div className="w-full md:w-1/2 flex flex-col justify-center pt-8 md:pt-16">
                      <h3 className="text-2xl md:text-4xl font-black text-novaag-gold uppercase tracking-wider mb-8 drop-shadow-md">
                        Benefícios Comprovados
                      </h3>
                      <ul className="space-y-6">
                        {troppoil.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-white font-extrabold text-lg md:text-xl leading-relaxed">
                            <span className="text-[#05a44d] text-2xl leading-none select-none shrink-0 drop-shadow-sm mt-1">✔</span>
                            <span className="drop-shadow-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                </div>
              )}
            </div>
          </div>
        </section>

        {/* HISTÓRIA */}
        <section className="py-24 border-b border-white/10 relative overflow-hidden bg-black/20">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-title font-bold mb-10 text-white drop-shadow-md">A História do Produto</h2>
            <div className="p-10 border border-white/20 bg-white/10 rounded-3xl backdrop-blur-md relative shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-novaag-gold text-novaag-black text-sm font-black px-6 py-2 rounded-full uppercase tracking-wider shadow-xl border-2 border-[#1f3329]">
                Inovador
              </div>
              <p className="text-2xl md:text-3xl font-body leading-relaxed text-white/95 italic font-medium drop-shadow-sm">
                "TroppOil nasceu da colaboração técnica Ítalo-Brasileira para desenvolver produto de baixo impacto ambiental, livre de nonilfenol etoxilado e biodegradável. Do Italiano Troppo = Também, ele é inovador e sustentável."
              </p>
            </div>
          </div>
        </section>

        {/* INFORMAÇÕES TÉCNICAS (PREPARO DE CALDA) */}
        <section className="py-24 relative overflow-hidden">


          <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold max-w-2xl leading-tight text-white drop-shadow-lg">
                INFORMAÇÕES TÉCNICAS SOBRE PREPARO DE CALDA
              </h2>
              
              {/* Box Cuide da sua Água */}
              <div className="flex items-start gap-6 bg-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl max-w-sm">
                <div className="flex-shrink-0 flex flex-col items-center gap-1 opacity-100 mt-1">
                  <svg className="w-10 h-10 text-white drop-shadow-md" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 5 10.08 5 15C5 18.86 8.13 22 12 22C15.87 22 19 18.86 19 15C19 10.08 12 2 12 2Z"/></svg>
                  <div className="flex gap-1">
                    <svg className="w-6 h-6 text-white drop-shadow-md" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 5 10.08 5 15C5 18.86 8.13 22 12 22C15.87 22 19 18.86 19 15C19 10.08 12 2 12 2Z"/></svg>
                    <svg className="w-6 h-6 text-white drop-shadow-md" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 5 10.08 5 15C5 18.86 8.13 22 12 22C15.87 22 19 18.86 19 15C19 10.08 12 2 12 2Z"/></svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-xl md:text-2xl mb-4 text-white drop-shadow-sm">Cuide da sua ÁGUA</h4>
                  <ul className="space-y-3 text-white/95 text-sm md:text-base font-bold">
                    <li className="flex items-start gap-3"><span className="text-novaag-gold text-lg">-</span> Observe cor e impurezas</li>
                    <li className="flex items-start gap-3"><span className="text-novaag-gold text-lg">-</span> Tenha referência do pH</li>
                    <li className="flex items-start gap-3"><span className="text-novaag-gold text-lg">-</span> Inspecione reservatórios</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Esquerda: Pontos Chaves */}
              <div className="lg:col-span-5 flex flex-col h-full">
                <h3 className="font-bold text-xl md:text-2xl mb-8 text-white drop-shadow-md">
                  Pontos chaves para um bom preparo de mistura
                </h3>
                <div className="bg-black/40 p-8 md:p-10 rounded-3xl border-l-4 border-novaag-gold shadow-2xl relative overflow-hidden flex-grow backdrop-blur-md">
                  <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <img src={ASSETS.logos.principal} alt="NVA" className="w-64 brightness-0 invert" />
                  </div>
                  <ol className="space-y-6 relative z-10">
                    {[
                      "Cuidados com Segurança e Meio Ambiente",
                      "Organização e limpeza",
                      "Qualidade da água",
                      "Quantidade de água",
                      "Quantidade correta de produtos",
                      "Sequencia correta de produtos",
                      "Descarte adequado de embalagens",
                      "Carregamento do equipamento pulverizador",
                      "Lavagem de mangueiras e acessórios",
                      "Apontamento de informações solicitadas"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 font-bold text-base md:text-lg items-start">
                        <span className="text-novaag-gold font-black text-2xl min-w-[2rem] leading-none">{i + 1}.</span>
                        <span className="text-white leading-snug drop-shadow-sm">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Direita: Tabela */}
              <div className="lg:col-span-7 flex flex-col h-full">
                <h3 className="font-bold text-xl md:text-2xl mb-8 text-white drop-shadow-md text-center md:text-left">
                  Tabela de Sequência de Dosagem
                </h3>
                <div className="overflow-x-auto bg-black/40 backdrop-blur-md rounded-3xl border border-white/20 flex-grow shadow-2xl p-2">
                  <table className="w-full text-sm md:text-base border-collapse">
                    <tbody className="divide-y divide-white/10">
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">1 - (WG) Dose totais inferiores a 100 g de grânulos</td>
                        <td className="p-4 text-center text-white/90 bg-white/5 text-sm font-bold" rowSpan={2}>Produtos em pó</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">2 - (WSB) Hidrossolúveis</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors border-t border-white/10">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">3 - (Adj) Condicionador de água (pH e quelatizantes)</td>
                        <td className="p-4 text-center text-white/90 bg-black/30 text-sm font-bold">Adjuvantes</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors border-t border-white/10">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">4 - (WG) Outros grânulos dispersíveis</td>
                        <td className="p-4 text-center text-white/90 bg-white/5 text-sm font-bold" rowSpan={4}>Produtos em pó</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">5 - (SG) Granulado Solúvel</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">6 - (SP) Pó Solúvel</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">7 - (WP) Pós Molháveis</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors border-t border-white/10">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">8 - (Adj) Adjuvantes de compatibilidade</td>
                        <td className="p-4 text-center text-white/90 bg-black/30 text-sm font-bold">Adjuvantes</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors border-t border-white/10">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">9 - (CS) - Suspensão de Encapsulado</td>
                        <td className="p-4 text-center text-white/90 bg-white/5 text-sm font-bold" rowSpan={2}>Produtos<br/>em suspensão</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">10 - (SC) Suspensões concentradas</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors border-t border-white/10">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">11 - (OD) - Dispersão em óleo / SC em óleo</td>
                        <td className="p-4 text-center text-white/90 bg-white/5 text-sm font-bold" rowSpan={6}>Formulações oleosas</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">12 - (SE) Suspo-emulsões</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">13 - (EW) Emulsão óleo em água</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">14 - (EO) Emulsão água em óleo</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">15 - (EC) Concentrados para emulsão</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">16 - (ME) Micro Emulsão</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors border-t border-white/10">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">17 - (Adj) Outros adjuvantes (óleos, molhantes...)</td>
                        <td className="p-4 text-center text-white/90 bg-black/30 text-sm font-bold">Adjuvantes</td>
                      </tr>
                      <tr className="hover:bg-white/10 transition-colors border-t border-white/10">
                        <td className="p-4 font-medium border-r border-white/10 text-white drop-shadow-sm">18 - (SL) Soluções concentradas</td>
                        <td className="p-4 text-center text-white/90 bg-white/5 text-sm font-bold">Formulações solúveis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FICHA TÉCNICA (AGORA TRANSPARENTE) */}
        <section id="ficha-tecnica" className="py-24 relative border-t border-white/10 bg-black/30">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-title font-bold mb-8 text-white drop-shadow-md">Quer conhecer todos os detalhes?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed drop-shadow-sm font-medium">
              Solicite a ficha técnica para consultar informações completas sobre o produto, recomendações e condições de uso.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" variant="accent" className="px-10 py-6 text-lg font-bold shadow-2xl hover:-translate-y-1 transition-transform" onClick={() => alert("Funcionalidade de download em desenvolvimento.")}>
                Baixar ficha técnica
              </Button>
              <Button asChild size="lg" variant="outline" className="px-10 py-6 text-lg font-bold border-white/50 text-white hover:bg-white hover:text-novaag-black transition-colors backdrop-blur-sm">
                <Link to="/contato">Falar com um especialista</Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
      
      <CTASection 
        title="Otimize sua aplicação com Troppoil."
        text="A solução ideal para aumentar a eficiência dos seus tratamentos."
        buttonText="Fale com um especialista"
        buttonLink="/contato"
      />
    </div>
  );
};
