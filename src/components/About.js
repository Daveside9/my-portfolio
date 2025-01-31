import React from 'react';
import './About.css'; // Importing CSS for styling the About component

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      {/* Display Profile Picture */}
      <img
  src="/images/yanom.png"
  alt="Profile"
  className="profile-picture"
  style={{ width: '300px', height: '300px' }} // Inline style to force the image to scale
      />
      {/* Personal Information Section */}
      <div className="about-details">
        <div className="about-column">
          <h3>Personal Details</h3>
          <p><strong>Date of Birth:</strong> November 28, 1992</p>
          <p><strong>Nationality:</strong> Nigerian</p>
          <p><strong>State of Residence:</strong> Kaduna</p>
          <p><strong>LGA:</strong> Chukun</p>
          <p><strong>Sex:</strong> Male</p>
          <p><strong>Languages:</strong> Jaba, Koro, English</p>
          <p><strong>Marital Status:</strong> Single</p>
          <p><strong>Interests:</strong> Sport, Learning</p>
          <p><strong>Education:</strong> Jupavi Secondary School, WAEC 2010</p>
          <p><strong>Tribe:</strong> Jaba</p>
        </div>
        <div className="about-column">
          <h3>Meet Me</h3>
          <p>
            I am a motivated and results-driven software developer specializing in back-end technologies, particularly Python. My expertise spans across building scalable and efficient systems, designing user-focused solutions, and delivering innovative projects with precision and creativity. I am well-versed in modern frameworks and methodologies, enabling me to craft solutions that meet both technical and business requirements.
            <br /><br />
            In addition to my technical skills, I have a strong background as a business analyst, pitch deck developer, and business plan strategist. This unique combination allows me to bridge the gap between technology and business, delivering comprehensive insights and strategies that drive success. My ability to translate complex technical concepts into actionable plans has proven invaluable in diverse team settings.
            <br /><br />
            Beyond the professional realm, I am passionate about self-development and creative pursuits. My portfolio reflects a dedication to excellence, a commitment to innovation, and an unrelenting focus on achieving impactful outcomes. I thrive on challenges and continually seek opportunities to expand my skills and make meaningful contributions to the projects I undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
