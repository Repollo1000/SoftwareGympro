const express = require('express');
const router = express.Router();
const corporalController = require('../controllers/evaluacionCorporal');

// Route to get all maquinas
router.get('/corporal', corporalController.getCorporal);

module.exports = router;
