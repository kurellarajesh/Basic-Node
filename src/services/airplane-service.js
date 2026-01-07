const { AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
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

async function getAirplane(id) {
    try {
        const airplaneRepository = new AirplaneRepository();
        const airplane = await airplaneRepository.get(id);
        return airplane;
    }
    catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not found", StatusCodes.NOT_FOUND, "Invalid Airplane id");
        }
        throw new AppError("Cannot fetch the airplane with that id", StatusCodes.INTERNAL_SERVER_ERROR, "Invalid request data");
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
}