import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "@/common/base_config";
import { HeroBlob } from "./HeroSection";



const CareerJobs = ({jobsData}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (jobsData && Array.isArray(jobsData)) {
      setIsLoading(false);
    } else {
      setIsError("Error syncying static Data");
    }
  }, [jobsData]);

  return (
    <div className="mb-20 relative min-[2300px]:w-[70%] min-[2300px]:mx-auto ">
      <HeroBlob
        sx={{
          top: "0px",
          zIndex: "-1",
          width: "300px",
          right: "10px",
        }}
      />
      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "-50%",
          zIndex: "-1",
          right: "40%",
        }}
        key={"UniqueElementor2"}
      />
      {jobsData ? (
        jobsData.map((item, index) => (

          <div key={item.id}>
            <Link href={`/jobs/${item.attributes.slug}`}>
        
              <div
                className={`sm:px-10 font-poppins flex items-center cursor-pointer ${
                  hoveredIndex === index
                    ? "bg-gradient-to-r from-[#393E83] to-[#301667]"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-full py-5">
                  <h4 className="text-lg md:text-xl font-bold mb-4">{item.attributes.title}</h4>
                  <p>
                    {item.attributes.nature} - {item.attributes.country} - {item.attributes.duration}
                  </p>
                </div>
                <Image
                  className=""
                  src={hoveredIndex === index ? "/raarrow.svg" : "/rarrow.svg"}
                  width={hoveredIndex === index ? 45 : 63}
                  height={hoveredIndex === index ? 45 : 63}
                  alt="job arrow"
                />
              </div>
            </Link>
            <div className="w-full h-0.5 bg-gray-400"></div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-[250px]">
          <h2 className="text-2xl ">No Current Openings</h2>
        </div>
      )}
    </div>
  );
};

export default CareerJobs;
