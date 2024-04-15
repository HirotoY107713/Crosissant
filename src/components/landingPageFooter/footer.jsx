import React from 'react';
// import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className='footer'>
    <div className="footer-links">
      <div className="footer-links-logo">
        <h2>Crossiant</h2>
        <p>Lorem Ipsum ,<br /> All Rights Reserved</p>
      </div>
      <div className="footer-links-div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links-div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links-div">
        <h4>Get in touch</h4>
        <p>Lorem Ipsum</p>
        <p>+91-9829382939</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2022 Crossiant. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;