const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const verifyUser = require("../library/verify")

router.get("/", verifyUser.isLogin, userController.getAllUsers);
router.get("/:id", verifyUser.isLogin, userController.getUserById);
router.post("/", verifyUser.isLogin, userController.createUser);
router.put("/:id", verifyUser.isLogin, userController.updateUser);
router.delete("/:id", verifyUser.isLogin, userController.deleteUser);
router.get("/dashboard/stats", verifyUser.isLogin, userController.getDashboardStats); // Route baru untuk dashboard stats

module.exports = router;
