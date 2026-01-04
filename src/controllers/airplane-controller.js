const {ErrorResponse, SuccessResponse} = require('../utils/common');
const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');

async function createAirplane(req, res) {
  try {

    const airplane = await AirplaneService.createAirplane({
      Model : req.body.Model,
      Capacity : req.body.Capacity
    });
    SuccessResponse.data = airplane;
    SuccessResponse.message = 'Airplane created successfully';
    return res.status(StatusCodes.CREATED).json({SuccessResponse});

  } catch (error) {
    ErrorResponse.message = 'Cannot create a new airplane';
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ErrorResponse});
  }
}

module.exports = {
  createAirplane
};
