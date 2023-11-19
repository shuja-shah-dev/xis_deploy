import Image from "next/image";
import { useAuth } from "@/common/authProvider";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import "intersection-observer";
import { useEffect } from "react";
import Link from "next/link";


const about = () => {
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

  return accessToken ? (
    <>
      <div className=" fadeInUp animated container my-24 justify-center items-center text-5xl text-center  mx-auto w-full">
        <section className="flex items-center">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap">
              <div className="w-full px-6 justify-center mb-10  lg:mb-0 ">
                <div className="pl-4 mb-6 ">
                  <span className="text-lg uppercase text-gray-200">
                    Who we are?
                  </span>
                  <h1 className="mt-2 text-3xl font-black  md:text-5xl text-gray-100">
                    About Us
                  </h1>
                </div>
                <p className="mb-6 text-lg leading-7  text-gray-300">
                  XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a
                  mission to revolutionize Industrial Quality inspection and
                  Process Monitoring through the power of artificial
                  intelligence. Our team of innovators and AI enthusiasts is
                  dedicated to pushing the boundaries of what's possible with AI
                  technology. We believe in the potential of AI to transform
                  industries,
                </p>
                <Link
                  href="/contact"
                  aria-label="Contact"
                  className="px-4 py-2 text-xl text-gray-100 rounded-xl bg-gray-800 hover:bg-gray-900 "
                >
                  Get in touch
                </Link>
              </div>
            </div>      
          </div>
        </section>
        <div className="relative h-full container mx-auto px-4 mt-10 overflow-hidden mb-24 md:mb-0" style={{ height: "500px" }}>
        <iframe
          className="absolute top-0 rounded-xl lg:rounded-3xl left-0 w-full lg:w-full h-[100%] lg:h-[100%]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5692550973376!2d8.848324875555058!3d49.05681318672361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47979d2fd2ffcf53%3A0xd8a4d478df498df3!2sTheodor-Schweitzer-Stra%C3%9Fe%201%2F3%2C%2075447%20Sternenfels%2C%20Germany!5e0!3m2!1sen!2s!4v1700329065442!5m2!1sen!2s"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          loading="lazy"
          tabindex="0"
        ></iframe>
      </div>
      </div>
     


      {/* <div className="container justify-center pb-24 items-center text-5xl text-center min-h-[100vh] mx-auto w-full">
        <div className=" p-4 min-h-screen">
          <div className="hiddenn max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="w-full mt-12 text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
  ) : (
    <>
      <Head>
        <title>xis.ai</title>
        <meta
          name="description"
          content="XIS AI, AI startup, industrial quality inspection, process monitoring"
        />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      </Head>

      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30%",
            width: "35%",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ width: "100%", textAlign: "Center" }}>
            Permission Denied.
          </Typography>
          <Typography sx={{ width: "100%", textAlign: "Center" }}>
            Please Login to continue.
          </Typography>
          <button
            id="login"
            aria-label="Login to your account"
            onClick={(_) => {
              controller.push("/");
            }}
            className="w-full lg:w-1/2 text-white bg-sky-500 hover:bg-sky-500 mt-10 focus:ring-1 focus:outline-none focus:ring-sky-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-500 dark:hover:bg-sky-500 dark:focus:ring-sky-500"
          >
            Login
          </button>
        </Box>
      </Box>
    </>
  );
};

export default about;
