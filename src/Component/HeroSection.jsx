import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import bg from '../assets/hero-1.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[600px] sm:h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
    
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/70 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full text-white">
        <motion.p
          className="text-lg sm:text-xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Clients Love What We Do
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-6xl font-bold leading-tight sm:leading-snug   p-4 px-5 rounded-xl shadow-lg w-fit"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Get bespoke data, <br /> software and AI <br /> services
        </motion.h1>

        <motion.button
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-xl w-fit"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Explore Our Services
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
