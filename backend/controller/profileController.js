const connection = require("../library/database");
const cloudinary = require("../library/cloudinary");
const fs = require('fs');

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
        username: results[0].username, // Ambil username dari token JWT yang terverifikasi
        email: results[0].email,
        profileImage: results[0].foto,
      });
    }
  );
};

const updateProfile = async (req, res) => {
    const id_user = req.user.id_user; // Ambil ID pengguna dari token JWT yang terverifikasi
    if (!id_user) {
      return res.status(401).send("Unauthorized");
    }
  
    const { username, email } = req.body; // Ambil data dari body request
    let profileImage = req.body.profileImage; // URL gambar dari body request
  
    if (!username || !email) {
      return res.status(400).send("Bad Request: Username and email are required");
    }
  
    // Jika ada file yang diupload, upload ke Cloudinary
    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path);
        profileImage = result.secure_url;
  
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
      "UPDATE user SET username = ?, email = ?, foto = ? WHERE id_user = ?",
      [username, email, profileImage, id_user],
      (error, results) => {
        if (error) {
          console.error("Error in updateProfile function:", error);
          return res.status(500).send("Internal Server Error");
        }
  
        if (results.affectedRows === 0) {
          return res.status(404).send("User not found");
        }
  
        res.send("Profile updated successfully");
      }
    );
  };

module.exports = {
  profile,
  updateProfile,
};
