const express = require("express");
const router = express.Router();
const profileController = require("../controller/profileController");
const upload = require("../library/multer");
const { verifyToken } = require("../library/verify");

// Middleware verifikasi token harus diterapkan sebelum memanggil controller
router.use(verifyToken);

// Rute untuk mendapatkan profil pengguna
router.get("/", profileController.profile);

router.put("/username", profileController.updateUsername);
router.put("/password", profileController.updatePassword);
router.put("/foto", upload.single('foto'), profileController.updateFoto);

module.exports = router;
