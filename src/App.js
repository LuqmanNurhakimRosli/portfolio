import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Poem from './components/Poem';
import Card from './components/Card';
import cardData from './cardData';


export default function App () {
  const cardSession = cardData.map( card => {
    return <Card 
        key={card.id}
        card={card}
    />
  })
  return (
    <div className = "app " >
      <Navbar />
      <Poem 
            joke="Esok cuti"
            answer="Betul"
          />
          <Poem 
            joke="Esok cuti"
            answer="Betul"
          />
          <Poem 
            joke="Esok cuti"
            answer="Betul"
          /> 
      <MainContent />

      <div className='text-center'>
        <h1 className='font-mono text-4xl text-white pt-4'>
          Programming Language
        </h1>
        
      <div className='flex justify-center'>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14 my-8">
          {cardSession}
        </div>
      </div>
      </div>
      

      <Footer />
    </div>
  )
}