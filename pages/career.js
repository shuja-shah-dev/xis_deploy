import React from 'react'
import { useAuth } from "@/common/authProvider";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { Roboto, Lato } from 'next/font/google'
 

const roboto = Roboto({
  weight: ['100', '300', '400', '500','700'],
  subsets: ['latin'],
})

const Career = () => {
  const controller = useRouter();
    const { accessToken } = useAuth();

  return accessToken ? (
    <>
       <Head>
        <title>xis.ai - Careers</title>
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <meta
          name="description"
          content="XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a mission to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence. Our team of innovators and AI enthusiasts is dedicated to pushing the boundaries of what's possible with AI technology. We believe in the potential of AI to transform industries"
        />
        <meta property="og:title" content="Careers - XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a mission to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={`${roboto.className} container fadeInUp animated justify-center items-center text-5xl text-center flex h-[100vh] mx-auto w-full`}>
        Coming Soon!
      </div>
    </>
) : (
  <>
    <Head>
        <title>xis.ai - Careers</title>
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <meta
          name="description"
          content="XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a mission to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence. Our team of innovators and AI enthusiasts is dedicated to pushing the boundaries of what's possible with AI technology. We believe in the potential of AI to transform industries"
        />
        <meta property="og:title" content="Careers - XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a mission to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <Typography sx={{width: "100%", textAlign: "Center"}}>Permission Denied.</Typography>
        <Typography sx={{width: "100%", textAlign: "Center"}}>Please Login to continue.</Typography>
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