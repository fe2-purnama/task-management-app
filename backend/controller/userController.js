const User = require("../models/userModel");

const getAllUsers = (req, res) => {
  User.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  User.getById(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const createUser = (req, res) => {
  const data = req.body;
  User.create(data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  User.update(id, data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  User.delete(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
