const express = require("express");
const router = express.Router({ mergeParams: true });
const taskController = require("../controller/taskController");
const { verifyToken, isLogin } = require("../library/verify");

// Semua rute terkait task harus menggunakan middleware verifikasi token
router.use(verifyToken);

router.get("/", isLogin, taskController.getAllTasks);
router.get("/:id", isLogin, taskController.getTaskById);
router.post("/", isLogin, taskController.createTask);
router.put("/:id", isLogin, taskController.updateTask);
router.put("/:id/status", isLogin, taskController.updateTaskStatus);
router.delete("/:id", isLogin, taskController.deleteTask);

module.exports = router;
