// import React from 'react'
// import {BrowserRouter as Route, Routes } from 'react-router-dom'
// import Hero from './Components/Hero/Hero'
// import Whycoop from './Components/Whycoop/Whycoop'
// import Empower from './Components/Empower/Empower'
// import Digital_Finance from './Components/Digital_Finance/Digital'
// import Team from './Components/Team/Team'
// import About from './Components/About/About Us'
// import Navbar from './Components/Navbar/Navbar'
// const App = () => {
//   return (
   
//             <div className='homepage'>
              
//                     <Router>
//                         <Navbar />
//                         <Routes>
//                           <Route path="/" element={<Home />} />
//                           <Route path="/about" element={<About />} />
//                           <Route path='/product' element={<Products />}/>
//                           <Route path='/team' element={<Team />}/>
//                           <Route path='/about' element={<About />}/>
//                           <Route path='/faqs' element={<Faqs />}/>
//                           <Route path='/Contact' element={<Contact />}/>
//                         </Routes>
//                     </Router>

//                 <Hero/>                               
//                 <Whycoop/>
//                 <Empower/>
//                 <Digital_Finance/>
                
//             </div>
  
            
                
            
            
      
    
    
    
//   )
// }

// export default App





































import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Whycoop from './Components/Whycoop/Whycoop';
import Empower from './Components/Empower/Empower';
import Digital_Finance from './Components/Digital_Finance/Digital';
import Team from './Components/Team/Team';
import About from './Components/About/About'
import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/Home';
// import Products from './Components/Products/Products';
import Faqs from './Components/Faqs/Faqs';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    
      <div className="homepage">
        {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </Router> */}
        <Hero />
        <Whycoop />
        <Empower />
        <Digital_Finance />
        <About/>
        <Team />
      </div>
    
  );
};

export default App;
