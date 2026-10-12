import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="container">
        <div className="section-header">
          <h1>About Me</h1>
          <p>Passionate developer with a unique blend of technical expertise and business acumen</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img
              src="/images/yanom.png"
              alt="Yanom David - Software Developer"
              className="profile-picture"
            />
          </div>
          
          <div className="about-text">
            <p>
              I'm a dedicated software developer with expertise in Python, Django, and modern web technologies. 
              My passion lies in creating efficient, scalable solutions that bridge the gap between complex 
              technical requirements and real-world business needs.
            </p>
            <p>
              With a strong background in business analysis and strategic planning, I bring a unique perspective 
              to software development. I don't just write code – I craft solutions that drive business growth 
              and deliver measurable value to organizations.
            </p>
            <p>
              When I'm not coding, I'm exploring emerging technologies, developing business strategies, 
              or contributing to projects that make a positive impact in the tech community.
            </p>
            

          </div>
        </div>



        {/* Personal Information - Simplified */}
        <div className="about-details">
          <div className="about-column">
            <h3>Professional Profile</h3>
            <p><strong>Location:</strong> Kaduna, Nigeria</p>
            <p><strong>Education:</strong> Secondary Education (WAEC 2010)</p>
            <p><strong>Languages:</strong> English, Jaba, Koro</p>
            <p><strong>Specialization:</strong> Backend Development & Business Analysis</p>
            <p><strong>Primary Technologies:</strong> Python, Django, MongoDB</p>
            <p><strong>Approach:</strong> User-centered, scalable solutions</p>
          </div>
          
          <div className="about-column">
            <h3>What Drives Me</h3>
            <p><strong>Mission:</strong> Creating technology solutions that solve real business problems</p>
            <p><strong>Vision:</strong> Bridging the gap between technology and business strategy</p>
            <p><strong>Values:</strong> Innovation, Excellence, Continuous Learning</p>
            <p><strong>Interests:</strong> Sports, Technology Trends, Business Strategy</p>
            <p><strong>Goal:</strong> Building impactful software that drives business success</p>
            <p><strong>Passion:</strong> Turning complex challenges into elegant solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
