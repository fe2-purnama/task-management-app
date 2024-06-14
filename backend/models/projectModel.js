const db = require("../library/database");

const Project = {
  create: (data, callback) => {
    const query = "INSERT INTO project (id_user, nama) VALUES (?, ?)";
    db.query(query, [data.id_user, data.nama], callback);
  },
  getAll: (callback) => {
    const query = "SELECT * FROM project";
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = "SELECT * FROM project WHERE id_project = ?";
    db.query(query, [id], callback);
  },
  update: (id, data, callback) => {
    const query =
      "UPDATE project SET id_user = ?, nama = ? WHERE id_project = ?";
    db.query(query, [data.id_user, data.nama, id], callback);
  },
  delete: (id, callback) => {
    const query = "DELETE FROM project WHERE id_project = ?";
    db.query(query, [id], callback);
  },
};

module.exports = Project;
