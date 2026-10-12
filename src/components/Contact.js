import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons
import './contact.css'; // Importing CSS for styling

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="container">
        <div className="section-header">
          <h1>Contact Me</h1>
          <p>Let's connect and discuss opportunities to work together!</p>
        </div>
        
        <ul className="contact-list">
          <li>
            <FaEnvelope className="contact-icon" />
            <div>
              <strong>Email</strong>
              <a href="mailto:daveside00468@gmail.com">daveside00468@gmail.com</a>
            </div>
          </li>
          <li>
            <FaLinkedin className="contact-icon" />
            <div>
              <strong>LinkedIn</strong>
              <a href="https://www.linkedin.com/in/joel-david-239383206/" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a>
            </div>
          </li>
          <li>
            <FaGithub className="contact-icon" />
            <div>
              <strong>GitHub</strong>
              <a href="https://github.com/Daveside9" target="_blank" rel="noopener noreferrer">View my repositories and projects</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
