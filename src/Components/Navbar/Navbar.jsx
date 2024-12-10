import React from 'react'
import logo from '../../assets/coopvest.ico'
import './Navbar.css'
const Navbar = () => {
  return (

    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>

        <div className="nav-menu">
           <ul>
              <li className='nav-links-active'>
                <a href="/">Home</a>
              </li>
              <li className='nav-links'>
                <a href="/About Us.jsx">About Us</a>
              </li>
              <li className='nav-links'>
                <a href="/Products">Products</a>
              </li>
              <li className='nav-links'>
                <a href="/Team">Our team</a>
              </li>
              <li className='nav-links'>
                <a href="/Faqs">Faqs</a>
              </li>
           </ul>
        </div>

        <div className="contact">
            <ul>
              <li><a href="/Contact">Contact Us</a></li>
            </ul>

        </div>


    </div>

  )
}

export default Navbar
