import React from 'react';

function Navbar() {
  return (
    <header className="bg-white text-gray-800">
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        <div className='flex items-center space-x-4 '>
          <img
            src={`${process.env.PUBLIC_URL}/images/img-home.jpg`}
            alt="Banner" className='w-14 h-14 rounded-full'/>
          <h1 className='text-2xl font-bold'>ReactFacts</h1>
        </div>
        <ul className='flex space-x-6'>
          <li> <a href='#home' className='hover:text-blue-500 transition duration-300'>Home </a> </li> 
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
