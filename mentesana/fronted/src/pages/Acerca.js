import React from 'react';
import '../styles/Acerca.css';

function Acerca() {
    return (
      <div className="acerca-container">
        <h1 className="titulo">Acerca de SanaMente</h1>
        <div className="contenido">
          <div className="texto">
            <p>
              Bienvenidos a SanaMente, un lugar dedicado a tu bienestar emocional y mental.
              Nuestro objetivo es brindarte el apoyo necesario para enfrentar los desafíos
              de la vida y mejorar tu calidad de vida.
            </p>
            <p>
              Contamos con un equipo de psicólogos altamente capacitados y comprometidos,
              especializados en diversas áreas y enfoques terapéuticos. Estamos aquí para
              escucharte, comprenderte y ofrecerte las herramientas necesarias para tu
              crecimiento personal y tu equilibrio emocional.
            </p>
            <p>
              En SanaMente, valoramos tu privacidad y confidencialidad. Nuestras sesiones
              terapéuticas se llevan a cabo en un entorno seguro y acogedor, donde podrás
              expresarte libremente y recibir el apoyo que necesitas.
            </p>
          </div>
          <div className="imagen">
            <img src="img/nosotros.jpg"alt="Nosotros" />
          </div>
        </div>
        <div className="contacto">
          <h2>Contáctanos</h2>
          <p>Teléfono: 2625409541</p>
          <p>Email: mentesanaarg@gmail.com</p>
        </div>
      </div>
    );
}



export default Acerca;