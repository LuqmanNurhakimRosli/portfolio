import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function About() {
    
    const [kira, setKira] = React.useState(0)

    function tolak () {
        setKira = ( (calc) => calc - 1)
    }

    function tambah () {
        setKira = ( (calc) => calc + 1)
    }



  return (
    <section>
        <Navbar />
        <div className='flex items-end justify-center'>
            <div>

            <button  onClick={tolak} className='bg-slate-500 p-2 text-white border-solid border-2 border-indigo- rounded-md col-span-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-5' onClick={() => setKira(kira - 1)}>
                -
            </button>
            <div  className='bg-slate-500 w-4 container mx-auto p-28 flex justify-center'>
            <h2>{kira}</h2>
            </div>     
            <button onClick={tambah} className='bg-slate-500 p-2 text-white border-solid border-2 border-indigo- rounded-md col-span-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-5' onClick={() => setKira(kira + 1)}>
                +
            </button>       
        </div>
        </div>
        <Footer />
    </section>
)
}

export default About