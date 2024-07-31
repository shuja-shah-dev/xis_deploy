const mongoose = require("mongoose");
const { unique } = require("next/dist/build/utils");

const BlogSchema = new mongoose.Schema(
  {
    blog_title: {
      type: String,
      required: true,
    },
    blog_image: {
      type: String,
      required: true,
    },
    blog_content: {
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

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
