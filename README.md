# Contact Center - Backend

## Descripción

Sistema de gestión para centros de contacto que permite administrar agentes y clientes en tiempo real, utilizando WebSockets para actualizaciones instantáneas y una API RESTful para la gestión de datos.

## Tecnologías Utilizadas

-   **Node.js**
    
-   **Express.js**
    
-   **MongoDB** con Mongoose
    
-   **WebSocket (Socket.IO)**
    
-   **Cors** para seguridad de peticiones
    
-   **Dotenv** para gestión de variables de entorno
    
-   **Morgan** para logs de peticiones
    

## Estructura del Proyecto

```
.
├── index.js
├── nodemon.json
├── package-lock.json
├── package.json
├── src
│   ├── config
│   │   ├── app.js
│   │   ├── handler
│   │   │   ├── handlerException.js
│   │   │   └── handlerResponse.js
│   │   ├── healthCheck
│   │   │   └── healthCheck.js
│   │   ├── mongodb
│   │   │   └── mongodb.js
│   │   └── webSocket
│   │       └── webSocketConnect.js
│   ├── helper
│   │   └── response.js
│   ├── models
│   │   ├── agent
│   │   │   ├── agent.model.js
│   │   │   └── agent.type.js
│   │   ├── connection
│   │   │   └── connection.model.js
│   │   └── customer
│   │       └── customer.model.js
│   └── modules
│       ├── agent
│       │   ├── controller
│       │   │   └── agent.controller.js
│       │   ├── domain
│       │   │   └── agent.domain.js
│       │   ├── repository
│       │   │   └── agent.repository.js
│       │   ├── routes.js
│       │   └── validator
│       │       └── agent.validator.js
│       └── customer
│           ├── controller
│           │   └── customer.controller.js
│           ├── domain
│           │   └── customer.domain.js
│           ├── repository
│           │   └── customer.repository.js
│           └── routes.js
└── test.js
```

## Características

-   Gestión de agentes y clientes
    
-   API RESTful con operaciones CRUD
    
-   WebSockets para actualizaciones en tiempo real
    
-   Protección con CORS y manejo de excepciones
    
-   Base de datos MongoDB
    
-   Logs detallados con Morgan
    

## Instalación

### 1. Clonar el repositorio

```
git clone https://github.com/tu-repo/contact-center-backend.git
cd contact-center-backend
```

### 2. Instalar dependencias

```
npm install
```

### 3. Configurar variables de entorno

Crear un archivo **.env** en la raíz del proyecto y agregar:

```
PORT=3001
MONGO_URI=mongodb://localhost:27017/contact_center_db
```

### 4. Ejecutar el servidor

Modo desarrollo:

```
npm run dev
```

Modo producción:

```
npm start
```

## Uso

1.  Accede a la API en `http://localhost:3001`
    
2.  Rutas disponibles:
    
    -   **GET /customers/list** → Listar clientes
        
    -   **POST /customers/create** → Crear un nuevo cliente
        
    -   **GET /agents/list** → Listar agentes
        
    -   **POST /agents/create** → Crear un nuevo agente
        
    -   **GET /api/healthcheck** → Verificar el estado del servidor
        
3.  Para pruebas, usa Postman o cualquier cliente HTTP
    

## Configuración WebSocket

El sistema usa **Socket.IO** para actualizar agentes y clientes en tiempo real.

### Eventos WebSocket:

-   `agentUpdated` → Cuando un agente es modificado
    
-   `customerUpdated` → Cuando un cliente es modificado
    

Para conectar un cliente WebSocket:

```
const socket = io('http://localhost:3001');
socket.on('agentUpdated', (data) => {
    console.log('Actualización de agentes:', data);
});
```

## Scripts Disponibles

-   `npm run dev` → Iniciar el servidor en modo desarrollo con nodemon
    
-   `npm start` → Iniciar el servidor en modo producción
    

## Contribuciones

1.  **Fork** el proyecto
    
2.  Crea una **nueva rama** con tu funcionalidad
    
3.  **Realiza tus cambios** y confirma (commit)
    
4.  Envía un **pull request**
    
## Contacto

📧 jcgm1047@gmail.com

👨🏻‍💻Juan Camilo Garcia Martin
