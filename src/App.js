// App.jsx
import React from "react";
import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Work from './components/Work';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Education from './components/Education';
import More from './components/More';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import m from './assets/M.png'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  console.log('verifying')
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a className='navbar-brand' href='#work'> <i class="fa-solid fa-magnifying-glass"></i> </a>
          {/* <a className='navbar-brand' href='#work'> <img className = 'top-img' src="../assets/girl.png"></img> </a> */}
          <button className="navbar-toggler" onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul className={`navbar-nav ${isNavOpen ? 'open' : ''}`}>
            <li className="nav-item"><a className="nav-link" href="#landing">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#work">Work</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#more">More</a></li>
          </ul>
        </div>
      </nav>

      <div className='cont'>
        <section id='landing' className='centered landing-comp'>
          <Landing />
        </section>
        
        <section id='work' className='centered work-comp'>
          <Work />
        </section>
        <hr />
        <section id='skills' className='centered skills-comp'>
          <Skills />
        </section>
        <hr />
        <section id='projects' className='centered projects-comp'>
          <Projects />
        </section>
        <hr />
        <section id='education' className='centered education-comp'>
          <Education />
        </section>
        <hr />
        <section id='more' className='centered more-comp'>
          <More />
        </section>
        <hr />
      </div>
    </>
  );
}

export default App;