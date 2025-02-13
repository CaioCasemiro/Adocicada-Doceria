import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#3C3B40] text-[#F8EFE6] fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-serif"><a href="#inicio">Adocicada</a></div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-[#E8CCAC] transition-colors">Início</a>
            <a href="#sobre" className="hover:text-[#E8CCAC] transition-colors">Sobre Nós</a>
            <a href="#doces" className="hover:text-[#E8CCAC] transition-colors">Nossos Doces</a>
            <a href="#contato" className="hover:text-[#E8CCAC] transition-colors">Contato</a>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <a href="#inicio" className="hover:text-[#E8CCAC] transition-colors">Início</a>
              <a href="#sobre" className="hover:text-[#E8CCAC] transition-colors">Sobre Nós</a>
              <a href="#doces" className="hover:text-[#E8CCAC] transition-colors">Nossos Doces</a>
              <a href="#contato" className="hover:text-[#E8CCAC] transition-colors">Contato</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;