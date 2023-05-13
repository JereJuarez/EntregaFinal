require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});


app.post('/enviar-correo', (req, res) => {
  const { nombre, correo, mensaje } = req.body;


  const mailOptions = {
    from: 'sanamentearg@gmail.com',
    to: 'correo_destino@example.com',
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al enviar el correo electrónico' });
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.json({ message: 'Correo electrónico enviado'});
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3000');
});