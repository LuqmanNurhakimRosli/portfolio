import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Star from '../Star'

function Contact() {
  const [contact, setContact] = useState({
    name: "Luqman",
    email: "luqman@example.com",
    age: "20",
    isFavourite: true
  })

  const onStar = () => {
    setContact(prevContact => ({
      ...prevContact,
      isFavourite: !prevContact.isFavourite
    }))
  }

  return (
    <section className='min-h-screen flex flex-col bg-gray-100'>
      <Navbar />
      <article className='bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-lg shadow-lg mx-auto w-80 my-8'>
        <h1 className='text-4xl font-bold text-center text-white mb-8'>About Me</h1>
        <div className='flex justify-center mb-4'>
          <img src='/images/gambar-luqman.jpg' alt='Profile' className='w-32 h-32 rounded-full shadow-md' />
        </div>

        <div className='flex justify-center mb-4'>
          <Star isFilled={contact.isFavourite} handleClick={onStar} />
        </div>

        <h2 className='text-xl font-semibold text-center text-white mb-2'>{contact.name}</h2>
        <h2 className='text-xl font-semibold text-center text-white mb-2'>{contact.email}</h2>
        <p className='text-center text-gray-200 mb-2'>{contact.age} years old</p>
      </article>
      <Footer />
    </section>
  )
}

export default Contact