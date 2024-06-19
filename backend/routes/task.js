const express = require("express");
const router = express.Router({ mergeParams: true });
const taskController = require("../controller/taskController");
const { verifyToken } = require("../library/verify");

// Semua rute terkait task harus menggunakan middleware verifikasi token
router.use(verifyToken);

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.put("/:id/status", taskController.updateTaskStatus);


module.exports = router;
