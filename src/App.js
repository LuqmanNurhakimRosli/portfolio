import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


export default function App () {
  return (
    <div className = "app" >
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}