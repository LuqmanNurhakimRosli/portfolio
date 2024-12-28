import React, {useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Form() {
  const [dataForm, setDataForm] = useState 
  ({ firstName: '', lastName:'',email:'', 
    comment:'',status : false, statusStudent:'', color:''})

  // console.log(dataForm)

  // function handleChange(event) {
  //   setDataForm  ( prevDataForm => {
  //     return {
  //       ...prevDataForm,
  //       [event.target.name] : event.target.value
  //     }
  //   })
  // }

  const id = React.useId()

  function statusCheck() {
    return dataForm.status ? 'Thank you for agreeing' : 'Consider agree to the terms'
  }

function handleSubmit(event) {
  event.preventDefault()
  console.log(dataForm)
}

  function handleChange(event) {
    const {name, type, value, checked} = event.target
    setDataForm(prevDataForm => {
      return {
        ...prevDataForm,
        [name] : type === 'checkbox' ? checked : value
        
      }
    })
    console.log(name, type, value)
  }


  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Navbar />
      <div className='container mx-auto p-8'>
        <h1 className='text-3xl font-bold text-center mb-8'>Form Page</h1>

        <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
          <div className='mb-4'>
            <label htmlFor={id + "firstName" } className='block text-gray-700 text-sm font-bold mb-2'>
              First Name
            </label>
            <input 
            id={id + "firstName" }
              type='text' 
              placeholder='Enter your first name' 
              name='firstName'
              onChange={handleChange}
              value={dataForm.firstName}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor={id + '-lastName'} className='block text-gray-700 text-sm font-bold mb-2'>
              Last Name
            </label>
            <input 
            id={id + '-lastName'}
              type='text' 
              placeholder='Enter your last name' 
              name='lastName'
              onChange={handleChange}
              value={dataForm.lastName}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          
          <div className='mb-4'>
            <label htmlFor={id + '-email'} className='block text-gray-700 text-sm font-bold mb-2'>
              Email
            </label>
            <input 
            id={id + '-email'}
              type='email' 
              placeholder='Enter your email' 
              name='email'
              onChange={handleChange}
              value={dataForm.email}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='mb-4'>
          <label htmlFor={id + '-comment'} className='block text-gray-700 text-sm font-bold mb-2'>
              Comment
            </label>

            <textarea 
            id={id + '-comment'}
              placeholder='Enter your comment here' 
              name='comment'
              onChange={handleChange}
              value={dataForm.comment}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='mb-4'>
            <input 
              type='checkbox'
              id={id + '-status'}
              name='status'
              onChange={handleChange}
              checked={dataForm.status}
            />
            <label htmlFor={id + '-status'}
                className='ml-2 text-sm font-medium text-gray-700 cursor-pointer select-none'>
              {statusCheck()}
            </label>
          </div>

          <fieldset className='mb-6 p-4 border border-gray-300 rounded-md'>
          <legend className='text-lg font-semibold px-2 text-gray-700'>
            Current Student Status
          </legend>

          <div className='space-y-2'>
            <div className='flex items-center'>
              <input 
                type='radio'
                id={id + '-studying'}
                name='statusStudent'
                value='studying'
                onChange={handleChange}
                checked={dataForm.statusStudent === 'studying'}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
              />
              <label 
                htmlFor={id + '-studying'} 
                className='ml-2 text-sm font-medium text-gray-700 cursor-pointer'
              >
                Studying
              </label>
            </div>

            <div className='flex items-center'>
              <input 
                type='radio'
                id={id + '-hiatus'}
                name='statusStudent'
                value='hiatus'
                onChange={handleChange}
                checked={dataForm.statusStudent === 'hiatus'}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
              />
              <label 
                htmlFor={id + '-hiatus'}
                className='ml-2 text-sm font-medium text-gray-700 cursor-pointer'
              >
                On Hiatus
              </label>
            </div>

            <div className='flex items-center'>
              <input 
                type='radio'
                id={id + '-graduated'}
                name='statusStudent'
                value='graduated'
                onChange={handleChange}
                checked={dataForm.statusStudent === 'graduated'}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
              />
              <label 
                htmlFor={id + '-graduated'}
                className='ml-2 text-sm font-medium text-gray-700 cursor-pointer'
              >
                Graduated
              </label>
            </div>
          </div>
        </fieldset>


        <div className='mb-4'>
        <label htmlFor={id + '-color'} className='block text-gray-700 text-sm font-bold mb-2'>
          Choose a Color
        </label>
        <select
          id={id + '-color'}
          name='color'
          value={dataForm.color}
          onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'
        >
          <option value=''>--- Choose ---</option>
          <option value='red'>Red</option>
          <option value='blue'>Blue</option>
          <option value='yellow'>Yellow</option>
          <option value='green'>Green</option>
        </select>
      </div>

      <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        Submit
      </button>

        </form>
      </div>
      <Footer />
    </div>
)
}

export default Form