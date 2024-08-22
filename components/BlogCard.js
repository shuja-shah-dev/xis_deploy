import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { BASE_URL_STRAPI } from "@/common/base_config";
import DOMPurify from "dompurify";
import Truncate from "react-truncate-html";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const convertRichTextToHTML = (content) => {
  if (!Array.isArray(content)) return "";

  return content
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return `<p>${block.children
            .map((child) => child.text || "")
            .join("")}</p>`;
        case "heading":
          return `<h${block.level}>${block.children
            .map((child) => child.text || "")
            .join("")}</h${block.level}>`;
        // Add more cases as needed for other types (e.g., lists, links)
        default:
          return "";
      }
    })
    .join("");
};

const BlogCard = ({ data }) => {
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
  // index !== 0 &&
  return (
    <div className="flex flex-wrap gap-6 justify-center relative">
      {data.map((item, index) => (
        <div
          key={item._id}
          style={gradientStyleMain}
          className="w-[350px] rounded-2xl border-2 border-slate-800 "
        >
          <div className="rounded-xl h-40 overflow-hidden">
            <LazyLoadImage
              className="object-cover object-center h-full w-full"
              src={item.attributes?.blog_image?.data?.attributes?.url}
              alt={`content-${index}`}
              width={350}
              height={300}
            />
          </div>

          <div className="px-4  mt-4">
            <h1 className="text-white text-lg sm:text-xl font-inter">
              {item.attributes.blog_title.slice(0, 52)} ...
            </h1>
            <p className="text-sm mt-2 leading-7 text-gray-300 font-poppins">
              <Truncate
                ref={truncateRef}
                lines={4}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    truncateText(
                      convertRichTextToHTML(item.attributes.blog_content),
                      150
                    )
                  ),
                }}
              />
            </p>
          </div>
          <Link passHref={true} href={`/blogpost/${item.attributes.slug}`}>
            <div
              style={gradientStyle}
              className="w-[40%]  font-poppins ml-auto mt-4 mr-2 mb-4 py-1  text-gray-300   test-sm text-center  border-2  border-[#5D38C2] rounded-3xl"
            >
              Read More
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
