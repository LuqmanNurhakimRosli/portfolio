import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <section className="min-h-screen flex flex-col bg-gray-200">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
            <h1 className="text-5xl font-extrabold text-center mb-12 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Service Projects
          </span>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
           </h1>
        
        {/* Profile Profile */}
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src="/images/projects/memeGeneratorPage.png" 
              alt="Meme Generator" 
              className="w-full h-48 object-cover"
            />
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Meme Generator</h2>
            <p className="text-gray-600 mb-4">
              Create custom memes with our meme generator tool
            </p>
            <Link 
              to="/MemePage" 
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center transition duration-200"
            >
              Try Meme Generator
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default Projects