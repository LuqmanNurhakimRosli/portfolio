import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Services from './components/pages/Services.js';
import Contact from './components/pages/Contact.js';


export default function App () {
  
  return (
    <div className='app'>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}