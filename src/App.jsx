import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
// import About from './Components/About/About Us'
import Whycoop from './Components/Whycoop/Whycoop'
import Empower from './Components/Empower/Empower'
import Digital_Finance from './Components/Digital_Finance/Digital'
import Team from './Components/Team/Team'
import About from './Components/About/About Us'
const App = () => {
  return (
   

           
                // <Routes>
                //   <Route path='/' element={<About />} />
                // </Routes>
            
                
            <div className='homepage'>
                <Hero/>
                <Whycoop/>
                <Empower/>
                <Digital_Finance/>
                <About/>
            </div>
  
            
                
            
            
      
    
    
    
  )
}

export default App
