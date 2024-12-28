import React, {useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Form() {
  const [dataForm, setDataForm] = useState 
  ({ firstName: '', lastName:'',email:''})

  console.log(dataForm)

  function handleChange(event) {
    setDataForm ( prevDataForm => {
      return {
        ...prevDataForm,
        [event.target.name] : event.target.value
      }
    })
  }



  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Navbar />
      <div className='container mx-auto p-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>Form Page</h1>

        <form className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              First Name
            </label>
            <input 
              type='text' 
              placeholder='Enter your first name' 
              name='firstName'
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Last Name
            </label>
            <input 
              type='text' 
              placeholder='Enter your last name' 
              name='lastName'
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Email
            </label>
            <input 
              type='email' 
              placeholder='Enter your email' 
              name='email'
              onChange={handleChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
)
}

export default Form