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
    <div className = "app" >
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
      {cardSession}
      <Footer />
    </div>
  )
}