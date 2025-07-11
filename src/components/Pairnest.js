// src/components/Pairnest.js

import React from 'react';
import './Pairnest.css';

const Pairnest = () => {
  return (
    <section className="pairnest-card">
      <div className="pairnest-image">
        <img src="/images/pairnest-preview.png" alt="Pairnest Screenshot" />
      </div>
      <div className="pairnest-content">
        <h2>💘 Pairnest – A Smart Love-Matching Platform</h2>
        <p>
          Pairnest is a full-stack matchmaking web app that intelligently pairs users
          based on shared interests, facial verification, and compatibility algorithms.
          It includes separate user/admin dashboards, real-time notifications, secure login,
          Google OAuth, and biometric checks.
        </p>
        <ul className="pairnest-tech">
          <li>Frontend: React, CSS Modules, Axios</li>
          <li>Backend: Node.js, Express, MongoDB (Mongoose)</li>
          <li>Security: JWT Auth, Password Hashing, Google Login</li>
          <li>Features: WebSocket, Email Verification, Admin Tools</li>
        </ul>
        <div className="pairnest-buttons">
          <a
            href="https://pairnest.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn live"
          >
            🔗 Live Demo
          </a>
          <a
            href="https://github.com/Daveside9/PairNest"
            target="_blank"
            rel="noopener noreferrer"
            className="btn code"
          >
            💻 View Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pairnest;
