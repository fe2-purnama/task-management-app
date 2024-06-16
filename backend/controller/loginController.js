const connection = require('../library/database');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_secret_key';

const login = function (req, res) {
    res.status(200).json({
        url: 'http://localhost:3004/login',
        colorFlash: req.flash('color'),
        statusFlash: req.flash('status'),
        pesanFlash: req.flash('message'),
    });
}

const loginAuth = function (req, res) {
    let username = req.body.username;
    let password = req.body.pass;

    if (username && password) {
        connection.query(
            `SELECT * FROM user WHERE (email = ? OR username = ?) AND password = SHA2(?,512)`,
            [username, username, password], function (error, results) {
                if (error) throw error;
                if (results.length > 0) {
                    const payload = {
                        userid: results[0].id_user,
                        username: results[0].username,
                        role: results[0].role
                    };
                    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
                    console.log('Generated JWT Token:', token);
                    req.session.token = token;
                    req.session.loggedin = true;
                    req.flash('color', 'success');
                    req.flash('status', 'Success');
                    req.flash('message', 'Login berhasil');

                    // Send additional data in response
                    res.status(200).json({
                        username: results[0].username,
                        email: results[0].email,
                        role: results[0].role,
                        token: token
                    });

                } else {
                    req.flash('color', 'danger');
                    req.flash('status', 'Oops..');
                    req.flash('message', 'Akun tidak ditemukan');
                    res.redirect('/login');
                    return res.status(400).json({
                        error: 'Invalid credentials'
                    });
                }
            });
    } else {
        req.flash('color', 'warning');
        req.flash('status', 'Warning');
        req.flash('message', 'Please enter a valid email/username and password');
        res.redirect('/login');
        return res.status(400).json({
            error: 'Missing credentials'
        });
    }
}

const logout = function (req, res) {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.clearCookie('secretname');

        req.flash('color', 'info');
        req.flash('status', 'Logged out');
        req.flash('message', 'Logout berhasil');

        res.redirect('/login');
    });
}

module.exports = {
    login,
    loginAuth,
    logout
}
