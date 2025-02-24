/**
 * Codigo de estado respuestas api rest
 */
const HttpCode = {
    OK: 200,
    NO_CONTENT: 204,
    PARTIAL_CONTENT: 206,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
};

/**
 * Metodos de solicitud http
 */
const HttpMethod = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete",
    PATCH: "patch"
};

/**
 *  Estructura respuesta exitosa
 */
class ResponseApi {
    constructor(status, data) {
        this.status = status;
        this.data = data;
    }
}

/**
 * Estructura de error de negocio
 */
class AppError extends Error {
    constructor({ status = HttpCode.BAD_REQUEST, message, detailsError }) {
        super(message);
        this.status = status;
        this.detailsError = detailsError;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    HttpCode,
    HttpMethod,
    ResponseApi,
    AppError
};