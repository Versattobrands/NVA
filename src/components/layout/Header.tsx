import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowLeft } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { ASSETS } from "../../data/assetsMap";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isTroppoil = location.pathname === "/troppoil";

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Quem Somos", path: "/quem-somos" },
    { name: "Áreas de atuação", path: "/areas-de-atuacao" },
    { name: "Contato", path: "/contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTroppoil 
            ? "py-3 shadow-xl bg-[#1f3329] border-b border-white/5" 
            : (isScrolled ? "py-2 shadow-lg bg-novaag-green border-b border-white/10" : "py-3 bg-transparent border-b-0")
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between overflow-visible min-h-[3rem] relative">
          
          {/* Esquerda: Logo Troppoil ou Logo NVA */}
          {isTroppoil ? (
            <div className="flex items-center relative z-[60]">
              <Link to="/troppoil" className="flex items-center group">
                <img
                  src={ASSETS.aplitecIcons.troppoil.logo}
                  alt="Troppoil"
                  className="h-16 md:h-24 w-auto object-contain transition-all duration-300 drop-shadow-lg"
                />
              </Link>
            </div>
          ) : (
            <div className="w-auto flex items-center">
              <Link to="/" className="flex items-center group overflow-visible relative z-[60]">
                <img
                  src={ASSETS.logos.principal}
                  alt="Novaag"
                  className="h-40 md:h-64 w-auto object-contain transition-all duration-300 group-hover:opacity-80 -my-8 md:my-[-52px] filter drop-shadow-2xl"
                />
              </Link>
            </div>
          )}

          {/* Centro vazio */}
          {isTroppoil && (
            <div className="hidden"></div>
          )}

          {/* Direita: Botão Voltar (Troppoil) ou Navegação (Normal) */}
          {isTroppoil ? (
            <div className="flex items-center justify-end relative z-[60]">
              <Button variant="accent" size="md" asChild className="font-bold shadow-xl">
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden md:inline font-bold">Voltar ao site</span>
                  <span className="md:hidden font-bold">Voltar</span>
                </Link>
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-end">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <ul className="flex items-center gap-8">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={cn(
                          "text-sm font-bold transition-colors relative tracking-wide uppercase",
                          location.pathname === link.path
                            ? "text-novaag-gold"
                            : "text-white hover:text-novaag-gold",
                          location.pathname === link.path &&
                            "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-novaag-gold"
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="accent" size="md" asChild>
                  <Link to="/contato">Fale com um especialista</Link>
                </Button>
              </nav>

              {/* Mobile Toggle */}
              <button
                className="md:hidden p-2 text-white relative z-[60]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Alternar menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>
          )}
        </div>
      </header>
      
      {!isTroppoil && (
        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
          links={navLinks} 
        />
      )}
    </>
  );
};
