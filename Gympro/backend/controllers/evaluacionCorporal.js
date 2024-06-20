const db = require('../util/database');

exports.getCorporal = async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM evaluacion_corporal');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };