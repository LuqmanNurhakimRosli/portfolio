import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Form() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Navbar />
      <div className='container mx-auto p-8'>
        <h1 className='text-2xl font-bold mb-4'>Form Page</h1>
        {/* Add your form content here */}
      </div>
      <Footer />
    </div>
  )
}

export default Form