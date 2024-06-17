const express = require("express");
const router = express.Router();
const profileController = require("../controller/profileController");
const upload = require("../library/multer");
const { verifyToken, isLogin } = require("../library/verify");

// Middleware verifikasi token harus diterapkan sebelum memanggil controller
router.use(verifyToken);

// Rute untuk mendapatkan profil pengguna
router.get("/", isLogin, profileController.profile);

router.put("/username", isLogin, profileController.updateUsername);
router.put("/password", isLogin, profileController.updatePassword);
router.put("/foto", isLogin, upload.single('foto'), profileController.updateFoto);

module.exports = router;
