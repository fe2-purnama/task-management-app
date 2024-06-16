const express = require("express");
const router = express.Router();
const profileController = require("../controller/profileController");
const upload = require("../library/multer");
const { verifyToken, isLogin } = require("../library/verify");

// Middleware verifikasi token harus diterapkan sebelum memanggil controller
router.use(verifyToken);

// Rute untuk mendapatkan profil pengguna
router.get("/", isLogin, profileController.profile);

// Rute untuk memperbarui profil pengguna
router.post(
  "/update",
  isLogin,
  upload.single("profile_image"),
  profileController.updateProfile
);

module.exports = router;
