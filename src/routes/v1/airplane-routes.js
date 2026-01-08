const express = require('express');
const router = express.Router();
const AirplaneController = require('../../controllers/airplane-controller');
const {AirplaneMiddleware} = require('../../middlewares');

router.post('/', AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);
router.get('/', AirplaneController.getAirplanes);
router.get('/:id', AirplaneController.getAirplane);
router.delete('/:id', AirplaneController.destroyAirplane);
router.patch('/:id', AirplaneController.patchAirplane);
router.put('/:id', AirplaneController.updateAirplane);
module.exports = router;
