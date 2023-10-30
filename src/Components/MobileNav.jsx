import React, { useState } from 'react';
import Menu from "./Icons/Menu"
import MobileCart from "./Icons/MobileCart"


export default function MobileNav() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <nav className='mobile-nav'>
      <div className='logo'>
        <Menu className="menu-icon" onClick={toggleOverlay} />
        <a href="#">Taste now</a>
      </div>
      <MobileCart />
      {isOverlayVisible && (
        <div className='overlay'>
          <div className='close-icon' onClick={closeOverlay}>
            &#10005;
          </div>
          <div className='logo'>
        <a href="#">Taste now</a>
      </div>
     <span></span>
    <div className='links'>
    <a  href="#">Home</a>
     <a href="#">About</a>
     <a href="#">Blog</a>
     <a href="#">Contact us</a>
     <button className='signup'>Sign up</button>
    </div>
   
        </div>
      )}
    </nav>
  );
}
