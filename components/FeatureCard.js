import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import DOMPurify from "dompurify";
import Truncate from "react-truncate-html";

const FeatureCard = ({ data }) => {
  const gradientStyle = {
    background:
      "linear-gradient(317deg, rgba(93, 56, 194, 0.25) -1.1%, rgba(182, 61, 232, 0.00) 52.97%)",
    border: "1px solid #5D38C2",
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
    <div className="flex flex-wrap gap-2 sm:gap-6 justify-center">
      {data.map((c, index) => (
        <div
          key={index}
          style={gradientStyleMain}
          className="ftest w-[184px] sm:w-[300px] md:w-[350px] p-6 bg-slate-900 rounded-2xl border-2 border-slate-800"
        >
          <style jsx>{`
            @media (max-width: 391px) {
              .ftest {
                width: 90%;
                margin: 2px 8px;
              }
            }

            .ftest {
              transition: 0.1s ease-in-out;
              cursor: pointer;
            }

            .ftest:hover {
              border: 2px solid #5d38c2;
            }
          `}</style>
          <div className="flex justify-between items-center">
            <div
              style={gradientStyle}
              className="w-12 h-12  border-2  rounded-xl"
            >
              <Image
                className="ml-3 mt-2"
                src={c.path}
                width={24}
                height={24}
                alt={`${c.label} img`}
              />
            </div>
            {/* <FaArrowRight color="white" size={24} /> */}
          </div>

          <div className=" mt-8">
            <h1 className="font-bold text-white text-xl font-inter">
              {c.label}
            </h1>
            {/* <p className="text-sm mt-2 leading-7 text-gray-300 sm:hidden">
              <Truncate
                ref={truncateRef}
                lines={3}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(truncateText(c.desc, 150)),
                }}
              />
            </p> */}
            <p className="text-sm mt-2 leading-7 text-gray-300 font-poppins sm:block">
              {c.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
