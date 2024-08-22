import CareerHeroSection from "@/components/CareerHeroSection";
import CareerJobs from "@/components/CareerJobs";
import React from "react";

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");

  const filePath = path.join(process.cwd(), "public", "jobs.json");
  const jobsData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    props: { jobsData },
    revalidate: 7200,
  };
}

const Careers = ({jobsData}) => {
  return (
    <>
      <div className="px-6 sm:px-10 lg:px-16 xl:px-32 2xl:px-52 ">
        <CareerHeroSection />
        <CareerJobs jobsData = {jobsData.data}/>
      </div>
    </>
  );
};

export default Careers;
