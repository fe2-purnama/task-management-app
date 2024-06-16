const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController");
const verifyUser = require("../library/verify");

router.get("/", verifyUser.verifyToken, projectController.getAllProjects);
router.get("/:id", verifyUser.verifyToken, projectController.getProjectById);
router.post("/", verifyUser.verifyToken, projectController.createProject);
router.put("/:id", verifyUser.verifyToken, projectController.updateProject);
router.delete("/:id", verifyUser.verifyToken, projectController.deleteProject);

module.exports = router;
