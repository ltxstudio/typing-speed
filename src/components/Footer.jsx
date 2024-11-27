import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 text-white py-8 mt-12 relative">
    {/* Footer content */}
    <div className="container mx-auto flex flex-col items-center">
      <p className="text-sm text-center mb-6 font-light opacity-80">
        © 2024 Typing Speed Test. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex space-x-6 justify-center mb-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 hover:scale-110 transition duration-200 transform"
        >
          <FaGithub className="text-2xl sm:text-3xl" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 hover:scale-110 transition duration-200 transform"
        >
          <FaTwitter className="text-2xl sm:text-3xl" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 hover:scale-110 transition duration-200 transform"
        >
          <FaLinkedin className="text-2xl sm:text-3xl" />
        </a>
      </div>

      {/* Footer Decoration */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-700 opacity-30"></div>
    </div>
  </footer>
);

export default Footer;
