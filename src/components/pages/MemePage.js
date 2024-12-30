import React, {useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import memesData from '../Data/memesData'
import { downloadMeme } from '../memeDownload'

function MemePage() {
  const [darkMode, setDarkMode] = React.useState(true);
  
      function toggleDarkMode(){
          setDarkMode(prevDarkMode => !prevDarkMode);
      }
  // const [meme, setMeme] = React.useState("")
  const [meme,setMeme] = useState({
    topText:'',
    bottomText:'',
    memeImage: 'https://i.imgflip.com/16iyn1.jpg'
  })

  const[allMemeImage, setAllMemeImage] = useState(memesData)

  function getMemeImage() {
    const memeArray = allMemeImage.data.memes
    const randomMeme = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomMeme].url
    setMeme(prevMeme => 
      (
       { ...prevMeme,
        memeImage: url
      }
    ))

  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme (prevMeme => {
      return {
        ...prevMeme,
        [name] : value
      }
    })
  }


  return (
    <section>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

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
              name='topText'
              onChange={handleChange}
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
              name='bottomText'
              onChange={handleChange}
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

          
          <div className='mt-6 flex justify-center'>
            <div className='relative'>
              <img 
                src={meme.memeImage} 
                alt='meme' 
                className='rounded-md shadow-md max-w-lg'
              />
              <h2 className='absolute top-4 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-white uppercase text-center w-full px-4 break-words text-stroke'>
                {meme.topText}
              </h2>
              <h2 className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-white uppercase text-center w-full px-4 break-words text-stroke'>
                {meme.bottomText}
              </h2>
            </div>
          </div>

          <div className="flex justify-center mt-6 mb-4">
            <button
              onClick={async () => {
                try {
                  await downloadMeme(meme);
                } catch (err) {
                  console.error('Failed to download meme:', err);
                }
              }}
              className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Download Meme 📥
            </button>
          </div>

 
          

        </form>
      </div>


      <Footer darkMode={darkMode} />
      </section>
  )
}

export default MemePage