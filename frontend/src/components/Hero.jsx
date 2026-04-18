import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-image-wrapper">
          <img 
            src="https://picsum.photos/200/200" 
            alt="Luis Herazo Profile" 
            className="hero-image"
          />
          <div className="hero-blob"></div>
        </div>
        <div className="hero-text">
          <h1 className="animate-fade">Luis Herazo</h1>
          <p className="subtitle animate-fade" style={{ animationDelay: '0.2s' }}>
            Desarrollador Web en Formación
          </p>
          <p className="description animate-fade" style={{ animationDelay: '0.4s' }}>
            ¡Hola! Soy un apasionado por la tecnología y la creación de experiencias interactivas en la web. Este es el primer proyecto de mi portafolio profesional.
          </p>
          <div className="hero-actions animate-fade" style={{ animationDelay: '0.6s' }}>
            <a href="https://github.com/luis-herazo" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Ver GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
