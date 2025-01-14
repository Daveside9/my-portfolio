import React, { useState } from 'react';
import './project.css'; // Optional CSS for styling
import WeatherApp from './WeatherApp'; // Import WeatherApp component
import ImageEditor from './ImageEditor'; // Import ImageEditor component (make sure it's the correct path)

const Project = () => {
  // State to track which project is currently open
  const [openProject, setOpenProject] = useState(null);

  // Toggle the open/close state of a project
  const toggleProject = (projectName) => {
    setOpenProject(openProject === projectName ? null : projectName);
  };

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {/* Business Plan */}
        <div className="project-item">
          <h3 onClick={() => toggleProject('businessPlan')} className="project-heading">
            Business Plan
          </h3>
          {openProject === 'businessPlan' && (
            <div className="project-details">
              <iframe
                src="/business-plan.pdf" // Ensure file is in the `public` folder
                width="100%"
                height="600px"
                style={{ border: 'none' }}
                title="Business Plan"
              ></iframe>
            </div>
          )}
        </div>

        {/* Pitch Deck */}
        <div className="project-item">
          <h3 onClick={() => toggleProject('pitchDeck')} className="project-heading">
            Pitch Deck
          </h3>
          {openProject === 'pitchDeck' && (
            <div className="project-details">
              <iframe
                src="https://docs.google.com/presentation/d/1pDUwNEQ93KG0xUVvARrN7WgO0_hPlWbz-KA0oU9RM30/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="100%"
                height="480"
                title="Pitch Deck"
              ></iframe>
            </div>
          )}
        </div>

        {/* Weather App */}
        <div className="project-item">
          <h3 onClick={() => toggleProject('weatherApp')} className="project-heading">
            Weather App
          </h3>
          {openProject === 'weatherApp' && (
            <div className="project-details">
              <WeatherApp /> {/* Render the WeatherApp component */}
            </div>
          )}
        </div>

        {/* Image Editor */}
        <div className="project-item">
          <h3 onClick={() => toggleProject('imageEditor')} className="project-heading">
            Image Editor
          </h3>
          {openProject === 'imageEditor' && (
            <div className="project-details">
              <ImageEditor /> {/* Render the ImageEditor component */}
            </div>
          )}
        </div>

        {/* Expense Tracker */}
        <div className="project-item">
          <h3 onClick={() => toggleProject('expenseTracker')} className="project-heading">
            Expense Tracker
          </h3>
          {openProject === 'expenseTracker' && (
            <div className="project-details">
              <p>This is a web application that helps track your expenses, featuring a dashboard to add and manage expenses.</p>
              <a href="http://yourprojectlink.com" target="_blank" rel="noopener noreferrer">Visit Project</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
