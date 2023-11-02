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
      <div className='hiddenn container my-24 justify-center items-center text-5xl text-center min-h-[100vh] mx-auto w-full'>
        <section class="bg-white dark:bg-gray-900">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
              <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
              <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
              <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
            </div>
          </div>
        </section>
      </div>
      <div className='hiddenn container justify-center items-center text-5xl text-center min-h-[100vh] mx-auto w-full'>
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Powering innovation at <span class="font-extrabold">200,000+</span> companies worldwide</h2>
              <p class="mb-4 font-light">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
              <p class="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
              <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                Learn more
                <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className='hiddenn container justify-center items-center text-5xl text-center min-h-[100vh] mx-auto w-full'>
        <div class="bg-gray-700 p-4 min-h-screen">
          <div aria-hidden="true" class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
            <div class="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
            <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
          </div>
          <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div class="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-secondary">
                <path fill-rule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clip-rule="evenodd"></path>
              </svg>
              <h2 class="my-8 text-2xl font-bold text-white md:text-4xl">Our Work</h2>
              <p class="text-gray-300">We have built many products and some of them are below</p>
            </div>
            <div
              class="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
              <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
                <div class="relative space-y-8 py-12 p-8">
                  <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full" style={{ color: "transparent" }} />
                  <div class="space-y-2">
                    <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">Xyz.com</h5>
                    <p class="text-gray-300">Platform to convert Domains into Content websites.</p>
                  </div>
                </div>
              </div>
              <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div class="relative space-y-8 py-12 p-8">
                  <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full" style={{ color: "transparent" }} />
                  <div class="space-y-2">
                    <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">ABC.com</h5>
                    <p class="text-gray-300">Platform to create dynamic widgets for websites.</p>
                  </div>
                </div>
              </div>
              <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div class="relative space-y-8 py-12 p-8">
                  <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full" style={{ color: "transparent" }} />
                  <div class="space-y-2">
                    <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">ASD.com</h5>
                    <p class="text-gray-300">API SaaS Platform that provides API Suit to help you ship fast.</p>
                  </div>
                </div>
              </div>
              <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div class="relative space-y-8 py-12 p-8">
                  <img src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width="200" height="200" class="w-12 h-12 rounded-full" style={{ color: "transparent" }} />
                  <div class="space-y-2">
                    <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">TMK.co</h5>
                    <p class="text-gray-300">Chrome Extension that lets you add ChatGPT on any website</p>
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
        <link rel="icon" href="/favicon.png" />
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
