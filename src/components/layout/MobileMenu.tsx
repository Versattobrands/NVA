import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; path: string; }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-40 bg-novaag-green pt-24 px-4 pb-8 flex flex-col overflow-y-auto animate-in slide-in-from-top-2">
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={cn(
              "block px-4 py-4 rounded-md text-xl font-bold transition-colors",
              location.pathname === link.path
                ? "bg-white/10 text-novaag-gold"
                : "text-white hover:bg-white/5"
            )}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contato"
          onClick={onClose}
          className="mt-8 w-full px-4 py-4 rounded-md text-center font-bold text-xl text-white bg-novaag-red hover:bg-novaag-red/90 transition-colors shadow-lg"
        >
          Fale com um especialista
        </Link>
      </nav>
      
      <div className="mt-auto pt-8 border-t border-white/10 flex justify-center gap-4">
        <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors">
          IN
        </a>
        <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors">
          IG
        </a>
      </div>
    </div>
  );
};
