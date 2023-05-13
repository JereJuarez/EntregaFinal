import React from 'react';
import '../styles/Profesionales.css';

const profesionales = [
  {
    id: 1,
    nombre: 'Marcos, Cardozo',
    orientacion: 'Terapia Humanista',
    ciudad: 'San Luis',
    telefono: '3434234321',
    email: 'marcoscardozo@gmail.com',
    especializacion: 'Especialización en Trauma',
  },
  {
    id: 2,
    nombre: 'Julieta, Bravo',
    orientacion: 'Terapia Cognitivo Conductual',
    ciudad: 'Mendoza',
    telefono: '2625434384',
    email: 'julietabravo@gmail.com',
    especializacion: 'n/c',
  },
  {
    id: 3,
    nombre: 'Benito, Martinez',
    orientacion: 'Terapia Humanista',
    ciudad: 'Río Negro',
    telefono: '3536234321',
    email: 'benitomarinez@yahoo.com.ar',
    especializacion: 'Especialización en Duelo',
  },
  {
    id: 4,
    nombre: 'Esteban, Juárez',
    orientacion: 'Psicoanalista',
    ciudad: 'Entre Ríos',
    telefono: '34354654565',
    email: 'estebanjuarez@gmail.com',
    especializacion: 'n/c',
  },
  {
    id: 5,
    nombre: 'Nicolás, Juárez',
    orientacion: 'Sistémico',
    ciudad: 'Buenos Aires',
    telefono: '11342345',
    email: 'nicolasjuarez@hotmail.com',
    especializacion: 'Terapia de Pareja',
  },
  {
    id: 6,
    nombre: 'Micaela, Barrera',
    orientacion: 'Cognitivo Conductual',
    ciudad: 'Buenos Aires',
    telefono: '11345342',
    email: 'micaelabarrera@outlook.com',
    especializacion: 'Sexología',
  },
];

function Profesionales() {
    return (
      <div className="profesionales-container">
        <h1 className="titulo">Guía de Profesionales</h1>
        {profesionales.map((profesional) => (
          <div key={profesional.id} className="profesional-card">
            <h2 className="nombre">{profesional.nombre}</h2>
            <p className="info">Orientación: {profesional.orientacion}</p>
            <p className="info">Ciudad: {profesional.ciudad}</p>
            <p className="info">Teléfono: {profesional.telefono}</p>
            <p className="info">Email: {profesional.email}</p>
            <p className="info">Especialización: {profesional.especializacion}</p>
          </div>
        ))}
      </div>
    );
}
  
export default Profesionales;