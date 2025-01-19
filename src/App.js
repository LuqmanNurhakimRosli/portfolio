import { Analytics } from "@vercel/analytics/react";
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import MemePage from '../pages/MemePage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/memepage" element={<MemePage />} />
      <Analytics />

    </Routes>
  );
};

export default App;