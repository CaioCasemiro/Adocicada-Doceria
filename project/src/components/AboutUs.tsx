import React from 'react';

const AboutUs = () => {
  return (
    <section id="sobre" className="pt-24 pb-16 bg-[#F8EFE6]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80"
              alt="Confeiteira"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3C3B40]/30 to-transparent rounded-lg"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-[#3C3B40]">Nossa História</h2>
            <p className="text-[#333333] leading-relaxed text-justify">
              Bem-vindos à Adocicada, onde cada doce é feito com carinho e dedicação. Nossa jornada começou de forma inesperada, quando, durante um período de repouso após uma cirurgia, descobri na confeitaria uma nova paixão. O que era um passatempo logo se tornou um sonho.
            </p>
            <p className="text-[#333333] leading-relaxed text-justify">
             Com o apoio da minha mãe e da minha irmã, transformamos esse sonho em realidade. Hoje, trabalhamos juntas, levando amor e cuidado a cada receita. Mais do que doces, criamos momentos especiais para adoçar a vida de quem nos acompanha. É uma alegria compartilhar essa jornada com vocês!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;