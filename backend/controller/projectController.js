const Project = require("../models/projectModel");

const getAllProjects = (req, res) => {
  const id_user = req.user.id_user;
  console.log(`Getting all projects for user: ${id_user}`);
  Project.getAllByUser(id_user, (err, results) => {
    if (err) {
      console.error("Error fetching projects:", err);
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

const getProjectById = (req, res) => {
  const id_user = req.user.id_user;
  const id = req.params.id;
  console.log(`Getting project with id: ${id} for user: ${id_user}`);
  Project.getById(id, (err, results) => {
    if (err) {
      console.error("Error fetching project:", err);
      return res.status(500).send(err);
    }

    // Ensure the project belongs to the user
    if (!results || results.id_user !== id_user) {
      console.log(`User: ${id_user} does not own project with id: ${id}`);
      return res.status(403).send("Forbidden");
    }

    res.json(results);
  });
};

const createProject = (req, res) => {
  const id_user = req.user.id_user;
  const data = { id_user, ...req.body };
  console.log(
    `Creating project for user: ${id_user} with data: ${JSON.stringify(data)}`
  );
  Project.create(data, (err, results) => {
    if (err) {
      console.error("Error creating project:", err);
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

const updateProject = (req, res) => {
  const id_user = req.user.id_user;
  const id = req.params.id;
  const data = req.body;

  console.log(`Updating project with id: ${id} for user: ${id_user}`);
  Project.getById(id, (err, project) => {
    if (err) {
      console.error("Error fetching project:", err);
      return res.status(500).send(err);
    }

    // Ensure the project belongs to the user
    if (!project || project.id_user !== id_user) {
      console.log(`User: ${id_user} does not own project with id: ${id}`);
      return res.status(403).send("Forbidden");
    }

    Project.update(id, data, (err, results) => {
      if (err) {
        console.error("Error updating project:", err);
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
};

const deleteProject = (req, res) => {
  const id_user = req.user.id_user;
  const id = req.params.id;

  console.log(`Deleting project with id: ${id} for user: ${id_user}`);
  Project.getById(id, (err, project) => {
    if (err) {
      console.error("Error fetching project:", err);
      return res.status(500).send(err);
    }

    // Ensure the project belongs to the user
    if (!project || project.id_user !== id_user) {
      console.log(`User: ${id_user} does not own project with id: ${id}`);
      return res.status(403).send("Forbidden");
    }

    Project.delete(id, (err, results) => {
      if (err) {
        console.error("Error deleting project:", err);
        return res.status(500).send(err);
      }
      res.status(200).json({ message: "Project deleted successfully" });
    });
  });
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
