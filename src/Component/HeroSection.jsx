import React from 'react';
import bg from '../assets/hero-1.jpeg'

const HeroSection = () => {
  return (
    <div className="relative w-full h-130 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>

      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full">
        <p className="text-white text-lg font-semibold mb-2">Clients Love What We Do</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
          Empower Your <br />
          Business Journey With <br />
          IT Expertise
        </h1>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg w-fit">
          Explore Our Service 
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
