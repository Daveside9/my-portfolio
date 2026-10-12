import React, { useState } from 'react';
import './skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = {
    backend: [
      { name: 'Python', level: 92, description: 'Advanced backend development with Django, Flask, and FastAPI. Built multiple full-stack applications including Bible GPT, NaijaHarvest, and Pairnest with complex authentication systems.' },
      { name: 'Django', level: 88, description: 'Full-featured web framework mastery. Created NaijaHarvest platform with role-based authentication, admin dashboard, and Bible GPT with NextAuth integration.' },
      { name: 'Flask', level: 85, description: 'Lightweight framework expertise for rapid development. Built Grain Price Tracker with real-time data visualization and API integrations.' },
      { name: 'FastAPI', level: 80, description: 'Modern Python web framework for building high-performance APIs with automatic documentation and type validation.' },
    ],
    database: [
      { name: 'Database Design', level: 85, description: 'Comprehensive database architecture and optimization. Implemented complex data models across multiple projects with SQLite and NoSQL solutions.' },
    ],
    tools: [
      { name: 'GitHub', level: 90, description: 'Expert version control and project management. Maintained multiple repositories with proper documentation, branching strategies, and collaborative workflows.' },
    ],
    business: [
      { name: 'Business Plan', level: 88, description: 'Strategic business planning and market analysis. Created comprehensive business plans with financial projections, market research, and execution strategies.' },
      { name: 'Pitch Deck', level: 85, description: 'Professional presentation design and storytelling. Developed compelling pitch decks for investor communication and project proposals.' },
      { name: 'Business Development', level: 82, description: 'Strategic growth planning and market expansion. Experience in identifying opportunities, partnership development, and scaling strategies.' },
    ]
  };

  const categories = [
    { key: 'all', label: 'All Skills' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'tools', label: 'Tools' },
    { key: 'business', label: 'Business' },
  ];

  const getAllSkills = () => {
    return Object.values(skillsData).flat();
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return getAllSkills();
    }
    return skillsData[activeCategory] || [];
  };

  const getSkillLevelColor = (level) => {
    if (level >= 85) return 'expert';
    if (level >= 75) return 'advanced';
    if (level >= 65) return 'intermediate';
    return 'beginner';
  };

  return (
    <section id="skills" className="skills-container">
      <div className="container">
        <div className="section-header">
          <h1>My Skills</h1>
          <p>Technologies and expertise demonstrated through real projects</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {getFilteredSkills().map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="skill-card">
              <div className="skill-header">
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <div className="skill-level-container">
                    <div className="skill-level-bar">
                      <div 
                        className={`skill-level-fill ${getSkillLevelColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              </div>
              <p className="skill-description">{skill.description}</p>
              <div className={`skill-badge ${getSkillLevelColor(skill.level)}`}>
                {skill.level >= 85 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 65 ? 'Intermediate' : 'Learning'}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-item">
            <span className="summary-number">{getAllSkills().length}</span>
            <span className="summary-label">Total Skills</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">{getAllSkills().filter(s => s.level >= 85).length}</span>
            <span className="summary-label">Expert Level</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">{Object.keys(skillsData).length}</span>
            <span className="summary-label">Categories</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
