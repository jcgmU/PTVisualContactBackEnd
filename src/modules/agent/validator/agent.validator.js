const { check, param} = require('express-validator');

const { handleValidator } = require('../../../config/handler/handlerResponse');

const createAgentValidator = [
    check('name').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
    check('status').isString().withMessage('Status must be a string').notEmpty().withMessage('Status is required'),
    check('waitTime').isNumeric().withMessage('WaitTime must be a number').notEmpty().withMessage('WaitTime is required'),
    (req, res, next) => handleValidator(req, res, next)
];

module.exports = {
    createAgentValidator
};