import React from 'react';
import { FaKeyboard } from 'react-icons/fa';

const Header = () => (
  <header className="bg-blue-600 text-white py-4 shadow-md">
    <div className="container mx-auto flex items-center justify-center">
      <FaKeyboard className="text-3xl mr-3 animate-pulse" />
      <h1 className="text-2xl font-bold tracking-wide">Typing Speed Test</h1>
    </div>
  </header>
);

export default Header;
