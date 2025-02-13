import React from 'react';

const products = [
  {
    name: 'Bolos no Pote',
    description: 'Deliciosas camadas de bolo, recheio e cobertura em porções individuais.',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80'
  },
  {
    name: 'Copos da Felicidade',
    description: 'Uma explosão de sabores em camadas com brigadeiros, mousses e cremes.',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80'
  },
  {
    name: 'Bolos de Aniversário',
    description: 'Bolos personalizados para tornar sua celebração ainda mais especial.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80'
  },
  {
    name: 'Brigadeiros',
    description: 'O clássico doce brasileiro em versões tradicionais e gourmet.',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80'
  },
  {
    name: 'Cupcakes',
    description: 'Mini bolos decorados com coberturas criativas e deliciosas.',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80'
  },
  {
    name: 'Docinhos nos Copinhos',
    description: 'Versões sofisticadas dos tradicionais doces de festa.',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80'
  }
];

const Products = () => {
  return (
    <section id="doces" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-[#3C3B40] mb-12">
          Nossos Doces
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C3B40] to-transparent opacity-60"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-[#E8CCAC]">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;