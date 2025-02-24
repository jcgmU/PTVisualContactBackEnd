const {
  agentCreateRepository,
  agentListRepository,
} = require("../repository/agent.repository");
const { broadcast } = require("../../../config/webSocket/webSockerConnect");

const createAgent = async (agent) => {
  const newAgent = await agentCreateRepository(agent);
  broadcast({ type: 'NEW_AGENT', data: newAgent });
  return newAgent;
};

const listAgents = async () => {
  return await agentListRepository();
};

module.exports = {
  createAgent,
  listAgents,
};
