import React from 'react';
import { Instagram} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80"
          alt="Doces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3C3B40]/70 to-[#3C3B40]/50"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white space-y-8">
          <h1 className="text-5xl md:text-6xl font-serif">
            Doces que Encantam
          </h1>
          <p className="text-xl text-[#E8CCAC]">
            Transformamos momentos especiais em doces lembranças
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5589994282685" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#E8CCAC] text-[#3C3B40] rounded-full hover:bg-[#BCD2DD] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" color="#ffffff" className="mr-2"/>
              Faça seu Pedido
            </a>
            <a 
              href="https://instagram.com/_adocicadadoceria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#E8CCAC] text-[#E8CCAC] rounded-full hover:bg-[#E8CCAC] hover:text-[#3C3B40] transition-colors duration-300"
            >
              <Instagram className="mr-2" />
              Siga-nos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;