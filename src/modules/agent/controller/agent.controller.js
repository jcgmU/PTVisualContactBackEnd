const { Request, Response, Router } = require("express");
const { handleResponse } = require("../../../config/handler/handlerResponse");
const { createAgent, listAgents } = require("../domain/agent.domain");
const { createAgentValidator } = require("../validator/agent.validator");

const AgentController = Router();

AgentController.get("/list", async (req, res) => {
  const agents = await listAgents();
  handleResponse(res, 200, agents);
});

AgentController.post("/create", createAgentValidator, async (req, res) => {
  const domainAgent = await createAgent(req.body);
  handleResponse(res, 200, domainAgent);
});

module.exports = { AgentController };
