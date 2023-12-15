const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const Blog = require('../models/blogModel');
const User = require('../models/user');
const mongoose = require('mongoose');

const storage = multer.diskStorage({
  destination: './media',
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
}).single('blog_image');

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    return cb('Error: Images Only!');
  }
}

router.post('/blogs', upload, async (req, res) => {
  try {
    const { blog_title, blog_content } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const blog_image = req.file.filename;

    const newBlog = new Blog({
      blog_title,
      blog_image,
      blog_content,
    });

    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();

    const blogsWithMediaURLs = blogs.map(blog => ({
      ...blog._doc,
      blog_image: `/media/${blog.blog_image}`,
    }));

    res.status(200).json(blogsWithMediaURLs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/blogs/:id', async (req, res) => {
  try {
    const blogId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ error: 'Invalid blog ID' });
    }

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/blogs/:id', upload, async (req, res) => {
  try {
    const blogId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ error: 'Invalid blog ID' });
    }

    const { blog_title, blog_content } = req.body;

    let updatedBlog = {
      blog_title,
      blog_content,
    };

    // If a new image is uploaded, update the blog_image field
    if (req.file) {
      updatedBlog.blog_image = req.file.filename;
    }

    const updatedBlogResult = await Blog.findByIdAndUpdate(blogId, updatedBlog, { new: true });

    if (!updatedBlogResult) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // If an old image exists and a new image is uploaded, delete the old image
    if (req.file && updatedBlogResult.blog_image) {
      // Assuming you have a function to delete the old image file
      // Implement the function or use fs.unlinkSync to delete the file
    }

    res.status(200).json(updatedBlogResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.delete('/blogs/:id', async (req, res) => {
  try {
    const blogId = req.params.id;
    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog deleted successfully', deletedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
