import CareerHeroSection from "@/components/CareerHeroSection";
import CareerJobs from "@/components/CareerJobs";
import React from "react";

const Careers = () => {
  return (
    <>
      <div className="px-6 sm:px-10 lg:px-16 xl:px-32 2xl:px-52 ">
        <CareerHeroSection />
        <CareerJobs />
      </div>
    </>
  );
};

export default Careers;
