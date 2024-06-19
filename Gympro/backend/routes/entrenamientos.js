// routes/entrenamientos.js
const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

// Rutas para obtener entrenamientos
router.get('/entrenamientos', authController.getEntrenamientosCliente);
router.get('/entrenamientos/editables', authController.getEntrenamientosProfesional);

module.exports = router;
