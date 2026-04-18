import React from 'react';

const Hobbies = () => {
  const hobbies = [
    'Ver peliculas de ciencia ficción',
    'Jugar videojuegos de estrategia',
    'Jugar Basketball',
    'Cocinar',
    'Ir a la Playa'
  ];

  return (
    <section id="hobbies" className="hobbies-section">
      <div className="container">
        <h2 className="section-title">Mis Hobbies</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-item">
              <span className="hobby-icon">✨</span>
              <p>{hobby}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
