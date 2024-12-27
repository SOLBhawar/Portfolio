import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import Skills from './assets/components/Skills'
import About from './assets/components/About'
import Work from './assets/components/Work'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'




function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
