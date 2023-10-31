import { useAuth } from "@/common/authProvider";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BASE_URL, API_CONFIG } from "@/common/base_config";
import ApiClient from "@/bin/ApiClient";
import { Alert } from "@mui/material";
import { useRouter } from "next/router";

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
    <section className="bg-[#111111]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            width={400}
            height={400}
            className="w-full h-20 mr-2"
            src="/Asset.png"
            alt="logo"
          />
        </a>
        <div className="w-full bg-white shadow-lg shadow-sky-400 rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
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
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  ref={email}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
  );
};

export default Login;
