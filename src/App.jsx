import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

const App = () => {
  return (
    <Router>
        <div>
            {/* <Navbar/> */}
            <Hero/>
        </div>
    </Router>
    
    
  )
}

export default App
