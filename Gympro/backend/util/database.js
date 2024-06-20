const mysql = require('mysql2/promise'); // Importa mysql2 con soporte para promesas
const config = require('../config/config.json');

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
});

module.exports = pool;
