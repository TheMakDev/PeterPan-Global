import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/blog.jpg';

const tabs = {
  'Our Approach': {
    description:
      'We take a client-first approach by understanding your needs and delivering tailored, agile IT solutions that scale with your business.',
    points: [
      'Agile Methodology',
      'Cross-functional Teams',
      'Daily Standups',
      'Retrospective Meetings',
    ],
  },
  'Project Goals': {
    description:
      'Our projects aim for timely delivery, cost-efficiency, and high-quality results through clear client collaboration and accountability.',
    points: [
      'On-time Delivery',
      'Cost-efficient Solutions',
      'Client Collaboration',
      'Quality Assurance',
    ],
  },
  'Advisory': {
    description:
      'We guide your teams through sprint planning, iterative delivery, and active problem-solving to ensure constant improvement.',
    points: [
      'Efficient Sprint Planning',
      'Iterative Delivery Approach',
      'Standups and Demos',
      'Problem-solving',
    ],
  },
};

export default function AboutSection() {
  const [selectedTab, setSelectedTab] = useState('Advisory');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animation triggers once
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-12 p-6 sm:p-8"
      data-aos="zoom-in"
    >
      {/* Text Section */}
      <div className="max-w-xl w-full" data-aos="flip-up">
        <a
          href="#"
          className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider"
        >
          How to Manage
        </a>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
          Our Managed IT Services <br /> Let You Concentrate On <br /> What Matters
        </h1>

        <div className="flex flex-wrap gap-4 mt-6 border-b border-gray-300 pb-2">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              className={`text-sm font-medium transition ${
                selectedTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-4">{tabs[selectedTab].description}</p>

        <ul className="mt-4 space-y-2">
          {tabs[selectedTab].points.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-blue-600 mt-1">✔</span> {point}
            </li>
          ))}
        </ul>

        <button className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-full cursor-pointer shadow hover:bg-blue-700 text-sm font-semibold">
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="relative" data-aos="zoom-in-up">
        <img
          src={img}
          alt="Team working"
          className="rounded-lg w-full max-w-[400px] h-auto object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-blue-600 text-white rounded-lg p-4 shadow-lg w-[160px] sm:w-[180px] space-y-4">
          <div>
            <div className="text-xl sm:text-2xl font-bold">98%</div>
            <div className="text-xs sm:text-sm">Project Success</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold">63%</div>
            <div className="text-xs sm:text-sm">Happy Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}
