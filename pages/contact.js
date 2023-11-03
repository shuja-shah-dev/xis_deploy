import Image from "next/image";
import ParallaxScroll from "./parallaxScroll";
import { useAuth } from "@/common/authProvider";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import 'intersection-observer';
import { useEffect } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import YouTubeIcon from '@mui/icons-material/YouTube';


const contact = () => {
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
            <div style={{ overflow: "hidden" }} className="relative w-full overflow-hidden">
                <Image
                    width={5760}
                    height={3840}
                    className="object-cover w-full max-w-full h-[50vh] -z-10 opacity-90 overflow-hidden "
                    src="/contacts.jpg"
                    alt="contact"

                />
                <div style={{fontWeight: "600", top: "50%" }} className="absolute text-5xl left-[2%]   text-white  sm:text-[5rem]">
                    Contact
                    <button style={{borderRadius: "999px",  fontWeight: 500, marginLeft: "3rem" }} className=" btn btn-outline-white bottom-0 sm:bottom-2 text-white border left-full sm:text-2xl absolute w-[100px] sm:w-[150px] text-lg  rounded-2xl sm:px-2 py-2">
                        Call Now
                    </button>
                </div>

            </div>
            <div className="justify-center my-12 text-center items-center mx-auto w-100">
                <h1 style={{ fontWeight: "200", fontSize: "5rem", width: "60%",  }} className="text-5xl text-sky-400 text-center mx-auto">
                    Here to Help, available <span style={{ fontWeight: "600" }}>24/7.</span>
                </h1>
            </div>
            <section class="">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
             
                <h2
                    class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                    Get in Touch
                </h2>
                <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
                    dictumst
                </p>
            </div>
        </div>
        <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
                <div class="h-full pr-6">
                    <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                        Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                        sagittis ante, ac tincidunt sem venenatis ut.
                    </p>
                  
                </div>
                <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 class="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                    <form id="contactForm">
                        <div class="mb-6">
                            <div class="mx-0 mb-1 sm:mb-4">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div class="mx-0 mb-1 sm:mb-4">
                                <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="w-full bg-sky-400 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

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

export default contact;
