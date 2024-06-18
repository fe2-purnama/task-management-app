const db = require("../library/database");

const Task = {
  create: (data, callback) => {
    const query =
      "INSERT INTO task (id_project, name, deskripsi, tag, status, date, priority) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        data.id_project,
        data.name,
        data.deskripsi,
        data.tag,
        data.status,
        data.date,
        data.priority,
      ],
      (err, results) => {
        if (err) {
          console.error("Error creating task:", err);
          return callback(err);
        }
        console.log("Task created with data:", data);
        callback(null, results);
      }
    );
  },
  getAllByProject: (id_project, callback) => {
    const query = "SELECT * FROM task WHERE id_project = ?";
    db.query(query, [id_project], (err, results) => {
      if (err) {
        console.error("Error fetching tasks:", err);
        return callback(err);
      }
      console.log(`Tasks fetched for project ${id_project}:`, results);
      callback(null, results);
    });
  },
  getById: (id, callback) => {
    const query = "SELECT * FROM task WHERE id_task = ?";
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Error fetching task:", err);
        return callback(err);
      }
      const task = results[0];
      console.log(`Task fetched with id ${id}:`, task);
      callback(null, task);
    });
  },
  update: (id, data, callback) => {
    const query =
      "UPDATE task SET id_project = ?, name = ?, deskripsi = ?, tag = ?, status = ?, date = ?, priority = ? WHERE id_task = ?";
    db.query(
      query,
      [
        data.id_project,
        data.name,
        data.deskripsi,
        data.tag,
        data.status,
        data.date,
        data.priority,
        id,
      ],
      (err, results) => {
        if (err) {
          console.error("Error updating task:", err);
          return callback(err);
        }
        console.log(`Task with id ${id} updated with data:`, data);
        callback(null, results);
      }
    );
  },
  updateStatus: (id, status, callback) => {
    const query = "UPDATE task SET status = 'finished' WHERE id_task = ?";
    db.query(query, [status, id], (err, results) => {
      if (err) {
        console.error("Error updating task status:", err);
        return callback(err);
      }
      console.log(`Task with id ${id} updated to status: ${status}`);
      callback(null, results);
    });
  },
  delete: (id, callback) => {
    const query = "DELETE FROM task WHERE id_task = ?";
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Error deleting task:", err);
        return callback(err);
      }
      console.log(`Task with id ${id} deleted`);
      callback(null, results);
    });
  },
};

module.exports = Task;
