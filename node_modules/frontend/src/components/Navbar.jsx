import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">L.H</Link>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/#hobbies">Hobbies</Link>
          <Link to="/contacto" className="btn-contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
