import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import memesData from '../Data/memesData'

function Services() {
  function memeButton() {
    const memeFirst = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeFirst.length)
    const url = randomNumber[memeFirst].url
    console.log(url)
  }

    return (
      <section>
          <Navbar />
  
          <div className='container mx-auto p-28 flex justify-center'>
              <form className='grid grid-cols-2 gap-4 w-full'>
                <label className='pl-2'> Top Text
                  <input
                      type='text'
                      placeholder='Left Text'
                      className='border-solid border-2 border-indigo- rounded-md w-full p-2' >
                  </input>
                </label>
  
                <label className='pl-2'> Bottom Text
                  <input
                      type='text'
                      placeholder='Left Right'
                      className='border-solid border-2 border-indigo- rounded-md w-full p-2' >
                  </input>
                </label>
  
                <button onClick={memeButton} className='bg-slate-500 p-2 text-white border-solid border-2 border-indigo- rounded-md col-span-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-5'>
                    Get a new meme image 🖼
                </button>
              </form>
          </div>
  
          <Footer />
      </section>
    )
}

export default Services