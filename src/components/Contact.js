import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaGithub } from 'react-icons/fa'; // Importing icons
import './contact.css'; // Importing CSS for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <ul className="contact-list">
        <li>
          <FaEnvelope className="contact-icon" />
          Email: <a href="mailto:daveside00468@gmail.com">daveside00468@gmail.com</a>
        </li>
        <li>
          <FaLinkedin className="contact-icon" />
          LinkedIn: <a href="https://www.linkedin.com/in/joel-david-239383206/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/joel-david</a>
        </li>
        <li>
          <FaGithub className="contact-icon" />
          GitHub: <a href="https://github.com/Daveside9" target="_blank" rel="noopener noreferrer">https://github.com/Daveside9</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
