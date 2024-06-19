const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const db = require('../util/database');

// Controlador para obtener entrenamientos para clientes (solo lectura)
exports.getEntrenamientosCliente = async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT tipo, descripcion FROM training');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los entrenamientos para clientes:', error);
    res.status(500).json({ error: 'Error al obtener los entrenamientos para clientes' });
  }
};

// Controlador para obtener entrenamientos editables para profesionales (lectura y escritura)
exports.getEntrenamientosProfesional = async (req, res, next) => {
  try {
    const [rows] = await db.execute('SELECT tipo, descripcion FROM training WHERE profesional_id = ?', [req.userId]);
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los entrenamientos editables para profesionales:', error);
    res.status(500).json({ error: 'Error al obtener los entrenamientos editables para profesionales' });
  }
};

// Controlador de registro (signup)
exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const userDetails = { name, email, password: hashedPassword };
    const result = await User.save(userDetails);

    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

// Controlador de inicio de sesión (login)
exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.find(email);
    if (user[0].length !== 1) {
      const error = new Error('A user with this email could not be found.');
      error.statusCode = 401;
      throw error;
    }

    const storedUser = user[0][0];
    const isEqual = await bcrypt.compare(password, storedUser.password);
    if (!isEqual) {
      const error = new Error('Wrong password!');
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: storedUser.email,
        userId: storedUser.id,
      },
      'secretfortoken',
      { expiresIn: '1h' }
    );
    res.status(200).json({ token, userId: storedUser.id });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};
