require("dotenv").config(); // Add this line at the top of your file
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Founder = require("../models/founder");

const emailaddress = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;

router.post("/founder", async (req, res) => {
  try {
    const { fname, lname, jobTitle, org, email} = req.body;
    if (
      !fname ||
      !email ||
      !lname ||
      !org ||
      !jobTitle 
   
    ) {
      return res.status(400).json({ error: "Bad request" });
    }
    // Save contact details to the database
    const founder = new Founder({
      fname,
      lname,
      jobTitle,
      org,
      email,
    });
    await founder.save();

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailaddress,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailOptions = {
      from: req.body.email,
      to: "muti.rehman@xray-lab.com", // Replace with the recipient's email address
      cc: req.body.email,
      subject: `xis.ai Talk With Founder Form Submission`,
      html: `<p>First Name: ${fname}</p><p>Last Name: ${lname}</p><p>Organization: ${org}</p><p>Job Title: ${jobTitle}</p><p>Email: ${email}</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error.message);
        // Don't send response here to avoid 'ERR_HTTP_HEADERS_SENT'
      } else {
        console.log("Email sent: " + info.response);
        // Send the success response here
        res
          .status(201)
          .json({ message: "Instance created successfully", founder });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
