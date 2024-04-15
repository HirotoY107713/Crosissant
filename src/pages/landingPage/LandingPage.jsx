import React from 'react'
import {LandingFooter, LandingHeader,MainPageLanding,SecondPageLanding} from '../../components'
import "./landing.css";

const LandingPage = () => {
  return (
    <div className="landing-page ">
    <LandingHeader/>
    <MainPageLanding />
    <SecondPageLanding/>
    <LandingFooter/>
    {/* <div className='main'>
        Welcome please connect wallet 
        <button onClick={props.walletHandler}>Connect Wallet</button> 
    </div> */}
    <div className='bg-upper-ellipse'>
    </div>
    <div className='bg-middle-ellipse'>
    </div>
    <div className='bg-lower-ellipse'>
    </div>
    </div>
  );
}

export default LandingPage;