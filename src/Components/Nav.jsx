import React from 'react'
import Cart from "./Icons/Cart"

function Nav() {
  return (
    <nav className='mobile-nav-off'>
        <div className='logo'>
            <a href="#">Taste now</a>
        </div>
        <div
        className="navigation-menu">
      
          <div>
            <a className='active' href="#">Home</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Blog</a>
          </div>
          <div>
            <a href="#">Contact us</a>
          </div>
          <div>
            <Cart className="cart"/>
          </div>
          <div>
            <button className='signup'>Sign up</button>
          </div>
     
      </div>
    </nav>
  )
}

export default Nav