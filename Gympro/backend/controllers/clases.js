const db = require('../util/database');

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