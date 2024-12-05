import React from 'react'
import logo from '../../assets/coopvest.ico'
import './footer.css'
const footer = () => {
  return (

<div className='footer'>

    <div className="footer_container">
        <div className="footer_logo">
            <img src={logo} alt="" />
        </div>

        <div className="footer_products">
        
        
        </div>

        <div className="footer_company">

        </div>
    </div>
       
<div className="footer_details">
        <div className="footer_info">
            <h3>Phone: +2348161203489</h3>
            <h3>Mail: info@coopvest.ng</h3>
            <h3>No 16, University Crescent, Bodija, Ibadan, Oyo State</h3>
            <h1>Get in touch with us</h1>
        </div>

        <div className="footer_social">
            
        </div>

</div>
        
        
        <div className="footer_copyright">
                <h4>2024 Coopvest. All rights reserved.</h4>
        </div>

    </div>

  )
}

export default footer
