const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const flash = require("req-flash");
const cors = require("cors");
const app = express();

const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const taskRoutes = require("./routes/task");
const profileRoutes = require("./routes/profile");
const sessionRouter = require("./routes/session");
const contactRouter = require("./routes/contact");

app.use(cors());

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "t@1k0ch3ng",
    name: "secretName",
    cookie: {
      sameSite: true,
      maxAge: 300000, // 5 menit
    },
  })
);

app.use((req, res, next) => {
  if (req.session) {
    req.session.cookie.expires = new Date(Date.now() + 300000); // Set kembali 5 menit dari sekarang
    req.session.cookie.maxAge = 300000; // Set kembali 5 menit
  }
  next();
});

app.use(flash());

app.use(function (req, res, next) {
  res.setHeader(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  res.setHeader("Pragma", "no-cache");
  next();
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/login", loginRoutes);
app.use("/register", registerRoutes);
app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/:id_project/tasks", taskRoutes);
app.use("/profile", profileRoutes);
app.use("/session", sessionRouter);
app.use("/contact", contactRouter);

app.get("/", (req, res) => {
  res.send(" ");
});

app.listen(3004, () => {
  console.log("Server Berjalan di Port : " + 3004);
});
