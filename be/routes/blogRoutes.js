const express = require("express");
const router = express.Router();
// const BlogModel = require('../models/blogModel');

router.get('/', async (req,res)=> {
    res.send("Blog 1")
});
router.get('/blog', async (req,res)=> {
    res.send("Blog 2")
});
router.get('/blog-setup', async (req,res)=> {
    res.send("New Blog Setup here")
});


module.exports = router;