const connection = require('../library/database');

const login = function (req,res){
    res.status(200).json({
            url : 'http://localhost:3004/login',
            colorFlash: req.flash('color'),
            statusFlash: req.flash('status'),
            pesanFlash: req.flash('message'),
        });
    }

const loginAuth = function (req,res){
        let email = req.body.email;
        let password = req.body.pass;
        if (email && password) {
            connection.query(
                `SELECT * FROM user WHERE email = ? OR username = ? AND password = SHA2(?,512)`
            , [email, password],function (error, results) {
                if (error) throw error;  
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.userid = results[0].user_id;
                    req.session.username = results[0].username;
                    req.session.role = results[0].role;
                    if (results[0].role === 'admin') {
                        res.redirect('dashboard-admin');
                    } else {
                        res.redirect('dashboard-user')
                    }
                } else {
                    req.flash('color', 'danger');
                    req.flash('status', 'Oops..');
                    req.flash('message', 'Akun tidak ditemukan');
                    res.redirect('/login');
                }
            });
        } else {
            res.redirect('/login');
            res.end();
        }
    }

const logout = function (req,res){
        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            res.clearCookie('secretname');
            res.redirect('/login');
        });
    }


module.exports = {
    login,
    loginAuth,
    logout
}