const express = require('express');
const router = express.Router();
const maquinasController = require('../controllers/maquinas');

// Route to get all maquinas
router.get('/maquinas', maquinasController.getMaquinas);

module.exports = router;
