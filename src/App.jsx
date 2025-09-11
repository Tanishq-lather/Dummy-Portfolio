import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
 

  return (
    <>
    <div className="bg-[#09101a] min-h-screen flex flex-col gap-10 ">
        <div className='bg-[#09101a] flex justify-center w-full'>
          <Navbar /> 
        </div>
        <Hero /> 
        <About />
        <Projects />
        <Contact />
    </div>
    </>
  )
}

export default App
