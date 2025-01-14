import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Educational_background from './components/Educational_background';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="nav-header">
          <nav>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/project">Project</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/certificates">Certificates</a></li>
              <li><a href="/educational_background">Educational Background</a></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/educational_background" element={<Educational_background />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
