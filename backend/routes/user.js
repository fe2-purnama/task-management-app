const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { verifyToken, adminAuthMiddleware } = require("../library/verify");

// Semua rute terkait task harus menggunakan middleware verifikasi token
router.use(verifyToken);

router.get("/", adminAuthMiddleware, userController.getAllUsers);
router.get("/:id", adminAuthMiddleware, userController.getUserById);
router.post("/", adminAuthMiddleware, userController.createUser);
router.put("/:id", adminAuthMiddleware, userController.updateUser);
router.delete("/:id", adminAuthMiddleware, userController.deleteUser);
router.get("/dashboard/stats", adminAuthMiddleware, userController.getDashboardStats); // Route baru untuk dashboard stats

module.exports = router;