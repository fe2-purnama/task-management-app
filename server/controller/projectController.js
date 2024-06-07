const Project = require("../models/projectModel");

const getAllProjects = (req, res) => {
  Project.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.send(JSON.stringify(results, null, 2));
  });
};

const getProjectById = (req, res) => {
  const id = req.params.id;
  Project.getById(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const createProject = (req, res) => {
  const data = req.body;
  Project.create(data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const updateProject = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Project.update(id, data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const deleteProject = (req, res) => {
  const id = req.params.id;
  Project.delete(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
