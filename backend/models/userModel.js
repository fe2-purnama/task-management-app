const db = require("../library/database");

const User = {
  create: (data, callback) => {
    const query =
      "INSERT INTO user (email, password, role, created_at) VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [data.email, data.password, data.role, new Date()],
      callback
    );
  },
  getAll: (callback) => {
    const query = "SELECT * FROM user WHERE role = 'user'";
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = "SELECT * FROM user WHERE id_user = ?";
    db.query(query, [id], callback);
  },
  update: (id, data, callback) => {
    const query =
      "UPDATE user SET email = ?, password = ?, role = ? WHERE id_user = ?";
    db.query(query, [data.email, data.password, data.role, id], callback);
  },
  delete: (id, callback) => {
    const query = "DELETE FROM user WHERE id_user = ?";
    db.query(query, [id], callback);
  },
  getTotalUsers: (callback) => {
    const query = "SELECT COUNT(*) AS totalUsers FROM user WHERE role='user'";
    db.query(query, callback);
  },
  getNewRegistrations: (callback) => {
    const query =
      "SELECT COUNT(*) AS newRegistrations FROM user WHERE created_at >= NOW() - INTERVAL 1 DAY";
    db.query(query, callback);
  },
  getUsersPerDay: (callback) => {
    const query =
      "SELECT DATE(created_at) AS date, COUNT(*) AS count FROM user GROUP BY DATE(created_at)";
    db.query(query, callback);
  },
};

module.exports = User;
