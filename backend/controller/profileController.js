const connection = require('../library/database');
const cloudinary = require('../library/cloudinary');

const profile = function (req, res) {
    let id = req.session.userid;
    connection.query(
        `SELECT * FROM user WHERE user_id = ?`,
        [id],
        function (error, results) {
            if (error) {
                console.error(error);
                return res.status(500).send('Internal Server Error');
            }
            if (results.length > 0) {
                res.render("profile", {
                    url: 'http://localhost:5050/',
                    userName: req.session.username,
                    nama: results[0]['username'],
                    email: results[0]['email']
                });
            } else {
                res.status(404).send('User not found');
            }
        }
    );
};

const updateProfile = async function (req, res) {
    let id = req.session.userid;
    let updatedData = {
        username: req.body.username,
        email: req.body.email
    };

    if (req.file) {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            updatedData.profile_image = result.secure_url;
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error uploading image');
        }
    }

    connection.query(
        `SELECT * FROM user WHERE (username = ? OR email = ?) AND user_id != ?`,
        [updatedData.username, updatedData.email, id],
        function (error, results) {
            if (error) {
                console.error(error);
                return res.status(500).send('Internal Server Error');
            }
            if (results.length > 0) {
                return res.status(400).send('Username or email already exists');
            }

            connection.query(
                `UPDATE user SET ? WHERE user_id = ?`,
                [updatedData, id],
                function (error, results) {
                    if (error) {
                        console.error(error);
                        return res.status(500).send('Internal Server Error');
                    }
                    if (results.affectedRows > 0) {
                        res.send('Profile updated successfully');
                    } else {
                        res.status(404).send('User not found');
                    }
                }
            );
        }
    );
};

module.exports = {
    profile,
    updateProfile
};
