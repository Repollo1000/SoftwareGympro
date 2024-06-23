const db = require('../util/database');
const query = util.promisify(db.query).bind(db);
const util = require('util');

exports.getClases = async (req, res) => {
  try {
    // Realiza la consulta SQL usando await para esperar la promesa
    const [rows, fields] = await db.promise().query('SELECT * FROM clases');
    res.status(200).json(rows); // Devuelve los resultados en formato JSON
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' }); // Maneja errores
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