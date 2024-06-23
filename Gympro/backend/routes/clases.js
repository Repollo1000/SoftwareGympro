const express = require('express');
const router = express.Router();
const classesController = require('../controllers/auth');

// Route to get all clases
router.get('/clases', classesController.getClases);
router.post('/clases', classesController.crearClase);

module.exports = router;