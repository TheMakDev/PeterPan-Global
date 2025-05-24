import React from "react";
import {FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Footer = () => {

    const navigate = useNavigate()

  return (
    <footer  className="bg-[#0d0d0d] text-white pt-16 pb-10 px-6 md:px-20 rounded-t-4xl">
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        
        <div className="flex flex-col items-start gap-6">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
          <div className="flex items-center gap-4 text-xl">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <Icon
                key={i}
                className="hover:text-blue-500 cursor-pointer transition duration-300"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 max-w-3xl w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            Subscribe to Our Newsletter
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch w-full mt-4 gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-5 py-3 bg-gray-300 rounded-full text-black text-sm focus:outline-none"
            />
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full text-sm whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>


      <hr className="my-10 border-gray-700" />

  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        <div>
          <h4 className="font-semibold mb-4">Useful Links</h4>
          <div className="flex gap-10">
            <ul className="space-y-2">
              <li onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</li>
              <li onClick={() => navigate('/about')} className="hover:underline cursor-pointer">About</li>
              <li onClick={() => navigate('/services')} className="hover:underline cursor-pointer">Services</li>
            </ul>
            <ul className="space-y-2">
              <li onClick={() => navigate('/')} className="hover:underline cursor-pointer">Pricing</li>
              <li onClick={() => navigate('/blog')} className="hover:underline cursor-pointer">Blog</li>
              <li onClick={() => navigate('/contact')} className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        {/* <div>
          <h4 className="font-semibold mb-4">Working Time</h4>
          <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div> */}

        
        <div>
          <h4 className="font-semibold mb-4">Say Hello</h4>
          <a href="info@instantmotexeter.co.uk" className="text-blue-400 hover:underline block mb-2">
            pgs.admin@peterpangs.co.uk
          </a>
        </div>
      </div>


      <div className="text-center text-xs mt-10 text-black bg-white py-4 px-4 rounded-t-3xl">
        © 2025 PeterPan Global Services. Powered By PeterPan IT Solutions.
      </div>
    </footer>
  );
};

export default Footer;
