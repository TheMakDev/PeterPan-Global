import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Brain, Cloud } from 'lucide-react';
import img from '../assets/trusted.jpg';

const BusinessSolution = () => {
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Allows re-trigger on scroll back
  }, []);

  const tabContent = {
    mission: 'We deliver trusted, innovative IT solutions that empower businesses around the world.',
    strategy: 'We build IT infrastructure that’s scalable, secure, and efficient—designed specifically for your business success.',
    vision: 'We envision a future where businesses grow effortlessly through intelligent, tech-driven coordination systems.'
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 bg-gray-50">
      
      {/* Image Section */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0" data-aos="zoom-in-up">
        <img
          src={img}
          alt="Team working"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 w-full px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We Prominent Truly Trusted IT Business Solutions
        </h2>
        <p className="text-gray-600 mb-6">
          We deliver truly trusted IT business solutions built for modern challenges. With a focus on innovation, security, and performance, we empower business growth. Partner with us for scalable technology that drives lasting success.
        </p>

        <div className="flex flex-wrap gap-4 mb-6">
          {['mission', 'strategy', 'vision'].map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded ${
                activeTab === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {`Our ${key.charAt(0).toUpperCase() + key.slice(1)}`}
            </button>
          ))}
        </div>

        <div className="text-gray-700 mb-6" data-aos="fade-up">
          {tabContent[activeTab]}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mb-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-gray-100 border border-blue-200 text-blue-600">
              <Brain size={20} />
            </div>
            <span className="text-gray-800 font-medium">Artificial Intelligence</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-gray-100 border border-blue-200 text-blue-600">
              <Cloud size={20} />
            </div>
            <span className="text-gray-800 font-medium">Cloud Backup Services</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div data-aos="fade-up">
          <p className="mb-1">Real Technology Solution</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: '75%' }}
            ></div>
          </div>
          <p className="text-sm mt-1 text-right">75%</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolution;
