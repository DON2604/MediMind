import express from "express";
import { Router } from "express";
import nodemailer from 'nodemailer';

const router = Router();

const transporter = nodemailer.createTransport({
  service: "Outlook",
  auth: {
    user: process.env.EMAIL, // Your email address
    pass: process.env.PASSWORD, // Your email password
  },
});

// POST route to handle appointment submissions
router.post("/send-email", (req, res) => {
  const { name, email, date, time, phoneNumber } = req.body;

  // Email content
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Appointment Confirmation",
    html: `
        <p>Hi ${name},</p>
        <p>Your appointment details:</p>
        <ul>
          <li>Date: ${date}</li>
          <li>Time: ${time}</li>
          <li>Phone Number: ${phoneNumber}</li>
        </ul>
        <p>We look forward to seeing you!</p>
      `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

export default router;
