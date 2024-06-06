const connection = require('../library/database');

const formRegister = function (req,res){
        res.render("register",{
            url : 'http://localhost:5050/',
        });
    }
const saveRegister = function (req,res){
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
                        let message = 'Email atau username sudah terdaftar';
                        req.flash('color', 'danger');
                        req.flash('status', 'Oops..');
                        req.flash('message', message);
                        res.redirect('/register');
                    } else {
                        connection.query(
                            'INSERT INTO user (username, email, password, role) VALUES (?, ?, SHA2(?, 512), ?)',
                            [username, email, password, role],
                            function (error, results) {
                                if (error) throw error;
                                req.flash('color', 'success');
                                req.flash('status', 'Yes..');
                                req.flash('message', 'Registrasi berhasil');
                                res.redirect('/login');
                            }
                        );
                    }
                }
            );
        } else {
            res.redirect('/register');
            res.end();
        }
    }
module.exports = {
    formRegister,
    saveRegister
}