const CrudRepository = require('./crud-repository');
const Logger = require('../config');
const {City} = require('../models');

class CityRepository extends CrudRepository {
    constructor() {
        super(City);
    }
}

module.exports = CityRepository;