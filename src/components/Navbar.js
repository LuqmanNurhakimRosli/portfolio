import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src={require('../images/gambar-luqman.jpg')}
            alt="Banner"
            className="w-14 h-14 rounded-full"
          />
          <h1 className="text-2xl font-bold">Luqman Nurhakim</h1>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6 font-bold">
          <li>
            <Link to="/" className="hover:text-blue-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-500 transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Button for Mobile */}
        <button
          type="button"
          className="md:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Navigation Links for Mobile */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-gray-800 md:hidden">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <Link to="/" className="block text-white hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block text-white hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="block text-white hover:text-blue-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block text-white hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
