const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');
const upload = require('../library/multer');

router.get('/profile', profileController.profile);
router.post('/profile/update', upload.single('profile_image'), profileController.updateProfile);

module.exports = router;
