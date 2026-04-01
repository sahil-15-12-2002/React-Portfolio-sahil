import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Resume from './pages/Resume'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollTOTop'

const App = () => {
  return (
    <>
     <Header/>
     <ScrollToTop/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
      <Footer />
    
    </>
  )
}

export default App