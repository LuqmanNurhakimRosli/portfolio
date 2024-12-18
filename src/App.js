import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';


export default function App () {
  
  return (
    <div className='app'>
      <Routes>
        <Route path='./components/pages/Home.js' element={<Home />} />
        <Route path='./components/pages/About.js' element={<About />} />
        <Route path='./components/pages/Services.js' element={<Services />} />
        <Route path='./components/pages/Contact.js' element={<Contact />} />
      </Routes>
    </div>
  )
}