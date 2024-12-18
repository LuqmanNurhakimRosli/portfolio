import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import Card from '../components/Card';
import cardData from '.../cardData';

function Home() {
    const cardArray = cardData.map( card => {
        return <Card key={card.id} card={card}
        />}
    )
  return (
    <div>
      <Navbar />
      <MainContent />
      <div className='text-center'>
        <h1 className='font-mono text-4xl text-white pt-4'>
          Programming Language
        </h1>
        
      <div className='flex justify-center'>
        <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-14 my-8">
          {cardArray}
        </div>
      </div>
      </div>   
      <Footer />   
    </div>
    
  );
}

export default Home;
