import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer({ darkMode }) {
  return (
    <footer 
      className={`
        ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}
        transition-colors duration-300 py-8 px-4 md:px-8
      `}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">About Me</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
              Currently interning at Dagang Net Technologies in Cyberjaya. 
              Passionate about web development and creating innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className={`
                ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} 
                transition-colors duration-200 text-sm
              `}>
                Home
              </Link>
              <Link to="/about" className={`
                ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} 
                transition-colors duration-200 text-sm
              `}>
                About
              </Link>
              <Link to="/projects" className={`
                ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} 
                transition-colors duration-200 text-sm
              `}>
                Projects
              </Link>
              <Link to="/contact" className={`
                ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} 
                transition-colors duration-200 text-sm
              `}>
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Contact</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500" />
                <a href="mailto:luqman@dagangnet.com" className="text-sm hover:underline">
                  luqman@dagangnet.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-500" />
                <span className="text-sm">Cyberjaya, Malaysia</span>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className={`
                  ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} 
                  transition-transform hover:scale-110 duration-200
                `}>
                  <FaGithub size={20} />
                </a>
                <a href="#" className={`
                  ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} 
                  transition-transform hover:scale-110 duration-200
                `}>
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className={`
                  ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} 
                  transition-transform hover:scale-110 duration-200
                `}>
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`
          border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'} 
          pt-4 mt-8 text-center text-sm
          ${darkMode ? 'text-gray-400' : 'text-gray-600'}
        `}>
          <p>&copy; {new Date().getFullYear()} Luqman Nurhakim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;