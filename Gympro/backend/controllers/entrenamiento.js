// controllers/entrenamientos.js
const db = require('../util/database');

// Controlador para obtener entrenamientos para clientes (solo lectura)
exports.getEntrenamientosCliente = async (req, res, next) => {
    try {
      const userId = req.userId; // Obtener el userId del token JWT decodificado
      const [rows] = await db.execute('SELECT tipo, descripcion FROM training WHERE idUser = ?', [userId]);
      res.json(rows);
    } catch (error) {
      console.error('Error al obtener los entrenamientos para clientes:', error);
      res.status(500).json({ error: 'Error al obtener los entrenamientos para clientes' });
    }
};
