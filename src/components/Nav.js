import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import './Header.css';

const Nav = () => (
  <ul className="nav">
    <li>
      <img src={logo} alt="logo" />
      <h1>Space Traveler&apos;s Hub</h1>
    </li>

    <li>
      <Link className="link" to="/">
        Rockets
      </Link>
    </li>
    <li>
      <Link className="link" to="/Missions">
        Missions
      </Link>
    </li>
    <div className="Line-2" />
    <li>
      <Link className="link" to="/MyProfile">
        My Profile
      </Link>
    </li>
  </ul>
);

export default Nav;
