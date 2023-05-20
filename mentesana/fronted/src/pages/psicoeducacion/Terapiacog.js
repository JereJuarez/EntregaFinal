import React from 'react';
import './psicoeducacion.css';

const Terapiacog = (props) => {
  return (
    <div className="container">
      <h2>Terapia Cognitivo-Conductual</h2>

      <div className="video-container">
        <iframe
          width="1080"
          height="720"
          src="https://www.youtube.com/embed/Xvu2tbspwcc"
          title="🧠 ¿En qué consiste la TERAPIA COGNITIVO CONDUCTUAL (TCC)?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p>
      La terapia cognitivo-conductual (TCC) es un enfoque terapéutico basado en la idea de que nuestros pensamientos, emociones y comportamientos están interrelacionados y pueden influenciarse mutuamente. A continuación, se presenta un resumen de la terapia cognitivo-conductual y sus principales características:

Enfoque centrado en el presente: La TCC se enfoca principalmente en los problemas actuales y en cómo los pensamientos y comportamientos actuales pueden afectar el bienestar de una persona. Si bien se pueden explorar eventos pasados relevantes, el enfoque principal está en el presente y en cómo cambiar los patrones de pensamiento y comportamiento negativos.

Identificación de pensamientos distorsionados: La TCC se centra en identificar y desafiar los patrones de pensamiento negativos y distorsionados que pueden contribuir a emociones problemáticas o comportamientos poco saludables. Estas distorsiones cognitivas pueden incluir la generalización excesiva, la personalización, el pensamiento catastrófico, entre otros.

Reestructuración cognitiva: Una vez que se identifican los pensamientos distorsionados, la TCC se enfoca en reemplazarlos por pensamientos más realistas y adaptativos. Esto implica cuestionar las evidencias que respaldan los pensamientos negativos y buscar evidencias alternativas más equilibradas.

Técnicas conductuales: Además de trabajar con los pensamientos, la TCC también utiliza técnicas conductuales para ayudar a los individuos a cambiar sus patrones de comportamiento no saludables. Esto puede incluir el uso de técnicas de exposición gradual para superar miedos y fobias, el entrenamiento en habilidades sociales, la programación de actividades placenteras y el establecimiento de metas realistas.

Enfoque colaborativo: El terapeuta y el cliente trabajan juntos de manera colaborativa en la terapia cognitivo-conductual. El terapeuta desafía los pensamientos negativos y ayuda al cliente a desarrollar habilidades y estrategias para cambiar patrones de pensamiento y comportamiento no saludables. Se fomenta la participación activa del cliente en su propio proceso de cambio.

Orientada hacia objetivos y tiempo limitado: La TCC es una terapia orientada hacia objetivos, lo que significa que se establecen metas específicas y se trabaja para lograr resultados concretos en un tiempo limitado. Se utilizan técnicas estructuradas y se asignan tareas entre sesiones para fomentar el progreso y la práctica de nuevas habilidades.

La terapia cognitivo-conductual ha demostrado ser efectiva en el tratamiento de una amplia gama de trastornos psicológicos, como la depresión, la ansiedad, los trastornos de la alimentación y los trastornos de estrés postraumático. También se ha utilizado con éxito en la gestión del estrés, el desarrollo de habilidades de afrontamiento y la mejora de la calidad de vida en general.
      </p>
    </div>
  );
}

export default Terapiacog;
