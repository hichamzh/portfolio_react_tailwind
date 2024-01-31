import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Skill from './components/Skills/Skill'
import Projet from './components/Projets/Projet'

function App() {

  return (
    <>
    <section className="main h-screen pt-[2%]">
    <Navbar/>
    <Main/>
    </section>
    <section className="skills min-h-screen pt-[2%]">
    <Skill/>
    </section>
    <section className='min-h-screen pt-[2%]'>
    <Projet/>
    </section>
    </>
  )
}

export default App
