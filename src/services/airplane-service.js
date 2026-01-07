const { AirplaneRepository} = require('../repositories');
const { AppError } = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');
async function createAirplane(data) {
    try {
        const airplaneRepository = new AirplaneRepository();
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if(error.name == 'TypeError'){
            throw new AppError('Cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw error;
    }
}

async function getAirplanes() {
    try {
        const airplaneRepository = new AirplaneRepository();
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
            throw new AppError('Cannot get the airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}