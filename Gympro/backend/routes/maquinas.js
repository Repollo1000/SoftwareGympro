const express = require('express');
const router = express.Router();
const maquinasController = require('../controllers/auth');

// Route to get all maquinas
router.get('/maquinas', maquinasController.getMaquinas);
router.post('/maquinas', maquinasController.guardarMaquinas);
module.exports = router;
