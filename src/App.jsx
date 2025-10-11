import React from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Skills />
      <Work />
      
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App;