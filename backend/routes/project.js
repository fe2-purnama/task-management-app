const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController");
const { verifyToken, isLogin } = require("../library/verify");

// Middleware verifikasi token harus diterapkan sebelum memanggil controller
router.use(verifyToken);

router.get("/", isLogin, projectController.getAllProjects);
router.get("/:id", isLogin, projectController.getProjectById);
router.post("/", isLogin, projectController.createProject);
router.put("/:id", isLogin, projectController.updateProject);
router.delete("/:id", isLogin, projectController.deleteProject);

module.exports = router;