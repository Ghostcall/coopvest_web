import React from 'react'
import './Empower.css'
import empower from '../../assets/financial-empowerment.22dba06904f92558f833.jpg'
const Empower = () => {
  return (


    <div className='empower'>
        <div className="empower-row">
            <h1>Unlock Financial <br />Empowerment with <br />Coopvest</h1>
            <p>Embark on a journey of financial empowerment with Coopvest Limited. Explore tailored solutions, cutting-edge innovation, and dedicated support. Click now to unlock your financial future.</p>
        
            <button>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                Learn More
            </button>
        </div>

        <div className="empower-img">
            <img src={empower} alt="" />
        </div>


    </div>


  )
}

export default Empower
