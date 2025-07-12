import React from 'react';
import './Pairnest.css'; // Optional: create a CSS file to style this

const Pairnest = () => {
  return (
    <div className="project-card">
      <h2>💞 PairNest</h2>
      <p>
        PairNest is a love-pairing platform that intelligently matches users based on interests,
        personality, and verification. Features include secure login, facial recognition, thumbprint authentication, admin dashboard, and real-time matchmaking.
      </p>
      <div className="buttons">
        <a
          href="https://pairnest.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn live-btn"
        >
          🌐 View Live Site
        </a>
        <a
          href="https://github.com/Daveside9/PairNest"
          target="_blank"
          rel="noopener noreferrer"
          className="btn github-btn"
        >
          💻 GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Pairnest;
