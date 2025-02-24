const { HttpCode } = require("../../helper/response");
const { handleResponse } = require("../handler/handlerResponse");

/**
 * Realiza validación de health check del api
 * @param req Request de la petición
 * @param res Respuesta de la petición
 * @param next Funcion para dar continuidad con la aplicación
 */
const HealthCheck = async (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };

  handleResponse(res, HttpCode.OK, healthcheck);
};

module.exports = { HealthCheck };
