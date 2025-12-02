import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Educationalbackground from './components/Educationalbackground';
import LandingPage from './components/LandingPage'; // Import the new LandingPage
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Updated Navigation with React Router's Link */}
        <header className="nav-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Dashboard</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/project">Project</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/certificates">Certificates</Link></li>
              <li><Link to="/educationalbackground">EducationalBackground</Link></li>
            </ul>
          </nav>
        </header>

        {/* Routes for Navigation */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/educationalbackground" element={<Educationalbackground />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;