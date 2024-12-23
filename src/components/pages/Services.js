import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import memesData from '../Data/memesData'

function Services() {
  const [name, setName] = React.useState("")
  const [meme, setMeme] = React.useState("")

  function getMemeImage() {
    const memeArray = memesData.data.memes
    const randomMeme = Math.floor(Math.random() * memeArray.length)
    setMeme(memeArray[randomMeme].url)
  }

  return (
    <section>
      <Navbar />

      <div className='container mx-auto p-8 flex justify-center'>
        <form className='w-full max-w-lg bg-white p-8 rounded-lg shadow-md'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='topText'>
              Top Text
            </label>
            <input
              id='topText'
              type='text'
              placeholder='Left Text'
              className='border border-gray-300 rounded-md w-full p-2'
              //asal nama kosong, bila user isi nama kat palceholder sini, data 
              //dari placeholder akan dihantar ke setName dan letak ke dalam {name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='bottomText'>
              Bottom Text
            </label>
            <input
              id='bottomText'
              type='text'
              placeholder='Left Right'
              className='border border-gray-300 rounded-md w-full p-2'
            />
          </div>

          <div className='flex justify-center'>
            <button
              type='button'
              onClick={getMemeImage}
              className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Get a new meme image 🖼
            </button>
          </div>

          {meme && (
            <div className='mt-6 flex justify-center'>
              <img src={meme} alt='meme' className='rounded-md shadow-md' />
            </div>
          )}
          

        </form>
      </div>

      <Footer />
    </section>
  )
}

export default Services