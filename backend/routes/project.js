const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController");
const verifyUser = require('../library/verify');

router.get("/", projectController.getAllProjects, verifyUser.isLogin);
router.get("/:id", projectController.getProjectById, verifyUser.isLogin);
router.post("/", projectController.createProject, verifyUser.isLogin);
router.put("/:id", projectController.updateProject, verifyUser.isLogin);
router.delete("/:id", projectController.deleteProject, verifyUser.isLogin);

module.exports = router;
