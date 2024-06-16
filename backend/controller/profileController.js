const connection = require("../library/database");
const cloudinary = require("../library/cloudinary");

const profile = (req, res) => {
  const id_user = req.user.id_user; // Ambil ID pengguna dari token JWT yang terverifikasi
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
        userName: req.user.username, // Ambil username dari token JWT yang terverifikasi
        nama: results[0].username,
        email: results[0].email,
        profileImage: results[0].foto,
      });
    }
  );
};

const updateProfile = (req, res) => {
  const id_user = req.user.id_user; // Ambil ID pengguna dari token JWT yang terverifikasi
  const updatedData = {
    username: req.body.username,
    email: req.body.email,
  };

  const updateUser = () => {
    connection.query(
      "UPDATE user SET ? WHERE id_user = ?",
      [updatedData, id_user],
      (error, results) => {
        if (error) {
          console.error("Error in updateProfile function:", error);
          return res.status(500).send("Internal Server Error");
        }
        res.send("Profile updated successfully");
      }
    );
  };

  if (req.file) {
    cloudinary.uploader.upload(req.file.path, (error, result) => {
      if (error) {
        console.error("Error uploading image:", error);
        return res.status(500).send("Error uploading image");
      }
      updatedData.foto = result.secure_url;
      updateUser();
    });
  } else {
    updateUser();
  }
};

module.exports = {
  profile,
  updateProfile,
};
