const mongoose = require ('mongoose')

const BlogSchema = new mongoose.Schema({
    blog_title: {
        type: String,
        required: true
    },
    blog_image: {
        type: String,
        required: true
    },
    blog_description: {
        type: String,
        required: true
    },
});

const Blog = mongoose.model("Blog", BlogSchema)

module.exports = Blog;