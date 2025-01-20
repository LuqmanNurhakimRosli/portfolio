import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import MemePage from './components/pages/MemePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    const [darkMode, setDarkMode] = React.useState(true);
  
    function toggleDarkMode() {
      setDarkMode((prevDarkMode) => !prevDarkMode);
    }
  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/memepage" element={<MemePage />} />
    </Routes>
    <Footer darkMode={darkMode} />

    </div>

  );
}

export default App;