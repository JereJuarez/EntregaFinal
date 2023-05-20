import React from 'react';
import './psicoeducacion.css';

const Depresion = (props) => {
  return (
    <div className="container">
      <h2>DEPRESION</h2>

      <div className="video-container">
        <iframe
          width="1080"
          height="720"
          src="https://www.youtube.com/embed/oa-JpB3ZZrc"   
          title="¿Qué es la depresión?" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p>
      ¿Qué es la depresión?
La depresión es un trastorno mental común que afecta a millones de personas en todo el mundo. Se caracteriza por una sensación persistente de tristeza, pérdida de interés o placer en actividades que antes eran gratificantes, y una disminución generalizada de la energía. La depresión puede interferir significativamente en la vida diaria y afectar diversos aspectos, como las relaciones, el trabajo y la salud física.

Síntomas de la depresión:
Los síntomas de la depresión pueden variar en intensidad y duración, pero generalmente incluyen:

Estado de ánimo deprimido o tristeza persistente.
Pérdida de interés o placer en actividades que antes eran disfrutadas.
Cambios en el apetito y el peso (pérdida o aumento).
Dificultades para conciliar el sueño o dormir en exceso.
Agitación o enlentecimiento psicomotor.
Fatiga o falta de energía.
Sentimientos de inutilidad o culpa excesiva.
Dificultad para concentrarse o tomar decisiones.
Pensamientos recurrentes de muerte o suicidio.
Es importante tener en cuenta que estos síntomas deben persistir durante al menos dos semanas para cumplir con los criterios diagnósticos de la depresión. Si experimentas algunos de estos síntomas y te preocupan, es recomendable buscar ayuda profesional para una evaluación adecuada.

Causas de la depresión:
La depresión puede ser el resultado de una combinación de factores, incluyendo:
Factores biológicos: Desbalances químicos en el cerebro, alteraciones genéticas y cambios en la estructura y funcionamiento cerebral pueden influir en el desarrollo de la depresión.
Factores psicológicos: Experiencias de vida estresantes, traumas, baja autoestima, pensamientos negativos recurrentes y dificultades en el manejo de emociones pueden contribuir al desarrollo de la depresión.
Factores sociales: El aislamiento social, conflictos en las relaciones interpersonales, falta de apoyo emocional y problemas laborales o económicos también pueden desencadenar o perpetuar la depresión.
Tratamiento de la depresión:
La depresión es un trastorno tratable y existen diversas opciones de tratamiento efectivas. Algunas de ellas incluyen:
Psicoterapia: La terapia psicológica, como la terapia cognitivo-conductual (TCC), puede ayudarte a identificar y cambiar los patrones de pensamiento negativos, aprender habilidades para manejar el estrés y desarrollar estrategias de afrontamiento saludables.
Medicación: En algunos casos, los antidepresivos pueden ser recetados por un profesional de la salud mental para ayudar a equilibrar los neurotransmisores en el cerebro y aliviar los síntomas de la depresión.
Apoyo social: Contar con el apoyo de amigos, familiares y grupos de apoyo puede ser de gran ayuda en el proceso de recuperación. Compartir tus sentimientos y experiencias con personas de confianza puede brindarte un espacio seguro para expresarte y recibir comprensión y apoyo.
      </p>
    </div>
  );
}

export default Depresion;
