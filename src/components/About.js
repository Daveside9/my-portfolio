import React from 'react';
import './About.css'; // Importing CSS for styling the About component

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      {/* Display Profile Picture */}
      <img
        src="https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-1/470234952_2389188344761559_642460251571623988_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEGKXMkVDmSS88VVOjgepPuz3wkP6YmpCnPfCQ_piakKc52HqYS_NP851gEW0feMfaS2R708Nh_HBJvrxMKVzL2&_nc_ohc=FbI2GIJKaJ4Q7kNvgEv1HZj&_nc_zt=24&_nc_ht=scontent.fabv2-2.fna&_nc_gid=AjG7m3bUF7g4YFiYB-kS9tp&oh=00_AYCw0Kx-WaCxbrebhjmkCzQI02pNMovivw9r7t4CiXIiJQ&oe=677F8186"
        alt="Profile"
        className="profile-picture"
      />
      {/* Personal Information Section */}
      <div className="about-details">
        <div className="about-column">
          <h3>Personal Details</h3>
          <p><strong>Date of Birth:</strong> November 28, 1992</p>
          <p><strong>Nationality:</strong> Nigerian</p>
          <p><strong>State of Residence:</strong>kaduna</p>
          <p><strong>LGA:</strong>chukun</p>
          <p><strong>sex:</strong>male</p>
          <p><strong>Languages:</strong>jaba, koro, English</p>
          <p><strong>Marital statues:</strong>single</p>
          <p><strong>Interest:</strong>Sport, Learning</p>
          <p><strong>Education:</strong>jupavi secondary school,
          waec 2010</p>
          <p><strong>tribe:</strong>jaba</p>
          <p><strong>tribe:</strong>jaba</p>
        </div>
        <div className="about-column">
          <h3>meet me</h3>
          <p>
          I am a highly motivated and results-driven software developer specializing in back-end technologies, particularly Python. My expertise spans across building scalable and efficient systems, designing user-focused solutions, and delivering innovative projects with precision and creativity. I am well-versed in modern frameworks and methodologies, enabling me to craft solutions that meet both technical and business requirements.

In addition to my technical skills, I have a strong background as a business analyst, pitch deck developer, and business plan strategist. This unique combination allows me to bridge the gap between technology and business, delivering comprehensive insights and strategies that drive success. My ability to translate complex technical concepts into actionable plans has proven invaluable in diverse team settings.

Beyond the professional realm, I am passionate about self-development and creative pursuits. My portfolio reflects a dedication to excellence, a commitment to innovation, and an unrelenting focus on achieving impactful outcomes. I thrive on challenges and continually seek opportunities to expand my skills and make meaningful contributions to the projects I undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
