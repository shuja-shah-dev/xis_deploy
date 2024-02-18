const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "First Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },
  lname: {
    type: String,
    required: [true, "Last Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },
  jobTitle: {
    type: String,
    required: [true, "Job Title is required."],
  },
  company: {
    type: String,
    required: [true, "Company is required."],
  },
  topic: {
    type: String,
    required: [true, "Topic is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    trim: true,
    unique: true,
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  desc: {
    type: String,
    required: [true, "Message is required."],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema)

module.exports = Contact;
