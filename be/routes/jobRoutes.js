const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel");
const mongoose = require("mongoose");



router.post("/jobs", async (req, res) => {
    try {
      const { title, desc, responsibilities, benefits, nature, country, duration, experience, vacancies, workingHours, workingDays, salary, deadline } = req.body;
      
      const existingJob = await Job.findOne({ title });
  
      if (existingJob) {
        return res.status(400).json({ error: "Job name already in use!" });
      }
  
      const newJob = new Job({
        title, desc, responsibilities, benefits, nature, country, duration, experience, vacancies, workingHours, workingDays, salary, deadline
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

    // const blogsWithMediaURLs = jobs.map((job) => ({
    //   ...blog._doc,
    //   blog_image: `/media/${blog.blog_image}`,
    // }));
    

    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/jobs/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Check if ID is valid (optional, but recommended)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid job ID" });
    }

    // Fetch the job by ID
    const job = await Job.findById(id);

    // Check if job exists
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    // Send the job data
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

    const { title, desc , responsibiities, benefits, nature, country, duration, experience, vacancies, workingHours, workingDays, salary, deadline} = req.body;
    
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
        workingDays, salary, deadline
    };

    // if (req.file) {
    //   updatedBlog.blog_image = req.file.filename;
    // }

    const updatedJobResult = await Job.findByIdAndUpdate(
        jobId,
      updatedJob,
      { new: true }
    );

    if (!updatedJobResult) {
      return res.status(404).json({ error: "Job not found" });
    }

    // If an old image exists and a new image is uploaded, delete the old image
    // if (req.file && updatedBlogResult.blog_image) {
    //   const oldImagePath = path.join(
    //     __dirname,
    //     "media",
    //     updatedBlogResult.blog_image
    //   );

    //   // Check if the file exists before attempting to delete it
    //   try {
    //     await fs.access(oldImagePath);
    //     await fs.unlink(oldImagePath);
    //   } catch (error) {
    //     console.error("Error deleting old image:", error);

    //     // Handle the case where the file doesn't exist or deletion fails
    //     if (error.code !== "ENOENT") {
    //       return res.status(500).json({
    //         error: "Failed to delete old image",
    //         details: error.message,
    //       });
    //     }
    //   }
    // }

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
