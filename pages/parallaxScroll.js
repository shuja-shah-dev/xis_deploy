import * as React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../styles/home.module.css';

const ParallaxScroll = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' };

  return (
    <>
      <section className="text-white block relative bg-[#111111] ">
          <div className="container bg-[#111111] text-white px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap md:-m-2 -m-1"></div>
            <div className="pb-16 justify-center text-center items-center w-full">
            </div>
              <h1 className="text-4xl font-bold">
                Saving lives through technology
              </h1>
        

            <section className="text-gray-600 body-font w-full">
      
              <div className="container  mx-auto">
                
                <div className="flex flex-wrap -mx-4 -mb-10 ">
                  <div className="relative cursor-pointer isolate rounded-lg h-[50vh] flex flex-col w-[48%] justify-start overflow-hidden  px-8 pb-8 mx-auto">
                    <img
                      src="/xray2.png"
                      alt="AI for cancer detection"
                      className="absolute cursor-pointer inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 "></div>
                    <h3 className="z-10 mt-3 text-sm  text-white">
                      Cancer Screening AI
                    </h3>
                    <h1 className="z-10 mt-3 text-3xl font-bold text-white">
                      AI for cancer detection
                    </h1>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      By detecting early-stage cancers, AI enables timely
                      management that can increase chance of survival.
                    </div>
                  </div>
                  <div className="relative isolate cursor-pointer rounded-lg h-[50vh] flex flex-col w-[48%] justify-start overflow-hidden  px-8 pb-8 mx-auto">
                    <img
                      src="/xray3.png"
                      alt="AI biomarker for immunotherapy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 "></div>
                    <h3 className="z-10 mt-3 text-sm  text-white">
                      Cancer Treatment AI
                    </h3>
                    <h1 className="z-10 mt-3 text-3xl font-bold text-white">
                      AI biomarker for immunotherapy
                    </h1>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                      By accurately predicting treatment response, AI helps
                      increase immunotherapy efficacy.
                    </div>
                  </div>
                </div>

                <section className="text-gray-600 body-font">
                  <div className="container px-5  py-24 mx-auto">
                    <div className="flex flex-wrap gap-4">
                      <div className="relative cursor-pointer isolate rounded h-[40vh] flex flex-col w-[30%] justify-start overflow-hidden  px-8 pb-8 ">
                        <img
                          src="/xray.png"
                          alt="AI biomarker for immunotherapy"
                          className="absolute inset-0 h-full rounded w-full object-cover"
                        />
                        <div className="absolute inset-0 "></div>
                        <h3 className="z-10 mt-3 text-sm  text-white">
                          Cancer Treatment AI
                        </h3>
                        <h1 className="z-10 mt-3 text-3xl font-bold text-white">
                          AI biomarker for immunotherapy
                        </h1>
                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                          By accurately predicting treatment response, AI helps
                          increase immunotherapy efficacy.
                        </div>
                      </div>
                      <div className="relative cursor-pointer isolate rounded h-[40vh] flex flex-col w-[30%] overflow-hidden  px-8 pb-8 ">
                        <img
                          src="/xray2.png"
                          alt="AI biomarker for immunotherapy"
                          className="absolute  inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 "></div>
                        <h3 className="z-10 mt-3 text-sm  text-white">
                          Cancer Treatment AI
                        </h3>
                        <h1 className="z-10 mt-3 text-3xl font-bold text-white">
                          AI biomarker for immunotherapy
                        </h1>
                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                          By accurately predicting treatment response, AI helps
                          increase immunotherapy efficacy.
                        </div>
                      </div>
                      <div className="relative isolate cursor-pointer rounded h-[40vh] flex flex-col w-[30%] justify-start overflow-hidden  px-8 pb-8 ">
                        <img
                          src="/xray3.png"
                          alt="AI biomarker for immunotherapy"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 "></div>
                        <h3 className="z-10 mt-3 text-sm  text-white">
                          Cancer Treatment AI
                        </h3>
                        <h1 className="z-10 mt-3 text-3xl font-bold text-white">
                          AI biomarker for immunotherapy
                        </h1>
                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                          By accurately predicting treatment response, AI helps
                          increase immunotherapy efficacy.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="justify-center  text-white pb-6 text-center items-center w-full">
                  <h1 className="text-5xl">Providing cancer care for all</h1>
                </div>
                <section class="text-gray-600 w-full mt-10 body-font">
                  <div class="container px-5 gap-5 w-full mx-auto flex flex-wrap">
                    <div class="flex flex-wrap w-full lg:w-1/2">
                      <div className="relative  cursor-pointer rounded-lg h-[100%] flex flex-col w-[100%] justify-start overflow-hidden mx-auto">
                        <video
                          className="rounded bg-black h-full relative  object-cover "
                          autoPlay
                          muted
                          playsInline
                          loop
                          src="/map.mp4"
                        ></video>
                        <h1 className="z-0  absolute top-3 text-2xl left-16 font-bold  text-white">
                          Growing users across 2,000 sites and more
                        </h1>
                        <h2 className="z-0 mt-3 absolute bottom-8 left-8 text-5xl font-bold text-white">
                          48+
                        </h2>
                        <p className="z-0 mt-3 absolute bottom-20 left-6 text-md text-white">
                          Countries
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap  rounded-b w-full lg:w-1/3">
                      <div class=" bg-[#222]  border-opacity-60 rounded-lg ">
                        <iframe
                          className="w-full relative rounded-t "
                          src="https://www.youtube.com/embed/y-JcrO77_AM?enablejsapi=1&origin=https%3A%2F%2Fwww.lunit.io&widgetid=1"
                          title=""
                        ></iframe>

                        <div class="p-2">
                          <h2 class="tracking-widest text-lg title-font font-medium text-white mb-2">
                            What will happen when AI professionals work for
                            Healthcare? [ENG cc]
                          </h2>
                          <p class="title-font p-2 text-base font-medium text-gray-500 ">
                            Kyung Hyun Cho, Interim Deputy Director at the
                            Center for Data Science New York University
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div class="container mt-10 px-5 gap-5 w-full mx-auto flex flex-wrap">
                  <div class="flex flex-wrap w-full lg:w-1/2">
                    <div className="relative  cursor-pointer rounded-lg h-[100%] flex flex-col w-[100%] justify-start overflow-hidden mx-auto">
                      <video
                        className="rounded h-full bg-black relative z-0 top-0 right-0 left-0 object-cover "
                        autoPlay
                        muted
                        playsInline
                        loop
                        src="/map.mp4"
                      ></video>
                      <h1 className="z-0  absolute top-3 text-2xl left-16 font-bold  text-white">
                        Growing users across 2,000 sites and more
                      </h1>
                      <h2 className="z-0 mt-3 absolute bottom-8 left-8 text-5xl font-bold text-white">
                        48+
                      </h2>
                      <p className="z-0 mt-3 absolute bottom-20 left-6 text-md text-white">
                        Countries
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-wrap  rounded-b w-full lg:w-1/3">
                    <div class=" bg-[#222]  border-opacity-60 rounded-lg ">
                      <iframe
                        className="w-full relative  rounded-t "
                        src="https://www.youtube.com/embed/y-JcrO77_AM?enablejsapi=1&origin=https%3A%2F%2Fwww.lunit.io&widgetid=1"
                        title=""
                      ></iframe>

                      <div class="p-2">
                        <h2 class="tracking-widest text-lg title-font font-medium text-white mb-2">
                          What will happen when AI professionals work for
                          Healthcare? [ENG cc]
                        </h2>
                        <p class="title-font text-base p-2 font-medium text-gray-500 ">
                          Kyung Hyun Cho, Interim Deputy Director at the Center
                          for Data Science New York University
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center font-bold  text-white my-10 text-center items-center w-full">
                  <h1 className="text-4xl">Learn more about Lunit</h1>
                </div>
            </section>
          </div>
        </section>
    </>
  );
};

export default ParallaxScroll;
