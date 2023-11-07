import Image from "next/image";
import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CallIcon from '@mui/icons-material/Call';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";


const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 relative bg-black body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full  px-4">
              <Image src="/Asset.png" className="justify-center mx-auto items-center text-center mb-10" width={300} height={400} />
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <Link href="/about"> <h2 className="title-font font-medium text-gray-500 tracking-widest text-base mb-3">
                About Us
              </h2></Link> 
              <nav className="list-none mb-10">
                <li className="pb-1">
                  <a href="/#" className="text-gray-600 hover:text-gray-800">Impressum</a>
                </li>
                <li className="pb-1">
                  <a href="/#" className="text-gray-600 hover:text-gray-800">Terms and Conditions / AGB</a>
                </li>
                <li className="pb-1">
                  <a href="/#" className="text-gray-600 hover:text-gray-800">
                    General Terms and Conditions
                  </a>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-500 tracking-widest text-base mb-3">
                Certificates
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-1">
                  <a href="/#" className="text-gray-600 hover:text-gray-800 ">Cookie Directive (EU)</a>
                </li>
                <li className="pb-1">
                  <a href="/#" className="text-gray-600 hover:text-gray-800 ">Data Privacy Policy</a>
                </li>
                <li className="pb-1">
                  <a href="/#" className="text-gray-600 hover:text-gray-800 ">
                    Data Protection Declarations
                  </a>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  text-sky-400 tracking-widest text-base mb-3 cursor-pointer">
                Contact Us
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-1">
                  <CallIcon /> <a href="/#" className="text-gray-600 hover:text-gray-800"> 0800 972 9522</a>
                </li>
                <li className="pb-1">
                  <PhoneIphoneIcon /> <a href="/#" className="text-gray-600 hover:text-gray-800"> +49 7045 204450</a>
                </li>
                <li className="pb-1">
                  <EmailIcon /> <a href="/#" className="text-gray-600 hover:text-gray-800"> contact@xray-lab.com</a></li>
              </nav>
              <div className="cursor-pointer"><FacebookOutlinedIcon /> <TwitterIcon /> <InstagramIcon /> <LinkedInIcon /> <YouTubeIcon /></div>
            </div>
          </div>
        </div>
        <hr className="h-px bg-gray-500 border-0 "></hr>
        <div className="bg-black">
          <div className="container px-5  py-8 mx-auto flex justify-center items-center sm:flex-row flex-col">
            <p className="text-xl text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2023 XRAY LAB Industrial Services GmbH | All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
