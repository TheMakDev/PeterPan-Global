import React, { useState } from 'react';
import { Brain, Cloud } from 'lucide-react';
import img from '../assets/trusted.jpeg';

const BusinessSolution = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: 'We deliver trusted, innovative IT solutions that empower businesses around the world.',
    strategy: 'We build IT infrastructure that’s scalable, secure, and efficient—designed specifically for your business success.',
    vision: 'We envision a future where businesses grow effortlessly through intelligent, tech-driven coordination systems.'
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 bg-gray-50">

      <div className="md:w-1/2 w-full mb-8 md:mb-0">
        <img
          src={img}
          alt="Team working"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We Prominent Truly Trusted IT Business Solutions
        </h2>
        <p className="text-gray-600 mb-6">
          Transmds is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandi.
        </p>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-4 py-2 rounded ${activeTab === 'mission' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-4 py-2 rounded ${activeTab === 'strategy' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Our Strategy
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-4 py-2 rounded ${activeTab === 'vision' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Our Vision
          </button>
        </div>

        <div className="text-gray-700 mb-6">
          {tabContent[activeTab]}
        </div>

        <div className="flex gap-8 mb-6">
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

        <div>
          <p className="mb-1">Real Technology Solution</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-sm mt-1 text-right">75%</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolution;
