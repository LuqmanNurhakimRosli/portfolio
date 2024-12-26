import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='w-full p-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20'>

            <div>
              <h2 className='text-lg font-bold mb-4'>About Me</h2>
              <p className='text-gray-400'>
                Tengah intern sekarang ni kat Cyberjaya, so far jadi best decision sebab jauh gak merantau dan banyak sacrifise daripada my family.
              </p>
            </div>

            <div>
              <h2 className='text-lg font-bold mb-4'>Quick Links</h2>
              <ul className='space-y-2'>
                <li>
                  <a href="#" className='hover:text-gray-300'>Home</a>
                </li>
                <li>
                  <a href="#" className='hover:text-gray-300'>About</a>
                </li>
                <li>
                  <a href="#" className='hover:text-gray-300'>Services</a>
                </li>
                <li>
                  <a href="#" className='hover:text-gray-300'>Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='text-lg font-bold mb-4'>Contact Me</h2>
              <p className='text-gray-400'>Email: luqman@dagangnet.com</p>
              {/* <p className='text-gray-400'>Phone: </p> */}
              <p className='text-gray-400'>Location: Cyberjaya, Malaysia</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full border-t border-gray-700 pt-4 text-center'>
        <p className='text-gray-400 text-sm'>
          &copy; {new Date().getFullYear()} ReactFacts. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer