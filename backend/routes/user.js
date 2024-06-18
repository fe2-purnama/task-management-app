const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { verifyToken, isLogin, adminAuthMiddleware } = require("../library/verify");

// Semua rute terkait task harus menggunakan middleware verifikasi token
router.use(verifyToken);

router.get("/", isLogin, adminAuthMiddleware, userController.getAllUsers);
router.get("/:id", isLogin, adminAuthMiddleware, userController.getUserById);
router.post("/", isLogin, adminAuthMiddleware, userController.createUser);
router.put("/:id", isLogin, adminAuthMiddleware, userController.updateUser);
router.delete("/:id", isLogin, adminAuthMiddleware, userController.deleteUser);
router.get("/dashboard/stats", isLogin, adminAuthMiddleware, userController.getDashboardStats); // Route baru untuk dashboard stats

module.exports = router;