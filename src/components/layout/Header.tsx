import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Quem somos", path: "/quem-somos" },
    { name: "Produtos", path: "/produtos" },
    { name: "Contato", path: "/contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-2 shadow-lg" : "py-3"
      )}
      style={{ backgroundColor: isScrolled ? '#2C3F34' : 'transparent', borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between overflow-visible">
        {/* Logo — oversized, vaza para fora sem crescer o header */}
        <Link to="/" className="flex items-center group overflow-visible relative z-10">
          <img
            src="/logo-principal.svg"
            alt="Novaag"
            className="h-48 w-auto object-contain transition-all duration-300 group-hover:opacity-80 -my-10"
            style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.25))" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-semibold transition-colors relative",
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
          <Button
            variant="accent"
            size="md"
            asChild
          >
            <Link to="/contato">Fale com um especialista</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Alternar menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 border-t border-white/10 shadow-xl py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2"
          style={{ backgroundColor: '#2C3F34' }}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-4 py-3 rounded-md text-base font-semibold transition-colors",
                  location.pathname === link.path
                    ? "bg-white/10"
                    : "text-white hover:bg-white/10"
                )}
                style={{ color: location.pathname === link.path ? '#F5A823' : '#FFFFFF' }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contato"
              className="mt-4 w-full px-4 py-3 rounded-md text-center font-bold hover:opacity-90 transition-colors shadow-md"
              style={{ backgroundColor: '#D91E2D', color: '#FFFFFF' }}
            >
              Fale com um especialista
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
