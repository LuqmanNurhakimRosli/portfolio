import React from 'react';
import Navbar from '../Navbar';            // Correct relative path
import Footer from '../Footer';            // Correct relative path
import MainContent from '../MainContent';  // Correct relative path
import Card from '../render/ProgrammingCard';                // Correct relative path
import cardData from '../Data/cardData'    // Correct relative path

function Home() {
    const [darkMode, setDarkMode] = React.useState(true);

    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode);
    }


    const cardArray = cardData.map(card => {
        return <Card key={card.id} card={card} />
    })

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <main className='flex-grow'>
                <MainContent />
                <div className='text-center bg-stone-600 py-8'>
                    <h1 className='font-mono text-4xl text-white pt-4'>
                        Programming Language
                    </h1>
                    <div className='flex justify-center'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
                            {cardArray}
                        </div>
                    </div>
                </div>
            </main>
            <Footer darkMode={darkMode} />
        </div>
    );
}

export default Home;