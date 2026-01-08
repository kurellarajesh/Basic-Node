const {ErrorResponse} = require('../utils/common');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next){
    if(!req.body.cityName){
        return res.status(StatusCodes.BAD_REQUEST).json(new ErrorResponse('City not found in the request body', new AppError('City not found', StatusCodes.BAD_REQUEST, 'BAD_REQUEST')));
    }
    next();
}

module.exports = {
    validateCreateRequest
}