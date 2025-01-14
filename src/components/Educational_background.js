import React from 'react';
import './educational_background.css'; // Importing CSS for styling

const Educational_background = () => {
  return (
    <div className="educational-container">
      <h2>Educational Background</h2>
      <div className="educational-columns">
        <div className="educational-column">
          <h3>Primary School</h3>
          <p>
            <a href="mailto:Adakole nur/pri">Adakole nur/pri-Class 1-6</a>
          </p>
        </div>
        <div className="educational-column">
          <h3>College</h3>
          <p>
            <a href="Jupavi" target="_blank" rel="noopener noreferrer">
            Jupavi-WEAC
            </a>
          </p>
        </div>
        <div className="educational-column">
          <h3>High School</h3>
          <p>
            <a href="nuba poly kaduna state, Nigeria">
            nuba poly kaduna state, Nigeria-National Diploma in Estate Management
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Educational_background;
