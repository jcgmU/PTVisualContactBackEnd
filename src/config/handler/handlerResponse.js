const { validationResult, ValidationError } = require("express-validator");
const { Request, Response, NextFunction } = require("express");
const { ResponseApi, AppErrorArgs, HttpCode, AppError } = require("../../helper/response");

//*************** interface ************************//

/**
* Realiza el mapeo de una respuesta de error de la aplicación
* @param res Respuesta de la petición
* @param message Mensaje de error de la respuesta
* @param error Detalle del error 
 */
const handleError = (res, status, message, error) => {
    let response = {
        status: status,
        message: message
    };

    if (error)
        response.detailsError = error;
    res.status(status).json(response);
};

/**
* Realiza el mapeo de una respuesta exitosa de la aplicación
* @param res Respuesta de la petición
* @param status Estado de restuespa de la aplicación
* @param data Cuerpo de la respuesta exitosa 
 */
const handleResponse = (res, status, data) => {
    let response = {
        status: status,
        data: data
    };

    res.status(status).json(response);
};

/**
        * Valida los datos ingresados en el body de una petición
        * @param req Request de la petición
        * @param res Respuesta de la petición
        * @param next Funcion para dar continuidad con la aplicación
*/
const handleValidator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new AppError({
            message: 'Error validation request',
            detailsError: errors.array()
        });
    } else
        return next();
};

module.exports = {
    handleError,
    handleResponse,
    handleValidator
};