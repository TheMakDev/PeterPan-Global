import React from 'react';
import bg from '../assets/bg.avif'

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full">
        <p className="text-white text-lg font-semibold mb-2">5m+ Trusted Our Clients</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
          Empower Your <br />
          Business Journey With <br />
          IT Expertise
        </h1>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg w-fit">
          Explore Our Service →
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
