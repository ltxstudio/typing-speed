import React from 'react';
import { FaKeyboard } from 'react-icons/fa';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 shadow-lg">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
        <FaKeyboard className="text-4xl md:text-5xl animate-pulse" />
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-center md:text-left">
          Typing Speed Test
        </h1>
      </div>
      
      {/* Navigation (for larger screens) */}
      <nav className="flex space-x-6 text-lg font-medium">
        <a href="#about" className="hover:text-gray-200 transition duration-200">About</a>
        <a href="#features" className="hover:text-gray-200 transition duration-200">Features</a>
        <a href="#how-to-use" className="hover:text-gray-200 transition duration-200">How to Use</a>
        <a href="#contact" className="hover:text-gray-200 transition duration-200">Contact</a>
      </nav>
    </div>

    {/* Background animation (optional for a more dynamic look) */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"></div>
  </header>
);

export default Header;
