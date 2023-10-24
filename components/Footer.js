import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 relative bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-500 tracking-widest text-base mb-3">
                Contact us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    General - contact@lunit.io
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Investment - ir@lunit.io
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Media - media@lunit.io
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Partnership - partner@lunit.io
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Career - apply@lunit.io
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-500 tracking-widest text-base mb-3">
                Offices
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Seoul HQ </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Boston, USA</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Amsterdam, The Netherlands
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Shanghai, China
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4"></div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-sky-400 tracking-widest text-base mb-3">
                Contact Us
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"></div>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-base text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2021 Lunit Inc.
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-500 ml-1"
                target="_blank"
              >
                Privacy Policy Information Security and Medical Device
                Registration
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
