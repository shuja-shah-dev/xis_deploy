import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaMedium } from "react-icons/fa6";
import { HeroBlob } from "./HeroSection";

const Footer = () => {
    const gradientStyle = {
      background:
        "linear-gradient(317deg, rgba(93, 56, 194, 0.25) -1.1%, rgba(182, 61, 232, 0.00) 52.97%)",
      border: "1px solid #5D38C2",
      padding: "6px",
    borderRadius: "12px"
  };
  
  return (
    <div className=" pb-6 pt-24 relative ">
      <div className="absolute inset-0">
        <Image
          src="/Rectangle 75.png"
          alt="footer rectangle"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="min-[2300px]:w-[85%] m-auto">
        <div className="flex flex-col lg:flex-row text-gray-300 gap-14 justify-around pb-24 relative z-10 ">
          <div className=" ml-16  sm:m-auto lg:m-0 text-center lg:text-left">
            <Link href="/">
              <Image src="/Asset.png" width={150} height={100} alt="logo" />
            </Link>

            <p className="mt-4 font-poppins text-left sm:text-center">
              Precision Beyond Perception
            </p>
          </div>

          <div className="text-base flex font-poppins flex-col text-left md:text-left ml-16  sm:m-auto md:m-0 w-1/2 md:w-auto md:flex-row gap-12 md:px-40 lg:px-0">
            <div className="flex flex-col gap-5 ">
              <div className="font-bold font-inter text-xl">
                <Link href="/about" aria-label="About">
                  About Us
                </Link>
              </div>
              <Link href="/impressum" aria-label="Impressum">
                Imprint
              </Link>
              <Link href="/agb" aria-label="Terms and Conditions / AGB">
                Terms and Conditions
              </Link>
              <Link href="/AGB_en.pdf" download="AGB" aria-label="About">
                General Terms and Conditions
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <div className="font-bold text-xl font-inter">
                <Link href="/certificates" aria-label="Certificates">
                  Certificates
                </Link>
              </div>
              <Link href="/cookie" aria-label="Cookie Directive">
                Cookie Directive (EU)
              </Link>
              <Link href="/privacy" aria-label="Privacy">
                Data Privacy Policy
              </Link>
              <Link
                href="/dpd_customer_suppler_en.pdf"
                download="Data/Protection"
                aria-label="Data/Protection"
              >
                Data Protection Declaration
              </Link>
            </div>

            <div className="flex flex-col gap-5 font-inter">
              <div className="font-bold text-xl ">
                <Link href="/contact" aria-label="Contact">
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col justify-center gap-5 md:items-center">
                <Link href="/contact" aria-label="Contact">
                  <div className="flex md:ml-[-20px]">
                    <MdOutlinePhoneIphone size={24} color="white" /> +49 7045
                    2044 560
                  </div>
                </Link>
                <Link href="/contact" aria-label="Contact">
                  <div className="flex md:ml-[-34px]">
                    <MdLocalPhone size={24} color="white" /> +1 248-843-1760
                  </div>
                </Link>

                <Link href="/contact" aria-label="Contact">
                  <div className="flex">
                    <IoMail size={24} color="white" />{" "}
                    <div className="ml-1">contact@xray-lab.com</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-32 md:pb-0 flex flex-col-reverse md:flex-col 2xl:flex-row items-center  2xl:justify-center text-white relative z-10 min-[2000px]:justify-around">
          <div className="text-center sm:text-left mt-6 md:mt-0 px-1 sm:px-0">
            © 2024 XRAY-LAB Industrial Services GmbH | All Rights Reserved.
          </div>
          <div className="flex gap-4 2xl:ml-[360px] md:pt-6 2xl:pt-0">
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61552506112246"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} color="white" />
            </Link>
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://twitter.com/xisai187654"
              aria-label="Twitter"
            >
              <FaTwitter size={24} color="white" />
            </Link>
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://medium.com/@xis.ai/about"
              aria-label="Medium"
            >
              <FaMedium size={24} color="white" />
            </Link>
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://www.instagram.com/xis.ai.official/"
              aria-label="Instagram"
            >
              <FaInstagramSquare size={24} color="white" />
            </Link>
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://www.linkedin.com/company/xis-ai/mycompany/"
              aria-label="Linkedin"
            >
              <FaLinkedin size={24} color="white" />
            </Link>
            <Link
              style={gradientStyle}
              target="_blank"
              href="https://www.youtube.com/@xisaiofficial"
              aria-label="Youtube"
            >
              <FaYoutube size={24} color="white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
