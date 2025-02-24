const WebSocket = require('ws');

// Conéctate al servidor WebSocket
const socket = new WebSocket('ws://localhost:3001'); // Asegúrate de que el puerto sea correcto

socket.on('open', () => {
  console.log('Conectado al WebSocket');

  // Enviar un mensaje de prueba
  socket.send(JSON.stringify({ message: 'Prueba de conexión' }));
});

socket.on('message', (data) => {
  console.log('Mensaje recibido del servidor:', data);
});

socket.on('close', () => {
  console.log('Conexión cerrada');
});

socket.on('error', (error) => {
  console.error('Error en WebSocket:', error);
});
