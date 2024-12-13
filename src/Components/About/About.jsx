import React from 'react'
import './About.css'
import first1 from '../../assets/coopvest_team_9.48461cb614a1c8b060e8.jpg'
import second2 from '../../assets/coopvest_team_7.667d2e6fd1f801419b12.jpg'
import third3 from '../../assets/coopvest_team_8.f59b68071c7a5caff16b.jpg'
import forth from '../../assets/coopvest_team_2.f4ba2806728383b27428.jpg'
import rent from '../../assets/rentshield.626c8c6bd6b780945a98.png'
import efficiency from '../../assets/rentefficiency.7171c42188ae940f51ac.png'
import news from '../../assets/rentnewness.c9adcfdbd60014c4596f.png'
import tenacity from '../../assets/renttenacity.e5bc4743c7eed096c597.png'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo-horizon.png'
const About = () => {
  return (
      <div className='about'>

          <div className="about-first-row">
              <div className="about-first-item">
                <div className="about-first-item-text">
                  <h1>WHO WE ARE</h1>
                  <p>Coopvest, an investment company, duly registered on 21st of Novemeber, 2021 with the Corporate Affairs Commission (CAC) with registration number 1865655. It has roots in the Cooperative Movement in Nigeria and Africa and it is seeking to expand its range of digital financial Services. We are dedicated to empowering cooperatives, Individuals, and Businesses, providing innovative and tailored digital financial services designed to meet the unique needs of individuals, businesses, and cooperative members. What sets us apart is our unwavering dedication to customer satisfaction and our relentless pursuit of excellence in everything we do. Our focus is on core integrity and excellence, positioning us to lead the way in the digital banking revolution.
                  <br /> <br /><br />What sets us apart is our unwavering dedication to customer satisfaction and our relentless pursuit of excellence in everything we do. Our focus is on core integrity and excellence, positioning us to lead the way in the digital banking revolution.</p>
                 </div>
               
                <div className="about-first-item-img">
                  <img src={first1} alt="" />
                </div>
                
              </div>

              <div className="about-second-item">
                    <img src={second2} alt=""/>
                    <img src={third3} alt="" /> 
              </div>  
          </div>


          <div className="about-second-row">
              <div className="mission-row">
                <h1>Our Mission</h1>
                <p>At Coopvest Limited, we are on a mission of evolving to satisfy the financial wants and needs. Our commitment lies in providing accessible, user-friendly, and secure fintech solutions. By bridging the gap between traditional financial services and digital innovation, we empower both individuals and Cooperative societies to thrive financially. As we persistently innovate and adapt our strategies and technologies, our unwavering dedication to empowering our community remains at the forefront.</p>
              </div>
          </div>
          <div className="family_img">
                <img src={forth} alt="" />
          </div>
          

          <div className="about-third-row">
              <div className="vision-row">
                <h1>Our Vision</h1>
                <p>Coopvest Limited is an investment company seeking to expand into the fintech space. Our team of experts brings together a wealth of experience in finance and technology, working tirelessly to create innovative solutions that cater to your unique needs.</p>
              </div>
          </div>

          <div className="about-forth-row">
                <h1>Our Values</h1>
                    <div className="value-row-1">
                        <div className="value1">
                            <img src={rent} alt="" />
                            <h3>Reliability</h3>
                            <p>At Coopvest, we understand the importance of a dependable banking partner. We are committed to providing a secure and stable platform for your financial needs. You can trust us to safeguard your information and transactions, giving you peace of mind and the confidence to manage your money effectively.</p>
                        </div>
                      
                        <div className="value2">
                            <img src={efficiency} alt="" />
                            <h3>Efficiency</h3>
                            <p>We believe in making your financial life easier. Our user-friendly digital platform simplifies everyday banking tasks, allowing you to manage your finances effortlessly. Whether it's checking your balance, sending payments, or accessing account information, we empower you to get things done quickly and conveniently, freeing up your valuable time to focus on what matters most.</p>
                        </div>
                    </div>


                    <div className="value-row-2">
                          <div className="value3">
                              <img src={news} alt="" />
                              <h3>Newness</h3>
                              <p>The world of finance is constantly evolving, and we is dedicated to staying ahead of the curve. We embrace innovation by continuously seeking new and improved solutions to meet your ever-changing financial needs. We are committed to providing you with the latest tools and services to empower your financial journey and equip you for success in the ever-changing economic landscape.</p>
                          </div>

                          <div className="value4">
                            <img src={tenacity} alt="" />
                            <h3>Tenacity</h3>
                            <p>Your financial well-being is our top priority. We are not just a bank; we are your partner in achieving your financial goals. We demonstrate unwavering commitment to your success by consistently exceeding your expectations and providing the support you need to navigate your financial journey with confidence. With us by your side, you can be sure of our unwavering dedication to helping you achieve your financial aspirations.</p>
                          </div>
                    </div>
          </div>

              <div className="slide-move">
                    <h2>Businesses that count on us</h2>
                    <div className="img-container">
                      <img src={logo1} alt="" />
                      <img src={logo2} alt="" />
                      <img src={logo3} alt="" />
                      <img src={logo4} alt="" className='horizon' />
                      <img src={logo1} alt="" />
                      <img src={logo2} alt="" />
                      <img src={logo3} alt="" />
                      <img src={logo4} alt="" className='horizon' />
                      <img src={logo1} alt="" />
                      <img src={logo2} alt="" />
                      <img src={logo3} alt="" />
                      <img src={logo4} alt="" className='horizon' />
                    </div>
              </div>

      </div>
  )
}

export default About
