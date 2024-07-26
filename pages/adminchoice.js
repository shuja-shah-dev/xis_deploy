import { useAuth } from '@/common/authProvider';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const adminchoice = () => {
const controller = useRouter();
  const { accessToken, logout} = useAuth();

    return accessToken ? (
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <h1 className="text-3xl font-bold mb-8">Welcome to the Admin Dashboard</h1>
          <div className="flex gap-8 text-lg">
            <Link href="/blogadmin">
              <div className="bg-purple-900 text-white px-4 py-2 rounded">Post Blog</div>
            </Link>
            <Link href="/jobadmin">
              <div className="bg-blue-900 text-white px-4 py-2 rounded ">Post Job</div>
              </Link>
              <div className="bg-green-900 text-white px-4 py-2 rounded cursor-pointer" onClick={()=> logout()}>Logout</div>
     
          </div>
        </div>
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
                  controller.push("/_");
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

export default adminchoice