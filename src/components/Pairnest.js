import React from 'react';
import './Pairnest.css';

const Pairnest = () => {
  return (
    <div className="pairnest-container">
      <h2>💘 Pairnest – Smart Love Matching App</h2>
      <p>
        Pairnest is a modern matchmaking web application that uses interest compatibility,
        facial verification, and admin moderation to connect genuine users. It includes
        real-time updates, Google Sign-In, secure authentication, and user-friendly dashboards.
      </p>

      <div className="pairnest-buttons">
        <a
          href="https://pairnest.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn live"
        >
          🌐 Visit App
        </a>
        <a
          href="https://github.com/Daveside9/PairNest"
          target="_blank"
          rel="noopener noreferrer"
          className="btn github"
        >
          🔗 GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Pairnest;
