const {ErrorResponse} = require('../utils/common');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next){
    if(!req.body.Model){
        return res.status(StatusCodes.BAD_REQUEST).json(new ErrorResponse('Model not found in the request body', new AppError('Model not found', StatusCodes.BAD_REQUEST)));
    }
    next();
}

module.exports = {
    validateCreateRequest
}