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
<<<<<<< HEAD
          <FaGithub className="contact-icon" />
          GitHub: <a href="https://github.com/Daveside9" target="_blank" rel="noopener noreferrer">Daveside9</a>
=======
          <Fagithub className="contact-icon" />
          Github: <a href="github:https://github.com/Daveside9">https://github.com/Daveside9</a>
>>>>>>> 1a6733732b54daaeff15a7b2888665f3b8f4c11e
        </li>
      </ul>
    </div>
  );
};

export default Contact;
