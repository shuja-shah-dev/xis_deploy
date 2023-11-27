const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    trim: true,
    unique: true,
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required."],
  },
  desc: {
    type: String,
    required: [true, "Message is required."],
  },
  subject: {
    type: String,
    required: [true, "Subject is required."],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema)

module.exports = Contact;
