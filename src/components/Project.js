import React, { useState } from 'react';
import './project.css'; // Optional CSS for styling
import WeatherApp from './WeatherApp';
import ImageEditor from './ImageEditor';
import PasswordManager from '../components/PasswordManager';
import Pairnest from './components/Pairnest';

const Project = () => {
  // State to track which project is currently open
  const [openProject, setOpenProject] = useState(null);

  // Project details to simplify rendering
  const projects = [
    {
      id: 'businessPlan',
      title: 'Business Plan',
      content: (
        <iframe
          src="/business-plan.pdf"
          width="100%"
          height="600px"
          style={{ border: 'none' }}
          title="Business Plan"
        ></iframe>
      ),
    },
    {
      id: 'pitchDeck',
      title: 'Pitch Deck',
      content: (
        <iframe
          src="https://docs.google.com/presentation/d/1pDUwNEQ93KG0xUVvARrN7WgO0_hPlWbz-KA0oU9RM30/embed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          width="100%"
          height="480"
          title="Pitch Deck"
        ></iframe>
      ),
    },

function PortfolioPage() {
  return (
    <div>
      <h1>My Projects</h1>
      <Pairnest />
      {/* other projects... */}
    </div>
  );
}
      
    {
      id: 'weatherApp',
      title: 'Weather App',
      content: <WeatherApp />,
    },
      
    {
      id: 'valentineProject',
      title: 'Valentine Booking System',
      content: (
        <div>
          <p>
            A simple and elegant Valentine's Day picnic/dinner booking system. Users can reserve couple hangout spaces easily.
          </p>
          <a href="https://github.com/Daveside9/valentine-booking" target="_blank" rel="noopener noreferrer">
            Visit Valentine Booking System
          </a>
          <br />
          <a href="https://github.com/Daveside9/valentine-booking" target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </div>
      ),
    },    
    {
      id: 'grainPriceTracker',
      title: 'Grain Price Tracker',
      content: (
        <div>
          <p>
            This web application tracks grain prices (such as Rice, Ginger, Maize, and Cocoa) in Nigeria. Users can monitor and analyze
            prices dynamically.
          </p>
          <a href="https://github.com/Daveside9/grain-data-price">
            Visit Grain Price Tracker
          </a>
        </div>
      ),
    },
    {
      id: 'imageEditor',
      title: 'Image Editor',
      content: <ImageEditor />,
    },
    {
      id: 'passwordManager',
      title: 'Password Manager',
      content: <PasswordManager />,
    },
    {
      id: 'expenseTracker',
      title: 'Expense Tracker',
      content: (
        <div>
          <p>This is a web application that helps track your expenses, featuring a dashboard to add and manage expenses.</p>
          <a href="http://yourprojectlink.com" target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </div>
      ),
    },
  ];

  // Toggle the open/close state of a project
  const toggleProject = (projectId) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3
              onClick={() => toggleProject(project.id)}
              className="project-heading"
            >
              {project.title}
            </h3>
            {openProject === project.id && (
              <div className="project-details">{project.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
