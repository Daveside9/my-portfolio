import React from 'react';
import './educationalbackground.css'; // Importing CSS for styling

const Educationalbackground = () => {
  return (
    <section id="education" className="education-container">
      <div className="container">
        <div className="section-header">
          <h1>Educational Background</h1>
          <p>My academic journey and qualifications</p>
        </div>
        
        <div className="educational-columns">
          <div className="educational-column">
            <h3>Primary School</h3>
            <p>
              <strong>Adakole Nur/Pri School</strong>
              Class 1-6<br />
              Foundation Education
            </p>
          </div>
          <div className="educational-column">
            <h3>Secondary School</h3>
            <p>
              <strong>Jupavi Secondary School</strong>
              WAEC Certificate<br />
              Completed: 2010
            </p>
          </div>
          <div className="educational-column">
            <h3>Higher Education</h3>
            <p>
              <strong>Nuhu Bamalli Polytechnic</strong>
              Kaduna State, Nigeria<br />
              National Diploma in Estate Management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educationalbackground;
