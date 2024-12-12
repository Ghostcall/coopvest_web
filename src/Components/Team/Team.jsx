import React from 'react'
import './Team.css'
import chris from '../../assets/chris.4f364674fe2b0b12a769.jpg'
import taiwo from '../../assets/coopvest_team_14.d439ded3dce161967d85.jpg'
import mannan from '../../assets/coopvest_team_1.18d6c39141a91afb55df.jpg'
import anu from '../../assets/coopvest_team_10.ceccbed7094d504b0507.jpg'
import madam from '../../assets/coopvest_team_16.59b8d7197b5a55a9be29.jpg'
import stella from '../../assets/coopvest_team_4.01b5e1573af4e986267e.jpg'
import daniel from '../../assets/coopvest_team_15.c990a4cc54631eeadab5.png'
import pelumi from '../../assets/coopvest_team_6.1db64a647aca7463d9dd.jpg'


const Team = () => {
  return (
    <div className='team'>
      <div className="team_topic">
            <h1>Meet Our Team</h1>
            <h4>We're a dynamic group of professionals who passionate about what we do <br/>
                and dedicated to delovering the best result for our valued clients.
            </h4>
        </div>

        <div className="img_info">
            <div className="team_images">
                <img src={chris} alt=""/>
                <h3>CHRIS, Abu</h3>
                <p>IT Officer</p>

                <img src={mannan} alt=""/>
                <h3>OLOYEDE, Mannan</h3>
                <p>Software Developer</p>
            </div>

          <div className="team_images">
                <img src={anu} alt=""/>
                <h3>ADESINA, Anuoluwapo</h3>
                <p>Administratve Officer </p>

                <img src={madam} alt=""/>
                <h3>Mrs Iyanda</h3>
                <p>Chief Administrative officer</p>
          </div>

            <div className="team_images">
                <img src={stella} alt=""/>
                <h3>STELLA, Abu</h3>
                <p>Managing Director</p>

                <img src={pelumi} alt=""/>
                <h3>ONIFADE, Pelumi</h3>
                <p>Head of Operations</p>
            </div>

              <div className="team_images">
                  <img src={daniel} alt=""/>
                  <h3>Bamiduro, Daniel</h3>
                  <p>Communications Officer</p>

                  <img src={taiwo} alt=""/>
                  <h3>OLASUPO, Taiwo</h3>
                  <p>Onboarding Officer</p>
              </div>
        </div>
      
    </div>
  )
}

export default Team
