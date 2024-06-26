const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const db = require('../util/database'); // Importa desde database.js
const util = require('util');
const query = util.promisify(db.query).bind(db);

// Controlador para obtener entrenamientos para clientes (solo lectura)
// Controlador para obtener entrenamientos para clientes (solo lectura)
exports.getEntrenamientosCliente = async (req, res, next) => {
  try {
    const userId = req.userId; // Obtener userId del token JWT
    console.log(`UserId from token: ${userId}`); // <-- Agrega este punto de verificación
    if (!userId) {
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }
    
    const [rows] = await db.execute('SELECT tipo, descripcion FROM training WHERE idUser = ?', [userId]);
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los entrenamientos para clientes:', error);
    res.status(500).json({ error: 'Error al obtener los entrenamientos para clientes' });
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
    const userDetails = { name, email, password: hashedPassword , role : 'Cliente'};
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
        role: storedUser.role,
      },
      'secretfortoken',
      { expiresIn: '1h' }
    );

    console.log('Generated JWT:', token); // Verificar el token generado
    res.status(200).json({ token, userId: storedUser.id , rol: storedUser.role});
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

// Controlador para obtener clases
exports.getClases = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM clases');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getMaquinas = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM maquinas');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getCorporal = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM evaluacion_corporal');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.crearClase = async (req, res) => {
  const { tipo, descripcion, fecha, hora } = req.body;
  try {
    await query('INSERT INTO clases (tipo, descripcion, fecha, hora) VALUES (?, ?, ?, ?)', [tipo, descripcion, fecha, hora]);
    res.status(201).json({ message: 'Clase creada exitosamente' });
  } catch (error) {
    console.error('Error al crear la clase:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
exports.guardarEvaluacion = async (req, res) => {
  const { fecha, hora, imc, observaciones, created_at } = req.body;
  try {
    await query('INSERT INTO evaluacion_corporal (fecha, hora, imc, observaciones, created_at) VALUES (?, ?, ?, ?, ?)', [fecha, hora, imc, observaciones, created_at]);
    res.status(201).json({ message: 'Evaluación guardada exitosamente' });
  } catch (error) {
    console.error('Error al guardar la evaluación:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
exports.guardarMaquinas = async (req, res) => {
  const { sala, descripcion, fecha, hora } = req.body;
  try {
    await query('INSERT INTO maquinas (sala, descripcion, fecha, hora) VALUES (?, ?, ?, ?)', [sala, descripcion, fecha, hora]);
    res.status(201).json({ message: 'Máquina guardada exitosamente' });
  } catch (error) {
    console.error('Error al guardar la máquina:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
exports.getProfile = (req, res, next) => {
  const userId = req.userId; // Suponiendo que tienes el ID del usuario desde algún middleware
  User.findById(userId)
    .then(([user]) => {
      // Aquí maneja la respuesta del usuario encontrado
      res.status(200).json(user);
    })
    .catch(err => {
      // Maneja cualquier error
      console.error('Error al obtener el perfil del usuario:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    });
};

exports.guardarEntrenamiento = async (req, res) => {
  try {
    const { tipo, descripcion, idUser } = req.body;

    // Validar que todos los campos estén presentes
    if (!tipo || !descripcion || !idUser) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Consulta SQL para insertar el nuevo entrenamiento
    const query = 'INSERT INTO training (tipo, descripcion, idUser) VALUES (?, ?, ?)';
    const values = [tipo, descripcion, idUser];

    // Ejecutar la consulta
    db.query(query, values, (error, results) => {
      if (error) {
        console.error('Error al guardar el entrenamiento:', error);
        return res.status(500).json({ message: 'Error al guardar el entrenamiento' });
      }

      // Enviar la respuesta con el entrenamiento creado
      res.status(201).json({ id: results.insertId, tipo, descripcion, idUser });
    });
  } catch (error) {
    console.error('Error al guardar el entrenamiento:', error);
    res.status(500).json({ message: 'Error al guardar el entrenamiento' });
  }
};

exports.deleteAccount = async (req, res, next) => {
  const userId = req.userId;
  try {
    await query('DELETE FROM users WHERE id = ?', [userId]);
    res.status(200).json({ message: 'Cuenta eliminada exitosamente' });
  } catch (err) {
    console.error('Error al eliminar la cuenta:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};