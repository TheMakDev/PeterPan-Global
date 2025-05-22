import React from "react";
import img from "../assets/img.jpeg"; 

export default function ITBanner() {
  return (
    <div className="relative w-full bg-[#d3d1d1] text-white">

      <div className="relative bg-black/60 w-full h-[500px] flex items-center justify-center text-center px-4 md:px-16">
 
        <img
          src={img}
          alt="IT Advisors"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 max-w-3xl">
          <p className="uppercase text-sm font-bold mb-2">5M+ Trusted Our Clients</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Need IT Advisor For Your Business ?<br />
          </h1>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full cursor-pointer inline-flex items-center">
            Get A Free Quote
            <span className="ml-2">&#10140;</span>
          </button>
        </div>

        <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl z-20 px-4">
          <div className="bg-white text-gray-800 rounded-lg shadow-lg py-10 px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Service 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <i className="fas fa-voicemail text-3xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">Voice Over Protocol</h3>
              <p className="text-sm text-gray-600">
                Average time to resolve a cyber attack.
              </p>
            </div>


            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <i className="fas fa-cloud-upload-alt text-3xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">Data Backup</h3>
              <p className="text-sm text-gray-600">
                Average time to resolve a cyber attack.
              </p>
            </div>


            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <i className="fas fa-cogs text-3xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">IT Consultancy</h3>
              <p className="text-sm text-gray-600">
                Average time to resolve a cyber attack.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[160px] md:h-[180px]"></div>
    </div>
  );
}
