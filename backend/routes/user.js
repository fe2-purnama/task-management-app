const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/dashboard/stats", userController.getDashboardStats); // Route baru untuk dashboard stats

module.exports = router;
