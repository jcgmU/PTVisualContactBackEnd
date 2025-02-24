const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

/**
 * Configuración de conexión a MongoDB
 */
const DBMongo = async () => {
    console.log("Intentando conectar a:", MONGO_URI);
    try {
        await mongoose.connect(MONGO_URI, {
            autoIndex: true
        });
        console.info("[DatabaseMongo]: MongoDB connected");
    } catch (error) {
        console.error("[DatabaseMongo]: MongoDB connection failed", error);
        throw new Error(error.message);
    }
};

module.exports = DBMongo;
