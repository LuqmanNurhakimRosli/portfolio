import React from 'react';

function Navbar() {
  return (
    <header>
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/img-home.jpg`}
            alt="Banner"
            className="h-12 w-12 rounded-full" // Adjust size and style as needed
          />
          <h1 className="text-2xl font-bold">ReactFacts</h1>
        </div>
        <ul className="flex space-x-8 text-lg">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
