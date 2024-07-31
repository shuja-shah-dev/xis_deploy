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
import { HeroBlob } from "@/components/HeroSection";
import { PropagateLoader } from "react-spinners";
import HeadSection from "../components/Head";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "react-query";
import useSWR from "swr";

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");

  const filePath = path.join(process.cwd(), "public", "blogs.json");
  const blogsData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    props: { blogsData },
  };
}

const gradientStyle = {
  background: "linear-gradient(0deg, #301466 0%, #3E5FAA 123.73%)",
};
const gradientStyleMain = {
  background:
    "linear-gradient(180deg, rgba(48, 20, 102, 0.25) 0%, rgba(62, 95, 170, 0.25) 100%)",
};

const page = ({ blogsData }) => {
  const truncateRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (blogsData && Array.isArray(blogsData)) {
      setIsLoading(false);
    } else {
      setIsError("Error syncying static Data");
    }
  }, [blogsData]);

  const truncateText = (text, maxLength) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const truncatedContent = doc.body.textContent || "";
    return (
      truncatedContent.slice(0, maxLength) +
      (truncatedContent.length > maxLength ? "..." : "")
    );
  };

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return blogsData.filter((item) => regex.test(item.blog_title));
  };

  const handleChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };
  return (
    <>
      <HeadSection />
      <div className="mt-20 relative min-[2300px]:w-[55%] min-[2300px]:mx-auto">
        <HeroBlob
          sx={{
            background: "rgba(62, 95, 170, 0.25)",
            top: "-300px",
            zIndex: "-1",
            right: "100px",
          }}
          key={"UniqueElementor1"}
        />

        <HeroBlob
          sx={{
            right: "10%",
            bottom: "2%",
            zIndex: "-1",
          }}
          key={"NormalSizedBlob"}
        />

        <div className="flex flex-col justify-center items-center mb-14 w-1/2 md:w-3/5 m-auto">
          <h1 className="font-inter pb-1.5 text-4xl md:text-5xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-white to-gray-400">
            Welcome to the xis.ai Blogs
          </h1>
          <h3 className="font-poppins text-gray-300 text-base sm:text-xl md:text-xl mt-4 sm:w-[600px] md:w-[700px] text-center">
            Our central destination for the latest updates, stories and industry
            news about visual deep learning and computer vision.
          </h3>
        </div>
        {isLoading ? (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginbottom: "50%",
            }}
          >
            <PropagateLoader color="#36d7b7" />
          </div>
        ) : isError ? (
          <div>Error: {error}</div>
        ) : (
          <div className="px-6 sm:px-16 py-20 mt-4 mb-32 sm:my-40 border-2 border-slate-800 rounded-2xl ">
            <div className="flex flex-col md:flex-row justify-between mb-20 px-2 sm:px-16 ">
              <IoSearch
                color="#8A8A8E"
                size={30}
                className="absolute ml-4 mt-1.5"
              />
              <input
                onChange={handleChange}
                value={searchText}
                placeholder="Search By Keywords, industry or application*"
                type="text"
                className="font-poppins rounded-full z-50 bg-[#0F0F14] mb-4 md:mb-0 outline-none py-2 px-16 border border-[#5D38C2] w-full md:w-3/5 text-[#8A8A8E] "
              />
              <button
                style={gradientStyle}
                className="cursor-pointer z-50 w-[100px] sm:w-32 sm:ml-auto  text-xs sm:text-lg
               rounded-full border-2 border-[#5D38C2]
            text-white
           py-1 sm:py-2  sm:px-6 font-poppins"
              >
                Subscribe
              </button>
              <div className="hidden md:block cursor-pointer border-2 bg-transparent border-[#5D38C2] rounded-2xl px-1 py-0 ml-6 mt-2 h-8">
                <LazyLoadImage
                  className="mt-1"
                  src="/ic_round-link.svg"
                  alt="Ellipse "
                  height={20}
                  width={20}
                  color="white"
                />
              </div>
            </div>

            {blogsData &&
              blogsData.map((item, index) => {
                return (
                  index == 0 && (
                    <div className="mb-20 px-0 sm:px-2 md:px-16 flex flex-col md:flex-row justify-between">
                      <div className="rounded-xl h-64 w-full md:w-1/2 overflow-hidden mb-4 md:mb-0">
                        <LazyLoadImage
                          className="object-cover object-center h-full w-full"
                          src={`${BASE_URL}${item.blog_image}`}
                          alt={`content-${index}`}
                          width={350}
                          height={300}
                        />
                      </div>

                      <div className=" flex flex-col w-full md:w-2/5">
                        <div className="px-4mt-4">
                          <h1 className="font-inter text-white text-2xl sm:text-4xl">
                            {item.blog_title.slice(0, 63)}
                          </h1>
                          <p className="text-sm mt-2 leading-7 font-poppins text-gray-300">
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
                        <Link passHref={true} href={`/blogpost/${item.slug}`}>
                          <div
                            style={gradientStyleMain}
                            className="font-poppins w-[40%] sm:w-[30%] mt-4 mr-2 mb-4 py-1 lg:py-2  text-gray-300  test-sm text-center  border-2  border-[#5D38C2] rounded-3xl"
                          >
                            Read More
                          </div>
                        </Link>
                      </div>
                    </div>
                  )
                );
              })}

            <h3 className="font-inter mb-10 text-white test-semibold text-2xl sm:ml-10">
              LATEST STORIES
            </h3>
            {searchText ? (
              <BlogCard data={searchedResults} />
            ) : (
              <BlogCard data={blogsData} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default page;
