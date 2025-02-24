const { Schema, model, Types } = require('mongoose');
const { TypeBehavior } = require('./connection.type');

//********************* types *************************//

/**
 * Esquema de una conexión
 */
const ConnectionSchema = new Schema(
    {
        user: { type: Types.ObjectId, ref: 'User', required: true },
        type: { type: String, enum: TypeBehavior, required: true }
    },
    {
        timestamps: true,
    }
);

const connectionModel = model('Connection', ConnectionSchema);
connectionModel.syncIndexes();

module.exports = { ConnectionModel: connectionModel };