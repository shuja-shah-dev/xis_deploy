import { HeroBlob } from "@/components/HeroSection";
import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import Head from "next/head";
import "intersection-observer";
import { useEffect } from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { BASE_URL } from "@/common/base_config";
import Modal from "@mui/material/Modal";

const page = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showw");
        } else {
          entry.target.classList.remove("hidden");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hiddenn");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, fname, lname, jobTitle, org };
      setLoading(true);
      const response = await fetch(`${BASE_URL}/founder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 3000);
      } else {
        const result = await response.json();
        console.log("Success:", result);
        setfName('');
        setlName('');
        setEmail('');
        setOrg('');
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name == "fname") {
      setfName(e.target.value);
    } else if (e.target.name == "lname") {
      setlName(e.target.value);
    } else if (e.target.name == "jobTitle") {
      setjobTitle(e.target.value);
    } else if (e.target.name == "org") {
      setOrg(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#111827",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
  };

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
    <>
      <Head>
        <title>Talk To Founder - xis.ai</title>
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
          href={`${process.env.NEXT_PUBLIC_BASE_URL}contact`}
        />
        <meta
          property="og:title"
          content="Talk To Founder - Simplified Edge AI for Industrial Inspection"
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
          content={`${process.env.NEXT_PUBLIC_BASE_URL}contact`}
        />
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@XisAI" />{" "}
        {/* Replace with your actual Twitter handle */}
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
        <div className="font-poppins flex flex-col justify-center items-center mb-14 w-1/2 sm:w-3/5 m-auto relative">
          <h1 className="font-inter pb-1.5 text-4xl md:text-5xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-white to-gray-400">
            Let’s explore how xis.ai can work for you
          </h1>
          <h3 className="text-gray-300 text-base sm:text-xl md:text-2xl mt-4 sm:w-[600px] md:w-[700px] text-center">
            Tell us a little about yourself in the form below and we'll connect
            you with a xis.ai expert who can share more about the product and
            answer any questions you have. You can also directly book a
            meeting here.
          </h3>
          <Link href="/contact">
            <div
              style={gradientStyle2}
              className="mt-6 mr-2 mb-4 py-2 px-4 sm:px-6 text-gray-300   test-base sm:text-lg text-center  border border-[#5D38C2] rounded-3xl"
            >
              Book Meeting
            </div>
          </Link>
        </div>

        <div className="pb-40 pt-2 sm:pt-12 text-sm sm:text-base relative">
          <form
            onSubmit={handleSubmit}
            action=""
            className="w-2/3 md:w-2/5 m-auto flex flex-col gap-4"
          >
            <input
              name="email"
              type="email"
              value={email}
              required
              onChange={handleChange}
              style={gradientStyleMain}
              placeholder="Work Email*"
              className="rounded-xl  outline-none py-2 px-12 border border-[#5D38C2] w-full text-[#8A8A8E] "
            />

            <input
              name="fname"
              // value={name}
              // id="name"
              onChange={handleChange}
              style={gradientStyleMain}
              required
              value={fname}
              placeholder="First Name*"
              type="text"
              className="rounded-xl  outline-none py-2 px-12 border border-[#5D38C2] w-full text-[#8A8A8E] "
            />

            <input
              name="lname"
              required
              onChange={handleChange}
              style={gradientStyleMain}
              placeholder="Last Name*"
              value={lname}
              type="text"
              className="rounded-xl  outline-none py-2 px-12 border border-[#5D38C2] w-full text-[#8A8A8E] "
            />

            <input
              name="jobTitle"
              required
              value={jobTitle}
              onChange={handleChange}
              style={gradientStyleMain}
              placeholder="Job Title*"
              type="text"
              className="rounded-xl  outline-none py-2 px-12 border border-[#5D38C2] w-full text-[#8A8A8E] "
            />

            <input
              name="org"
              required
              onChange={handleChange}
              style={gradientStyleMain}
              placeholder="Organization Name*"
              type="text"
              className="rounded-xl  outline-none py-2 px-12 border border-[#5D38C2] w-full text-[#8A8A8E] "
            />

            <div className="flex items-center justify-between sm:flex-row flex-col">
              <p className="text-xs  w-3/5 mt-2">
                By submitting this form, I acknowledge receipt of the xis.ai
                Privacy Policy. Fields marked with an asterisk (*) are required.
              </p>
              <button
                style={gradientStyle}
                className="cursor-pointer z-50 w-32 sm:ml-auto m-auto 
               rounded-full border border-[#5D38C2]
            text-white 
            py-2 px-6 mt-6 sm:mt-0"
              >
                {loading ? (
                  <svg
                    aria-hidden="true"
                    className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
              <div>
                {showAlert && (
                  <Modal open={true} onClose={() => setShowAlert(false)}>
                    <Box sx={style}>
                      <div className="modal-container">
                        <div className="modal-container">
                          <Alert severity="success">
                            Your message has been sent successfully.
                          </Alert>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                )}
                {showErrorAlert && (
                  <Modal open={true} onClose={() => setShowErrorAlert(false)}>
                    <Box sx={style}>
                      <div className="modal-container">
                        <div className="modal-container">
                          <Alert severity="error">
                            {/* Email address already exists */}
                            Couldn't send Email. Kindly fill the form correctly.
                          </Alert>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
