import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Poem from './components/Poem';


export default function App () {
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
      <Footer />
    </div>
  )
}