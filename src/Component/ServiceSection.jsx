import React, { useEffect } from "react";
import { FaLightbulb, FaCogs, FaHeadset, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/trusted.jpg";
import img2 from "../assets/about-2.jpg";

export default function ITBusinessSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      disable: false,
      mirror: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 py-12 space-y-12">
      {/* Features Grid */}
      <div
        className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-center"
        data-aos="zoom-in"
      >
        {[
          {
            icon: <FaLightbulb className="text-2xl" />,
            title: "Software Development",
            desc: "We build scalable software solutions.",
          },
          {
            icon: <FaCogs className="text-2xl" />,
            title: "Website Development",
            desc: "Custom websites for your business needs.",
          },
          {
            icon: <FaHeadset className="text-2xl" />,
            title: "Data & AI Services",
            desc: "Transform your data into intelligence.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition duration-300 ease-in-out"
            data-aos="zoom-in"
            data-aos-delay={i * 150}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
              {item.icon}
            </div>
            <p className="text-sm uppercase font-semibold text-gray-500">
              Features
            </p>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Images */}
        <div className="relative w-full" data-aos="zoom-in-up">
          <div className="relative">
            <img
              src={img1}
              alt="Team"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src={img2}
              alt="Team2"
              className="hidden sm:block absolute bottom-4 left-4 w-1/2 rounded-lg border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div data-aos="zoom-in">
          <p className="text-sm text-blue-600 font-semibold uppercase">
            Clients Love What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mt-2">
            We Provide Truly Trusted IT Business Solutions
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            At PeterPan Global Services, we deliver truly trusted IT business
            solutions tailored for modern enterprises. Our focus on innovation,
            reliability, and growth ensures your business stays secure and
            competitive.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            {[
              { value: "68%", label: "Business Strategy" },
              { value: "93%", label: "Real Technology Solutions" },
            ].map((stat, i) => (
              <div key={i} className="text-center w-1/2 sm:w-auto" data-aos="zoom-in">
                <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center text-xl font-bold mx-auto">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm font-bold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Professional Team Member",
              "Awards Winning IT Solutions Company",
              "Dedicated Tech Services",
            ].map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-700"
                data-aos="flip-up"
                data-aos-delay={300 + i * 100}
              >
                <FaCheckCircle className="text-blue-500" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6" data-aos="zoom-in">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300">
              Explore More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
