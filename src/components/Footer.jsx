import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 text-white py-8 relative">
    {/* Footer Content */}
    <div className="container mx-auto flex flex-col items-center text-center">
      {/* Decorative Title */}
      <h2 className="text-xl md:text-2xl font-extrabold tracking-wide mb-4">
        Connect with Us
      </h2>

      {/* Social Icons */}
      <div className="flex space-x-6 justify-center mb-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          title="Visit GitHub"
        >
          <FaGithub className="text-3xl md:text-4xl transition-transform duration-300 transform group-hover:scale-110 group-hover:text-gray-200" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          title="Join Telegram"
        >
          <FaTelegram className="text-3xl md:text-4xl transition-transform duration-300 transform group-hover:scale-110 group-hover:text-gray-200" />
          <span className="sr-only">Telegram</span>
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-sm md:text-base font-light opacity-75">
        © 2024 Typing Speed Test. All rights reserved.
      </p>
    </div>

    {/* Decorative Curved Divider */}
    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-blue-800 via-blue-600 to-transparent clip-path-wave"></div>
  </footer>
);

export default Footer;
