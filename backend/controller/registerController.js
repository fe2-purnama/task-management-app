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
                if (error) {
                    console.error('Database query error:', error);
                    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
                    return;
                }
                if (results.length > 0) {
                    // Jika email atau username sudah terdaftar
                    let existingField = results[0].email === email ? 'email' : 'username';
                    res.status(409).json({ message: `${existingField} sudah terdaftar` });
                    return;
                }

                cloudinary.uploader.upload(defaultProfilePic, function(error, result) {
                    if (error) {
                        console.error('Cloudinary upload error:', error);
                        res.status(500).json({ message: 'Terjadi kesalahan saat mengunggah foto profil' });
                        return;
                    }

                    const profilePicUrl = result.secure_url;

                    connection.query(
                        'INSERT INTO user (username, email, password, role, foto, created_at) VALUES (?, ?, SHA2(?, 512), ?, ?, NOW())',
                        [username, email, password, role, profilePicUrl],
                        function (error, results) {
                            if (error) {
                                console.error('Database query error:', error);
                                res.status(500).json({ message: 'Terjadi kesalahan pada server' });
                                return;
                            }
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
                                    res.status(200).json({ message: 'Registrasi berhasil' });
                                })
                                .catch(error => {
                                    console.error('Database query error:', error);
                                    res.status(500).json({ message: 'Terjadi kesalahan saat menambahkan project' });
                                });
                        }
                    );
                });
            }
        );
    } else {
        res.status(400).json({ message: 'Data tidak lengkap' });
    }
};



module.exports = {
    formRegister,
    saveRegister
};
