import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsAppButton } from "./components/ui/FloatingWhatsAppButton";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { BusinessAreas } from "./pages/BusinessAreas";
import { Contact } from "./pages/Contact";
import { Troppoil } from "./pages/Troppoil";

// Utility component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Utility component to update document title
const DocumentTitle = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Novaag | Inovação e honra no campo",
      "/quem-somos": "Quem Somos | Novaag",
      "/areas-de-atuacao": "Áreas de Atuação | Novaag",
      "/contato": "Contato | Novaag",
      "/troppoil": "Troppoil | Novaag"
    };
    
    document.title = titles[pathname] || "Novaag";
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <DocumentTitle />
      
      <div className="flex flex-col min-h-screen bg-novaag-black">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/areas-de-atuacao" element={<BusinessAreas />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/troppoil" element={<Troppoil />} />
          </Routes>
        </main>
        
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
