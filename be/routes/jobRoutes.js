const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel");
const mongoose = require("mongoose");



router.post("/jobs", async (req, res) => {
    try {
      const { title, desc, responsibilities, benefits, nature, country, duration, experience, vacancies, workingHours, workingDays, salary, deadline, slug } = req.body;
      
      const existingJob = await Job.findOne({ title });
  
      if (existingJob) {
        return res.status(400).json({ error: "Job name already in use!" });
      }
  
      const newJob = new Job({
        title, desc, responsibilities, benefits, nature, country, duration, experience, vacancies, workingHours, workingDays, salary, deadline, slug
      });
  
      const savedJob = await newJob.save();
  
      res.status(201).json(savedJob);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// router.get("/jobs/:id", async (req, res) => {
//   try {
//     const id = req.params.id;

//     // Check if ID is valid (optional, but recommended)
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ error: "Invalid job ID" });
//     }

//     // Fetch the job by ID
//     const job = await Job.findById(id);

//     // Check if job exists
//     if (!job) {
//       return res.status(404).json({ error: "Job not found" });
//     }

//     // Send the job data
//     res.status(200).json(job);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.get("/jobs/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;

    const job = await Job.find({ slug: slug });

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.put("/jobs/:id", async (req, res) => {
  try {
    const jobId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({ error: "Invalid jobId" });
    }

    const { title, desc , responsibiities, benefits, nature, country, duration, experience, vacancies, workingHours, workingDays, salary, deadline, slug} = req.body;
    
    let updatedJob = {
        title,
        desc,
        responsibiities,
        benefits,
        nature,
        country,
        duration,
        experience,
        vacancies,
        workingHours,
        workingDays, salary, deadline,
        slug
    };

    const updatedJobResult = await Job.findByIdAndUpdate(
        jobId,
      updatedJob,
      { new: true }
    );

    if (!updatedJobResult) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json(updatedJobResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/jobs/:id", async (req, res) => {
  try {
    const jobId = req.params.id;
    const deletedJob = await Job.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully", deletedJob });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
