import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroOverlay from './components/IntroOverlay';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <IntroOverlay />
      <div className="main-content">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <div className="bg-grid"></div>
    </div>
  );
}

export default App;
