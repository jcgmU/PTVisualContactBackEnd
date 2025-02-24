// app.js
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors');

// Routes
const { HealthCheck } = require("./healthCheck/healthCheck");
const { AgentRoutes } = require("../modules/agent/routes");
const { CustomerRoutes } = require("../modules/customer/routes");
const HandlerException = require("./handler/handlerException");

// Middlewares (solo morgan, ya que express.json() y cors se aplican en index.js)
app.use(morgan("dev"));
var corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  methods: "GET, HEAD, PUT, DELETE, POST",
  preflightContinue: false,
  credentials: true,
  optionSuccessStatus: 200,
  exposedHeaders: ["Content-Disposition"]
};

// Aplicar middlewares en el orden correcto
app.use(cors(corsOptions));
app.use(express.json()); 
app.use(HandlerException); 
// Routes
app.use("/healthcheck", HealthCheck);
app.use("/agents", AgentRoutes);
app.use("/customers", CustomerRoutes);

module.exports = app;