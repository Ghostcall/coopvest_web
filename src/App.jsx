import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Whycoop from './Components/Whycoop/Whycoop'
import Empower from './Components/Empower/Empower'
const App = () => {
  return (
    <Router>
        <div>
            {/* <Navbar/> */}
            <Hero/>
            <Whycoop/>
            <Empower/>
        </div>
    </Router>
    
    
  )
}

export default App
