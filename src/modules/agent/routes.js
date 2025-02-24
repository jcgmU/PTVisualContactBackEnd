const express = require("express");
const { AgentController } = require("./controller/agent.controller");

const AgentRoutes = express.Router();

AgentRoutes.use(AgentController);

module.exports = { AgentRoutes };
