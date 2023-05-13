const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);


io.on('connection', (socket) => {
  console.log('Usuario conectado');


  socket.on('newMessage', (message) => {
    console.log('Nuevo mensaje:', message);
    

    io.emit('newMessage', message);
  });


  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

const port = 3001;

server.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
