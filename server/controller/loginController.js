const config = require('../library/database');

let mysql      = require('mysql');
let pool       = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    login(req,res){
        res.render("login",{
            url : 'http://localhost:5050/',
            colorFlash: req.flash('color'),
            statusFlash: req.flash('status'),
            pesanFlash: req.flash('message'),
        });
    },
    loginAuth(req,res){
        let email = req.body.email;
        let password = req.body.pass;
        if (email && password) {
            pool.getConnection(function(err, connection) {
                if (err) throw err;
                connection.query(
                    `SELECT * FROM user WHERE email = ? OR username = ? AND password = SHA2(?,512)`
                , [email, password],function (error, results) {
                    if (error) throw error;  
                    if (results.length > 0) {
                        req.session.loggedin = true;
                        req.session.userid = results[0].user_id;
                        req.session.username = results[0].username;
                        res.redirect('/');
                    } else {
                        req.flash('color', 'danger');
                        req.flash('status', 'Oops..');
                        req.flash('message', 'Akun tidak ditemukan');
                        res.redirect('/login');
                    }
                });
                connection.release();
            })
        } else {
            res.redirect('/dashboard-user');
            res.end();
        }
    },
    logout(req,res){
        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            res.clearCookie('secretname');
            res.redirect('/login');
        });
    },
}