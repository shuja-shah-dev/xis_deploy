import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { HeroBlob } from "@/components/HeroSection";
import Link from "next/link";
import { BASE_URL } from "@/common/base_config";

// async function fetchJobById(id) {
//   const response = await fetch(`${BASE_URL}/jobs/${id}`); 
//   if (!response.ok) {
//     throw new Error("Failed to fetch job details");
//   }
//   return response.json();
// }

async function fetchJobs() {
  const response = await fetch(`${BASE_URL}/jobs`);
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
}

const CareerDetailHeroSection = ({job}) => {
  const router = useRouter();
  const { id } = router.query;
  const [jobs, setJobs] = useState([]);
  // const [job, setJob] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (id) {
  //     const loadJob = async () => {
  //       try {
  //         const data = await fetchJobById(id);
  //         console.log(data);
  //         setJob(data);
  //       } catch (error) {
  //         setError(error.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     loadJob();
  //   }
  // }, [id]);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (error) {
        console.log(error.message);
      } 
    };

    loadJobs();
  }, []);

  // if (loading)
  //   return (
  //     <div className="flex justify-center items-center h-[800px]">
  //       <h2 className="text-3xl">Loading...</h2>
  //     </div>
  //   );
  if (error)
    return (
      <div className="flex justify-center items-center h-[800px]">
        <h2 className="text-3xl">Error: {error}</h2>
      </div>
    );
  if (!job)
    return (
      <div className="flex justify-center items-center h-[800px]">
        <h2 className="text-3xl">Job Not Found</h2>
      </div>
    );

  // Process benefits field
  const benefitsLines = job.benefits.split("\n");
  const bulletPoints = benefitsLines.map((line, index) => (
    <div className="flex gap-3">
      {/* <Image
        className=""
        src={"/bullet.svg"}
        width={15}
        height={15}
        alt="job"
      /> */}
      
      <div className="flex relative">
        <svg
          className="absolute"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="18"
          viewBox="0 0 6 12"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.16662 0.188416C2.29991 0.39559 0.0371094 2.84264 0.0371094 5.83088C0.0371094 8.81912 2.29991 11.2662 5.16662 11.4733V7.39616C4.48589 7.21674 3.98289 6.58396 3.98289 5.83088C3.98289 5.0778 4.48589 4.44502 5.16662 4.26561V0.188416Z"
            fill="url(#paint0_linear_32_2300)"
            fill-opacity="0.8"
          />
          <defs>
            <linearGradient
              id="paint0_linear_32_2300"
              x1="2.01"
              y1="-0.633885"
              x2="2.42372"
              y2="10.2747"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.362284" stop-color="#4634FC" />
              <stop offset="0.948156" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.67958 4.21875C4.78922 4.21875 4.06744 4.94053 4.06744 5.83088C4.06744 6.72124 4.78922 7.44302 5.67958 7.44302C6.56993 7.44302 7.29171 6.72124 7.29171 5.83088C7.29171 4.94053 6.56993 4.21875 5.67958 4.21875ZM0.0371094 5.83088C0.0371094 2.71463 2.56333 0.188416 5.67958 0.188416C8.79582 0.188416 11.322 2.71463 11.322 5.83088C11.322 8.94713 8.79582 11.4733 5.67958 11.4733C2.56333 11.4733 0.0371094 8.94713 0.0371094 5.83088Z"
            fill="#5D38C2"
          />
        </svg>
      </div>

      <p key={index}>{line}</p>
    </div>
  ));
  // const paragraph = benefitsLines.slice(3).join(' ');

  return (
    <div className="px-6 sm:px-10 lg:px-16 xl:px-32 2xl:px-52 min-[2300px]:w-[70%] min-[2300px]:mx-auto font-poppins ">
      <div className="flex justify-center items-center flex-col my-14 md:my-20 relative">
        <HeroBlob
          sx={{
            background: "rgba(62, 95, 170, 0.25)",
            top: "900px",
            zIndex: "-1",
            left: "10px",
          }}
          key={"UniqueElementor2"}
        />
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

        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            CAREER DETAILS
          </h1>
          <div className="flex md:text-xl gap-2 sm:gap-5">
            <p>H</p>
            <p>O</p>
            <p>M</p>
            <p>E /</p>
            <p>C</p>
            <p>A</p>
            <p>R</p>
            <p>E</p>
            <p>E</p>
            <p>R</p>
            <p></p>
            <p>D</p>
            <p>E</p>
            <p>T</p>
            <p>A</p>
            <p>I</p>
            <p>L</p>
            <p>S</p>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-10 mt-24 mb-10">
        <div className="flex flex-col w-full lg:w-2/3">
          <h2 className="font-bold text-3xl md:text-4xl w-full lg:w-2/5 mb-8">
            Begin Your Career With Us
          </h2>
          <div className="w-full">
            <div className="relative w-full h-[600px]">
              <Image
                className=""
                src={"/job.svg"}
                layout="fill"
                objectFit="cover"
                alt="job"
              />
            </div>
            <div className="flex justify-between text-xs mt-1">
              <p>
                <span className="text-[#4634FC]">NATURE:</span> {job.nature}{" "}
              </p>
              <p>
                <span className="text-[#4634FC]">LOCATION:</span> {job.country}{" "}
              </p>
              <p>
                <span className="text-[#4634FC]">JOB TYPE:</span> {job.duration}{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 text-sm">
          <div className="bg-[#121212] p-8 border border-[#4634FC] flex flex-col gap-4">
            <p>
              <span className="text-[#515151]">Experience:</span>{" "}
              {job.experience}{" "}
            </p>
            <p>
              <span className="text-[#515151]">No. of Vacancies:</span>{" "}
              {job.vacancies}{" "}
            </p>
            <p>
              <span className="text-[#515151]">Working Hours:</span>{" "}
              {job.workingHours}{" "}
            </p>
            <p>
              <span className="text-[#515151]">Working Days:</span>{" "}
              {job.workingDays}{" "}
            </p>
            {/* <p>
              <span className="text-[#515151]">Salary:</span> {job.salary}{" "}
            </p> */}
            <p>
              <span className="text-[#515151]">Deadline:</span> {job.deadline}{" "}
            </p>

            <div className="font-bold text-lg text-center">
              DO YOU HAVE ANY DOUBTS?
            </div>

            <Link href="/contact">
              <button className="w-full h-[40px] cursor-pointer text-center text-lg bg-gradient-to-r from-[#393E83] to-[#301667]">
                Contact
              </button>
            </Link>
          </div>

          <div className="bg-[#121212] p-8 border border-[#4634FC] flex flex-col gap-4 text-sm mt-14">
            <div className="font-bold text-lg text-left">
              OUR OPENING POSITIONS
            </div>
            <div className="flex flex-col">
            {jobs.map((job) => (
                <div
                  key={job.id}
                  className="flex justify-between border-b border-[#515151] py-4 px-2 hover:bg-gradient-to-r from-[#393E83] to-[#301667]"
                >
                  <div>{job.title}</div>
                  <div>({job.vacancies})</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20 w-full lg:w-2/3 lg:pr-6">
        <h1 className="text-3xl font-bold mb-4">{job.title.toUpperCase()}</h1>
        <p className="mb-4 text-base">{job.desc}</p>
        <h3 className="mb-4 text-2xl">{"Responsibilities:".toUpperCase()}</h3>
        <p className="mb-4 text-base">{job.responsibilities}</p>
        <h3 className="mb-4 text-2xl">{"Benefits:".toUpperCase()}</h3>
        <div className="mb-4 flex flex-col gap-4 text-base">{bulletPoints}</div>
        {/* <p className="mb-4">{paragraph}</p> */}
      </div>

      <div className="w-[150px] h-[55px] cursor-pointer p-4 text-center text-xl bg-gradient-to-r from-[#393E83] to-[#301667] mb-20">
        APPLY NOW
      </div>
    </div>
  );
};

export default CareerDetailHeroSection;

export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}/jobs`);
  const jobs = await res.json();

  const paths = jobs.map((job) => ({
    params: { slug: job.slug },
  }));

  const fs = require("fs");
  const path = require("path");
  const filePath = path.join(process.cwd(), "public", "jobs.json");
  fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`${BASE_URL}/jobs/${params.slug}`, {
      next: {revalidate: 7200}, 
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const job = await res.json();

    return {
      props: {
        job: job[0],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        job: {},
      },
    };
  }
}