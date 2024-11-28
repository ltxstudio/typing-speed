import React, { useState } from 'react';
import { FaKeyboard, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white py-6 shadow-lg overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <FaKeyboard className="text-4xl md:text-5xl animate-pulse" />
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-center md:text-left">
            Typing Speed Test
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <a
            href="#about"
            className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#features"
            className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Features
          </a>
          <a
            href="#how-to-use"
            className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            How to Use
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-indigo-700 text-white shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden"
        >
          <a
            href="#about"
            className="hover:text-yellow-300 transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#features"
            className="hover:text-yellow-300 transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-to-use"
            className="hover:text-yellow-300 transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            How to Use
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-300 transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </motion.div>
      )}

      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"></div>

      {/* Decorative Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-indigo-600 via-indigo-700 to-transparent opacity-70 clip-path-mountain"></div>
    </header>
  );
};

export default Header;
