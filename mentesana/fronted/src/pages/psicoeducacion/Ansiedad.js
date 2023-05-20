import React from 'react';
import './psicoeducacion.css';

const Ansiedad = (props) => {
  return (
    <div className="container">
      <h2>ANSIEDAD</h2>

      <div className="video-container">
        <iframe
          width="1080"
          height="720"
          src="https://www.youtube.com/embed/iEdv9X8JbsA" 
          title="¿Qué es la Ansiedad?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p>
      La ansiedad es una respuesta natural del cuerpo ante situaciones percibidas como amenazantes o estresantes. Todos experimentamos ansiedad en algún momento de nuestras vidas, y en niveles moderados puede ser útil para mantenernos alerta y preparados para afrontar desafíos.

Sin embargo, cuando la ansiedad se vuelve intensa, persistente o desproporcionada en relación a la situación, puede interferir en nuestro bienestar y funcionamiento diario. Algunos síntomas comunes de la ansiedad incluyen:

Sensación de inquietud o nerviosismo.
Preocupación excesiva.
Dificultad para concentrarse.
Irritabilidad.
Tensión muscular.
Problemas para conciliar el sueño o mantenerlo.
Sensación de falta de control.
Es importante recordar que la ansiedad puede manifestarse de diferentes formas en cada persona. Algunas personas pueden experimentar ataques de pánico, fobias específicas o ansiedad social, entre otras formas de ansiedad.

Afortunadamente, existen estrategias efectivas para manejar la ansiedad. Aquí te menciono algunas técnicas que podrían ayudarte:

Respiración profunda: Practicar la respiración diafragmática puede ayudar a reducir la respuesta de ansiedad y promover la relajación.
Técnicas de relajación: Explora diferentes técnicas de relajación como la meditación, el yoga o la visualización para reducir el estrés y la ansiedad.
Establecer límites: Aprende a decir "no" cuando sea necesario y establece límites saludables en tus relaciones y responsabilidades.
Pensamiento realista: Desafía tus pensamientos negativos y catastrofistas. Trata de adoptar una perspectiva más realista y equilibrada.
Autocuidado: Prioriza el autocuidado, incluyendo una alimentación saludable, ejercicio regular, descanso adecuado y actividades que disfrutes.
Apoyo social: Busca el apoyo de personas cercanas a ti, ya sea amigos, familiares o profesionales de la salud mental.
Recuerda que cada persona es única y lo que funciona para uno puede no funcionar para otro. Si la ansiedad interfiere significativamente en tu vida y no logras manejarla por tu cuenta, considera buscar la ayuda de un profesional de la salud mental, como un psicólogo o terapeuta.
        
      </p>
    </div>
  );
}

export default Ansiedad;
