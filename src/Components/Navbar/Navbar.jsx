import React from 'react'
import './Navbar.css'
import logo from '../../assets/coopvest.ico'

const Navbar = () => {
  return (
    <div className='navbar'>
       
       <div className="logo">
            <img src={logo} alt=""/>
       </div>

       <div className="nav_link_container">

            <ul>
                <li><a href='#Home'>Home</a></li>
                <li><a href='About.jsx'>About Us</a></li>
                <li className='products_menu'><a href='Product.jsx'>Products</a>

                    <ul className='product_sub_menu'>
                        <li>
                            <h2>COOPMONI</h2> 
                            <h3>COOPMONI (AGENCY BANKING)Bridging the Banking Gap for Low-Income Earners in Nigeria.</h3>
                            
                            <h4 className='pos1'>
                                <span className='pos1_img'>
                                    <span class="material-symbols-outlined">point_of_sale</span>
                                    POS Services
                                    </span>
                                Perform secured transaction with our cost-effective devices.
                            </h4>
                            <h4 className='pos2'>

                                <span className='pos2_hint'>
                                    <span className='pos2_img'>
                                    <img src={monitoring} alt=""/>
                                    Affordable and Accessible Services
                                    </span>
                                </span>
                                Our services are accessible and affordable for all.
                            </h4>

                        </li>

                        <li>
                            <h2>COOPURSE</h2> 
                            <h3>COOPURSE, your Digital Wallet</h3>
                        </li>

                        <li>
                            <h2>COOPMONI (AGENCY BANKING)</h2> 
                            <h3>Bridging the Banking Gap for Low-Income Earners in Nigeria.</h3>
                        </li>

                        <li>
                            <h2>LOANS</h2> 
                            <h3>LOANS, coming soon</h3>
                        </li>

                    </ul>

                </li>
                <li><a href='Team.jsx'>Our Team</a></li>
                <li><a href='Faq.jsx'>FAQs</a></li>
            </ul>

       </div>

       <div className="Contact-Us">
            <a href='#contact'>Contact Us</a>
       </div>
        
    </div>
  )
}

export default Navbar
