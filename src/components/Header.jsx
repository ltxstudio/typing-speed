import React, { useState } from 'react';
import { FaKeyboard, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white text-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <FaKeyboard className="text-blue-600 text-3xl" />
          <h1 className="text-2xl font-bold">Typing Speed Test</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#how-to-use" className="hover:text-blue-600 transition">How to Use</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 shadow-md">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <a
              href="#about"
              className="w-full text-center hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#features"
              className="w-full text-center hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-to-use"
              className="w-full text-center hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Use
            </a>
            <a
              href="#contact"
              className="w-full text-center hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
