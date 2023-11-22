import Image from "next/image";
import ParallaxScroll from "./parallaxScroll";
import { useAuth } from "@/common/authProvider";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import 'intersection-observer';
import { useEffect } from "react";
import { useState } from "react";
import { Roboto, Lato } from 'next/font/google'
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

 

const roboto = Roboto({
  weight: ['100', '300', '400', '500','700'],
  subsets: ['latin'],
})



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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, phone, email, subject, desc);
        try {
            const data = { name, phone, email, subject, desc }
            const response = await fetch('http://localhost:3000/api/postcontact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log('Success:', result);
            setName('')
            setPhone('')
            setEmail('')
            setSubject('')
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [desc, setDesc] = useState('')

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'phone') {
            setPhone(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'subject') {
            setSubject(e.target.value)
        }
        else if (e.target.name == 'desc') {
            setDesc(e.target.value)
        }
    }

    return accessToken ? (
        <>
 <Head>
        <title>xis.ai - Contact us</title>
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <meta
          name="description"
          content="XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a mission to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence. Our team of innovators and AI enthusiasts is dedicated to pushing the boundaries of what's possible with AI technology. We believe in the potential of AI to transform industries"
        />
        <meta property="og:title" content="Contact us - XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a mission to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
            <div className="justify-center mt-12 text-center items-center mx-auto w-100">
                <h1 className={` ${roboto.className} text-5xl w-full md:text-[5rem] text-center mx-auto`}>
                    Contact Us
                </h1>
                <div className="w-60 md:w-96 mx-auto  border-b border-red-700 dark:border-gray-300"></div>
            </div>
            <section className="flex items-center ">
                <div className="justify-center flex-1 max-w-6xl px-4 py-24 mx-auto md:px-6">
                    <div className="flex flex-wrap px-4 py-8 rounded-md shadow bg-gray-900">
                        <div className="w-full px-4 mb-6 lg:w-2/5 lg:mb-0">
                            <div className="relative h-full p-8 rounded-md bg-gradient-to-r from-blue-900 via-cyan-900 to-sky-900">
                                <div className="absolute bottom-0 right-0 items-center justify-center hidden lg:inline-flex">
                                    <svg width="290" height="166" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="paint0_linear_228_431" x1="152.25" y1="161.063" x2="154.33"
                                                y2="4.773" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#fff" />
                                                <stop offset="1" stopColor="#fff" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_228_431" x1="133.019" y1="80.334" x2="3.944"
                                                y2="3.188" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#246151" />
                                                <stop offset=".422" stopColor="#A7C6BC" />
                                                <stop offset=".865" stopColor="#73CADC" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_228_431" x1="133.019" y1="165.839" x2="3.944"
                                                y2="88.693" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#246151" />
                                                <stop offset=".422" stopColor="#A7C6BC" />
                                                <stop offset=".865" stopColor="#73CADC" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_228_431" x1="151.307" y1="80.335" x2="280.382"
                                                y2="3.188" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#246151" />
                                                <stop offset=".422" stopColor="#A7C6BC" />
                                                <stop offset=".865" stopColor="#73CADC" />
                                            </linearGradient>
                                            <linearGradient id="paint4_linear_228_431" x1="151.307" y1="165.839" x2="280.382"
                                                y2="88.693" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#246151" />
                                                <stop offset=".422" stopColor="#A7C6BC" />
                                                <stop offset=".865" stopColor="#73CADC" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <h2 className="mb-10 text-xl sm:text-3xl font-bold text-blue-50 dark:text-gray-300">Contact </h2>

                                <div className="flex mb-8 text-gray-400 md:items-center dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-6 h-6  text-gray-100 dark:text-gray-400 bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z">
                                        </path>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                    </svg>
                                    <div
                                        className="w-full ml-2 text-xs sm:text-lg font-semibold tracking-wide text-gray-200 dark:text-gray-400">
                                        Theodor-Schweitzer-Str. 1+3 75447 Sternenfels
                                    </div>
                                </div>
                                <div className="flex mb-8 text-gray-100 md:items-center dark:text-gray-400">
                                <PhoneIphoneIcon />
                                    <div
                                        className="max-w-xl ml-2 text-xs sm:text-lg  font-semibold tracking-wide text-gray-200 dark:text-gray-400">
                                        +49 7045 2044 560
                                    </div>
                                </div>
                                <div className="flex mb-8 text-gray-100 md:items-center dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 text-gray-100 dark:text-gray-400 bi bi-telephone" viewBox="0 0 16 16">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                    <div
                                        className="max-w-xl ml-2 text-xs sm:text-lg  font-semibold tracking-wide text-gray-200 dark:text-gray-400">
                                        +1 248-843-1760
                                    </div>
                                </div>
                                <div className="flex text-gray-100 md:items-center dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 text-gray-100 bi bi-envelope-open dark:text-gray-400 "
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                                    </svg>
                                    <div
                                        className="max-w-xl ml-2 text-xs sm:text-lg  font-semibold tracking-wide text-gray-200 dark:text-gray-400">
                                        contact@xray-lab.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-6 lg:mb-0 lg:w-3/5">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-wrap mb-6 -mx-3">
                                    <div className="w-full px-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 font-bold tracking-wide  uppercase text-gray-400">
                                            Name
                                        </label>
                                        <input
                                            className="w-full p-4 mr-3 text-sm bg-gray-800 leading-tight  bg-transparent border-b border-gray-300 appearance-none dark:border-gray-600 focus:outline-none dark:focus:bg-gray-800 text-gray-400 focus:bg-gray-800"
                                            type="text" name="name" onChange={handleChange} value={name} id="name" placeholder="Your full name...." />
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-6 -mx-3">
                                    <div className="w-full px-3">
                                        <label
                                            htmlFor="phone"
                                            className="block mb-2 font-bold tracking-wide  uppercase text-gray-400">
                                            Phone number
                                        </label>
                                        <input
                                            className="w-full p-4 mr-3 text-sm bg-gray-800 leading-tight  bg-transparent border-b border-gray-300 appearance-none dark:border-gray-600 focus:outline-none dark:focus:bg-gray-800 text-gray-400 focus:bg-gray-800"
                                            type="phone" id="phone" value={phone} onChange={handleChange} name="phone" placeholder="Your Phone number...." />
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-6 -mx-3">
                                    <div className="w-full px-3">
                                        <label
                                            htmlFor="subject"
                                            className="block mb-2 font-bold tracking-wide  uppercase text-gray-400">
                                            Subject
                                        </label>
                                        <input
                                            className="w-full p-4 mr-3 text-sm bg-gray-800 leading-tight  bg-transparent border-b border-gray-300 appearance-none dark:border-gray-600 dark:focus:bg-gray-800 text-gray-400 focus:outline-none focus:bg-gray-800"
                                            type="text" id="subject" value={subject} onChange={handleChange} name="subject" placeholder="I'm asking for...." />
                                    </div>
                                </div>
                                <div className="flex flex-wrap mb-6 -mx-3">
                                    <div className="w-full px-3">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 font-bold tracking-wide uppercase text-gray-400">
                                            Email Address
                                        </label>
                                        <input
                                            className="w-full p-4 mr-3 text-sm bg-gray-800 leading-tight  bg-transparent border-b border-gray-300 appearance-none dark:border-gray-600 dark:focus:bg-gray-800 text-gray-400 focus:outline-none focus:bg-gray-800"
                                            type="email" id="email" value={email} onChange={handleChange} name="email" placeholder="abc@gmail.com" />
                                    </div>
                                </div>
                                <div className="w-full px-3 mb-6 -mx-3">
                                    <label
                                        htmlFor="desc"
                                        className="block mb-2 font-bold tracking-wide  uppercase text-gray-400">
                                        Your Message
                                    </label>
                                    <textarea rows="4" type="message" name="desc" onChange={handleChange} value={desc} id="desc" placeholder="Write a message..." required=""
                                        className="w-full p-4 mr-3 text-sm leading-tight  bg-transparent border-b border-gray-300 appearance-none dark:focus:bg-gray-800 dark:border-gray-600 text-gray-400 focus:outline-none focus:bg-gray-800" />
                                </div>
                                <div className="px-2">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 font-medium text-gray-100 bg-[#1e3a8a] rounded-md shadow hover:bg-blue-900">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



        </>
    ) : (
        <>
           <Head>
        <title>xis.ai - Contact us</title>
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <meta
          name="description"
          content="XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a mission to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence. Our team of innovators and AI enthusiasts is dedicated to pushing the boundaries of what's possible with AI technology. We believe in the potential of AI to transform industries"
        />
        <meta property="og:title" content="Contact us - XIS AI is a cutting-edge AI startup of XRAY-LAB and is on a mission to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence." />
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

export default contact;
