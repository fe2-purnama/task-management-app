const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const flash = require("req-flash");
const cors = require("cors");
const app = express();

const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const profileRoutes = require("./routes/profile");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "t@1k0ch3ng",
    name: "secretName",
    cookie: {
      sameSite: true,
      maxAge: 60000,
    },
  })
);
app.use(flash());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/users", userRoutes);
app.use("/dashboard-user", projectRoutes);
app.use("/profile", profileRoutes);

app.get("/", (req, res) => {
  res.send(" ");
});

app.listen(3004, () => {
  console.log("Server Berjalan di Port : " + 3004);
});
