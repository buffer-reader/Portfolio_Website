import React from 'react'

import { About,Footer,Header,Skills,Testimonial,Work } from './constainers'
import { NavBar } from './components'

import './App.scss'
const App = () => {
  console.log('hi')
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />

    </div>
  )
}

export default App