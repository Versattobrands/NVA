import React from "react";
import { ContactForm } from "../components/ui/ContactForm";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SITE_CONTENT } from "../data/siteContent";
import { MapPin, Phone, Mail } from "lucide-react";
import { ASSETS } from "../data/assetsMap";

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-novaag-black min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <SectionHeading 
              title={SITE_CONTENT.contact.title} 
              dark 
            />
            <p className="text-xl text-white/80 leading-relaxed mb-12">
              {SITE_CONTENT.contact.text}
            </p>
            
            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-novaag-red/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-novaag-red" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Endereço</h4>
                  <p className="text-white/60">
                    [Endereço Placeholder]<br />
                    Cidade - UF, 00000-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-novaag-red/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-novaag-red" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Telefone</h4>
                  <p className="text-white/60">(00) 0000-0000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-novaag-red/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-novaag-red" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">E-mail</h4>
                  <p className="text-white/60">contato@novaag.com.br</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative h-64 rounded-2xl overflow-hidden mt-auto">
              <img src={ASSETS.images.field2} alt="Campo" className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4]" />
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>
          
          {/* Form Side */}
          <div className="w-full lg:w-7/12">
            <ContactForm />
          </div>
          
        </div>
      </div>
    </div>
  );
};
