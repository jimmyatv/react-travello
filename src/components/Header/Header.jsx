import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <Navbar />
      </div>
    </div>
  )
};

export default Header;