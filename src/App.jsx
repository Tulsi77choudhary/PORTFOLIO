import React from 'react'
import Navbar from "./components/Navbar/Navbar.jsx";
import About from './components/About/About.jsx';
import Skills from './components/Skill/Skill.jsx';
import Work from './components/Work/Work';
import Education from './components/Education/Education.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
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