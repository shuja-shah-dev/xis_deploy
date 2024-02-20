const mongoose = require("mongoose");

const FounderSchema = new mongoose.Schema({
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
  org: {
    type: String,
    required: [true, "Organization is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    trim: true,
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Founder = mongoose.model("Founder", FounderSchema);

module.exports = Founder;
