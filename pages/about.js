import Image from "next/image";
import { useAuth } from "@/common/authProvider";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import 'intersection-observer';
import { useEffect } from "react";



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

    const hiddenElements = document.querySelectorAll('.hiddenn');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  });

  return accessToken ? (

    <>
      <div className=' fadeInUp animated container my-24 justify-center items-center text-5xl text-center  mx-auto w-full'>
        <section className="flex items-center  xl:h-screen font-poppins ">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="relative lg:max-w-md">
                  <Image width={4500} height={4100} src="/aicase.jpg" alt="aboutimage"
                    className="relative z-10 object-cover w-full rounded h-96" />
                  <div
                    className="absolute rounded-tl-full rounded-bl-full rounded-br-full bottom-0 right-0 z-10 p-8  border-4 rounded shadow border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 :text-gray-300 bg-gray-800 ">
                    <p className="text-lg font-semibold md:w-72">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        className="absolute top-4 left-4 w-8 h-8  text-blue-300 "
                        viewBox="0 0 16 16">
                        <path
                          d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                        </path>
                      </svg> Successfully Providing business solutions from 25 years
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                  <span className="text-sm uppercase text-gray-200">Who we are?</span>
                  <h1 className="mt-2 text-3xl font-black  md:text-5xl text-gray-100">
                    About Us
                  </h1>
                </div>
                <p className="mb-6 text-base leading-7 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                  amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                  amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                  amet.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  Lorem ipsum dolor sit amet.
                </p>
                <a href="#"
                  className="px-4 py-2 text-2xl text-gray-100 bg-blue-500 rounded  dark:hover:bg-blue-500 hover:bg-blue-600">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='hiddenn container justify-center pb-24 items-center text-5xl text-center min-h-[100vh] mx-auto w-full'>
        <div className=" p-4 min-h-screen">

          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                <path fill-rule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clip-rule="evenodd"></path>
              </svg>
              <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Our Work</h2>
              <p className="text-gray-300">We have built many products and some of them are below</p>
            </div>
            <div
              className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full" style={{ color: "transparent" }} />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">Xyz.com</h5>
                    <p className="text-gray-300">Platform to convert Domains into Content websites.</p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full" style={{ color: "transparent" }} />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">ABC.com</h5>
                    <p className="text-gray-300">Platform to create dynamic widgets for websites.</p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full" style={{ color: "transparent" }} />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">ASD.com</h5>
                    <p className="text-gray-300">API SaaS Platform that provides API Suit to help you ship fast.</p>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                  <img src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full" style={{ color: "transparent" }} />
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">TMK.co</h5>
                    <p className="text-gray-300">Chrome Extension that lets you add ChatGPT on any website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  ) : (
    <>
      <Head>
        <title>Xis.ai</title>
        <meta name="description" content="Generated by create next app" />
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
          <Typography>Permission Denied.</Typography>
          <Typography>Please Login to continue.</Typography>
          <button
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
}


export default about;
