const express = require('express');
const routeController = require('../controllers/routes');
var router = express.Router();

router.post('/route', routeController.create);

module.exports = router;