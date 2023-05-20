import React from 'react';
import './psicoeducacion.css';

const Trauma = (props) => {
  return (
    <div className="container">
      <h2>TRAUMA</h2>

      <div className="video-container">
        <iframe
          width="1080"
          height="720"
          src="https://www.youtube.com/embed/OASYLAn_17w"
          title="Que es el trauma?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p>
      El trauma es una respuesta emocional y psicológica abrumadora ante un evento o una serie de eventos que son percibidos como amenazantes o traumáticos para la vida o la integridad de una persona. Estos eventos pueden incluir situaciones de violencia, abuso, desastres naturales, accidentes graves, pérdidas significativas o experiencias traumáticas repetidas.

Respuesta de lucha o huida: Cuando una persona experimenta un evento traumático, el cuerpo activa la respuesta de lucha o huida, que es una reacción instintiva ante una amenaza percibida. Durante esta respuesta, el cuerpo libera hormonas del estrés, aumenta la frecuencia cardíaca y la respiración, y se prepara para enfrentar la amenaza o escapar de ella.

Síntomas del trauma: Después de un evento traumático, es común experimentar una variedad de síntomas, que pueden incluir recuerdos intrusivos del evento, pesadillas, evitación de recordatorios del trauma, dificultades para conciliar el sueño, cambios de humor, hipervigilancia, ansiedad y depresión. Estos síntomas pueden afectar significativamente la calidad de vida y el funcionamiento diario de una persona.

Trastorno de estrés postraumático (TEPT): Algunas personas pueden desarrollar un trastorno de estrés postraumático como resultado de un trauma. El TEPT se caracteriza por síntomas persistentes de reexperimentación del trauma, evitación de estímulos relacionados con el trauma, cambios negativos en el estado de ánimo y cogniciones asociadas al trauma, y síntomas de hiperactivación, como la irritabilidad y la dificultad para concentrarse.

Procesamiento del trauma: El procesamiento del trauma es un aspecto fundamental en la recuperación. Implica explorar y comprender las emociones, pensamientos y reacciones asociados al evento traumático de manera segura y gradual. Esto se puede lograr a través de la terapia, donde se utilizan enfoques como la terapia cognitivo-conductual, la terapia de exposición y la terapia de desensibilización y reprocesamiento por movimientos oculares (EMDR).

Apoyo social: El apoyo social desempeña un papel crucial en la recuperación del trauma. Contar con una red de apoyo compuesta por amigos, familiares y profesionales de la salud mental puede ayudar a las personas a sentirse comprendidas, validadas y respaldadas durante el proceso de sanación.

Autocuidado: El autocuidado es esencial para la recuperación del trauma. Esto puede incluir prácticas como el ejercicio regular, una alimentación saludable, el descanso adecuado, la gestión del estrés, la práctica de técnicas de relajación y la participación en actividades que brinden placer y bienestar.

Es importante tener en cuenta que cada persona responde y se recupera del trauma de manera única. Si estás lidiando con los efectos del trauma, considera buscar el apoyo de un profesional de la salud mental especializado en trauma, quien puede proporcionarte herramientas y estrategias específicas para tu proceso de recuperación.





      </p>
    </div>
  );
}

export default Trauma;
