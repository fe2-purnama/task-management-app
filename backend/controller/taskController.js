const Task = require("../models/taskModel");

const getAllTasks = (req, res) => {
  Task.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const getTaskById = (req, res) => {
  const id = req.params.id;
  Task.getById(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const createTask = (req, res) => {
  const data = req.body;
  Task.create(data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const updateTask = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Task.update(id, data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  Task.delete(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
