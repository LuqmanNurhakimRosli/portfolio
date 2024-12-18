import React from 'react';
//guna router unutk navigate ke page lain
import { Link } from 'react-router-dom'

function Navbar() {
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
      </nav>
    </header>
  );
}

export default Navbar;
