import React, {useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Form() {
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')

      console.log(firstName,lastName)

      function handleChangeFirst(event) {
        setFirstName(event.target.value)}
      
      function handleChangeLast(event) {
        setLastName(event.target.value)}
      


  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Navbar />
      <div className='container mx-auto p-8'>
        <h1 className='text-2xl font-bold mb-4'>Form Page</h1>

        <form>

          <input 
            type='text' 
            placeholder='First Name' 
            onChange={handleChangeFirst}

            />
            <input 
            type='text' 
            placeholder='Last Name' 
            onChange={handleChangeLast}

            />

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Form