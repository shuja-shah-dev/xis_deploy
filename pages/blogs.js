import { Roboto } from 'next/font/google';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react'
import Alert from '@mui/material/Alert';
import { ENDPOINT } from './blogadmin';
import Head from 'next/head';
import { BASE_URL } from '@/common/base_config';
import DOMPurify from 'dompurify';
import Truncate from 'react-truncate-html';




const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700"],
    subsets: ["latin"],
});


const Featured = () => {

    const [submitBlog, setSubmitBlog] = useState([]);

    function createMarkup(c) {
        return { __html: c };
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/blogs`);
                if (response.ok) {
                    const data = await response.json();
                    setSubmitBlog(data);
                } else {
                    console.log(error, "Error")
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
                    {submitBlog && submitBlog.length > 0 ? (
                        submitBlog.map((item, index) => {
                            if (index < 1) {
                                return (
                                    <div key={item._id} className="w-full md:w-1/2 h-96 mr-0 md:mr-4 overflow-hidden rounded-lg relative">
                                        <img
                                            alt={`content-${index}`}
                                            className="object-cover object-center h-full w-full"
                                            src={`${BASE_URL}${item.blog_image}`}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 -mt-12 bg-gradient-to-t from-gray-800/70 to-gray-50/0">
                                            <h3 className={`${roboto.className} text-xl font-medium leading-9 text-white dark:text-white`}>
                                                <Link passHref={true} href={`/blogpost/${item._id}`}>
                                                    {item.blog_title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })
                    ) : (
                        <Alert severity="info">You don't have any blog yet.</Alert>
                    )}


                    <div className="w-full md:w-1/2 mx-2 h-96 ">
                        <div className="flex flex-col space-y-4">
                            {submitBlog && submitBlog.length > 0 ? (
                                submitBlog.map((item, index) => {
                                    if (index === 1) {
                                        const blog = submitBlog[item];
                                        // const truncatedContent = blog.blog_content.length > 150
                                        //     ? blog.blog_content.slice(0, 150) + '...'
                                        //     : blog.blog_content;
                                        return (
                                            <div key={item._id} className="h-48 w-full overflow-hidden relative rounded-lg">
                                                <img
                                                    alt={`content-${index}`}
                                                    className="object-center h-full w-full"
                                                    src={`${BASE_URL}${item.blog_image}`}
                                                />
                                                <div
                                                    className="absolute bottom-0 left-0 right-0 z-10 p-6 -mt-12 bg-gradient-to-t from-gray-800/70 to-gray-50/0"
                                                >
                                                    <p className="text-xl font-medium leading-9 text-white dark:text-white">
                                                        <Link passHref={true} href={`/blogpost/${item._id}`}>
                                                            {item.blog_title}
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
                                {
                                    submitBlog && submitBlog.length > 0 ? (
                                        submitBlog.map((item, index) => {
                                            if (index >= 2 && index < 4) {
                                                return (
                                                    <div key={item._id} className="w-full md:w-1/2 h-96 mr-0 md:mr-4 overflow-hidden rounded-lg relative">
                                                        <img
                                                            alt={`content-${index}`}
                                                            className="object-cover object-center h-full w-full"
                                                            src={`${BASE_URL}${item.blog_image}`}
                                                        />
                                                        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 -mt-12 bg-gradient-to-t from-gray-800/70 to-gray-50/0">
                                                            <h3 className={`${roboto.className} text-xl font-medium leading-9 text-white dark:text-white`}>
                                                                <Link passHref={true} href={`/blogpost/${item._id}`}>
                                                                    {item.blog_title}
                                                                </Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })
                                    ) : (
                                        <Alert severity="info">You don't have any blog yet.</Alert>
                                    )
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const truncateText = (text, maxLength) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const truncatedContent = doc.body.textContent || '';
    return truncatedContent.slice(0, maxLength) + (truncatedContent.length > maxLength ? '...' : '');
};

const TrendingBlog = () => {

    const [submitBlog, setSubmitBlog] = useState([]);
    const truncateRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/blogs`);
                if (response.ok) {
                    const data = await response.json();
                    setSubmitBlog(data);
                } else {
                    console.error('Error fetching data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                        <h3 className="sm:w-2/5 text-[#57C8E7] font-medium title-font text-3xl mb-2 sm:mb-0">Trending</h3>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {submitBlog && submitBlog.length > 0 ? (
                        submitBlog.map((item, index) => {
                            const truncatedTitle = item.blog_title.slice(0, 40);

                            return (
                                <div key={item._id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div className="rounded-lg h-64 overflow-hidden">
                                        <img
                                            alt={`content-${index}`}
                                            className="object-cover object-center h-full w-full"
                                            src={`${BASE_URL}${item.blog_image}`}
                                        />
                                    </div>
                                    <Link passHref={true} href={`/blogpost/${item._id}`}>
                                        <h2 className="text-xl font-medium title-font mt-5 mb-4">{truncatedTitle}</h2>
                                    </Link>
                                    <Truncate
                                        ref={truncateRef}
                                        lines={3}
                                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateText(item.blog_content, 150)) }}
                                    />
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



const LatestBlog = () => {

    const [submitBlog, setSubmitBlog] = useState([]);

    const truncateRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/blogs`);
                if (response.ok) {
                    const data = await response.json();
                    setSubmitBlog(data);
                } else {
                    console.error('Error fetching data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
                    {submitBlog && submitBlog.length > 0 ? (
                        submitBlog.map((item, index) => {
                            if (index < 2) {
                                // const blog = submitBlog[item];
                                // const truncatedContent = item.blog_content.slice(0, 150);
                                const truncatedTitle = item.blog_title.slice(0, 40);
                                return (
                                    <div key={item._id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <img
                                                alt={`content-${index}`}
                                                className="object-cover object-center h-full w-full"
                                                src={`${BASE_URL}${item.blog_image}`}
                                            />
                                        </div>
                                        <h2 className="text-xl font-medium title-font mt-5 mb-4">
                                            <Link passHref={true} href={`/blogpost/${item._id}`}>
                                                {truncatedTitle}
                                            </Link>
                                        </h2>
                                        <Truncate
                                            ref={truncateRef}
                                            lines={3}
                                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateText(item.blog_content, 150)) }}
                                        />
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
                        {submitBlog && submitBlog.length > 0 ? (
                            submitBlog.map((item, index) => {
                                if (index >= 2 && index < 4) {
                                    const truncatedTitle = item.blog_title.slice(0, 40);
                                    // const blog = submitBlog[item];
                                    // const truncatedContent = blog.blog_content.length > 150
                                    //     ? blog.blog_content.slice(0, 150) + '...'
                                    //     : blog.blog_content;
                                    return (
                                        <div key={item._id} className="flex sm:flex-row mb-6">
                                            <img alt={`content-${index}`} className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={`${BASE_URL}${item.blog_image}`} />
                                            <div className="flex-grow pl-4 sm:pl-8">
                                                <h4 className="font-medium text-xl mb-4">
                                                    <Link passHref={true} href={`/blogpost/${item._id}`}>
                                                        {truncatedTitle}
                                                    </Link>
                                                </h4>
                                                <Truncate
                                                    ref={truncateRef}
                                                    lines={3}
                                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateText(item.blog_content, 150)) }}
                                                />
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

const Blogs = () => {

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
                    <Featured />
                    <TrendingBlog />
                    <LatestBlog />
                </div>
            </div>
        </>
    )
};

export default Blogs;



