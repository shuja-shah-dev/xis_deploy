require("dotenv").config(); // Add this line at the top of your file
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/contact");

const emailaddress = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;

router.post("/contact", async (req, res) => {
    try {
        const { name, phone, email, subject, desc } = req.body;
        if (!name || !email || !phone || !subject || !desc) {
            return res.status(400).json({ error: "Bad request" });
        }

        // Save contact details to the database
        const contact = new Contact({ name, phone, email, subject, desc });
        await contact.save();

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
            from: emailaddress,
            to: req.body.email,  // Replace with the recipient's email address
            subject: `Xis.ai Contact Form Submission - ${subject}`,
            html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Message: ${desc}</p>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error.message);
                // Don't send response here to avoid 'ERR_HTTP_HEADERS_SENT'
            } else {
                console.log("Email sent: " + info.response);
                // Send the success response here
                res.status(201).json({ message: "Contact created successfully", contact });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
