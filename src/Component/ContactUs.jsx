import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    emailjs
      .sendForm(
        'service_pd6wafr',
        'template_tol4l6i',
        form.current,
        'pgTsZY2xCkRelIKWv'
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage('We have now received the your message, thank you! A member of our team will get back to you soon!');
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccessMessage('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
 
        <div className="space-y-6">
          <a href="#" className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Get in Touch</a>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Contact Us</h2>
          <p className="text-gray-600 mt-2 text-sm">Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 text-xl mt-1"><FaMapMarkerAlt /></div>
              <div>
                <h4 className="font-semibold text-gray-700">Location</h4>
                <p className="text-gray-600 text-sm">Exeter Uk</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-blue-600 text-xl mt-1"><FaPhoneAlt /></div>
              <div>
                <h4 className="font-semibold text-gray-700">Phone</h4>
                <p className="text-gray-600 text-sm">12345667456</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="text-blue-600 text-xl mt-1"><FaEnvelope /></div>
            <div>
              <h4 className="font-semibold text-gray-700">Email</h4>
              <p className="text-gray-600 text-sm">pgs.admin@peterpangs.co.uk</p>
            </div>
          </div>


          <div className="flex items-center gap-4 pt-2">
            <h4 className="text-sm font-semibold text-gray-700">Social</h4>
            <div className="flex space-x-4 text-gray-600">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaVimeoV /></a>
              <a href="#"><FaPinterest /></a>
            </div>
          </div>

          <img src={img} alt="Team working" className="rounded-lg w-full object-cover h-56 mt-6" />
        </div>

        <div className="bg-[#F9F9F9] rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Fill Up The Form</h3>
          <p className="text-sm text-gray-600 mb-6">Your email address will not be published. Required fields are marked *</p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
              <input name="from_name" type="text" required placeholder="Your name"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input name="from_email" type="email" required placeholder="you@example.com"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input name="subject" type="text" placeholder="Subject"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
              <textarea name="message" rows="4" required placeholder="Write your message..."
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
            </div>

            {successMessage && (
              <div
                className={`p-3 rounded-md text-sm font-medium ${
                  successMessage.startsWith('✅')
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? (
                <svg
                  className="animate-spin h-4 w-4 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                <FaEnvelope className="mr-2" />
              )}
              {loading ? 'Sending...' : 'Get In Touch'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
