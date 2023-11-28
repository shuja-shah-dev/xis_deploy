import { useAuth } from "@/common/authProvider";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BASE_URL, API_CONFIG } from "@/common/base_config";
import ApiClient from "@/bin/ApiClient";
import { Alert } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";


const Login = () => {
  const { setAccessToken } = useAuth();

  const email = useRef();
  const password = useRef();
  const [error, setErrror] = useState("");

  const controller = useRouter();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setErrror("");
      }, 4000);
    }
  }, [error]);

  const handleAuth = async () => {
    const apiClient = new ApiClient(BASE_URL, API_CONFIG);
    const extract = await apiClient.postApi("login", {
      email: email.current.value,
      password: password.current.value,
    });

    if (!extract.success) {
      const { code } = extract;
      const message = Object.keys(code)[0];
      setErrror(code[message]);
      return;
    }

    const { code } = extract;
    const { token } = code;
    setAccessToken(token);
    controller.push("/Home");
  };

  return (
    <>
      <Head>
        <title>xis.ai - Login</title>
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <meta property="og:title" content="XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a mission to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence." />
        <meta
          name="description"
          content="Login - XIS AI specializes in AI detection, AI robotics, and web technologies. Explore our cutting-edge solutions in computer vision, precision recall, and robotic inspection."
        />
         <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png`}
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1

            className="flex items-center mb-6 text-2xl font-semibold text-white"
          >
            <Image
              width={400}
              height={400}
              className="w-full h-20 mr-2"
              src="/Asset.png"
              alt="logo"
            />
          </h1>
          <div className="w-full bg-gray-800 shadow-lg shadow-sky-400 rounded-lg  border md:mt-0 sm:max-w-md xl:p-0  border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAuth();
                }}
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    ref={email}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                    ref={password}
                  />
                </div>
                {error && (
                  <Alert severity="error">
                    {error ? error : "Something went wrong"}
                  </Alert>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-sky-500 hover:bg-sky-500 focus:ring-1 focus:outline-none focus:ring-sky-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-500 dark:hover:bg-sky-500 dark:focus:ring-sky-500"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAuth();
                  }}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
