const express = require('express');
const authMiddleware = require('../util/authMiddleware');
const authController = require('../controllers/auth');
const router = express.Router();

router.get('/entrenamientos', authMiddleware, authController.getEntrenamientosCliente);


module.exports = router;