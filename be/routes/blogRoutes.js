const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const Blog = require('../models/blogModel');
const User = require('../models/user');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: './media',
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extname);
    cb(null, `${basename}-${Date.now()}${extname}`);
  },
});

// Multer configuration with file limits and filter
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single('blog_image');

// Function to check the file type
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

// Route to create a new blog
router.post('/blogs', upload, async (req, res) => {
  try {
    const { blog_title, blog_content, email, password } = req.body;

    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Store the filename in the database
    const blog_image = req.file.filename;

    // Create a new blog
    const newBlog = new Blog({
      blog_title,
      blog_image,
      blog_content,
    });

    // Save the new blog
    const savedBlog = await newBlog.save();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      email: email,
      password: hashedPassword,
      is_admin: 1,
    });

    // Save the new user
    const savedUser = await user.save();

    // Respond with the saved blog and user
    res.status(201).json({ blog: savedBlog, user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all blog entries
router.get('/blogs', async (req, res) => {
  try {
    // Retrieve all blog entries from the database
    const blogs = await Blog.find();

    // Update the image URLs in each blog
    const blogsWithMediaURLs = blogs.map(blog => ({
      ...blog._doc,
      blog_image: `/media/${blog.blog_image}`,
    }));

    // Respond with the updated blog entries
    res.status(200).json(blogsWithMediaURLs);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete a blog entry by ID
router.delete('/blogs/:id', async (req, res) => {
  try {
    const blogId = req.params.id;

    // Find and remove the blog entry by ID
    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    // Respond with a success message and the deleted blog
    res.status(200).json({ message: 'Blog deleted successfully', deletedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
