import React, { useState } from 'react';
import './project.css';
import WeatherApp from './WeatherApp';
import ImageEditor from './ImageEditor';
import PasswordManager from '../components/PasswordManager';
import Pairnest from '../components/Pairnest';

const Project = () => {
  const [openProject, setOpenProject] = useState(null);

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
    
{
  id: 'pairnest',
  title: 'Pairnest – Love Pairing Platform',
  content: (
    <div>
      <p>
        Pairnest is a secure matchmaking app that matches users based on interest compatibility
        and preferences. It includes facial verification, thumbprint biometric login, booking system,
        and real-time admin monitoring dashboard.
      </p>
      <ul>
        <li>🔐 Facial + biometric authentication</li>
        <li>📊 Real-time admin dashboard with ban/edit/search</li>
        <li>💬 User notifications & WebSocket updates</li>
        <li>🌙 Fully responsive with dark/light themes</li>
      </ul>
      <div className="buttons">
        <a
          href="https://github.com/Daveside9/PairNest"
          target="_blank"
          rel="noopener noreferrer"
          className="btn github-btn"
        >
          💻 GitHub Repo
        </a>
     <a
          href="https://go.screenpal.com/watch/cTj23nn2opJ"
          target="_blank"
          rel="noopener noreferrer"
          className="btn demo-btn"
        >
          ▶ Demo Video
        </a>
      </div>
    </div>
  ),
},

 {
  id: 'valentineBooking',
  title: 'Valentine Booking System',
  content: (
    <div>
      <p>
        A simple and elegant Valentine's Day picnic/dinner booking system. Users can reserve couple hangout spaces easily with seamless navigation and responsive design.
      </p>
      <ul>
        <li>❤️ Reserve picnic or dinner dates effortlessly</li>
        <li>🗓 Real-time availability tracking</li>
        <li>💌 Confirmation notifications</li>
        <li>📱 Mobile-first, responsive UI</li>
      </ul>
      <div className="buttons">
        <a
          href="https://github.com/Daveside9/valentine"
          target="_blank"
          rel="noopener noreferrer"
          className="btn github-btn"
        >
          💻 GitHub Repo
        </a>
        <a
          href="https://go.screenpal.com/watch/cTjb0in2YWq"
          target="_blank"
          rel="noopener noreferrer"
          className="btn demo-btn"
        >
          ▶ View Demo / Source
        </a>
      </div>
    </div>
  ),
},

{
  id: 'NaijaHavest',
  title: 'NaijaHavest Web App',
  content: (
    <div>
      <p>
        A Django-powered communication system that allows farmers to upload their farm produce in a reserved farmers dashboard with the aim that users will buy their produce. Built with role-based authentication, Django Admin integration, and responsive design.
      </p>
      <ul>
        <li>📩 Farmers upload farm produce</li>
        <li>📊 Admin dashboard to manage the backends</li>
        <li>🔍 Search and filter messages by subject or sender</li>
        <li>📱 Fully responsive and mobile-friendly UI</li>
      </ul>
      <div className="buttons">
        <a
          href="https://github.com/Daveside9/NaijaHarvest"
          target="_blank"
          rel="noopener noreferrer"
          className="btn github-btn"
        >
          💻 GitHub Repo
        </a>
        <a
          href="https://go.screenpal.com/watch/cTj2rLn2okL"
          target="_blank"
          rel="noopener noreferrer"
          className="btn demo-btn"
        >
          ▶ Demo Video
        </a>
      </div>
    </div>
  ),
},
 
];
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
