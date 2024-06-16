const db = require("../library/database");

const Project = {
  getAllByUser: (id_user, callback) => {
    const query = "SELECT * FROM project WHERE id_user = ?";
    db.query(query, [id_user], (err, results) => {
      if (err) {
        console.error("Error fetching projects:", err);
        return callback(err);
      }
      console.log(`Projects fetched for user ${id_user}:`, results);
      callback(null, results);
    });
  },
  getById: (id, callback) => {
    const query = "SELECT * FROM project WHERE id_project = ?";
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Error fetching project:", err);
        return callback(err);
      }
      const project = results[0];
      console.log(`Project fetched with id ${id}:`, project);
      callback(null, project);
    });
  },
  create: (data, callback) => {
    const query = "INSERT INTO project (id_user, nama) VALUES (?, ?)";
    db.query(query, [data.id_user, data.nama], (err, results) => {
      if (err) {
        console.error("Error creating project:", err);
        return callback(err);
      }
      console.log(`Project created with data:`, data);
      callback(null, results);
    });
  },
  update: (id, data, callback) => {
    const query = "UPDATE project SET nama = ? WHERE id_project = ?";
    db.query(query, [data.nama, id], (err, results) => {
      if (err) {
        console.error("Error updating project:", err);
        return callback(err);
      }
      console.log(`Project with id ${id} updated with data:`, data);
      callback(null, results);
    });
  },
  delete: (id, callback) => {
    const query = "DELETE FROM project WHERE id_project = ?";
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Error deleting project:", err);
        return callback(err);
      }
      console.log(`Project with id ${id} deleted`);
      callback(null, results);
    });
  },
};

module.exports = Project;
