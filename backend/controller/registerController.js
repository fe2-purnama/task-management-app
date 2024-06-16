const connection = require('../library/database');
const cloudinary = require('../library/cloudinary');

const formRegister = function (req, res) {
    res.status(200).json({
        url: 'http://localhost:3004/register',
    });
};

const saveRegister = function (req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.pass;
    let role = 'user';
    const defaultProfilePic = 'https://res.cloudinary.com/dux9eq6sv/image/upload/v1718509713/vecteezy_default-profile-account-unknown-icon-black-silhouette_20765399_kn1qao.jpg'; // Ganti dengan path ke gambar default di server Anda

    if (username && email && password) {
        connection.query(
            'SELECT email, username FROM user WHERE email = ? OR username = ?',
            [email, username],
            function (error, results) {
                if (error) throw error;
                if (results.length > 0) {
                    req.flash('color', 'danger');
                    req.flash('status', 'Oops..');
                    req.flash('message', 'Email atau username sudah terdaftar');
                    res.redirect('/register');
                } else {

                    cloudinary.uploader.upload(defaultProfilePic, function(error, result) {
                        if (error) {
                            console.error('Cloudinary upload error:', error);
                            req.flash('color', 'danger');
                            req.flash('status', 'Oops..');
                            req.flash('message', 'Terjadi kesalahan saat mengunggah foto profil');
                            res.redirect('/register');
                            return;
                        }

                        const profilePicUrl = result.secure_url;

                        connection.query(
                            'INSERT INTO user (username, email, password, role, foto, created_at) VALUES (?, ?, SHA2(?, 512), ?, ?, NOW())',
                            [username, email, password, role, profilePicUrl],
                            function (error, results) {
                                if (error) throw error;
                                const userId = results.insertId;
                                const projects = ['Work', 'School', 'Home'];
                                const projectQueries = projects.map(project => {
                                    return new Promise((resolve, reject) => {
                                        connection.query(
                                            'INSERT INTO project (id_user, nama) VALUES (?, ?)',
                                            [userId, project],
                                            function (error, results) {
                                                if (error) return reject(error);
                                                resolve(results);
                                            }
                                        );
                                    });
                                });
                                Promise.all(projectQueries)
                                    .then(() => {
                                        req.flash('color', 'success');
                                        req.flash('status', 'Yes..');
                                        req.flash('message', 'Registrasi berhasil');
                                        res.redirect('/login');
                                    })
                                    .catch(error => {
                                        console.error(error);
                                        req.flash('color', 'danger');
                                        req.flash('status', 'Oops..');
                                        req.flash('message', 'Terjadi kesalahan saat menambahkan project');
                                        res.redirect('/register');
                                    });
                            }
                        );
                    });
                }
            }
        );
    } else {
        res.redirect('/register');
        res.end();
    }
};

module.exports = {
    formRegister,
    saveRegister
};
