import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 text-white py-10 relative">
    {/* Footer Content */}
    <div className="container mx-auto flex flex-col items-center text-center px-6">
      {/* Decorative Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-gray-200 mb-6">
        Connect with Us
      </h2>

      {/* Social Icons */}
      <div className="flex space-x-8 justify-center mb-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group transform transition-all duration-300 ease-in-out"
          title="Visit GitHub"
        >
          <FaGithub className="text-4xl md:text-5xl transition-transform duration-300 transform group-hover:scale-125 group-hover:text-gray-300" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group transform transition-all duration-300 ease-in-out"
          title="Join Telegram"
        >
          <FaTelegram className="text-4xl md:text-5xl transition-transform duration-300 transform group-hover:scale-125 group-hover:text-gray-300" />
          <span className="sr-only">Telegram</span>
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-sm md:text-base font-light opacity-80 mb-4">
        © 2024 Typing Speed Test. All rights reserved.
      </p>

      {/* Call to Action */}
      <div className="flex flex-col items-center space-y-3">
        <p className="text-lg font-semibold text-gray-200">Stay in touch!</p>
        <a
          href="mailto:contact@typingspeedtest.com"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full shadow-md text-base font-medium transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>

    {/* Decorative Curved Divider */}
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-indigo-600 via-indigo-500 to-transparent clip-path-wave"></div>
  </footer>
);

export default Footer;
