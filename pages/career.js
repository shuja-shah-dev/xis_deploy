import React from 'react'
import { useAuth } from "@/common/authProvider";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { Roboto, Lato } from 'next/font/google'


const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
})

const Career = () => {
  const controller = useRouter();
  const { accessToken } = useAuth();

  return accessToken ? (
    <>
      <Head>
        <title>Careers - xis.ai</title>
        <meta
          name="description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="keywords" content="Defect Detection, AI Detection, AI Detector, AI Robotics, AI Web Technologies, Computer Vision, Precision Recall, Robotic Inspection" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}career`} />

        <meta property="og:title"
          content="Careers - Simplified Edge AI for Industrial Inspection"
        />
        <meta property="og:description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}opengraph-image.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
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
      <div className={`${roboto.className} container fadeInUp animated justify-center items-center text-5xl text-center flex h-[100vh] mx-auto w-full`}>
        <h1>Coming Soon!</h1>
      </div>
    </>
  ) : (
    <>
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
          <Typography sx={{ width: "100%", textAlign: "Center" }}>Permission Denied.</Typography>
          <Typography sx={{ width: "100%", textAlign: "Center" }}>Please Login to continue.</Typography>
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
}

export default Career;