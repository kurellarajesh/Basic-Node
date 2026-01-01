const CrudRepository = require('./crud-repository');
const Logger = require('../config');
const {Airplane} = require('../models');

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;
