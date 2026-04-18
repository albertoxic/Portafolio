import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hobbies from './components/Hobbies';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Hobbies />
              </>
            } />
            <Route path="/proyectos" element={<ProjectGrid />} />
            <Route path="/contacto" element={<div>Contacto (Proximamente)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
