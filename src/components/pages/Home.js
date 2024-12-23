import React from 'react';
import Navbar from '../Navbar';            // Correct relative path
import Footer from '../Footer';            // Correct relative path
import MainContent from '../MainContent';  // Correct relative path
import Card from '../Card';                // Correct relative path
import cardData from '../Data/cardData'     // Correct relative path


function Home() {
    const cardArray = cardData.map( card => {
        return <Card key={card.id} card={card}
        />}
    )
  return (
    <div>
      <Navbar />
      <MainContent />
      <div className='text-center bg-grayCustom'>
        <h1 className='font-mono text-4xl text-white pt-4'>
          Programming Language
        </h1>
        
      <div className='flex justify-center '>
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-14 my-8">
          {cardArray}
        </div>
      </div>
      </div>   
      <Footer />   
    </div>
    
  );
}

export default Home;
