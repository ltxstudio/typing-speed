import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-blue-600 text-white py-4 mt-8">
    <div className="container mx-auto flex flex-col items-center">
      <p className="text-sm mb-2">© 2024 Typing Speed Test. All rights reserved.</p>
      <div className="flex space-x-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaTwitter className="text-xl" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaLinkedin className="text-xl" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
