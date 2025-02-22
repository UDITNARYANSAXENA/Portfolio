import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Experience from './component/Experience'
import Footer from './component/Footer'
import Contact from './component/Contact'
import { Toaster } from 'react-hot-toast'
import Projects from './component/Projects'
import Certifications from './component/Certifications'

function App() {
  return (
    <>
    <div>
    <Navbar/>
      <Home />
      <About />
      <Projects />
      <Certifications/>
      <Experience />
      <Contact />
      <Footer />
    </div>
    <Toaster/>
    </>
  )
}

export default App