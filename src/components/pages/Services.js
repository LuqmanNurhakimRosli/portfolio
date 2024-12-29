import React, {useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import memesData from '../Data/memesData'

function Services() {
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
              <img src={meme.memeImage} alt='meme' className='rounded-md shadow-md' />
              <h2>{meme.topText} </h2>
              <h2>{meme.bottomText} </h2>
            </div>
          

        </form>
      </div>


      <Footer />
    </section>
  )
}

export default Services