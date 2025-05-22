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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div className="space-y-6">
          <div>
            <a href="#" className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
              Get in Touch
            </a>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">Contact Us</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque inventore.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="flex gap-4 items-start">
              <div className="text-blue-600 text-xl mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Location</h4>
                <p className="text-gray-600 text-sm">
                  55 Main street, 2nd block,<br />
                  Melbourne, Australia
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-blue-600 text-xl mt-1">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Phone</h4>
                <p className="text-gray-600 text-sm">
                  +09 354 587 874<br />
                  +01 368 567 894
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="text-blue-600 text-xl mt-1">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Email</h4>
              <p className="text-gray-600 text-sm">
                info@example.com<br />
                info@example.com
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4 pt-2">
            <h4 className="text-sm font-semibold text-gray-700">Social</h4>
            <div className="flex space-x-4 text-gray-600">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaVimeoV /></a>
              <a href="#"><FaPinterest /></a>
            </div>
          </div>

          <img
            src={img}
            alt="Team working"
            className="rounded-lg w-full object-cover h-56 mt-6"
          />
        </div>

        <div className="bg-[#F9F9F9] rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Fill Up The Form</h3>
          <p className="text-sm text-gray-600 mb-6">
            Your email address will not be published. Required fields are marked *
          </p>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                id="message"
                rows="4"
                required
                placeholder="Write your message..."
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
            >
              <FaEnvelope className="mr-2" />
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
