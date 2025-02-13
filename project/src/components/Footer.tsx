import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#3C3B40] text-[#F8EFE6] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:+5589994282685" className="flex items-center hover:text-[#E8CCAC] transition-colors">
                <Phone size={18} className="mr-2" />
                (89) 9 9428-2685
              </a>
              <div className="flex items-center">
                <a href="https://maps.app.goo.gl/FuUfYk3uJa87CVP26" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <MapPin size={18} className="mr-2" />Pov. Morrinhos, Picos, Piauí
                </a>
                
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/_adocicadadoceria" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8CCAC] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/5589994282685" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8CCAC] transition-colors">
               <FontAwesomeIcon icon={faWhatsapp} size="lg" color="#FFFFFF" className="mr-2"/>
              </a>
             
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif mb-4">Agradecimento</h3>
            <p className="text-sm leading-relaxed">
              Agradecemos por escolher a Adocicada para adoçar seus momentos especiais. 
              Cada doce é feito com amor e carinho para você.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#E8CCAC]/30 text-center flex items-center justify-center">
          <span>Feito com</span>
          <Heart size={16} className="mx-1 text-[#E8CCAC]" />
          <span>pela Adocicada © 2025</span>
        </div>
          <span className="text-center flex items-center justify-center">Desenvolvido por  <a className="ml-1" href="https://instagram.com/caiocasemiro__" target="_blank" rel="noopener noreferrer"> @caiocasemiro__</a></span>
      </div>
    </footer>
  );
};

export default Footer;