const axios = require("axios");

axios.defaults.timeout = 90000; // Set global timeout to 90 seconds

async function fetchAndUpdateBlogs() {
  try {
    // Fetch data from the second API
    const { data: secondApiBlogs } = await axios.get("https://be.xis.ai/blogs");

    // Update each blog on the first API
    for (const blog of secondApiBlogs) {
      // Extract blog ID or another unique identifier if necessary
      const blogId = blog.slug; // assuming blog.id is the identifier
      const encodedSlug = encodeURIComponent(blogId);
      // Fetch the existing blog data from the first API
      const { data: existingBlog } = await axios.get(`http://127.0.0.1:1337/api/blogs/?populate=blog_image&filters[slug][$eq]=${encodedSlug}`);

      // Merge the existing data with the new data
      const updatedBlog = {
        ...existingBlog.data,
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt,
        publishedAt: blog.updatedAt,
      };

      // Update the blog on the first API
      await axios.put(
        `http://127.0.0.1:1337/api/blogs/${blogId}`,
        { data: updatedBlog },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(`Blog titled "${blog.blog_title}" updated successfully.`);
    }
  } catch (error) {
    console.error("Error updating blogs:", error);
  }
}

fetchAndUpdateBlogs();
