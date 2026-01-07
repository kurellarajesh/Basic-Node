const {ErrorResponse, SuccessResponse} = require('../utils/common');
const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      Model : req.body.Model,
      Capacity : req.body.Capacity
    });
    return res.status(StatusCodes.CREATED).json(new SuccessResponse('Airplane created successfully', airplane));

  } catch (error) {
      return res.status(error.statusCode).json(new ErrorResponse('Failed to create Airplane', new AppError('Failed to create Airplane', error.statusCode)));
  }
}

async function getAirplanes(req, res) {
  try{
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(new SuccessResponse('Airplanes fetched successfully', airplanes));
  }
  catch(error){
    return res.status(error.statusCode).json(new ErrorResponse('Failed to fetch Airplanes', new AppError('Failed to fetch Airplanes', error.statusCode)));
  }
}

module.exports = {
  createAirplane,
  getAirplanes
};
