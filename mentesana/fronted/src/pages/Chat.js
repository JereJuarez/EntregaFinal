import React from 'react';
import '../styles/Chat.css'

function Chat() {
  return (
    <div>
      <h2 className="form-title">Deja tus datos para ser contactado por nuestra red de Psicólogos</h2>

      <form className="form-container" action="https://formsubmit.co/mentesanaargentina@gmail.com" method="POST">
        <label className="form-label">Nombre</label>
        <input className="form-input" type="text" name="name" required />

        <label className="form-label">Email</label>
        <input className="form-input" type="email" name="email" required />

        <button className="form-button" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Chat;
