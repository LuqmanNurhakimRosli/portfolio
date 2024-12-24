import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/brandLuqman.png" // Use the relative URL path
            alt="Banner"
            className="w-20 h-20 rounded-full" // Adjusted size
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
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

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
        <div className="md:hidden bg-gray-800 text-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/" className="hover:text-blue-500 transition duration-300" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition duration-300" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-500 transition duration-300" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition duration-300" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar