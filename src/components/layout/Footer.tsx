import { Link } from "react-router-dom";
import { AtSign, ExternalLink, Share2, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-novaag-black text-white pt-16 pb-8 border-t-4 border-novaag-red">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-block group">
              <img
                src="/logo-negativo.svg"
                alt="Novaag"
                className="h-16 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
            <p className="text-novaag-gold font-semibold text-base">
              "Inovação e honra no campo."
            </p>
            <p className="text-white/50 text-sm">
              Soluções biotecnológicas e químicas para o agronegócio.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-novaag-gold font-bold mb-6 text-lg uppercase tracking-wider">
              Institucional
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Início", to: "/" },
                { label: "Quem somos", to: "/quem-somos" },
                { label: "Produtos", to: "/produtos" },
                { label: "Contato", to: "/contato" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white/60 hover:text-novaag-gold transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-novaag-gold font-bold mb-6 text-lg uppercase tracking-wider">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-novaag-red shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  [Endereço Placeholder]<br />
                  Cidade - UF, 00000-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-novaag-red shrink-0" />
                <span className="text-white/60 text-sm">(00) 0000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-novaag-red shrink-0" />
                <span className="text-white/60 text-sm">contato@novaag.com.br</span>
              </li>
            </ul>
          </div>

          {/* Socials Col */}
          <div>
            <h4 className="text-novaag-gold font-bold mb-6 text-lg uppercase tracking-wider">
              Redes Sociais
            </h4>
            <div className="flex items-center gap-4">
              {[
                { icon: <ExternalLink className="w-5 h-5" />, label: "LinkedIn" },
                { icon: <AtSign className="w-5 h-5" />, label: "Instagram" },
                { icon: <Share2 className="w-5 h-5" />, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-novaag-red hover:border-novaag-red hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm text-center md:text-left">
            © {new Date().getFullYear()} NOVAAG. Todos os direitos reservados.
          </p>
          <div className="text-white/30 text-sm flex gap-6">
            <a href="#" className="hover:text-novaag-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-novaag-gold transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
