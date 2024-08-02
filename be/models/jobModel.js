const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
      required: true,
    },
    nature: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    vacancies: {
      type: String,
      required: true,
    },
    workingHours: {
      type: String,
      required: true,
    },
    workingDays: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;

