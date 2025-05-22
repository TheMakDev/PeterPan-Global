import React from 'react';
import {
  FaCode,
  FaDesktop,
  FaNetworkWired,
  FaShieldAlt,
  FaLayerGroup,
  FaPalette,
  FaDatabase,
  FaLock
} from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';

const services = [
  { title: "Customer Software Development", icon: <FaCode className="text-blue-600 w-10 h-10 mx-auto" /> },
  { title: "Desktop Computing Services", icon: <FaDesktop className="text-blue-600 w-10 h-10 mx-auto" /> },
  { title: "Infrastructure Plan & Business Reform", icon: <FaNetworkWired className="text-blue-600 w-10 h-10 mx-auto" /> },
  { title: "Data & Cyber Security Managment", icon: <FaShieldAlt className="text-blue-600 w-10 h-10 mx-auto" /> },
  { title: "Firewall Advancement & Defender System", icon: <FaLock className="text-blue-600 w-10 h-10 mx-auto" /> },
  { title: "Apps Development & UI/UX Project", icon: <FaPalette className="text-blue-600 w-10 h-10 mx-auto" /> },
  { title: "Backup & Recovery Data Services", icon: <FaDatabase className="text-blue-600 w-10 h-10 mx-auto" /> },
  { title: "Data & Cyber Security Managment", icon: <FaShieldAlt className="text-blue-600 w-10 h-10 mx-auto" /> }
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          Our Focusable Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 leading-tight">
          How Do We Work To Help You <br />
          In Startup Business
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">
                  We approached WiaTech with complex project deliver
                </p>
              </div>
              <div className="mt-6 text-blue-500">
                <HiArrowUpRight className="w-5 h-5 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
