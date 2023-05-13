import React from 'react';
import '../styles/Psicoeducacion.css';

const Section = () => {
  return (
    <section>
      <h2>Temas</h2>

      <div className="image-container">
        <div className="image-item">
          <img src="img/ansiedad.jpg" alt="Ansiedad" />
          <div className="description">
            <h3>Ansiedad</h3>
            <p>Aprende sobre ansiedad</p>
            <a href="ansiedad">Aprender</a>
          </div>
        </div>


        <div className="image-item">
          <img src="img/depresion.jpg" alt="Depresión" />
          <div className="description">
            <h3>Depresión</h3>
            <p>Aprende sobre depresión</p>
            <a href="depresion">Aprender</a>
          </div>
        </div>


        <div className="image-item">
          <img src="img/duelo.jpg" alt="Duelo" />
          <div className="description">
            <h3>Duelo</h3>
            <p>Aprende sobre duelo</p>
            <a href="duelo">Aprender</a>
          </div>
        </div>


        <div className="image-item">
          <img src="img/trauma.jpg" alt="Trauma" />
          <div className="description">
            <h3>Trauma</h3>
            <p>Aprende sobre Trauma</p>
            <a href="trauma">Aprender</a>
          </div>
        </div>


        <div className="image-item">
          <img src="img/personalidad.jpg" alt="Personalidad" />
          <div className="description">
            <h3>Personalidad</h3>
            <p>Aprende sobre Personalidad</p>
            <a href="personalidad">Aprender</a>
            </div>
        </div>


        <div className="image-item">
          <img src="img/creatividad.jpg" alt="Creatividad" />
          <div className="description">
            <h3>Creatividad</h3>
            <p>Aprende sobre Creatividad</p>
            <a href="creatividad">Aprender</a>
            </div>
        </div>


        <div className="image-item">
          <img src="img/trec.jpg" alt="Terapia Cognitiva Conductual" />
          <div className="description">
            <h3>Terapia Cognitiva Conductual</h3>
            <p>Aprende sobre Terapia Cognitiva Conductual</p>
            <a href="terapiacog">Aprender</a>
            </div>
        </div>


        <div className="image-item">
          <img src="img/psicoanalisis.jpg" alt="Psicoanálisis" />
          <div className="description">
            <h3>Psicoanálisis</h3>
            <p>Aprende sobre Psicoanálisis</p>
            <a href="psicoanalisis">Aprender</a>
            </div>
        </div>

        

      </div>
    </section>
  );
};

export default Section;