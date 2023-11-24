const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.post("/contact", async (req, res) => {
    try {
        const { name, phone, email, subject, desc } = req.body;
        if (!name || !email || !phone || !subject || !desc) {
            return res.status(400).json({ error: "All fields are required." });
        }
        const contact = new Contact({ name, phone, email, subject, desc });
        await contact.save();
        res.status(201).json({ message: "Contact created successfully", contact });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
