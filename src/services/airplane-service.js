const { AirplaneRepository} = require('../repositories');





async function createAirplane(data) {
    try {
        const airplaneRepository = new AirplaneRepository();
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        console.error("Error creating airplane:", error);
        throw error;
    }
}

module.exports = {
    createAirplane
}