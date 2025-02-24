const { Server } = require('ws');

let wss; // Instancia del servidor WebSocket

const initializeWebSocket = (server) => {
  wss = new Server({ server });

  wss.on('connection', (ws) => {
    console.log('Cliente conectado al WebSocket');
    ws.on('message', (message) => {
      console.log('Mensaje recibido:', message);
    });
    ws.on('close', () => {
      console.log('Cliente desconectado');
    });
  });
  console.log('WebSocket inicializado');
};

// Función para enviar actualizaciones a los clientes conectados
const broadcast = (data) => {
  if (!wss) {
    console.warn('WebSocket no está inicializado');
    return;
  }
  
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(JSON.stringify(data));
    }
  });
};

module.exports = { initializeWebSocket, broadcast };
