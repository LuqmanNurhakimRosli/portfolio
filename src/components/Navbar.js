import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${props.darkMode ? 'bg-black text-white' : 'bg-white text-black'} shadow-md`}>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/brandLuqman.png"
            alt="Banner"
            className="w-12 h-12 md:w-20 md:h-20 rounded-full"
          />
          <h1 className="text-xl md:text-2xl font-bold">Luqman Nurhakim</h1>
        </div>

        {/* Navigation Links and Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-bold">
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
              <Link to="/projects" className="hover:text-blue-500 transition duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-2">
            <p className="text-sm">Light</p>
            <div
              className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
                props.darkMode ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={props.toggleDarkMode}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  props.darkMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></div>
            </div>
            <p className="text-sm">Dark</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${props.darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                className={`hover:text-blue-500 transition duration-300 ${props.darkMode ? 'text-white' : 'text-black'}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-blue-500 transition duration-300 ${props.darkMode ? 'text-white' : 'text-black'}`}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`hover:text-blue-500 transition duration-300 ${props.darkMode ? 'text-white' : 'text-black'}`}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-blue-500 transition duration-300 ${props.darkMode ? 'text-white' : 'text-black'}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;