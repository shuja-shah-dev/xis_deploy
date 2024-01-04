import Image from "next/image";
import { useAuth } from "@/common/authProvider";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import "intersection-observer";
import { useEffect } from "react";

const privacy = () => {
  const controller = useRouter();
  const { accessToken } = useAuth();

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

  return (
    <>
      <Head>
        <title>Privacy - xis.ai</title>
        <meta
          name="description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />               
        <meta name="keywords" content="Defect Detection, AI Detection, AI Detector, AI Robotics, AI Web Technologies, Computer Vision, Precision Recall, Robotic Inspection" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}privacy`} />
        <meta property="og:title"
          content="Privacy - Simplified Edge AI for Industrial Inspection"
        />
        <meta property="og:description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}opengraph-image.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}privacy`} />
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@XisAI" />  {/* Replace with your actual Twitter handle */}
        <meta name="twitter:title" content="Simplified Edge AI for Industrial Inspection" />
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
      <div className=" fadeInUp animated container mt-24 justify-center items-center text-5xl text-center  mx-auto w-full">
        <section className="flex items-center font-poppins ">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap">
              <div className="w-full px-6 justify-center mb-10  lg:mb-0 ">
                <div className="pl-4 mb-6 ">
                  <span className="text-lg uppercase text-gray-200"></span>
                  <h1 className="mt-2 text-3xl font-black  md:text-5xl text-gray-100">
                    Privacy Policy
                  </h1>
                </div>
                <p className="mb-6 text-lg leading-7  text-gray-300">
                  This Privacy Policy describes how your personal information is
                  collected, used, and shared when you visit or make a purchase
                  from xis.ai (the “Site”).
                </p>
                <p className="mb-6 text-lg leading-7  text-gray-300">
                  PERSONAL INFORMATION WE COLLECT
                </p>
                <p className="mb-6 text-lg leading-7  text-gray-300">
                  When you visit the Site, we automatically collect certain
                  information about your device, including information about
                  your web browser, IP address, time zone, and some of the
                  cookies that are installed on your device. Additionally, as
                  you browse the Site, we collect information about the
                  individual web pages or products that you view, what websites
                  or search terms referred you to the Site, and information
                  about how you interact with the Site. We refer to this
                  automatically-collected information as “Device Information.”
                </p>

                <p className="mb-6 text-lg leading-7  text-gray-300">
                  We collect Device Information using the following
                  technologies:
                </p>

                <p className="mb-6 text-lg leading-7  text-gray-300">
                  - “Cookies” are data files that are placed on your device or
                  computer and often include an anonymous unique identifier. For
                  more information about cookies, and how to disable cookies,
                  visit http://www.allaboutcookies.org.
                </p>

                <p className="mb-6 text-lg leading-7  text-gray-300">
                  - “Log files” track actions occurring on the Site, and collect
                  data including your IP address, browser type, Internet service
                  provider, referring/exit pages, and date/time stamps.
                </p>

                <p className="mb-6 text-lg leading-7  text-gray-300">
                  JOB APPLICATIONS
                </p>

                <p className="mb-6 text-lg leading-7  text-gray-300">
                  When you apply to any jobs in this job you agree to
                  voluntraily give us your personal information. We Collect that
                  information and we process it. We DO NOT SHARE YOUR PERSONAL
                  INFORMATION WITH ANY THIRD PARTY APPLICATIONS OR SERVICES.
                </p>

                <p className="mb-6 text-lg leading-7  text-gray-300">
                  Contacting Us
                </p>

                <p className="mb-6 text-lg leading-7  text-gray-300">
                  When you contact us, we may collect your email address to
                  respond to your inquiry. This information is strictly used for
                  communication purposes and is not shared with third parties.
                </p>

                <p className="mb-6 text-lg leading-7  text-gray-300">
                  Data Sharing
                </p>
                <p className="mb-6 text-lg leading-7  text-gray-300">
                  We uphold a strict policy of not sharing any collected user
                  data with third-party apps or services. Your privacy is
                  paramount, and we implement measures to ensure that your
                  information is kept confidential and utilized only for the
                  purposes outlined in this policy.
                </p>

                <p className="mb-6 text-lg leading-7  text-gray-300">
                  GDPR Compliance
                </p>
                <p className="mb-6 text-lg leading-7  text-gray-300">
                  Our privacy practices align with the standards set forth by
                  the General Data Protection Regulation (GDPR). We are
                  dedicated to ensuring the security and confidentiality of your
                  personal data. If you have any questions or concerns about
                  your data, please contact us at contact@xray-lab.com . By
                  engaging with our services, you acknowledge and agree to the
                  terms outlined in this Privacy Policy. We reserve the right to
                  update or modify this policy, with any changes reflected on
                  this page. Your continued use of our services constitutes
                  acceptance of any such modifications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="container justify-center pb-24 items-center text-5xl text-center min-h-[100vh] mx-auto w-full">
        <div className=" p-4 min-h-screen">
          <div className="hiddenn max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="w-full mt-12 text-gray-100">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-secondary"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h2 className="my-8 text-4xl font-bold text-white md:text-5xl">
                Our Work
              </h2>
              <p className="text-gray-300 text-2xl md:text-3xl ">
                We have built many products and some of them are below
              </p>
            </div>
            <div className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl  border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://www.svgrepo.com/show/164986/logo.svg"
                    loading="lazy"
                    width="200"
                    height="200"
                    className="w-12 h-12 rounded-full"
                    style={{ color: "transparent" }}
                  />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      Xyz.com
                    </h5>
                    <p className="text-gray-300 leading-[2rem] text-lg">
                      Platform to convert Domains into Content websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://www.svgrepo.com/show/120853/logo.svg"
                    loading="lazy"
                    width="200"
                    height="200"
                    className="w-12 h-12 rounded-full"
                    style={{ color: "transparent" }}
                  />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      ABC.com
                    </h5>
                    <p className="text-gray-300 leading-[2rem] text-lg">
                      Platform to create dynamic widgets for websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://www.svgrepo.com/show/120852/logo.svg"
                    loading="lazy"
                    width="200"
                    height="200"
                    className="w-12 h-12 rounded-full"
                    style={{ color: "transparent" }}
                  />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      ASD.com
                    </h5>
                    <p className="text-gray-300 leading-[2rem] text-lg">
                      API SaaS Platform that provides API Suit to help you ship
                      fast.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img
                    src="https://www.svgrepo.com/show/120850/logo.svg"
                    loading="lazy"
                    width="200"
                    height="200"
                    className="w-12 h-12 rounded-full"
                    style={{ color: "transparent" }}
                  />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      TMK.co
                    </h5>
                    <p className="text-gray-300 leading-[2rem] text-lg">
                      Chrome Extension that lets you add ChatGPT on any website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default privacy;
