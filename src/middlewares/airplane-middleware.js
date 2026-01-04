const {ErrorResponse} = require('../utils/common');
const {StatusCodes} = require('http-status-codes');
function validateCreateRequest(req, res, next){
    if(!req.body.Model){
        ErrorResponse.message = 'Model is required';
        ErrorResponse.errors = {explanation : 'Model Number not found in the incoming request'};
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse})
    }
    next();
}

module.exports = {
    validateCreateRequest
}