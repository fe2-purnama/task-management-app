const connection = require('../library/database');

const formRegister = function (req, res) {
    res.render("register", {
        url: 'http://localhost:5050/',
    });
};

const saveRegister = function (req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.pass;
    let role = 'user';
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
                    connection.query(
                        'INSERT INTO user (username, email, password, role) VALUES (?, ?, SHA2(?, 512), ?)',
                        [username, email, password, role],
                        function (error, results) {
                            if (error) throw error;
                            const userId = results.insertId;
                            const projects = ['work', 'school', 'home'];
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
