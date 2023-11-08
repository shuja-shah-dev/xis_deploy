import React from 'react'
import { useAuth } from "@/common/authProvider";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Typography } from "@mui/material";

const Career = () => {
  const controller = useRouter();
    const { accessToken } = useAuth();

  return accessToken ? (
    <>
      <div className='container fadeInUp animated justify-center items-center text-5xl text-center flex h-[100vh] mx-auto w-full'>


        Coming Soon!


      </div>
    </>
) : (
  <>
    <Head>
      <title>xis.ai</title>
      <meta name="description" content="XIS AI, AI startup, industrial quality inspection, process monitoring" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16"  />

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