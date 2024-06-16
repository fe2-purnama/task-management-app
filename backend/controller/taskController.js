const Task = require("../models/taskModel");
const Project = require("../models/projectModel");

const getAllTasks = (req, res) => {
  const id_project = req.params.id_project;
  console.log(`Getting all tasks for project: ${id_project}`);
  Task.getAllByProject(id_project, (err, results) => {
    if (err) {
      console.error("Error fetching tasks:", err);
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

const getTaskById = (req, res) => {
  const id = req.params.id;
  Task.getById(id, (err, results) => {
    if (err) {
      console.error("Error fetching task:", err);
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

const createTask = (req, res) => {
  const id_project = req.params.id_project;
  const data = { id_project, ...req.body };
  console.log(
    `Creating task for project: ${id_project} with data: ${JSON.stringify(
      data
    )}`
  );

  Project.getById(id_project, (err, project) => {
    if (err) {
      console.error("Error fetching project:", err);
      return res.status(500).send(err);
    }

    // Ensure the project exists
    if (!project) {
      console.error(`Project with id: ${id_project} not found`);
      return res.status(404).send("Project not found");
    }

    Task.create(data, (err, results) => {
      if (err) {
        console.error("Error creating task:", err);
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
};

const updateTask = (req, res) => {
  const id = req.params.id;
  const id_project = req.params.id_project;
  const data = { id_project, ...req.body };
  console.log(
    `Updating task with id: ${id} for project: ${id_project} with data: ${JSON.stringify(
      data
    )}`
  );

  Task.getById(id, (err, task) => {
    if (err) {
      console.error("Error fetching task:", err);
      return res.status(500).send(err);
    }

    // Ensure the task exists
    if (!task) {
      console.error(`Task with id: ${id} not found`);
      return res.status(404).send("Task not found");
    }

    Project.getById(id_project, (err, project) => {
      if (err) {
        console.error("Error fetching project:", err);
        return res.status(500).send(err);
      }

      // Ensure the project exists
      if (!project) {
        console.error(`Project with id: ${id_project} not found`);
        return res.status(404).send("Project not found");
      }

      Task.update(id, data, (err, results) => {
        if (err) {
          console.error("Error updating task:", err);
          return res.status(500).send(err);
        }
        res.json(results);
      });
    });
  });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  const id_project = req.params.id_project;
  console.log(`Deleting task with id: ${id} for project: ${id_project}`);

  Task.getById(id, (err, task) => {
    if (err) {
      console.error("Error fetching task:", err);
      return res.status(500).send(err);
    }

    // Ensure the task exists
    if (!task) {
      console.error(`Task with id: ${id} not found`);
      return res.status(404).send("Task not found");
    }

    Project.getById(id_project, (err, project) => {
      if (err) {
        console.error("Error fetching project:", err);
        return res.status(500).send(err);
      }

      // Ensure the project exists
      if (!project) {
        console.error(`Project with id: ${id_project} not found`);
        return res.status(404).send("Project not found");
      }

      Task.delete(id, (err, results) => {
        if (err) {
          console.error("Error deleting task:", err);
          return res.status(500).send(err);
        }
        res.status(200).json({ message: "Task deleted successfully" });
      });
    });
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
