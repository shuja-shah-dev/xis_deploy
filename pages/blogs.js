import { Roboto } from 'next/font/google';
import React, { useEffect, useState } from 'react'

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700"],
    subsets: ["latin"],
});


const Featured = () => {
    return (
        <div className="container mx-auto px-5 py-24 items-center ">
            <div className="flex w-full flex-col lg:items-center lg:text-center items-center text-center mb-20">
                <h1
                    className={`${roboto.className} title-font text-3xl font-bold mb-4`}
                >
                    Discover Nice Articles Here

                </h1>
                <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis fugit ea at magni quod dolorem totam aperiam temporibus?</p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                    <h2 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">Featured</h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row space-y-2 items-center justify-center max-w-7xl w-full">
                    <div className="w-full md:w-1/2 h-96 mr-0 md:mr-4 overflow-hidden rounded-lg relative ">
                        <img src="/lightsai.jpg" alt="AI LIGHTS" className="h-full w-full " />
                        <div
                            className="absolute bottom-0 left-0 right-0 z-10 p-6 -mt-12 bg-gradient-to-t from-gray-800/70 to-gray-50/0">
                            <h2 className="text-xl font-medium leading-9 text-white dark:text-white">
                                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                            </h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mx-2 h-96 ">
                        <div className="flex flex-col space-y-4">
                            <div className="h-48 w-full overflow-hidden relative rounded-lg ">
                                <img src="/lightsai.jpg" alt="LIGHTS AI" className="h-full w-full rounded-lg" />
                                <div
                                    className="absolute bottom-0 left-0 right-0 z-10 p-6 -mt-12 bg-gradient-to-t from-gray-800/70 to-gray-50/0">
                                    <h2 className="text-xl font-medium leading-9 text-white dark:text-white">
                                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                                    </h2>
                                </div>
                            </div>
                            <div className="h-48 w-full flex space-x-4 ">
                                <div className="h-full w-1/2 overflow-hidden relative rounded-lg">
                                    <img src="/generateai.jpg" alt="Generate AI1" className="h-full w-full rounded-lg" />
                                    <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-md"></div>
                                    <div className="absolute inset-0 flex items-center z-10 p-6  justify-center">
                                        <h2 className="text-xl font-medium leading-9 text-white dark:text-white">
                                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                                        </h2>
                                    </div>
                                </div>
                                <div className="h-full w-1/2 overflow-hidden relative rounded-lg">
                                    <img src="/generateai.jpg" alt="Generate AI2" className="h-full w-full rounded-lg" />
                                    <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-md"></div>
                                    <div className="absolute inset-0 flex items-center z-10 p-6  justify-center">
                                        <h2 className="text-xl font-medium leading-9 text-white dark:text-white">
                                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const TrendingBlog = ({ blogs }) => {
    return (
      <>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
              <h3 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">Trending</h3>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src={blog.blog_image} />
                </div>
                <h2 className="text-xl font-medium title-font mt-5">{blog.blog_title}</h2>
                <p className="text-base leading-relaxed mt-2">{blog.blog_content}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  



const LatestBlog = () => {

    return (
        <>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                        <h1 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">Latest Post</h1>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="/truckai.jpg" />
                        </div>
                        <h2 className="text-xl font-medium title-font  mt-5">Heading</h2>
                        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO </p>
                  
                    </div>
                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="/truckai.jpg" />
                        </div>
                        <h3 className="text-xl font-medium title-font  mt-5">Heading</h3>
                        <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO </p>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="flex sm:flex-row mb-6">
                            <img alt="Robotic AI1" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/roboticArm.png" />
                            <div className="flex-grow pl-4 sm:pl-8">
                                <h4 className="font-medium text-xl mb-4">Organize the Content</h4>
                                <p className="mb-4 text-sm">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                            </div>
                        </div>
                        <div className="flex sm:flex-row">
                            <img alt="Robotic AI2" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/roboticArm.png" />
                            <div className="flex-grow pl-4 sm:pl-8">
                                <h5 className="font-medium text-xl mb-4">Organize the Content</h5>
                                <p className="mb-4 text-sm">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

const Blogs = ({ blogs }) => {
    console.log(blogs)
    return (
        <>
            <div className='bg-[#111]'>
                <div className="container mx-auto px-5 py-24 items-center">
                    <Featured />
                    <TrendingBlog blogs={blogs} />
                    <LatestBlog />
                </div>
            </div>
        </>
    )
}

export default Blogs;

export async function getServerSideProps() {
    try {
        const res = await fetch('http://localhost:5000/blogs');

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const blogs = await res.json();

        return {
            props: {
                blogs,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return {
            props: {
                blogs: [],
            },
        };
    }
}