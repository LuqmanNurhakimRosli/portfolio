import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import WindowTracker from '../playground/WindowTracker'

function About() {
    const [darkMode, setDarkMode] = React.useState(true);

    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode);
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

      <div className='flex justify-center mt-8 pb-8'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <Link to='/Form' className='no-underline text-white'>
            Form Page
          </Link>
        </button>
      </div>

      <div className='mt-8'>
      <WindowTracker />
      
    </div>

    </section>
  )
}

export default About