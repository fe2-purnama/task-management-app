const connection = require("../library/database");
const cloudinary = require("../library/cloudinary");
const fs = require('fs');
const crypto = require('crypto');

// Fungsi untuk menampilkan profil
const profile = (req, res) => {
  const id_user = req.user.id_user;
  if (!id_user) {
    return res.status(401).send("Unauthorized");
  }

  connection.query(
    "SELECT * FROM user WHERE id_user = ?",
    [id_user],
    (error, results) => {
      if (error) {
        console.error("Error in profile function:", error);
        return res.status(500).send("Internal Server Error");
      }

      if (!results.length) {
        return res.status(404).send("User not found");
      }

      res.json({
        url: "http://localhost:3004/",
        username: results[0].username,
        email: results[0].email,
        profileImage: results[0].foto,
      });
    }
  );
};

// Fungsi untuk memperbarui username
const updateUsername = (req, res) => {
  const id_user = req.user.id_user;
  if (!id_user) {
    return res.status(401).send("Unauthorized");
  }

  const { username } = req.body;
  if (!username) {
    return res.status(400).send("Username is required");
  }

  connection.query(
    "UPDATE user SET username = ? WHERE id_user = ?",
    [username, id_user],
    (error, results) => {
      if (error) {
        console.error("Error updating username:", error);
        return res.status(500).send("Internal Server Error");
      }

      if (results.affectedRows === 0) {
        return res.status(404).send("User not found");
      }

      res.send("Username updated successfully");
    }
  );
};

const updateEmail = (req, res) => {
  const id_user = req.user.id_user;
  if (!id_user) {
    return res.status(401).send("Unauthorized");
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email is required");
  }

  connection.query(
    "UPDATE user SET email = ? WHERE id_user = ?",
    [email, id_user],
    (error, results) => {
      if (error) {
        console.error("Error updating email:", error);
        return res.status(500).send("Internal Server Error");
      }

      if (results.affectedRows === 0) {
        return res.status(404).send("User not found");
      }

      res.send("email updated successfully");
    }
  );
};

// Fungsi untuk memperbarui password
const updatePassword = async (req, res) => {
  const id_user = req.user.id_user;
  if (!id_user) {
    return res.status(401).send("Unauthorized");
  }

  const { currentPassword, password, confirmPassword } = req.body;
  if (!currentPassword || !password || !confirmPassword) {
    return res.status(400).send("Current password, new password and confirm password are required");
  }

  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match");
  }

  try {
    // Verifikasi currentPassword
    connection.query(
      "SELECT password FROM user WHERE id_user = ?",
      [id_user],
      (error, results) => {
        if (error) {
          console.error("Error fetching current password:", error);
          return res.status(500).send("Internal Server Error");
        }

        if (!results.length) {
          return res.status(404).send("User not found");
        }

        const currentHashedPassword = results[0].password;
        const currentPasswordHashed = crypto.createHash('sha512').update(currentPassword).digest('hex');

        if (currentPasswordHashed !== currentHashedPassword) {
          return res.status(400).send("Current password is incorrect");
        }

        const newHashedPassword = crypto.createHash('sha512').update(password).digest('hex');

        connection.query(
          "UPDATE user SET password = ? WHERE id_user = ?",
          [newHashedPassword, id_user],
          (error, results) => {
            if (error) {
              console.error("Error updating password:", error);
              return res.status(500).send("Internal Server Error");
            }

            if (results.affectedRows === 0) {
              return res.status(404).send("User not found");
            }

            res.send("Password updated successfully");
          }
        );
      }
    );
  } catch (error) {
    console.error("Error processing password update:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Fungsi untuk memperbarui foto
const updateFoto = async (req, res) => {
  const id_user = req.user.id_user;
  if (!id_user) {
    return res.status(401).send("Unauthorized");
  }

  let foto = req.body.foto;

  if (req.file) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      foto = result.secure_url;

      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error("Error deleting local file:", err);
        } else {
          console.log("Deleted local file:", req.file.path);
        }
      });

    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      return res.status(500).send("Error uploading image");
    }
  }

  connection.query(
    "UPDATE user SET foto = ? WHERE id_user = ?",
    [foto, id_user],
    (error, results) => {
      if (error) {
        console.error("Error updating photo:", error);
        return res.status(500).send("Internal Server Error");
      }

      if (results.affectedRows === 0) {
        return res.status(404).send("User not found");
      }

      res.send("Photo updated successfully");
    }
  );
};

module.exports = {
  profile,
  updateUsername,
  updateEmail,
  updatePassword,
  updateFoto,
};
