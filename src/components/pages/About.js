import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function About() {
  const [contact, setContact] = useState({
    name: "Luqman",
    age: "20",
    status: "Student",
    isFavourite: true
  })

  let starIcon = contact.isFavourite ? 'star-filled.jpg' : 'star-empty.png'

  function onStar() {
    setContact(prevContact => ({
      ...prevContact,
      isFavourite: !prevContact.isFavourite
    }))
  }

  const [kira, setKira] = useState(0)
  const [addThings, setAddThings] = useState(["1 biri-biri", "2 biri-biri"])

  function addClick() {
    setAddThings(prevThings => {
      return [...prevThings, `${prevThings.length + 1} biri-biri`]
    })
  }

  function minusClick() {
    setAddThings(prevThings => {
      return prevThings.slice(0, -1)
    })
  }

  const renderThings = addThings.map(thing => <p key={thing} className='text-gray-700'>{thing}</p>)

  function tolak() {
    setKira(kira - 1)
  }

  function tambah() {
    setKira(kira + 1)
  }

  return (
    <section className='min-h-screen flex flex-col bg-gray-100'>
      <Navbar />
      <article className='bg-white p-8 rounded-lg shadow-md mx-auto w-80 my-8 '>
      <h1 className='text-4xl font-bold text-center mb-8'>About Me</h1>
        <div className='flex justify-center mb-4'>
          <img src='/images/gambar-luqman.jpg' alt='Profile' className='w-32 h-32 rounded-full shadow-md' />
        </div> 
        <div className='flex justify-center mb-4'>
          <img onClick={onStar} src={`/images/${starIcon}`} alt='Star Icon' className='w-8 h-8 cursor-pointer' />
        </div>
        <h2 className='text-2xl font-semibold text-center mb-2'>{contact.name}</h2>
        <p className='text-center text-gray-700 mb-2'>{contact.age} years old</p>
        <h2 className='text-center text-gray-700'>{contact.status}</h2>
      </article>

      <div className='flex-grow container mx-auto p-8'>
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <div className='mb-4'>
            <h2 className='text-2xl font-semibold mb-4'>Counter</h2>
            <div className='flex items-center justify-center space-x-4'>
              <button onClick={tolak} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700'>-</button>
              <span className='text-xl'>{kira}</span>
              <button onClick={tambah} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700'>+</button>
            </div>
          </div>
          <div className='mb-4'>
            <h2 className='text-2xl font-semibold mb-4'>Kira Biri-Biri</h2>
            <div className='flex space-x-4'>
              <button onClick={addClick} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>Add Thing</button>
              <button onClick={minusClick} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>Remove Thing</button>
            </div>
            <div className='space-y-2 mt-4'>
              {renderThings}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </section>
  )
}

export default About