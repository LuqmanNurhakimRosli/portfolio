import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function About() {
    const [ isImportant, setIsImportant] = React.useState("Yes")

    function clickButton() {
        setIsImportant("No")
    }

  return (
    <section>
        <Navbar />
        <div>
            <div onClick={clickButton} className='bg-slate-500 w-4 container mx-auto p-28 flex justify-center'>
            <h2>{isImportant}</h2>

            </div>            
        </div>
        <Footer />
    </section>
)
}

export default About