import React, {useState} from 'react';
//guna router unutk navigate ke page lain
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-black text-white">
      <nav className='container mx-auto flex items-center justify-between py-3 px-6'>
        <div className='flex items-center space-x-4 '>
          <img
            src={require (`../images/gambar-luqman.jpg`)}
            alt="Banner" className='w-14 h-14 rounded-full'/>
          <h1 className='text-2xl font-bold'>ReactFacts</h1>
        </div>
        <ul className='flex space-x-6 font-bold'>
          <li>
              <Link to='/' className="hover:text-blue-500 transition duration-300" >Home</Link>
          </li> 
          <li>
          <Link to='/about' className="hover:text-blue-500 transition duration-300" >About</Link>
          </li>
          <li>
          <Link to='/Services' className="hover:text-blue-500 transition duration-300" >Services</Link>
            </li>
          <li>
          <Link to='/Contact' className="hover:text-blue-500 transition duration-300" >Contact</Link>
          </li>
        </ul>

        {/*Hamburger Menu*/}
        <button 
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}>
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
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
                
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black space-y-4 py-4 font-bold">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className="hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
