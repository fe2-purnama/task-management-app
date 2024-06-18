const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_secret_key";

module.exports = {
  verifyToken(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
      console.log("No token provided");
      return res.status(403).send("No token provided.");
    }

    jwt.verify(token.split(" ")[1], JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("Failed to authenticate token:", err);
        return res.status(500).send("Failed to authenticate token.");
      }

      console.log("Token authenticated, user:", decoded);
      req.user = decoded;
      next();
    });
  },

  isLogin(req, res, next) {
    if (req.session.token) {
      jwt.verify(req.session.token, JWT_SECRET, (err, decoded) => {
        if (err) {
          req.session.destroy(function (err) {
            res.redirect("/login");
          });
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
      res.redirect("/login");
    }
  },
  isLogout(req, res, next) {
    if (!req.session.token) {
      next();
      return;
    }
    res.redirect("/");
  },
};
