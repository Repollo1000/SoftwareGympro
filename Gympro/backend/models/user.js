const db = require('../util/database');

module.exports = class User {
  constructor(name, email, password, rol = 'Cliente') {
    this.name = name;
    this.email = email;
    this.password = password;
    this.rol = rol; // Nuevo campo de rol
  }

  static find(email) {
    return db.execute('SELECT * FROM users WHERE email = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO users (name, email, password, rol) VALUES (?, ?, ?, ?)',
      [user.name, user.email, user.password, user.rol]
    );
  }
};