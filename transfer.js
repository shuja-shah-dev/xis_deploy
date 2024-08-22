const axios = require("axios");

axios.defaults.timeout = 90000; // Set global timeout to 10 seconds

async function fetchAndPostBlogs() {
  try {
    // Fetch data from the second API
    const { data: secondApiBlogs } = await axios.get("https://be.xis.ai/blogs");

    // Transform and post each blog to the first API
    for (const blog of secondApiBlogs) {
      const transformedData = {
        data: {
          blog_title: blog.blog_title,
          blog_content: [
            {
              type: "paragraph",
              children: [
                {
                  text: blog.blog_content, // You might need to further parse this HTML if needed.
                  type: "text",
                },
              ],
            },
          ],
          slug: blog.slug,
          createdAt: blog.createdAt,
          updatedAt: blog.updatedAt,
          publishedAt: blog.updatedAt,
          blog_image: {
                    url: `https://be.xis.ai/${blog.blog_image}`, // Placeholder, replace with actual URL if needed.
                  },
              
        },
      };

      // Post to the first API
      await axios.post(
        "http://127.0.0.1:1337/api/blogs",
        transformedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(`Blog titled "${blog.blog_title}" uploaded successfully.`);
    }
  } catch (error) {
    console.error("Error uploading blogs:", error);
  }
}

fetchAndPostBlogs();
