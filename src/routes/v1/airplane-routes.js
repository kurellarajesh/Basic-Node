const express = require('express');
const router = express.Router();
const AirplaneController = require('../../controllers/airplane-controller');

router.post('/', AirplaneController.createAirplane);

module.exports = router;
