import React from 'react'
import "./mainLandingPage.css";
import Typewriter from "typewriter-effect";
import MainPagePic from "../../assets/pp.png";
import {Link} from "react-router-dom";

const MainLandingPage = () => {
  return (
    <>
    <div className="main-page">
      <div className="main-heading">
      <p>
        <h2>
          Welcome
        </h2>
        <h2 id="focus-txt">
          To The
        </h2>
        <h2>
          <Typewriter
            options={{
              strings: ['Crossiant World.', 'Crypto World.','New World.'],
              autoStart: true,
              loop: true, }}/>
        </h2>
      </p>
      <button className='buy-token'>
        <Link to='/app'style={{ textDecoration: 'none' , color:'white'}}>
        Buy Token
        </Link> 
        </button>
      </div>
      <div className="main-pic">
        <img src={MainPagePic} alt='main-pic'/>
      </div>
    </div>
    </>
  )
}

export default MainLandingPage