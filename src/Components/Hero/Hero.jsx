import React from 'react'
import './Hero.css'
import security from '../../assets/shield.png'
import payment from '../../assets/bill.png'
import saving from '../../assets/piggy-bank.png'
const Hero = () => {
  return (

    <div className='hero'>

        <div className="hero-main">
            <h1>Your one-stop solution <br /> 
            to digital <span>financial<br /> services</span></h1>
       
            <p>
                We understand the unique needs of Cooperatives, individuals and small Businesses from seamless payments
                to customized loans, we've got you covered.
            </p>

            <ul>
                <li className='get-started'><a href='/'>Get Started!</a></li>
                <li className='Learn-more'><a href='/'>Learn More</a></li>
            </ul>
            
        </div>


            <div className="services">
                    <div className="security">
                        <img src={security} alt="" /><h3>Security</h3>
                        
                    </div>

                    <div className="payment">
                        <img src={payment} className='payimg' alt="" /><h3>Process Payments </h3>
                        
                    </div>
                    <div className="saving">
                        <img src={saving} className='savimg' alt="" /><h3>Savings Management</h3>
                    </div>
            </div>


    </div>

  )
}

export default Hero
