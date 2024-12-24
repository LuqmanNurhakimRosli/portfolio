import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Star from '../Star'

function Contact() {
  const [contact, setContact] = useState({
    name: "Luqman Nurhakim",
    email: "luqmanrosli907@gmail.com",
    status: "Having Internship",
    isFavourite: true
  })

  const onStar = () => {
    setContact(prevContact => ({
      ...prevContact,
      isFavourite: !prevContact.isFavourite
    }))
  }

  const [isDarkMode, setIsDarkMode] = useState(false)

  const darkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <section className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-white'}`}>
      <Navbar />
      <article className={`bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-lg shadow-lg mx-auto w-80 my-8  `}>
        <h1 className='text-4xl font-bold text-center mb-8'>About Me</h1>
        <div className='flex justify-center mb-4'>
          <img src='/images/gambar-luqman.jpg' alt='Profile' className='w-32 h-32 rounded-full shadow-md' />
        </div>

        <div className='flex justify-center mb-4'>
          <Star isFilled={contact.isFavourite} handleClick={onStar} />
        </div>

        <h2 className='text-xl font-semibold text-center mb-2'>{contact.name}</h2>
        <h2 className='text-xl font-semibold text-center mb-2'>{contact.email}</h2>
        <p className='text-center font-semibold mb-2'>{contact.status} </p>
      </article>
      <div className='flex justify-center mb-8'>
        <button
          className={`px-4 py-2 font-semibold rounded ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
          onClick={darkMode}
        >
          Toggle Dark Mode
        </button>
      </div>
      <Footer />
    </section>
  )
}

export default Contact