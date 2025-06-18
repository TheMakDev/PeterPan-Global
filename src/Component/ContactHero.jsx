import React from 'react';
import bg from '../assets/hero-1.jpg'

const ContactHero = () => {
  return (
    <div className="relative w-full h-100 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full">
        <h1 className="text-5xl sm:text-6xl font-bold text-white text-center">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default ContactHero;
