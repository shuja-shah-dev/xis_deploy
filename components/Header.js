import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

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
  return (
    <div className=" flex px-10 md:px-0 justify-between md:justify-around items-center py-6 text-white z-50 relative">
      <div>
        <Link href="/">
          <Image src="/Asset.png" width={90} height={90} alt="logo" />
        </Link>
      </div>

      <div className=" gap-4 text-sm hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="Products">Products</Link>
        <Link href="Industries">Industries</Link>
        <Link href="AboutUs">About Us</Link>
        <Link href="Blogs">News & Blogs</Link>

        <div onClick={handleClick} className="cursor-pointer">
          Partnership
        </div>
      </div>

      <div className="hidden sm:flex gap-4">
        <div className="flex items-center">
          EN <IoIosArrowDown cursor="pointer" />
        </div>
        <Link href="TalkWithFounder">
          <button className="py-1 px-3 rounded-3xl border-[#5D38C2] border-2">
            Talk With Founder
          </button>
        </Link>

        <Link href="Contact">
          <button
            style={gradientStyleMain}
            className="py-1 px-3 rounded-3xl border-[#5D38C2] border-2"
          >
            Contact
          </button>
        </Link>
      </div>
      <div className="block md:hidden">
        <IoMenu size={40} />
      </div>
    </div>
  );
};

export default Header;
