import React from 'react'
function MainContent() {
  return (
    <main className='bg-gray-300 py-10 px-6'>
        <div className='container mx-auto'>
         {/* Section Heading */}
          <h1 className='text-4xl font-bold text-center text-gray-700 mb-8 '>
            Welcome To My Page
          </h1>

        {/* Feature Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center  border-2 border-black p-10'>
        {/* Card 1 */}
          <div className='bg-white shadow-md rounded-lg p-6'>
            <h2 className='text-2xl font-semibold text-black mb-4'>The hansome man</h2>
              <p className='text-gray-600'>
              Learn the basics of React, the most popular library for building user interfaces.
              </p>
            
          </div>
        {/* Card 2 */}
        <div className='bg-white shadow-md rounded-lg p-6'>
            <h2 className='text-2xl font-semibold text-black mb-4'>Suer strong guy</h2>
              <p className='text-gray-600'>
              Discover the power of reusable components to make your code efficient and clean.
              </p>
            
          </div>
          {/* Card 3 */}
          <div className='bg-white shadow-md rounded-lg p-6'>
            <h2 className='text-2xl font-semibold text-black mb-4'>Enhancing the Sigma</h2>
              <p className='text-gray-600'>
              Integrate state and props seamlessly to create dynamic, interactive UIs.
              </p>
            
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-10'>
          <button className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg  hover:bg-blue-500 transition'>
            Get Started
          </button>
        </div>

        </div>
    </main>
  )
}

export default MainContent
