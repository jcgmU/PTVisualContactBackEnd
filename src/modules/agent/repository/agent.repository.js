const AgentModel = require("../../../models/agent/agent.model");

const agentCreateRepository = async (agent) => {
  const newAgent = new AgentModel(agent);
  return await newAgent.save();
};

const agentListRepository = async () => {
  return await AgentModel.find();
};

module.exports = {
  agentCreateRepository,
  agentListRepository,
};
