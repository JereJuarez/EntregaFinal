import React from 'react';
import './psicoeducacion.css';

const Duelo = (props) => {
  return (
    <div className="container">
      <h2>DUELO</h2>

      <div className="video-container">
        <iframe
          width="1080"
          height="720"
          src="https://www.youtube.com/embed/DiXQy877H3w"   
          title="Cómo afrontar el duelo y la pérdida" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p>
      ¿Qué es el duelo?
El duelo es una respuesta natural y emocional a la pérdida de alguien o algo significativo en nuestras vidas. Puede ser una experiencia dolorosa y desafiante que involucra una serie de reacciones físicas, emocionales y cognitivas. El duelo no solo se limita a la pérdida de un ser querido, sino que también puede surgir ante la pérdida de una mascota, un empleo, una relación o cualquier otro tipo de cambio significativo en nuestras vidas.

Proceso de duelo:
El proceso de duelo varía de una persona a otra y no sigue una secuencia lineal establecida. Sin embargo, a menudo se describen las siguientes etapas:

Negación: En esta etapa inicial, es común negar la realidad de la pérdida y sentir dificultad para aceptarla por completo.
Ira: Puede surgir una sensación de ira, resentimiento o frustración hacia la situación o hacia uno mismo por la pérdida.
Negociación: Algunas personas intentan hacer acuerdos internos o externos para revertir la pérdida o encontrar una solución.
Depresión: Durante esta etapa, es común experimentar tristeza profunda, desesperanza, apatía y aislamiento social.
Aceptación: Con el tiempo, la persona puede llegar a aceptar la realidad de la pérdida y comenzar a adaptarse a una vida sin la presencia de lo que se perdió.
Es importante tener en cuenta que el proceso de duelo es único para cada individuo y no todas las personas experimentarán todas las etapas ni en el mismo orden.

Síntomas del duelo:
El duelo puede manifestarse de diferentes maneras y los síntomas pueden variar de una persona a otra. Algunos síntomas comunes del duelo incluyen:
Tristeza profunda y llanto frecuente.
Sentimientos de vacío y pérdida.
Dificultad para concentrarse o tomar decisiones.
Cambios en el apetito y el sueño.
Fatiga y falta de energía.
Irritabilidad y enojo.
Ansiedad y preocupación.
Sentimientos de culpa o remordimiento.
Estos síntomas suelen disminuir con el tiempo a medida que avanzas en el proceso de duelo.

Afrontar el duelo:
Cada persona encuentra formas diferentes de afrontar el duelo, pero aquí hay algunas estrategias que pueden ayudarte:
Permítete sentir: Es importante permitirte sentir y expresar tus emociones, ya sea llorando, escribiendo en un diario o hablando con alguien de confianza.
Busca apoyo: No enfrentes el duelo solo. Busca el apoyo de amigos, familiares o un profesional de la salud mental que pueda brindarte el espacio y la comprensión necesarios.
Cuida de ti mismo: Prioriza el autocuidado durante el duelo. Duerme lo suficiente, come bien, haz ejercicio y realiza actividades que te brinden paz y satisfacción.
Sé paciente contigo mismo: El proceso de duelo lleva tiempo y es diferente para cada persona. No te presiones para sanar rápidamente y date permiso para vivir tu proceso a tu propio ritmo.
      </p>
    </div>
  );
}

export default Duelo;
