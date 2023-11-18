import React, { useEffect, useState } from "react";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { Box } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";


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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const router = useRouter();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.pathname]);

  return (
    <>
      <header
        className="text-white z-20 top-0 sticky p-2 bg-black"
      >
        <nav className="px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <Link
              href="/"
              aria-label="Home"
              className="flex font-medium focus:outline-none items-center text-white"
            >
              <Image src="/Asset.png" width={100} height={100} alt="Logo" />
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                href="/contact"
                aria-label="Contact"
                className="text-white border hover:text-blue-500 hover:scale-95 transition transform duration-500 font-medium rounded-lg text-sm lg:text-xl px-3 lg:px-5 py-1 lg:py-2.5 mr-2 dark:bg-primary-600 hover:border-blue-500 focus:outline-none "
              >
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
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <Link href="/" aria-label="Home" className="focus:outline-none">
                  <li className="relative group focus:outline-none text-xl">
                    Home
                    {/* <ExpandMoreIcon /> */}
                  </li>
                </Link>

                <Link href="/about" aria-label="About" className="focus:outline-none">
                  <li className="relative group focus:outline-none text-xl">
                    About Us
                    {/* <ul className="absolute bg-[#000] shadow-[0px_2px_12px_0px_#0000001f] text-[#aaa] w-[200px] p-3 space-y-3 rounded hidden group-hover:block">
                  <li>Menu 1</li>

                  <li>Menu 2</li>

                  <li>Menu 3</li>

                  <li>Menu 4</li>
                </ul> */}
                  </li>
                </Link>
                <Link href="/career" aria-label="Career" className="focus:outline-none">
                  <li className="relative group focus:outline-none text-xl">Careers</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {isMobileMenuOpen && (
        <Box
          sx={{
            background: "rgb(31, 41, 54)",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            zIndex: "999",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: "2rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image src="/Asset.png" width={100} height={100} alt="" />
            <CloseOutlined
              onClick={toggleMobileMenu}
              sx={{ color: "white", fontSize: "2rem" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1rem",
              height: "50%",
              width: "100%",
              fontFamily: "Poppins, Roboto, sans-serif",
              fontSize: "1.5rem",
              fontWeight: "600",
              listStyle: "none",
              mt: "1rem",
              p: "1.44rem 0",
            }}
          >
            <ul className="flex flex-col items-start justify-start w-full">
              <Link href="/" aria-label="Home">
                <li className="relative items-start justify-start">Home</li>
              </Link>
              <Link href="/about" aria-label="About">
                <li className="relative items-start justify-start">About Us</li>
              </Link>
              <Link href="/career" aria-label="Career">
                <li className="relative items-start justify-start">Career</li>
              </Link>
              <Link href="/contact" aria-label="Contact">
                <li className="relative items-start justify-start">Contact</li>
              </Link>
            </ul>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
