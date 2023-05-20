import React from 'react';
import './psicoeducacion.css';

const Psicoanalisis = (props) => {
  return (
    <div className="container">
      <h2>PSICOANALISIS</h2>

      <div className="video-container">
        <iframe
          width="1080"
          height="720"
          src="https://www.youtube.com/embed/UDZnoP8uJe0"    
          title="El inconsciente según Freud"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p>
      El psicoanálisis es una teoría y forma de tratamiento desarrollada por Sigmund Freud a principios del siglo XX. A continuación, se presenta un resumen de las principales ideas del psicoanálisis:

Estructura de la mente: Freud propuso que la mente está dividida en tres partes: el ello, el yo y el superyó. El ello representa los impulsos y deseos primitivos y básicos, el superyó representa la conciencia moral y los ideales internalizados, y el yo actúa como mediador entre ambos, tratando de satisfacer las demandas del ello de manera realista.

Inconsciente: Según el psicoanálisis, gran parte de nuestra mente opera a un nivel inconsciente, es decir, fuera de nuestra conciencia. Se cree que el inconsciente contiene pensamientos, deseos y recuerdos reprimidos que influyen en nuestro comportamiento y experiencias conscientes.

Teoría del desarrollo psicosexual: Freud propuso que el desarrollo humano pasa por una serie de etapas psicosexuales: oral, anal, fálica, de latencia y genital. En cada etapa, se dan conflictos y experiencias que pueden tener un impacto duradero en la personalidad y el comportamiento.

Represión y resistencia: Según Freud, para protegernos de la ansiedad y el malestar, reprimimos ciertos pensamientos, recuerdos y deseos en el inconsciente. Estas represiones pueden dar lugar a conflictos psicológicos y manifestarse en forma de resistencias durante el proceso terapéutico.

Terapia psicoanalítica: La terapia psicoanalítica se basa en la exploración del inconsciente y la resolución de conflictos internos reprimidos. El terapeuta adopta un papel pasivo, permitiendo al paciente hablar libremente y expresar cualquier pensamiento o sentimiento sin censura. A través de la interpretación de los sueños, lapsus linguae y asociaciones libres, el terapeuta busca revelar los significados ocultos y los conflictos subyacentes.

Transferencia y contratransferencia: Durante el proceso terapéutico, pueden surgir sentimientos intensos y transferir hacia el terapeuta emociones y patrones de relación del pasado. Esto brinda la oportunidad de explorar y comprender las dinámicas y relaciones subyacentes.

Análisis de los sueños: Freud consideraba que los sueños eran la "vía real" al inconsciente. Creía que los sueños son expresiones simbólicas de deseos y conflictos reprimidos y que su interpretación puede brindar información valiosa sobre la psique del individuo.

Es importante destacar que el psicoanálisis ha evolucionado y se ha modificado desde los tiempos de Freud. Aunque algunas críticas se han dirigido hacia sus teorías y prácticas, el psicoanálisis ha influido significativamente en el campo de la psicología y ha contribuido al desarrollo de diferentes enfoques terapéuticos.
      </p>
    </div>
  );
}

export default Psicoanalisis;
