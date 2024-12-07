
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div className="portfolio-container">
        <header className="header">
          <h1>Ryan's Portfolio</h1>
          <nav>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="footer">
          <p>&copy; 2024 Ryan. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
