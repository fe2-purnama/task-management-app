const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dux9eq6sv',
    api_key: '943173554615351',
    api_secret: '9eLmZ8N5s12DDOywhYYD1z6M0Dg'
});

module.exports = cloudinary;