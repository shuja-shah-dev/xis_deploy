import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Box } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

const Header = () => {
  const email = "muti.rehman@xray-lab.com";
  const subject = "Request Partnership";
  const body = "";
  const handleClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const gradientStyleMain = {
    background:
      "linear-gradient(180deg, rgba(48, 20, 102, 0.25) 0%, rgba(62, 95, 170, 0.25) 100%)",
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className=" font-poppins flex px-10 md:px-0 justify-between md:justify-around items-center py-6 text-white z-50 relative">
        <div>
          <Link href="/">
            <Image src="/Asset.png" width={90} height={90} alt="logo" />
          </Link>
        </div>

        <div className=" gap-4 text-sm hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/Products">Products</Link>
          <Link href="/Industries">Industries</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blogs">News & Blogs</Link>

          <div onClick={handleClick} className="cursor-pointer">
            Partnership
          </div>
        </div>

        <div className="hidden sm:flex gap-4">
          {/* <div className="sm:flex md:hidden lg:flex items-center ">
            EN <IoIosArrowDown cursor="pointer" />
          </div> */}
          <Link href="/TalkWithFounder">
            <button className="py-1 px-3 rounded-3xl border-[#5D38C2] border-2 md:hidden lg:flex">
              Talk With Founder
            </button>
          </Link>

          <Link href="/contact">
            <button
              style={gradientStyleMain}
              className="py-1 px-3 rounded-3xl backdrop-blur-2xl border-[#5D38C2] border-2"
            >
              Contact
            </button>
          </Link>
        </div>
        <div
          onClick={toggleMobileMenu}
          aria-controls="mobile-menu-2"
          aria-expanded={isMobileMenuOpen}
          data-collapse-toggle="mobile-menu-2"
          className="block md:hidden cursor-pointer"
        >
          <IoMenu size={40} />
        </div>
      </div>

      {isMobileMenuOpen && (
        <Box
          sx={{
            background: "rgb(2 6 23)",
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
            <ul className="flex flex-col items-start justify-start w-full font-poppins">
              <li className="relative items-start justify-start">
                <Link href="/" aria-label="Home">
                  Home
                </Link>
              </li>
              <li className="relative items-start justify-start">
                <Link href="/about" aria-label="About">
                  About Us
                </Link>
              </li>
              <li className="relative items-start justify-start">
                <Link href="/blogs" aria-label="Blogs">
                  News & Blogs
                </Link>
              </li>
              {/* <li className="relative items-start justify-start">
                <Link href="/career" aria-label="Career">
                  Career
                </Link>
              </li> */}
              {/* <li className="relative items-start justify-start"> */}
              {/* <Link href="/contact" aria-label="Contact">
                Request Partnership
              </Link> */}
              {/* </li> */}
              <li className="relative items-start justify-start">
                <Link href="/Products" aria-label="Contact">
                  Products
                </Link>
              </li>
              <li className="relative items-start justify-start">
                <Link href="/Industries" aria-label="Contact">
                  Industries
                </Link>
              </li>
            </ul>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;
