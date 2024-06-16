const connection = require('../library/database');
const cloudinary = require('../library/cloudinary');

const profile = async (req, res) => {
    let id = req.session.userid
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        connection.query(
            `
            SELECT * FROM user where user_id = '${id}';
            `
        , function (error, results) {
            if(error) throw error;
            res.render("profile",{
                url: 'http://localhost:3000/',
                userName: req.session.username,
                nama: results[0]['username'],
                email: results[0]['email']
            });
        });
        connection.release();
    })
}

const updateProfile = async (req, res) => {
  try {
    const id = req.session.userid;
    const updatedData = {
      username: req.body.username,
      email: req.body.email
    };

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updatedData.profile_image = result.secure_url;
    }

    const [existingUser] = await connection.query(`SELECT * FROM user WHERE (username = ? OR email = ?) AND id_user != ?`, [updatedData.username, updatedData.email, id]);
    if (existingUser.length > 0) {
      return res.status(400).send('Username or email already exists');
    }

    await connection.query(`UPDATE user SET ? WHERE id_user = ?`, [updatedData, id]);
    res.send('Profile updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  profile,
  updateProfile
};