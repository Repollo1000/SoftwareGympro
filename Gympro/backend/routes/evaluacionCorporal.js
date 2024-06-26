const express = require('express');
const router = express.Router();
const corporalController = require('../controllers/auth');

// Route to get all maquinas
router.get('/corporal', corporalController.getCorporal);
router.post('/evaluacion-corporal', corporalController.guardarEvaluacion);


module.exports = router;
