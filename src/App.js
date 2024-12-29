import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import Form from './components/pages/Form.js';
import About from './components/pages/About.js';
import Services from './components/pages/Services.js';
import MemePage from './components/pages/MemePage.js';
import Contact from './components/pages/Contact.js';
import { Analytics } from "@vercel/analytics/react";



export default function App () {
  
  return (
    <div className='app'>
      <Routes>
      <Route path='*' element={<h1>404 - Page Not Found</h1>} />
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Form' element={<Form />} />
      <Route path='/MemePage' element={<MemePage />} />
      </Routes>
      <Analytics />
    </div>
  )
}