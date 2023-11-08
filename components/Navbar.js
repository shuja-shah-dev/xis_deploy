import React, { useEffect, useState } from "react";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`text-white  z-20 top-0 sticky p-2 ${
        scrolled ? "bg-black" : "backdrop-brightness-90"
      }`}
    >
      <nav className=" px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto ">
          <Link
            href="/Home"
            className="flex title-font font-medium items-start text-white "
          >
            <Image src="/Asset.png" width={100} height={100} alt="" /> 
          </Link>
          <div className="flex items-center lg:order-2">
           <Link href="/Contact" className="text-white border font-medium rounded-lg text-sm px-3 sm:px-5 py-1 sm:py-2.5 mr-2 dark:bg-primary-600 hover:border-blue-500 focus:outline-none "> 
              Contact
            </Link>
            <button
              onClick={toggleMobileMenu}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <Link href="/Home">
                <li className="relative group">
                  Home
                  {/* <ExpandMoreIcon /> */}
                </li>
              </Link>

              <Link href="/About">
                <li className="relative group">
                  About Us
                  {/* <ul className="absolute bg-[#000] shadow-[0px_2px_12px_0px_#0000001f] text-[#aaa] w-[200px] p-3 space-y-3 rounded hidden group-hover:block">
                  <li>Menu 1</li>

                  <li>Menu 2</li>

                  <li>Menu 3</li>

                  <li>Menu 4</li>
                </ul> */}
                </li>
              </Link>
              <Link href="/career">
                <li className="relative group">Careers</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
