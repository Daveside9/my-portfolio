
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profilePic from '../logo.svg'; // Using a placeholder, you can change this path

const Header = () => {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <img src={profilePic} className="header-logo" alt="logo" />
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
