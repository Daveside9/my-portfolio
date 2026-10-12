import React, { useState } from 'react';
import './project.css';
import WeatherApp from './WeatherApp';
import PasswordManager from '../components/PasswordManager';

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
      id: 'dataminer',
      title: 'DataMiner - Universal Data Analysis & Web Scraping Platform',
      content: (
        <div>
          <p>
            DataMiner is a comprehensive data mining and analysis platform that extracts, processes, and analyzes 
            data from multiple web sources across different industries. Features advanced web scraping capabilities, 
            pattern recognition, real-time monitoring, and AI-powered analytics for any type of structured data.
          </p>
          <ul>
            <li>🔍 Universal web scraping with Beautiful Soup & Selenium</li>
            <li>📊 Multi-source data extraction and pattern analysis</li>
            <li>📸 Real-time screenshot monitoring with change detection</li>
            <li>🤖 AI-powered data prediction and trend analysis</li>
            <li>🎯 Professional monitoring platform with user management</li>
            <li>👥 Django backend with authentication and subscription plans</li>
            <li>⚡ Real-time data processing and visualization</li>
            <li>🌐 Multi-site support with customizable CSS selectors</li>
          </ul>
          <div className="tech-stack">
            <p><strong>Tech Stack:</strong> Python, Django, Flask, Beautiful Soup, Selenium, Pandas, SQLite, JavaScript, HTML/CSS</p>
          </div>
          <div className="project-highlights">
            <p><strong>Key Capabilities:</strong></p>
            <ul>
              <li>Historical Pattern Scraper with CSS selector testing</li>
              <li>Visual Inspector for website structure analysis</li>
              <li>Professional platform with subscription tiers (Free, Pro, Enterprise)</li>
              <li>Autonomous AI agent for continuous data monitoring</li>
              <li>Real-time data extraction and change detection</li>
              <li>Professional dashboard with analytics and session management</li>
            </ul>
          </div>
          <div className="buttons">
            <a
              href="https://github.com/Daveside9/DataMiner"
              target="_blank"
              rel="noopener noreferrer"
              className="btn github-btn"
            >
              💻 GitHub Repo
            </a>
            <button
              onClick={() => setOpenProject(openProject === 'dataminer' ? null : 'dataminerDemo')}
              className="btn demo-btn"
            >
              📊 View Features
            </button>
          </div>
          {openProject === 'dataminerDemo' && (
            <div className="demo-container">
              <div className="feature-showcase">
                <h4>🎯 Professional Data Mining Features</h4>
                <ul>
                  <li>Professional landing page with pricing tiers</li>
                  <li>User registration & JWT authentication</li>
                  <li>High-quality screenshot capture (1920x1080)</li>
                  <li>Real-time change detection with visual diff</li>
                  <li>AI-powered data extraction and predictions</li>
                  <li>Subscription management (Free/Pro/Enterprise)</li>
                </ul>
                <h4>📊 Universal Analytics Capabilities</h4>
                <ul>
                  <li>Data frequency analysis and prediction</li>
                  <li>Pattern recognition across different data types</li>
                  <li>Time-series analysis and trend forecasting</li>
                  <li>Multi-source data correlation and insights</li>
                  <li>Custom data extraction rules and automation</li>
                  <li>Professional reporting and visualization</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ),
    },

    {
      id: 'gidanbanta',
      title: 'MatchHang (Gidanbanta) - Live Sports Streaming Platform',
      content: (
        <div>
          <p>
            MatchHang is a production-ready live sports streaming platform with social viewing rooms, 
            real-time chat, virtual credits system, and fantasy football features. Built specifically 
            for the Nigerian market with local payment integration and age-appropriate content controls.
          </p>
          <ul>
            <li>🎥 Live match streaming with HLS video player integration</li>
            <li>💬 Real-time chat with Socket.IO (3 free messages + paid unlock)</li>
            <li>💳 Virtual credits system (₦100 per match chat unlock)</li>
            <li>👥 Age gating system (13+ signup, 18+ purchases)</li>
            <li>🏆 Fantasy football with team builder and contests</li>
            <li>📱 Fully responsive design (mobile-first approach)</li>
            <li>🔐 JWT authentication with role-based access control</li>
            <li>💰 Nigerian payment integration (Opay, PalmPay, Moniepoint)</li>
          </ul>
          <div className="tech-stack">
            <p><strong>Tech Stack:</strong> Next.js 14, TypeScript, Tailwind CSS, FastAPI, PostgreSQL, Redis, Socket.IO, SQLAlchemy</p>
          </div>
          <div className="project-highlights">
            <p><strong>Production Features:</strong></p>
            <ul>
              <li>Complete user authentication with age verification</li>
              <li>Wallet system with transaction history</li>
              <li>Match room with video streaming and real-time chat</li>
              <li>Admin dashboard for match management</li>
              <li>Per-match chat access control and monetization</li>
              <li>KYC verification system for withdrawals</li>
            </ul>
          </div>
          <div className="buttons">
            <a
              href="https://github.com/Daveside9/Gidanbanta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn github-btn"
            >
              💻 GitHub Repo
            </a>
            <button
              onClick={() => setOpenProject(openProject === 'gidanbanta' ? null : 'gidanbantaDemo')}
              className="btn demo-btn"
            >
              ⚽ View Platform
            </button>
          </div>
          {openProject === 'gidanbantaDemo' && (
            <div className="demo-container">
              <div className="feature-showcase">
                <h4>🎯 Core Platform Features</h4>
                <ul>
                  <li>Landing page with modern Nigerian-focused design</li>
                  <li>User dashboard with today's matches and wallet</li>
                  <li>Match rooms with video player and real-time chat</li>
                  <li>Virtual credits system (1₦ = 1 credit)</li>
                  <li>Transaction management and history</li>
                  <li>Admin tools for match and user management</li>
                </ul>
                <h4>💡 Unique Selling Points</h4>
                <ul>
                  <li>Nigerian-focused with local payment providers</li>
                  <li>Social viewing experience, not just streaming</li>
                  <li>Virtual credits system (legal, not gambling)</li>
                  <li>Age-appropriate with spectator mode for under-18</li>
                  <li>Compliance-first with KYC and moderation</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ),
    },

    {
      id: 'matchhangLive',
      title: 'MatchHang – Real Match Data & Live Streaming Setup',
      content: (
        <div>
          <p>
            An extension of the MatchHang platform featuring full real-time match data integration
            from multiple free sports APIs. Brings live Champions League and Europa League matches
            directly into the platform with working HLS stream URLs, live score updates, and
            automatic match scheduling.
          </p>
          <ul>
            <li>🔴 Live match data — Real Madrid vs Man City, Barcelona vs Liverpool, Arsenal vs Bayern</li>
            <li>📡 ESPN Soccer API integration — unlimited, no API key required</li>
            <li>🏟️ TheSportsDB integration — live scores for Premier League, La Liga, Champions League</li>
            <li>📊 Football-Data.org integration — official data source (free tier)</li>
            <li>🎥 Working HLS stream URLs for all matches</li>
            <li>🔄 Real-time score & status updates with live indicators</li>
            <li>📅 18 Europa League matches auto-fetched and scheduled</li>
            <li>🗄️ Database seeded with 28+ matches (11 live, 17 scheduled)</li>
          </ul>
          <div className="tech-stack">
            <p><strong>Tech Stack:</strong> Python, FastAPI, PostgreSQL, ESPN API, TheSportsDB, Football-Data.org, HLS Streaming</p>
          </div>
          <div className="project-highlights">
            <p><strong>Live Dashboard Features:</strong></p>
            <ul>
              <li>🔴 Live filter — view all currently live matches</li>
              <li>🏆 League filter — browse by competition</li>
              <li>📺 Match rooms — video player + real-time chat per match</li>
              <li>⚡ Auto-transitions — matches go live at scheduled time</li>
              <li>🤖 Autonomous AI agent for continuous data monitoring</li>
            </ul>
          </div>
          <div className="buttons">
            <a
              href="https://github.com/Daveside9/Gidanbanta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn github-btn"
            >
              💻 GitHub Repo
            </a>
          </div>
        </div>
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

{
  id: 'bibleAI',
  title: 'Bible GPT - AI-Powered Scripture Study',
  content: (
    <div>
      <p>
        Bible GPT is a full-stack web application that provides an interactive way to study the Bible using AI. 
        Users can ask questions, get detailed explanations of scripture, and engage in conversational exploration of biblical texts.
      </p>
      <ul>
        <li>🤖 AI-powered chat for biblical insights and explanations</li>
        <li>🔐 Secure user authentication with NextAuth.js</li>
        <li>🌙 Light & dark mode themes for comfortable reading</li>
        <li>📱 Modern, responsive UI built with Next.js and Tailwind CSS</li>
        <li>⚡ Django REST API backend with SQLite database</li>
        <li>👨‍💼 Admin capabilities for application management</li>
      </ul>
      <div className="tech-stack">
        <p><strong>Tech Stack:</strong> Next.js, TypeScript, Tailwind CSS, Django, Python, Google Generative AI</p>
      </div>
      <div className="buttons">
        <a
          href="https://github.com/Daveside9/MybibleAI"
          target="_blank"
          rel="noopener noreferrer"
          className="btn github-btn"
        >
          💻 GitHub Repo
        </a>
        <button
          className="btn demo-btn"
          disabled
          style={{ opacity: 0.5, cursor: 'not-allowed' }}
        >
          ▶ Live Demo (Coming Soon)
        </button>
      </div>
    </div>
  ),
},

{
  id: 'grainPriceTracker',
  title: 'Grain Price Tracker',
  content: (
    <div>
      <p>
        A web application that tracks grain prices (Rice, Ginger, Maize, and Cocoa) in Nigeria. 
        Users can monitor and analyze price fluctuations dynamically with real-time data visualization.
      </p>
      <ul>
        <li>📊 Real-time grain price monitoring</li>
        <li>🌾 Tracks Rice, Ginger, Maize, and Cocoa prices</li>
        <li>📈 Dynamic price analysis and trends</li>
        <li>🇳🇬 Focused on Nigerian agricultural market</li>
      </ul>
      <div className="tech-stack">
        <p><strong>Tech Stack:</strong> Flask, Python, Data Visualization</p>
      </div>
      <div className="buttons">
        <a
          href="http://127.0.0.1:5000/grains"
          target="_blank"
          rel="noopener noreferrer"
          className="btn demo-btn"
        >
          ▶ Launch App
        </a>
      </div>
    </div>
  ),
},

{
  id: 'weatherApp',
  title: 'Weather Forecast Application',
  content: (
    <div>
      <p>
        A real-time weather application that provides current weather conditions for any city worldwide. 
        Built with React and integrated with OpenWeatherMap API for accurate weather data.
      </p>
      <ul>
        <li>🌤️ Real-time weather data for any city</li>
        <li>🌡️ Temperature, weather conditions, and descriptions</li>
        <li>🔍 City search functionality</li>
        <li>⚡ Fast API integration with error handling</li>
      </ul>
      <div className="tech-stack">
        <p><strong>Tech Stack:</strong> React, Axios, OpenWeatherMap API</p>
      </div>
      <div className="buttons">
        <a
          href="https://github.com/Daveside9/my-weather-forecast.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn github-btn"
        >
          💻 GitHub Repo
        </a>
        <button
          onClick={() => setOpenProject(openProject === 'weatherApp' ? null : 'weatherAppDemo')}
          className="btn demo-btn"
        >
          ▶ Try Demo
        </button>
      </div>
      {openProject === 'weatherAppDemo' && (
        <div className="demo-container">
          <WeatherApp />
        </div>
      )}
    </div>
  ),
},

{
  id: 'passwordManager',
  title: 'Secure Password Manager',
  content: (
    <div>
      <p>
        A client-side password manager with AES encryption for secure credential storage. 
        Features master password protection and encrypted local storage of sensitive data.
      </p>
      <ul>
        <li>🔐 AES encryption for password security</li>
        <li>🔑 Master password protection</li>
        <li>💾 Local encrypted storage</li>
        <li>👤 Username and password management</li>
      </ul>
      <div className="tech-stack">
        <p><strong>Tech Stack:</strong> React, CryptoJS, AES Encryption</p>
      </div>
      <div className="buttons">
        <button
          onClick={() => setOpenProject(openProject === 'passwordManager' ? null : 'passwordManagerDemo')}
          className="btn demo-btn"
        >
          ▶ Try Demo
        </button>
      </div>
      {openProject === 'passwordManagerDemo' && (
        <div className="demo-container">
          <PasswordManager />
        </div>
      )}
    </div>
  ),
},
 
];
  const toggleProject = (projectId) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-container">
      <div className="container">
        <div className="section-header">
          <h1>My Projects</h1>
          <p>A showcase of my work and technical expertise</p>
        </div>
        
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
    </section>
  );
};

export default Project;
