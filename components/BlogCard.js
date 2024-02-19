import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { BASE_URL } from "@/common/base_config";
import DOMPurify from "dompurify";
import Truncate from "react-truncate-html";
import Link from "next/link";

const BlogCard = () => {
  const [submitBlog, setSubmitBlog] = useState([]);
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

  const gradientStyle = {
    background:
      "linear-gradient(180deg, rgba(48, 20, 102, 0.25) 0%, rgba(62, 95, 170, 0.25) 100%)",
  };

  const gradientStyleMain = {
    background:
      "linear-gradient(184deg, rgba(62, 95, 170, 0.13) 28.13%, rgba(87, 200, 231, 0.00) 98.75%)",
  };

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

  return (
    <div className="flex flex-wrap gap-6 justify-center relative">
      {submitBlog.map(
        (item, index) =>
          index !== 0 && (
            <div
              key={item._id}
              style={gradientStyleMain}
              className="w-[350px] rounded-2xl border-2 border-slate-800 "
            >
              <div className="rounded-xl h-40 overflow-hidden">
                <Image
                  className="object-cover object-center h-full w-full"
                  src={`${BASE_URL}${item.blog_image}`}
                  alt={`content-${index}`}
                  width={350}
                  height={300}
                />
              </div>

              <div className="px-4  mt-4">
                <h1 className="font-bold text-white text-lg sm:text-xl font-inter">
                  {item.blog_title.slice(0, 52)} ...
                </h1>
                <p className="text-sm mt-2 leading-7 text-gray-300 font-poppins">
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
              <Link passHref={true} href={`/blogpost/${item.blog_name}`}>
                <div
                  style={gradientStyle}
                  className="w-[40%]  font-poppins ml-auto mt-4 mr-2 mb-4 py-1  text-gray-300   test-sm text-center  border-2  border-[#5D38C2] rounded-3xl"
                >
                  Read More
                </div>
              </Link>
            </div>
          )
      )}
    </div>
  );
};

export default BlogCard;
