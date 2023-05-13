import React from 'react';
import '../styles/Inicio.css'

const Inicio = (props) => {
    return (
        <div>Inicio</div>
    );

}

function App() {
    return (
      <div>
        <h1>Bienvenidos a MenteSana</h1>
        
        <div className="image-container">
          <div className="image-box">
            <img src="img/1.png" width="200"  alt="Imagen 1" />
            <h2>PSICOEDUCACIÓN</h2>
            <p>Aprende sobre algunos </p>
                <p>conceptos de salud mental</p>
            <a className="link-button" href="psicoeducacion">Ver más</a>
          </div>
          
          <div className="image-box">
            <img src="img/2.png" width="200"  alt="Imagen 2" />
            <h2>PROFESIONALES</h2>
            <p>Conocé a profesionales </p>
            <p>   recomendados para vos</p>
            <a className="link-button" href="profesionales">Ver más</a>
          </div>
        </div>
        
        <div className="image-container">
          <div className="image-box">
            <img src="img/3.png" width="200"  alt="Imagen 3" />
            <h2>CONTACTO</h2>
            <p>Contáctanos para </p>
            <p>  una consulta</p>
            <a className="link-button" href="chat">Ver más</a>
          </div>
          
          <div className="image-box">
            <img src="img/4.png" width="200"  alt="Imagen 4" />
            <h2>¿QUIÉNES SOMOS?</h2>
            <p>Acerca de </p>
            <p>  Nosotros</p>
            <a className="link-button" href="acerca">Ver más</a>
          </div>
        </div>
      </div>
    );
  }
  
 


export default App;