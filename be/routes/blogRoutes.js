const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Blog = require("../models/blogModel");
const mongoose = require("mongoose");
const fs = require("fs").promises;

const storage = multer.diskStorage({
  destination: "./media",
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extname);
    cb(null, `${basename}-${Date.now()}${extname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("blog_image");

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    return cb(new Error("Images Only!"));
  }
}

router.post("/blogs", (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      const { blog_title, blog_content, slug } = req.body;

      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const existingBlog = await Blog.findOne({ slug });

      if (existingBlog) {
        return res.status(400).json({ error: "Blog name already in use!" });
      }

      const blog_image = req.file.filename;

      const newBlog = new Blog({
        blog_title,
        blog_image,
        blog_content,
        slug,
      });

      const savedBlog = await newBlog.save();

      res.status(201).json(savedBlog);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();

    const blogsWithMediaURLs = blogs.map((blog) => ({
      ...blog._doc,
      blog_image: `/media/${blog.blog_image}`,
    }));
    

    res.status(200).json(blogsWithMediaURLs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



router.get("/blogs/:slug", async (req, res) => {
  try {
    const blogName = req.params.slug;

    // if (!mongoose.Types.ObjectId.isValid(blogId)) {
    //   return res.status(400).json({ error: "Invalid blog ID" });
    // }

    const blog = await Blog.find({ slug: blogName });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/blogs/:id", upload, async (req, res) => {
  try {
    const blogId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ error: "Invalid blog ID" });
    }

    const { blog_title, blog_content , blog_name} = req.body;

    let updatedBlog = {
      blog_title,
      blog_content,
      blog_name
    };

    if (req.file) {
      updatedBlog.blog_image = req.file.filename;
    }

    const updatedBlogResult = await Blog.findByIdAndUpdate(
      blogId,
      updatedBlog,
      { new: true }
    );

    if (!updatedBlogResult) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // If an old image exists and a new image is uploaded, delete the old image
    if (req.file && updatedBlogResult.blog_image) {
      const oldImagePath = path.join(
        __dirname,
        "media",
        updatedBlogResult.blog_image
      );

      // Check if the file exists before attempting to delete it
      try {
        await fs.access(oldImagePath);
        await fs.unlink(oldImagePath);
      } catch (error) {
        console.error("Error deleting old image:", error);

        // Handle the case where the file doesn't exist or deletion fails
        if (error.code !== "ENOENT") {
          return res.status(500).json({
            error: "Failed to delete old image",
            details: error.message,
          });
        }
      }
    }

    res.status(200).json(updatedBlogResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/blogs/:id", async (req, res) => {
  try {
    const blogId = req.params.id;
    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully", deletedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
