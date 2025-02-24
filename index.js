require('dotenv').config();

const { PORT } = process.env;
const express = require('express');
const http = require('http'); // Importar http para WebSocket
const { initializeWebSocket } = require('./src/config/webSocket/webSockerConnect'); // Importamos WebSocket
const app = require('./src/config/app');
const DBMongo = require('./src/config/mongodb/mongodb');
const HandlerException = require('./src/config/handler/handlerException');


app.use(express.json()); // 2. Parsear el cuerpo de las solicitudes
app.use(HandlerException); // 3. Manejo de excepciones

DBMongo();

const server = http.createServer(app);

initializeWebSocket(server);

server.listen(PORT, () => {
  console.log(`[Server] Server running on port ${PORT}`);
});