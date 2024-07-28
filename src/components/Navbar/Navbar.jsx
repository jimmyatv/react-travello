import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="travello_logo" />
        <span>Travello</span>
      </div>

      <div className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Why us</a>
          </li>
          <li>
            <a href="/">Trips</a>
          </li>
        </ul>
        <button>Contact us</button>
      </div>
    </div>
  )
};

export default Navbar;