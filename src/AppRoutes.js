import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Form from './components/pages/Form'
import MemePage from './components/pages/MemePage'


function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Form' element={<Form />} />
      <Route path='/MemePage' element={<MemePage />} />
    </Routes>
  )
}

export default AppRoutes
