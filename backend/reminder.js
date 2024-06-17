require("dotenv").config();
const cron = require("node-cron");
const connection = require("./library/database");
const nodemailer = require("nodemailer");

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email reminder
// butuh koreksi
const sendEmailReminder = (task) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: task.user_email,
    subject: `Reminder: Task "${task.nama}" is near its deadline`,
    text: `Hello, your task "${task.nama}" is near its deadline on ${task.date}. Please complete it soon.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: ", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

// Schedule a cron job to run every day at midnight
cron.schedule("0 0 * * *", () => {
  console.log("Running cron job to check for upcoming deadlines...");

  // Query to find tasks with deadlines within the next 24 hours
  //   butuh koreksi
  const query = `
    SELECT t.*, u.email as user_email
    FROM task t
    JOIN project p ON t.id_project = p.id_project
    JOIN user u ON p.id_user = u.id_user
    WHERE t.date = CURDATE() + INTERVAL 1 DAY
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database: ", err);
      return;
    }

    results.forEach((task) => {
      sendEmailReminder(task);
    });
  });
});
