import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./header.css";
const Header = () => {
const [toggleMenu, setToggleMenu] = useState(false);

return (
  <div className="navbar">
    <div className="navbar-links">
      <div className="navbar-links-logo">
        <h2>Crossiant</h2>
      </div>
      <div className="navbar-links-container">
      <p><a href="#cro">What is Crossiant?</a></p>
        <p><a href="#aim">Our Aim</a></p>
        <p><a href="#sc">Smart Contract</a></p>
        <p><a href="#a">About</a></p>
      </div>
    </div>
    <div className="navbar-menu">
      {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
      <div className="navbar-menu-container scale-up-center">
        <div className="navbar-menu-container-links">
        <p><a href="#cro">What is Crossiant?</a></p>
        <p><a href="#aim">Our Aim</a></p>
        <p><a href="#sc">Smart Contract</a></p>
        <p><a href="#a">About</a></p>
        </div>
      </div>
      )}
    </div>
  </div>
);
};

export default Header;