import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8EFE6]">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;