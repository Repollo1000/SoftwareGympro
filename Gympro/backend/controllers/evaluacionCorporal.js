const db = require('../util/database');
const query = util.promisify(db.query).bind(db);
const util = require('util');

exports.getCorporal = async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM evaluacion_corporal');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.guardarEvaluacion = async (req, res) => {
    const { fecha, hora, observacion, created_at } = req.body;
    try {
      await query('INSERT INTO evaluacion_corporal  (fecha, hora, descripcion, created_at) VALUES (?, ?, ?, ?)', [fecha, hora, observacion, created_at]);
      res.status(201).json({ message: 'Clase creada exitosamente' });
    } catch (error) {
      console.error('Error al guardar la evaluacion:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

