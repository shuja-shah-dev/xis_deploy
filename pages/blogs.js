import BlogCard from "@/components/BlogCard";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { Roboto } from "next/font/google";
import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { BASE_URL } from "@/common/base_config";
import DOMPurify from "dompurify";
import Truncate from "react-truncate-html";
import Link from "next/link";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});
const page = () => {
  const gradientStyle = {
    background: "linear-gradient(0deg, #301466 0%, #3E5FAA 123.73%)",
  };

  const [submitBlog, setSubmitBlog] = useState([]);
  const truncateRef = useRef();

  const truncateText = (text, maxLength) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const truncatedContent = doc.body.textContent || "";
    return (
      truncatedContent.slice(0, maxLength) +
      (truncatedContent.length > maxLength ? "..." : "")
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/blogs`);
        if (response.ok) {
          const data = await response.json();
          setSubmitBlog(data);
        } else {
          console.log(error, "Error");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>News & Blogs - xis.ai</title>
        <meta
          name="description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Defect Detection, AI Detection, AI Detector, AI Robotics, AI Web Technologies, Computer Vision, Precision Recall, Robotic Inspection"
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}blogs`}
        />

        <meta
          property="og:title"
          content="News & Blogs - Simplified Edge AI for Industrial Inspection"
        />
        <meta
          property="og:description"
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
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}blogs`}
        />
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@XisAI" />
        <meta
          name="twitter:title"
          content="Simplified Edge AI for Industrial Inspection"
        />
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
      <div className="mt-20 relative">
        {/* <div className=" absolute left-[-100px] top-[100px]  sm:top-[-200px]">
          <Image
            src="/Ellipse 165.png"
            alt="Ellipse "
            height={900}
            width={900}
          />
        </div>

        <div className=" absolute left-[-100px] top-[100px]  sm:top-[150px]">
          <Image
            src="/Ellipse 172.png"
            alt="Ellipse "
            height={900}
            width={900}
          />
        </div>

        <div className=" absolute right-[-200px] bottom-[-500px] ">
          <Image
            src="/Ellipse 171.png"
            alt="Ellipse "
            height={800}
            width={800}
          />
        </div> */}
        <div className="flex flex-col justify-center items-center mb-14 w-1/2 md:w-3/5 m-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-white to-gray-400">
            Welcome to the Xis.ai Blogs
          </h1>
          <h3 className="text-gray-300 text-base sm:text-xl md:text-2xl mt-4 sm:w-[600px] md:w-[700px] text-center">
            Our central destination for the latest updates, stories and industry
            news about visual deep learning and computer vision.
          </h3>
        </div>
        <div className="px-6 sm:px-16 py-20 my-40 border-2 border-slate-800 rounded-2xl ">
          <div className="flex flex-col md:flex-row justify-between mb-20 px-2 sm:px-16 relative">
            <IoSearch
              color="#8A8A8E"
              size={30}
              className="absolute ml-4 mt-1.5"
            />
            <input
              placeholder="Search By Keywords, industry or application*"
              type="text"
              className="rounded-full bg-[#0F0F14] mb-4 md:mb-0 outline-none py-2 px-16 border border-[#5D38C2] w-full md:w-3/5 text-[#8A8A8E] "
            />
            <button
              style={gradientStyle}
              className="cursor-pointer z-50 w-32 sm:ml-auto  test-base sm:text-lg
               rounded-full border-2 border-[#5D38C2]
            text-white 
           py-1 sm:py-2 px-2 sm:px-6 "
            >
              Subscribe
            </button>
            <div className="hidden md:block cursor-pointer border-2 bg-transparent border-[#5D38C2] rounded-2xl px-1 py-0 ml-6 mt-2 h-8">
              <Image
                className="mt-1"
                src="/ic_round-link.svg"
                alt="Ellipse "
                height={20}
                width={20}
                color="white"
              />
            </div>
          </div>

          {submitBlog &&
            submitBlog.map(
              (item, index) =>
                index == 0 && (
                  <div className="mb-20 px-0 sm:px-2 md:px-16 flex flex-col md:flex-row justify-between">
                    <div className="rounded-xl h-64 w-full md:w-1/2 overflow-hidden mb-4 md:mb-0">
                      <Image
                        className="object-cover object-center h-full w-full"
                        src={`${BASE_URL}${item.blog_image}`}
                        alt={`content-${index}`}
                        width={350}
                        height={300}
                      />
                    </div>

                    <div className=" flex flex-col w-full md:w-2/5">
                      <div className="px-4mt-4">
                        <h1 className="font-bold text-white text-xl">
                          {item.blog_title.slice(0, 63)}
                        </h1>
                        <p className="text-sm mt-2 leading-7 text-gray-300">
                          <Truncate
                            ref={truncateRef}
                            lines={3}
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                truncateText(item.blog_content, 150)
                              ),
                            }}
                          />
                        </p>
                      </div>
                      <Link
                        passHref={true}
                        href={`/blogpost/${item.blog_name}`}
                      >
                        <div
                          style={gradientStyle}
                          className="w-[30%] mt-4 mr-2 mb-4 py-1  text-gray-300  test-base sm:text-lg text-center  border-2  border-[#5D38C2] rounded-3xl"
                        >
                          Read More
                        </div>
                      </Link>
                    </div>
                  </div>
                )
            )}

          <h3 className="mb-10 text-white test-semibold text-2xl ml-10">
            LATEST STORIES
          </h3>
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default page;
