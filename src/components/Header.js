import React from 'react';
import Nav from './Nav';
import logo from '../Images/logo.png';

const Header = () => (
  <div className="header-logo">
    <div className="main-header">
      <img src={logo} alt="logo" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <Nav />
  </div>
);
export default Header;
