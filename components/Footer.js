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
      <footer className="text-gray-600 relative bg-black">
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
              <p className="title-font font-medium text-gray-500 transition transform duration-500 hover:scale-95 tracking-widest text-xl mb-3">
                <Link href="/about" aria-label="About">
                  About Us
                </Link>
              </p>
              <nav className="list-none mb-10">
                <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  <Link href="/impressum" aria-label="Impressum">
                    Impressum
                  </Link>
                </li>
                <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  <Link href="/agb" aria-label="Terms and Conditions / AGB">
                    Terms and Conditions / AGB
                  </Link>
                </li>
                <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  <Link href="/AGB_en.pdf" download="AGB" aria-label="About">
                    General Terms and Conditions
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className="title-font transition transform duration-500 hover:scale-95 font-medium text-gray-500 tracking-widest text-xl mb-3">
                <Link href="/certificates" aria-label="Certificates">
                  Certificates
                </Link>
              </p>
              <nav className="list-none mb-10">
                <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  <Link href="/cookie" aria-label="Cookie Directive">
                    Cookie Directive (EU)
                  </Link>
                </li>
                <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  <Link href="/Privacy" aria-label="Privacy">
                    Data Privacy Policy
                  </Link>
                </li>
                <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  <Link href="/dpd_customer_suppler_en.pdf" download="Data/Protection" aria-label="Data/Protection">
                    Data Protection Declaration
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className="title-font font-medium  transition transform duration-500 hover:scale-95 text-sky-400 tracking-widest text-xl mb-3 cursor-pointer">
                <Link href="/contact" aria-label="Contact">
                  Contact Us
                </Link>
              </p>
              <nav className="list-none mb-10">
                <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  <Link href="/contact" aria-label="Contact">
                    <PhoneIphoneIcon /> +49 7045 2044 560
                  </Link>
                </li>
                <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  <Link href="/contact" aria-label="Contact">
                    <CallIcon /> +1 248-843-1760
                  </Link>
                </li>
                <li className="pb-1 text-gray-600 text-lg hover:text-gray-700">
                  <Link href="/contact" aria-label="Contact">
                    <EmailIcon /> contact@xray-lab.com
                  </Link>
                </li>
              </nav>
              <div className="cursor-pointer w-full flex justify-center md:justify-start items-center">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61552506112246"
                  aria-label="Facebook"
                >
                  <FacebookOutlinedIcon fontSize="large" />{" "}
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/xis.ai.official/"
                  aria-label="Instagram"
                >
                  <InstagramIcon fontSize="large" />{" "}
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/xis-ai/mycompany/"
                  aria-label="Linkedin"
                >
                  <LinkedInIcon fontSize="large" />
                </Link>
                <Link
                  target="_blank"
                  href="https://medium.com/@xis.ai"
                  aria-label="Medium"
                >
                  <svg  width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="12.5" r="2.5" stroke="#4b5563" strokeWidth="1.5" />
                    <ellipse cx="13.5" cy="12.5" rx="1.5" ry="2.5" stroke="#4b5563" strokeWidth="1.5" />
                    <ellipse cx="18" cy="12.5" rx="1" ry="2.5" stroke="#4b5563" strokeWidth="1.5" />
                    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#4b5563" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>

                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@xisaiofficial"
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
          <div className="container px-5 py-8 mx-auto flex justify-center items-center sm:flex-row flex-col">
            <p className="text-base md:text-xl text-gray-500 sm:ml-6 sm:mt-0">
              © 2023 XRAY LAB Industrial Services GmbH | All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;