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
                    General - contact@xis.ai.io
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Investment - ir@xis.ai.io
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Media - media@xis.ai.io
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Partnership - partner@xis.ai.io
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Career - apply@xis.ai.io
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
              <h2 className="title-font font-medium flex text-sky-400 tracking-widest text-base mb-3 items-center cursor-pointer">
                Contact Us   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2 items-center" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"></div>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-base text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2023 Xis.ai Inc.
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
