import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Contact from './components/Contact/Contact'
import Skill from './components/Skills/Skill'
import Projet from './components/Projets/Projet'

function App() {

  return (
    <>
    <section className=" h-screen pt-[2%]" id='home'>
    <Navbar/>
    <Main/>
    </section>
    <section className=" min-h-screen pt-[2%]" id='skills'>
    <Skill/>
    </section>
    <section className='min-h-screen pt-[2%]' id='projets'>
    <Projet/>
    </section>
    {/* <section className="min-h-screen pt-[2%]" id='contact'>
    <Contact/>
    </section> */}
    </>
  )
}

export default App
