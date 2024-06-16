const connection = require("../library/database");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_secret_key";

const login = (req, res) => {
  res.status(200).json({
    url: "http://localhost:3004/login",
    colorFlash: req.flash("color"),
    statusFlash: req.flash("status"),
    pesanFlash: req.flash("message"),
  });
};

const loginAuth = async (req, res) => {
  const { username, pass: password } = req.body;

  if (username && password) {
    try {
      const [results] = await connection
        .promise()
        .query(
          `SELECT * FROM user WHERE (email = ? OR username = ?) AND password = SHA2(?,512)`,
          [username, username, password]
        );

      if (results.length > 0) {
        const user = results[0];
        const payload = {
          id_user: user.id_user,
          username: user.username,
          role: user.role,
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
        req.session.token = token;
        req.session.loggedin = true;
        req.flash("color", "success");
        req.flash("status", "Success");
        req.flash("message", "Login berhasil");

        const profileImageUrl = results[0].foto;

        res.status(200).json({
          username: user.username,
          email: user.email,
          role: user.role,
          foto: profileImageUrl,
          token,
        });
      } else {
        req.flash("color", "danger");
        req.flash("status", "Oops..");
        req.flash("message", "Akun tidak ditemukan");
        res.redirect("/login");
      }
    } catch (error) {
      console.error("Error during login authentication:", error);
      res.status(500).send("Internal server error");
    }
  } else {
    req.flash("color", "warning");
    req.flash("status", "Warning");
    req.flash("message", "Please enter a valid email/username and password");
    res.redirect("/login");
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.clearCookie("secretname");

    req.flash("color", "info");
    req.flash("status", "Logged out");
    req.flash("message", "Logout berhasil");

    res.redirect("/login");
  });
};

module.exports = {
  login,
  loginAuth,
  logout,
};
