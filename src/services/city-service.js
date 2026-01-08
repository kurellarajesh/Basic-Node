const city = require('../models/city');
const {CityRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

async function createCity(data) {
    try {
        const cityRepository = new CityRepository();
        const city = await cityRepository.create(data);
        return city;
    }
    catch(error) {
        if(!city) {
            throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR, 'Creation of city failed');
    }
}

}

module.exports = {
    createCity
};