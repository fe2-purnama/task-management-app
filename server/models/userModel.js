const db = require("../library/database");

const User = {
  create: (data, callback) => {
    const query = "INSERT INTO user (email, password) VALUES (?, ?)";
    db.query(query, [data.email, data.password], callback);
  },
  getAll: (callback) => {
    const query = "SELECT * FROM user";
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = "SELECT * FROM user WHERE id_user = ?";
    db.query(query, [id], callback);
  },
  update: (id, data, callback) => {
    const query = "UPDATE user SET email = ?, password = ? WHERE id_user = ?";
    db.query(query, [data.email, data.password, id], callback);
  },
  delete: (id, callback) => {
    const query = "DELETE FROM user WHERE id_user = ?";
    db.query(query, [id], callback);
  },
};

module.exports = User;
