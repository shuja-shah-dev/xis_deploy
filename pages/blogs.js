import { Roboto } from 'next/font/google';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import { ENDPOINT } from './blogadmin';
import Head from 'next/head';

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700"],
    subsets: ["latin"],
});


const Featured = ({ blogs }) => {

    return (
        <div className="container mx-auto px-5 pb-24 items-center ">
            <div className="flex w-full flex-col lg:items-center lg:text-center items-center text-center mb-20">
                <h1
                    className={`${roboto.className} title-font text-3xl font-bold mb-4`}
                >
                    Discover Nice Articles Here
                </h1>
                {/* <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis fugit ea at magni quod dolorem totam aperiam temporibus?</p> */}
            </div>
            <div className="flex flex-col">
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                    <h2 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">Featured</h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row space-y-2 items-center justify-center max-w-7xl w-full">
                    {Object.keys(blogs).length > 0 ? (
                        Object.keys(blogs).map((item, index) => {
                            if (index < 1) {
                                const blog = blogs[item];
                                const truncatedContent = blog.blog_content.length > 150
                                    ? blog.blog_content.slice(0, 150) + '...'
                                    : blog.blog_content;
                                return (
                                    <div key={blog._id} className="w-full md:w-1/2 h-96 mr-0 md:mr-4 overflow-hidden rounded-lg relative ">
                                        <img
                                            alt={`content-${index}`}
                                            className="object-cover object-center h-full w-full"
                                            src={`${ENDPOINT}${blog.blog_image}`}
                                        />
                                        <div
                                            className="absolute bottom-0 left-0 right-0 z-10 p-6 -mt-12 bg-gradient-to-t from-gray-800/70 to-gray-50/0">
                                            <p className="text-xl font-medium leading-9 text-white dark:text-white">
                                                <Link passHref={true} href={`/blogpost/${blog._id}`}>
                                                    {blog.blog_title}
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })
                    ) : (
                        <Alert severity="info">You dont have any blog yet.</Alert>
                    )}

                    <div className="w-full md:w-1/2 mx-2 h-96 ">
                        <div className="flex flex-col space-y-4">
                            {Object.keys(blogs).length > 0 ? (
                                Object.keys(blogs).map((item, index) => {
                                    if (index === 1) {
                                        const blog = blogs[item];
                                        const truncatedContent = blog.blog_content.length > 150
                                            ? blog.blog_content.slice(0, 150) + '...'
                                            : blog.blog_content;
                                        return (
                                            <div key={blog._id} className="h-48 w-full overflow-hidden relative rounded-lg">
                                                <img
                                                    alt={`content-${index}`}
                                                    className="object-center h-full w-full"
                                                    src={`${ENDPOINT}${blog.blog_image}`}
                                                />
                                                <div
                                                    className="absolute bottom-0 left-0 right-0 z-10 p-6 -mt-12 bg-gradient-to-t from-gray-800/70 to-gray-50/0"
                                                >
                                                    <p className="text-xl font-medium leading-9 text-white dark:text-white">
                                                        <Link passHref={true} href={`/blogpost/${blog._id}`}>
                                                            {blog.blog_title}
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })
                            ) : (
                                <Alert severity="info">You don't have any blog yet.</Alert>
                            )}

                            <div className="h-48 w-full flex space-x-4 ">
                                {Object.keys(blogs).length > 0 ? (
                                    Object.keys(blogs).map((item, index) => {
                                        if (index >= 2 && index < 4) {
                                            const blog = blogs[item];
                                            const truncatedContent = blog.blog_content.length > 150
                                                ? blog.blog_content.slice(0, 150) + '...'
                                                : blog.blog_content;
                                            return (
                                                <div key={blog._id} className="h-full w-1/2 overflow-hidden relative rounded-lg">
                                                    <img
                                                        alt={`content-${index}`}
                                                        className="object-cover object-center h-full w-full"
                                                        src={`${ENDPOINT}${blog.blog_image}`}
                                                    />
                                                    <div className="absolute inset-0 bg-gray-900 opacity-30 rounded-md"></div>
                                                    <div className="absolute inset-0 flex items-center z-10 p-6  justify-center">
                                                        <p className="text-xl font-medium leading-9 text-white dark:text-white">
                                                            <Link passHref={true} href={`/blogpost/${blog._id}`}> {blog.blog_title}</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })
                                ) : (
                                    <Alert severity="info">You don't have any blog yet.</Alert>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const TrendingBlog = ({ blogs }) => {
    function createMarkup(c) {
        return { __html: c };
    }
    
    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        const truncatedIndex = text.indexOf(' ', maxLength);
        return text.substring(0, truncatedIndex) + '...';
    };
    return (
        <>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                        <h3 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">Trending</h3>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {Object.keys(blogs).length > 0 ? (
                        Object.keys(blogs).map((item, index) => {
                            const blog = blogs[item];
                            const truncatedContent = blog.blog_content.slice(0, 150);
                            const truncatedTitle = blog.blog_title.slice(0, 40);
                            return (
                                <div key={blog._id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img
                                            alt={`content-${index}`}
                                            className="object-cover object-center h-full w-full"
                                            src={`${ENDPOINT}${blog.blog_image}`}
                                        />
                                    </div>
                                    <Link passHref={true} href={`/blogpost/${blog._id}`}>
                                        <h2 className="text-xl font-medium title-font mt-5 mb-4">{truncatedTitle}</h2>
                                    </Link>
                                    <div className="text-base leading-relaxed mt-2 mb-4">{truncatedContent}...</div>
                                </div>
                            );
                        })
                    ) : (
                        <Alert severity="info">You don't have any blog yet.</Alert>
                    )}

                </div>

            </div>
        </>
    );
};




const LatestBlog = ({ blogs }) => {

    function createMarkup(c) {
        return { __html: c };
    }
    
    return (
        <>
         
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6 justify-between">
                        <h4 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">Latest Post</h4>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {Object.keys(blogs).length > 0 ? (
                        Object.keys(blogs).map((item, index) => {
                            if (index < 2) {
                                const blog = blogs[item];
                                const truncatedContent = blog.blog_content.slice(0, 150);
                                const truncatedTitle = blog.blog_title.slice(0, 40);

                                return (
                                    <div key={blog._id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <img
                                                alt={`content-${index}`}
                                                className="object-cover object-center h-full w-full"
                                                src={`${ENDPOINT}${blog.blog_image}`}
                                            />
                                        </div>
                                        <h2 className="text-xl font-medium title-font mt-5">
                                            <Link passHref={true} href={`/blogpost/${blog._id}`}>
                                                {truncatedTitle}
                                            </Link>
                                        </h2>
                                        <div className="text-base leading-relaxed mt-2 mb-4">{truncatedContent}...</div>
                                    </div>
                                );
                            }
                            return null;
                        })
                    ) : (
                        <Alert severity="info">You dont have any blog yet.</Alert>
                    )}



                    <div className="p-4 lg:w-1/3 pt-20 lg:pt-4 relative">
                        <h4 className="sm:w-full absolute top-0 lg:-top-16 text-[#57C8E7] text-start font-medium title-font text-3xl mb-6">Popular Post</h4>
                        {Object.keys(blogs).length > 0 ? (
                            Object.keys(blogs).map((item, index) => {
                                if (index >= 2 && index < 4) {
                                    const blog = blogs[item];
                                    const truncatedContent = blog.blog_content.length > 150
                                        ? blog.blog_content.slice(0, 150) + '...'
                                        : blog.blog_content;
                                    return (
                                        <div key={blog._id} className="flex sm:flex-row mb-6">
                                            <img alt={`content-${index}`} className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={`${ENDPOINT}${blog.blog_image}`} />
                                            <div className="flex-grow pl-4 sm:pl-8">
                                                <h4 className="font-medium text-xl mb-4">
                                                    <Link passHref={true} href={`/blogpost/${blog._id}`}>
                                                        {blog.blog_title}
                                                    </Link>
                                                </h4>
                                                <p className="mb-4 text-sm">{truncatedContent}</p>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })
                        ) : (
                            <Alert severity="info">You don't have any blog yet.</Alert>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

const Blogs = ({ blogs }) => {

    return (
        <>
           <Head>
                <title>News & Blogs - xis.ai</title>
                <meta
                    name="description"
                    content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
                />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="keywords" content="Defect Detection, AI Detection, AI Detector, AI Robotics, AI Web Technologies, Computer Vision, Precision Recall, Robotic Inspection" />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}blogs`} />

                <meta property="og:title"
                    content="News & Blogs - Simplified Edge AI for Industrial Inspection"
                />
                <meta property="og:description"
                    content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
                />
                <meta
                    property="og:image"
                    content={`${process.env.NEXT_PUBLIC_BASE_URL}opengraph-image.png`}
                />
                <meta property="og:type" content="website" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}blogs`} />
                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@XisAI" />
                <meta name="twitter:title" content="Simplified Edge AI for Industrial Inspection" />
                <meta
                    name="twitter:description"
                    content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
                />
                <meta
                    name="twitter:image"
                    content={`${process.env.NEXT_PUBLIC_BASE_URL}opengraph-image.png`}
                />
                <meta name="twitter:image:type" content="image/png" />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="630" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />

            </Head>
            <div className='bg-[#111]'>
                <div className="container mx-auto px-5 py-24 items-center">
                    <Featured blogs={blogs} />
                    <TrendingBlog blogs={blogs} />
                    <LatestBlog blogs={blogs} />
                </div>
            </div>
        </>
    )
};

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
                blogs: {},
            },
        };
    }
};
