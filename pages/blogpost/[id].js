import React from 'react';
import { ENDPOINT } from '../blogadmin';

const Slug = ({ blog }) => {
  function createMarkup(c) {
    return {__html: c};
  }
  return (
    <section className="flex items-center justify-center bg-[#111]">
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="max-w-xl mx-auto">
          <h1 className="mb-4 text-3xl font-bold text-center">
           {blog.blog_title}
          </h1>
          <div className="rounded-lg h-64 overflow-hidden mb-4">
            <img alt="contentImage" className="object-cover object-center h-full w-full" src={`${ENDPOINT}/media/${blog.blog_image}`} />
          </div>
          <p  className="mb-16 text-base text-center text-gray-200">
            {blog.blog_content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  try {
    const { id } = context.params;
    const res = await fetch(`http://localhost:5000/blogs/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const blog = await res.json();

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        blog: {},
      },
    };
  }
}
