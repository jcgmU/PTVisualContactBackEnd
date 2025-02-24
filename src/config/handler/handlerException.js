const { AppError, HttpCode } = require("../../helper/response");
const { handleError } = require("../../config/handler/handlerResponse");


//**************** helpers ******************************//

/**
 * Realiza el mapeo de errores 
 * @param error clase de error capturado
 * @param req Request de la petición
 * @param res Respuesta de la petición
 * @param next Funcion para dar continuidad con la aplicación
 */
const HandlerException = async (error, req, res, next) => {
    let status = HttpCode.INTERNAL_SERVER_ERROR;
    let detailsError;

    if (error instanceof AppError) {
        status = error.status;
        detailsError = error.detailsError;
    }
    console.error(error.message);
    handleError(res, status, error.message, detailsError);
};

module.exports = HandlerException;