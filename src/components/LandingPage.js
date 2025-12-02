
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">YANOM DAVID</h1>
        <p className="landing-subtitle">Software Developer | Business Analyst | Innovator</p>
        <p className="landing-description">
          Crafting scalable back-end systems and turning complex problems into elegant solutions.
        </p>
        <Link to="/about" className="explore-button">
          Explore My Dashboard
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
