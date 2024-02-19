import { HeroBlob } from "@/components/HeroSection";
import React from "react";
import Link from "next/link";

const page = () => {
  const gradientStyleMain = {
    background:
      "linear-gradient(180deg, rgba(48, 20, 102, 0.10) 0%, rgba(62, 95, 170, 0.10) 100%)",
  };
  const gradientStyle = {
    background: "linear-gradient(0deg, #301466 0%, #3E5FAA 123.73%)",
  };

  const gradientStyle2 = {
    background:
      "linear-gradient(180deg, rgba(48, 20, 102, 0.25) 0%, rgba(62, 95, 170, 0.25) 100%)",
  };

  return (
    <div className="mt-20 relative">
      <HeroBlob
        sx={{
          background: "rgba(62, 95, 170, 0.25)",
          bottom: "1px",
          zIndex: "-1",
          left: "1px",
        }}
        key={"UniqueElementor2"}
      />
      {/* <div className=" absolute left-[0px] sm:top-[-200px] top-[-300px]">
        <Image
          src="/Ellipse 165.png"
          alt="Ellipse "
          height={1000}
          width={1000}
        />
      </div>
      <div className=" absolute sm:left-[-100px] left-[-400px] sm:top-[-200px] top-[500px]">
        <Image src="/Ellipse 162.png" alt="Ellipse " height={900} width={900} />
      </div>

      <div className=" absolute right-[0px] top-[-300px]">
        <Image
          src="/Ellipse 168.png"
          alt="Ellipse "
          height={1000}
          width={1000}
        />
      </div> */}
      <div className="flex flex-col justify-center items-center mb-14 w-1/2 sm:w-3/5 m-auto relative">
        <h1 className="pb-1.5 text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-white to-gray-400">
          Let’s explore how xis.ai can work for you
        </h1>
        <h3 className="text-gray-300 text-base sm:text-xl md:text-2xl mt-4 sm:w-[600px] md:w-[700px] text-center">
          Tell us a little about yourself in the form below and we'll connect
          you with a xis.ai expert who can share more about the product and
          answer any questions you have. You can also directly book a
          meeting here.
        </h3>
        <Link href="">
          <div
            style={gradientStyle2}
            className="mt-4 mr-2 mb-4 py-1 px-2 text-gray-300   test-base sm:text-lg text-center  border-2  border-[#5D38C2] rounded-3xl"
          >
            Book Meeting
          </div>
        </Link>
      </div>

      <div className="pb-40 pt-2 sm:pt-12 text-sm sm:text-base relative">
        <form
          action=""
          className="w-3/5 sm:w-1/2 md:w-2/5 m-auto flex flex-col gap-4"
        >
          <input
            style={gradientStyleMain}
            placeholder="Work Email*"
            type="text"
            className="rounded-xl  outline-none py-2 px-12 border-2 border-[#5D38C2] w-full text-[#8A8A8E] "
          />

          <input
            style={gradientStyleMain}
            placeholder="First Name*"
            type="text"
            className="rounded-xl  outline-none py-2 px-12 border-2 border-[#5D38C2] w-full text-[#8A8A8E] "
          />

          <input
            style={gradientStyleMain}
            placeholder="Last Name*"
            type="text"
            className="rounded-xl  outline-none py-2 px-12 border-2 border-[#5D38C2] w-full text-[#8A8A8E] "
          />

          <input
            style={gradientStyleMain}
            placeholder="Job Title*"
            type="text"
            className="rounded-xl  outline-none py-2 px-12 border-2 border-[#5D38C2] w-full text-[#8A8A8E] "
          />

          <input
            style={gradientStyleMain}
            placeholder="Organization Name*"
            type="text"
            className="rounded-xl  outline-none py-2 px-12 border-2 border-[#5D38C2] w-full text-[#8A8A8E] "
          />

          <div className="flex items-center justify-between sm:flex-row flex-col">
            <p className="text-xs  w-3/5 mt-2">
              By submitting this form, I acknowledge receipt of the xis.ai
              Privacy Policy. Fields marked with an asterisk (*) are required.
            </p>
            <button
              style={gradientStyle}
              className="cursor-pointer z-50 w-32 sm:ml-auto m-auto 
               rounded-full border-2 border-[#5D38C2]
            text-white 
            py-2 px-6 mt-6 sm:mt-0"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
