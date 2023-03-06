import React from "react";
import Nav from './Nav';
import logo from '../Images/logo.png';

const Header = () => {
    return(
        <div className="header-logo">
            <div className="main-header">
                <img src={logo} />
                <h1>Space Traveler's Hub</h1> 
            </div>
            <Nav />
        </div>
    );
};