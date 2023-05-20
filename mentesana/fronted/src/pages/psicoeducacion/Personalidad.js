import React from 'react';
import './psicoeducacion.css';

const Personalidad = (props) => {
  return (
    <div className="container">
      <h2>PERSONALIDAD</h2>

      <div className="video-container">
        <iframe
          width="1080"
          height="720"
          src="https://www.youtube.com/embed/4LVKToe_v5Y" 
          title="Trastorno Obsesivo Compulsivo de la Personalidad: Causas Diagnóstico y Tratamiento (Resumen animado)" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p>
      ¿Qué es la personalidad?
La personalidad se refiere a los patrones consistentes de pensamientos, emociones y comportamientos que caracterizan a una persona y la hacen única. Es la forma en que percibimos, interpretamos y respondemos al mundo que nos rodea. La personalidad abarca diferentes aspectos, como las actitudes, los valores, los rasgos y los estilos de comportamiento.

Rasgos de la personalidad:
Los rasgos de la personalidad son características duraderas que influyen en la forma en que pensamos, sentimos y actuamos. Algunos ejemplos de rasgos de personalidad comunes incluyen:

Extraversión: grado de sociabilidad, energía y búsqueda de estimulación en el entorno.
Introversión: tendencia a centrarse en el mundo interno y evitar la estimulación externa.
Amabilidad: disposición a ser comprensivo, cooperativo y considerado hacia los demás.
Neuroticismo: nivel de estabilidad emocional y propensión a la ansiedad, la depresión y el estrés.
Responsabilidad: grado de organización, disciplina y cumplimiento de las obligaciones.
Apertura a la experiencia: disposición a explorar ideas, ser creativo y tener una mente abierta.
Estos son solo algunos ejemplos de rasgos de personalidad, y cada persona tiene una combinación única de ellos.

Teorías de la personalidad:
Hay varias teorías que intentan explicar y comprender la personalidad. Algunas de las teorías más conocidas incluyen:
Teoría de los Cinco Grandes (Big Five): Esta teoría postula que la personalidad se puede describir en términos de cinco dimensiones amplias: extraversión, amabilidad, responsabilidad, estabilidad emocional y apertura a la experiencia.
Teoría psicoanalítica de Sigmund Freud: Freud propuso que la personalidad está compuesta por tres componentes: el ello (instintos y deseos inconscientes), el yo (equilibrio entre los impulsos y las demandas sociales) y el superyó (conciencia moral internalizada).
Teoría de los tipos de personalidad de Carl Jung: Jung propuso que las personas tienen predisposiciones innatas que determinan su forma de percibir y relacionarse con el mundo, y que estas predisposiciones pueden agruparse en diferentes tipos de personalidad.
Estas son solo algunas de las teorías más influyentes, y existen otras teorías y enfoques que también contribuyen a nuestra comprensión de la personalidad.

Desarrollo y cambio de la personalidad:
Si bien la personalidad tiende a ser relativamente estable a lo largo de la vida, también puede experimentar cambios y desarrollo a lo largo de las etapas de la vida y en respuesta a experiencias significativas. Los factores genéticos, las influencias ambientales, las interacciones sociales y los procesos de aprendizaje pueden influir en el desarrollo y la evolución de la personalidad.
Es importante tener en cuenta que la personalidad es multifacética y compleja, y que cada individuo tiene una personalidad única y en constante evolución. La comprensión de la personalidad puede ayudarnos a conocernos mejor a nosotros mismos y a comprender y relacionarnos con los demás de manera
      </p>
    </div>
  );
}

export default Personalidad;
