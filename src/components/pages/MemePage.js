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
    memeImage: 'https://i.imgflip.com/1bhw.jpg'
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
    <section className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-500' : 'bg-gray-100'}`}>
      
      <div className='container mx-auto px-4 py-8'>
        <form className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg'>
        <div className='grid grid-cols-1 gap-4 mb-6'>
          <div className="space-y-2">
            <label 
              htmlFor="topText" 
              className="block text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"            >
              Top Text
            </label>
            <input 
              id="topText"
              type='text'
              placeholder='Enter top text'
              className='w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
              name='topText'
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
  
            <div className="space-y-2">
              <label 
                htmlFor="bottomText" 
                className="block text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"    >
                Bottom Text
              </label>
              <input 
                id="bottomText"
                type='text'
                placeholder='Enter bottom text'
                className='w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
              />
            </div>
          </div>
  
          <button
            type='button'
            onClick={getMemeImage}
            className='w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200'
          >
            Get a new meme image 🖼
          </button>
  
          <div className='mt-6'>
            <div className='relative'>
              <img 
                src={meme.memeImage} 
                alt='meme' 
                className='w-full rounded-lg shadow-md'
              />
              <h2 className='absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase text-center w-full px-4 break-words text-stroke'>
                {meme.topText}
              </h2>
              <h2 className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase text-center w-full px-4 break-words text-stroke'>
                {meme.bottomText}
              </h2>
            </div>
          </div>
  
          <div className='mt-6'>
            <button
              onClick={downloadMeme}
              className='w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200'
            >
              Download Meme 📥
            </button>
          </div>
        </form>
      </div>
      
    </section>
  );
}

export default MemePage