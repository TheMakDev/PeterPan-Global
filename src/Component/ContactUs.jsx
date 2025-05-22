import React from 'react';
import img from '../assets/01.jpeg';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaVimeoV,
} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-[#F9F9F9] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between">
          <div className="p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
              <p className="text-gray-600 text-sm mt-2">
                Have questions or need help? Feel free to reach out. We're here for you.
              </p>
            </div>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-500 rounded-full p-3">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700">Location</h4>
                  <p className="text-xs text-gray-600">American Hall, De La Rue Way, Pinhoe, United Kingdom</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-500 rounded-full p-3">
                  <FaPhoneAlt className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700">Phone</h4>
                  <p className="text-xs text-gray-600">+234 703 923 7226</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-500 rounded-full p-3">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700">Email</h4>
                  <p className="text-xs text-gray-600">pgs.admin@peterpangs.co.uk</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <h4 className="text-sm font-semibold text-gray-700">Follow Us:</h4>
              <div className="flex space-x-3">
                <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 transition">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-400 transition">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Pinterest" className="text-gray-500 hover:text-red-500 transition">
                  <FaPinterest />
                </a>
                <a href="#" aria-label="Vimeo" className="text-gray-500 hover:text-blue-700 transition">
                  <FaVimeoV />
                </a>
              </div>
            </div>
          </div>
          <img
            src={img}
            alt="Our team at work"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Send a Message</h2>
          <p className="text-sm text-gray-600 mb-8">We’d love to hear from you. Drop us a line below.</p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your name"
                className="w-full border rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full border rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full border rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2 rounded-md transition"
            >
              <FaEnvelope className="mr-2" /> Get In Touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
