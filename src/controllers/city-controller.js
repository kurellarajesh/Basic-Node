const {CityService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createCity(req, res) {
    try {
        const City = await CityService.createCity({
            cityName : req.body.cityName
        });
        return res.status(StatusCodes.CREATED).json(new SuccessResponse('City created successfully', City));
    }
    catch(error) {
        const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
        return res.status(statusCode).json(new ErrorResponse(error.message, error));
    }
}

module.exports = {
    createCity
};