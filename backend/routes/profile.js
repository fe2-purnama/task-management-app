const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');
const upload = require('../library/multer');
const verifyUser = require('../library/verify');

router.get('/', profileController.profile, verifyUser.isLogin);
router.post('/update', upload.single('profile_image'), profileController.updateProfile, verifyUser.isLogin);

module.exports = router;
