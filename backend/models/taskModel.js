const db = require("../library/database");

const Task = {
  create: (data, callback) => {
    const query =
      "INSERT INTO task (id_project, nama, deskripsi, tag, status, date, priority) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        data.id_project,
        data.nama,
        data.deskripsi,
        data.tag,
        data.status,
        data.date,
        data.priority,
      ],
      callback
    );
  },
  getAll: (callback) => {
    const query = "SELECT * FROM task";
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = "SELECT * FROM task WHERE id_task = ?";
    db.query(query, [id], callback);
  },
  update: (id, data, callback) => {
    const query =
      "UPDATE task SET id_project = ?, nama = ?, deskripsi = ?, tag = ?, status = ?, date = ?, priority = ? WHERE id_task = ?";
    db.query(
      query,
      [
        data.id_project,
        data.nama,
        data.deskripsi,
        data.tag,
        data.status,
        data.date,
        data.priority,
        id,
      ],
      callback
    );
  },
  delete: (id, callback) => {
    const query = "DELETE FROM task WHERE id_task = ?";
    db.query(query, [id], callback);
  },
};

module.exports = Task;
