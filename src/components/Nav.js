import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul className="nav">
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
    <li>
      <Link className="link" to="/My Profile">
        My Profile
      </Link>
    </li>
  </ul>
);

export default Nav;
