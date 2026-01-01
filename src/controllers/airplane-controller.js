const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');

async function createAirplane(req, res) {
  try {
    console.log('Request Body:', req.body);

    const { Model, Capacity } = req.body;

    // Validation
    if (!Model || !Capacity) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Model and Capacity are required',
        data: {},
        errors: {}
      });
    }

    const airplane = await AirplaneService.createAirplane({
      Model,
      Capacity
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully created an airplane',
      data: airplane,
      errors: {}
    });

  } catch (error) {
    console.error('Error creating airplane:', error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Internal Server Error',
      data: {},
      errors: error
    });
  }
}

module.exports = {
  createAirplane
};
