const { AgentStatus } = require("./agent.type");
const { Schema, model } = require("mongoose");

const AgentSchema = new Schema(
    {
        name: { type: String, required: true },
        status: { type: String, enum: Object.values(AgentStatus), required: true },
        waitTime: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const AgentModel = model("Agent", AgentSchema);

module.exports = AgentModel;
