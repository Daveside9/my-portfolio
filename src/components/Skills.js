import React from 'react';
import './skills.css'; // Importing CSS for styling the Skills component

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">Backend Developer (Python, Django and Flask)</div>
        <div className="skill-item">Business Analyst</div>
        <div className="skill-item">Pitch Deck Developer</div>
        <div className="skill-item">Business Plan Developer</div>
      </div>
    </div>
  );
};

export default Skills;
