import React from 'react'
import l1 from '../../assets/l1.png';
import l2 from '../../assets/l2.png';
import l3 from '../../assets/l3.svg';
import m2 from '../../assets/m2.png';
import './secondLandingPage.css';
const SecondLandingpage = () => {
  return (
    <div className='second-page'>
      <h2 className='featured-txt'>Featured on</h2>
      <div className='featured'>
        <img src={l1} alt='logo1'/>
        <img src={l2} alt='logo2'/>
        <img src={l3} alt='logo3'/>
      </div>
      <div className="second-page-main">
                <div className="second-pic">
                    <img src={m2} alt='second-pic'/>
                </div>
              <div className="second-heading">
                <p>
                  <h2>
                    Digital money 
                  </h2>
                  <h2 id="focus-txt">
                    is our 
                  </h2>
                  <h2>
                    thing. 
                  </h2>
                </p>
                <button className='second-btn'>Read More</button>
              </div>
        </div>
    </div>
  )
}

export default SecondLandingpage