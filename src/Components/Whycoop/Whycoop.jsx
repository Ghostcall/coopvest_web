import React from 'react'
import './Whycoop.css'
import instantloan from '../../assets/instant-loan.5f1ac6bc24f6169d89dd.png'
import pos from '../../assets/pos.svg'
import invest from '../../assets/investment-opportunities.bff024b20890ebd0b43f.png'
import customer from '../../assets/customer-support.7c6852f074d800ea16cb.png'
import line from '../../assets/line.svg'
// import {link} from 'react-router-dom'
const whycoop = () => {
  return (
    <div className='whycoop'>
          <h1>Why Coopvest?</h1>
          <p>At Coopvest, we're not jst another financial technology company. We're your trusted partner, committed to transforming the way you <br />experience banking.</p>
      

        <div className="why-main-wrapper">
                <div className="whycoop-wrapper">
                     <img src={instantloan} alt="" />
                    <div className="whycoop-text-wrapper">
                        <h3>Instant Loans</h3>
                        <p>Whether you’re a cooperative of petty traders, a solo retail marketer, or a corporate professional in need of fast financial solutions, we’ve got you covered. Contact us to discover our various loan options and terms.</p>
                    </div>
                </div>
              
                <div className="whycoop-wrapper-1">
                  <div className="whycoop-text-wrapper">
                    <h3>Affordable POS</h3>
                    <p>COOPMONI offers cost-effective point-of-sale (POS) devices. These devices enable secure transactions and enhance financial inclusion.</p>
                  </div>
                  <img src={pos} alt="" />
                </div>

                <div className="whycoop-wrapper-2">
                    <img src={invest} alt="" />
                  <div className="whycoop-text-wrapper">
                    <h3>Investment Opportunities</h3>
                    <p>Access a variety of investment options tailored to cooperative members’ goals and risk preferences.</p>
                  </div>
                </div>

                <div className="whycoop-wrapper-3">
                    <div className="whycoop-text-wrapper">
                      <h3>Customer Support</h3>
                      <p>We prioritize your needs and feedback, our dedicated customer support team is available around the clock to provide assistance and ensure a seamless user experience.</p>
                     
                      <button>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                         Contact Support
                      </button>

                    </div>
                    <img src={customer} alt="" />
                    </div>
        </div>

            
          
    
    
    </div>
  )
}

export default whycoop
