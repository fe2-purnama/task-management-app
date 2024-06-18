require("dotenv").config();
const cron = require("node-cron");
const connection = require("./library/database");
const nodemailer = require("nodemailer");
const moment = require('moment-timezone');

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  secure: false,
});

console.log("Transporter created:", transporter);

// Function to send email reminder
const sendEmailReminders = (tasks) => {
  const userEmails = {};
  tasks.forEach((task) => {
    if (!userEmails[task.user_email]) {
      userEmails[task.user_email] = [];
    }
    userEmails[task.user_email].push(task);
  });

  Object.keys(userEmails).forEach((email) => {
    const tasksForUser = userEmails[email];
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Reminder: Tasks near their deadlines`,
      text: `Hello, the following tasks are near their deadlines:\n${tasksForUser.map((task) => `* ${task.name} on ${moment(task.date).tz('Asia/Jakarta').format('DD-MM-YYYY HH:mm')}`).join("\n")}`,
    };

    try {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
};

// Schedule a cron job to run every day at midnight
cron.schedule("*/2 * * * *", () => {
  console.log("Running cron job every second...");

  // Query to find tasks with deadlines within the next 24 hours
  const query = `
    SELECT t.*, u.email as user_email, t.name
    FROM task t
    JOIN project p ON t.id_project = p.id_project
    JOIN user u ON p.id_user = u.id_user
    WHERE t.date = CURDATE() + INTERVAL 1 DAY
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      return;
    }

    sendEmailReminders(results);
  });
});