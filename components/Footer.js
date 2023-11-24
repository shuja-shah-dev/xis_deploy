import Image from "next/image";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CallIcon from "@mui/icons-material/Call";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 relative bg-black ">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full  px-4">
              <Link href="/" aria-label="Home">
                <Image
                  src="/Asset.png"
                  alt="Logo"
                  className="justify-center mx-auto items-center text-center mb-10"
                  width={300}
                  height={400}
                />
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <Link href="/about" aria-label="About">
                {" "}
                <h2 className="title-font font-medium text-gray-500 transition transform duration-500 hover:scale-95 tracking-widest text-xl mb-3">
                  About Us
                </h2>
              </Link>
              <nav className="list-none mb-10">
                <Link href="/about" aria-label="About"><li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  Impressum
                </li></Link>
                <Link href="/about" aria-label="About"> <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  Terms and Conditions / AGB
                </li></Link>
                <Link href="/about" aria-label="About"> <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  General Terms and Conditions
                </li></Link>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <Link href="/Privacy/" aria-label="Privacy"> <h2 className="title-font transition transform duration-500 hover:scale-95 font-medium text-gray-500 tracking-widest text-xl mb-3">
                Certificates
              </h2></Link>
              <nav className="list-none mb-10">
                {/* <li className="pb-1">
                  <a href="/#" className="text-gray-600 text-lg hover:text-gray-800 ">Cookie Directive (EU)</a>
                </li> */}
                <Link href="/Privacy/" aria-label="Privacy">
                  <li className="pb-1 text-gray-600 text-lg hover:text-gray-700 ">
                    Data Privacy Policy
                  </li>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <Link href="/contact" aria-label="Contact">
                <h2 className="title-font font-medium  transition transform duration-500 hover:scale-95 text-sky-400 tracking-widest text-xl mb-3 cursor-pointer">
                  Contact Us
                </h2>
              </Link>
              <nav className="list-none mb-10">
                <Link href="/contact" aria-label="Contact">
                  <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                    <PhoneIphoneIcon /> +49 7045 2044 560
                  </li>
                </Link>
                <Link href="/contact" aria-label="Contact">
                  <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                    <CallIcon /> +1 248-843-1760
                  </li>
                </Link>
                <Link href="/contact" aria-label="Contact">
                  <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                    <EmailIcon /> contact@xray-lab.com
                  </li>
                </Link>
              </nav>
              <div className="cursor-pointer">
              <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61552506112246"
                  aria-label="Facebook"
                >
                <FacebookOutlinedIcon fontSize="large" />{" "}
                </Link>
                {/* <TwitterIcon fontSize="large" />{" "} */}
                {/* <InstagramIcon fontSize="large" />{" "} */}
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/xis-ai/mycompany/"
                  aria-label="Linkedin"
                >
                  <LinkedInIcon fontSize="large" />
                </Link>{" "}
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@xray-lab2514"
                  aria-label="Youtube"
                >
                <YouTubeIcon fontSize="large" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px bg-gray-500 border-0"></hr>
        <div className="bg-black">
          <div className="container px-5  py-8 mx-auto flex justify-center items-center sm:flex-row flex-col">
            <p className="text-base md:text-xl text-gray-500 sm:ml-6 sm:mt-0 ">
              © 2023 XRAY LAB Industrial Services GmbH | All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
