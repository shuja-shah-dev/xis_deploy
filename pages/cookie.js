import Head from "next/head";
import Image from "next/image";
import React from "react";
import { HeroBlob } from "@/components/HeroSection";

const Cookie = () => {

  return (
    <>
      <Head>
        <title>Cookies Directive (EU) - xis.ai</title>
        <meta
          name="description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Defect Detection, AI Detection, AI Detector, AI Robotics, AI Web Technologies, Computer Vision, Precision Recall, Robotic Inspection"
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}cookie`}
        />

        <meta
          property="og:title"
          content="Cookies Directive (EU) - Simplified Edge AI for Industrial Inspection"
        />
        <meta
          property="og:description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}opengraph-image.png`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}cookie`}
        />
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@XisAI" />
        <meta
          name="twitter:title"
          content="Simplified Edge AI for Industrial Inspection"
        />
        <meta
          name="twitter:description"
          content="AI startup of XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}opengraph-image.png`}
        />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      </Head>
      <section className="terms-and-conditions relative lg:px-16">
        <HeroBlob
          sx={{
            background: "rgba(62, 95, 170, 0.25)",
            top: "-300px",
            zIndex: "-1",
            right: "100px",
          }}
          key={"UniqueElementor1"}
        />

        <HeroBlob
          sx={{
            right: "10%",
            bottom: "2%",
            zIndex: "-1",
          }}
          key={"NormalSizedBlob"}
        />
        {/* <div className=" absolute right-[0px] top-[100px]  sm:top-[-200px]"> */}
          {/* <Image
            src="/Ellipse 171.png"
            alt="Ellipse "
            height={900}
            width={900}
          />
        </div>

        <div className=" absolute right-[0px] bottom-[400px] sm:bottom-[300px]">
          <Image
            src="/Ellipse 171.png"
            alt="Ellipse "
            height={1000}
            width={1000}
          />
        </div>

        <div className=" absolute left-0 top-[1000px]  sm:top-[600px]">
          <Image
            src="/Ellipse 164.png"
            alt="Ellipse "
            height={900}
            width={900}
          />
          */}
        {/* </div> */}
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 ">
                Cookie Policy (EU)
              </h1>
              <div className="h-1 w-20 bg-[#57C8E7] rounded"></div>
              <p className="md:text-lg text-base mt-4">
                This Cookie Policy was last updated on June 29, 2023 and applies
                to citizens and permanent residents of the European Economic
                Area and Switzerland.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full p-4">
              <div className=" p-6 w-full sm:w-1/2 rounded-lg mb-10">
                <Image
                  className="h-40 rounded  object-center mb-6"
                  src="/Asset.png"
                  alt="XisAi"
                  width={600}
                  height={300}
                  style={{
                    width: "auto",
                  }}
                />
              </div>
              <div className="w-full">
                <p className="font-medium mb-4 text-xl sm:text-2xl">
                  1. Introduction
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Our website, https://xis.ai.com (hereinafter: "The Website")
                  uses cookies and similar technologies (for convenience, all of
                  these are referred to as "cookies"). Cookies are also placed
                  by third parties commissioned by us. In the document below we
                  inform you about the use of cookies on our website.
                </p>
                <p className="font-medium mb-4  text-xl sm:text-2xl">
                  2. What are cookies?
                </p>
                <p className="leading-relaxed mb-4">
                  A cookie is a simple small file that can be sent together with
                  the pages of an Internet address and stored by the web browser
                  on the PC or other device. The information stored therein may
                  be sent to our servers or the servers of relevant third
                  parties during subsequent visits.
                </p>
                <p className="font-medium mb-4 text-xl sm:text-2xl">
                  3. What are scripts?
                </p>
                <p className="leading-relaxed mb-4">
                  A script is a piece of program code used to enable our website
                  functionality and interactivity. This code runs on our servers
                  or on your device.
                </p>
                <p className="font-medium mb-4 text-xl sm:text-2xl">
                  4. What is a web beacon?
                </p>
                <p className="leading-relaxe mb-4">
                  A web beacon (also called a pixel tag) is a small, invisible
                  fragment of text or image on a website that is used to monitor
                  traffic on the website. To make this possible, various data
                  about you is stored using web beacons.
                </p>
                <p className="font-medium mb-4 text-xl sm:text-2xl">
                  5. Cookies
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  5.1 Technical or functional cookies
                </p>
                <p className="leading-relaxed mb-4">
                  Some cookies ensure that parts of our website function
                  properly and your user preferences are remembered. By placing
                  functional cookies we make it easier for you to visit our
                  website. This way, you don't have to enter the same
                  information repeatedly when you visit our website or, for
                  example, your items remain in your shopping cart until you
                  pay. We may place these cookies without your consent.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  5.2 Analytical cookies
                </p>
                <p className="leading-relaxed mb-4">
                  We use analytical cookies to optimize the website experience
                  for our users. These analytical cookies provide us with
                  insights into the use of our website. We ask for your
                  permission to set analytical cookies.
                </p>
                <p className="leading-relaxed mb-4">
                  Some cookies ensure that parts of our website function
                  properly and your user preferences are remembered. By placing
                  functional cookies we make it easier for you to visit our
                  website. This way, you don't have to enter the same
                  information repeatedly when you visit our website or, for
                  example, your items remain in your shopping cart until you
                  pay. We may place these cookies without your consent.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  5.3 Advertising cookies
                </p>
                <p className="leading-relaxed mb-4">
                  We use advertising cookies on this website to gain insight
                  into campaign results. This happens based on a profile we
                  create based on your behavior in https://xis.ai.com . With
                  these cookies you as a website visitor are linked to a unique
                  ID. However, these cookies do not create a profile of your
                  behavior and interests to serve personalized ads.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  5.4 Marketing/Tracking Cookies
                </p>
                <p className="leading-relaxed mb-4">
                  Marketing/tracking cookies are cookies or other form of local
                  storage used to create user profiles, display advertising or
                  track the user within this website or across websites for
                  similar marketing purposes. Since these cookies are marked as
                  tracking cookies, we need your consent to place them.
                </p>
                <p className="leading-relaxed text-lg mb-4">5.5 Social media</p>
                <p className="leading-relaxed mb-4">
                  On our website we have integrated content from Facebook,
                  Twitter, LinkedIn, Instagram and Pinterest to promote websites
                  (e.g. "Like", "Pin") or share (e.g. "Tweet") in social
                  Networks such as Facebook, Twitter, LinkedIn, Instagram and
                  Pinterest. This content is embedded with code from Facebook,
                  Twitter, LinkedIn, Instagram and Pinterest that places
                  cookies. This content may store and process certain
                  information for personalized advertising. Please read the
                  privacy policy of these social networks (which may change
                  regularly) to find out how they handle your (personal) data
                  that they process using these cookies. The data retrieved is
                  anonymized as much as possible. Facebook, Twitter, LinkedIn,
                  Instagram and Pinterest are based in the United States
                </p>

                <p className="font-medium mb-4 text-xl sm:text-2xl">
                  6. Cookies placed
                </p>
                <div className="flex flex-col justify-between w-full px-6 py-4 mb-4  border dark:border-gray-700 rounded-3xl bg-gray-900">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white">
                      {" "}
                      Google Analytics
                    </span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-600 rotate-180 dark:text-gray-100" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg> */}
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full px-6 py-4 mb-4  border dark:border-gray-700 rounded-3xl bg-gray-900">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white">
                      {" "}
                      Google Maps
                    </span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-600 rotate-180 dark:text-gray-100" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg> */}
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full px-6 py-4 mb-4  border dark:border-gray-700 rounded-3xl bg-gray-900">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white">
                      {" "}
                      Google Fonts
                    </span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-600 rotate-180 dark:text-gray-100" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg> */}
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full px-6 py-4 mb-4  border dark:border-gray-700 rounded-3xl bg-gray-900">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white"> YouTube</span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-600 rotate-180 dark:text-gray-100" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg> */}
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full px-6 py-4 mb-4  border dark:border-gray-700 rounded-3xl bg-gray-900">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white"> Facebook</span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-600 rotate-180 dark:text-gray-100" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg> */}
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full px-6 py-4 mb-4  border dark:border-gray-700 rounded-3xl bg-gray-900">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white">
                      {" "}
                      Instagram
                    </span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-600 rotate-180 dark:text-gray-100" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg> */}
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full px-6 py-4 mb-4  border dark:border-gray-700 rounded-3xl bg-gray-900">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white"> LinkedIn</span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-600 rotate-180 dark:text-gray-100" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg> */}
                  </div>
                </div>
                <div className="flex flex-col justify-between w-full px-6 py-4 mb-4  border dark:border-gray-700 rounded-3xl bg-gray-900">
                  <div className="flex items-center justify-between ">
                    <span className="font-bold dark:text-white"> Medium</span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-600 rotate-180 dark:text-gray-100" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg> */}
                  </div>
                </div>
                <p className="font-medium mb-4  text-xl sm:text-2xl">
                  7. Consent
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  When you visit our website for the first time, we will show
                  you a pop-up with an explanation about cookies. Once you click
                  on “Save settings Save properties”, you give us your consent
                  to use all the categories of cookies and plugins you have
                  chosen as described in this cookie statement. You can disable
                  the use of cookies via your browser, but please note that if
                  you do this our website may not function properly.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  7.1 Manage your consent settings
                </p>
                <p className="leading-relaxed mb-4">Functional Functional</p>
                <p className="leading-relaxed mb-4">
                  The technical storage or access is strictly necessary for the
                  legitimate purpose of enabling the use of a specific service
                  explicitly requested by the subscriber or user, or for the
                  sole purpose of carrying out the transmission of a
                  communication over an electronic communications network.
                </p>
                <p className="leading-relaxed mb-4">Statistics Statistics</p>
                <p className="leading-relaxed mb-4">
                  The technical storage or access that is used exclusively for
                  anonymous statistical purposes. Without a subpoena, voluntary
                  compliance on the part of your Internet Service Provider, or
                  additional records from a third party, information stored or
                  retrieved for this purpose alone cannot usually be used to
                  identify you.
                </p>
                <p className="leading-relaxed mb-4">marketing</p>
                <p className="leading-relaxed mb-4">
                  The technical storage or access is required to create user
                  profiles to send advertising, or to track the user on a
                  website or across several websites for similar marketing
                  purposes.
                </p>
                <p className="font-medium mb-4  text-xl sm:text-2xl">
                  8. Activation/deactivation and deletion of cookies
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  You can use your internet browser to delete cookies
                  automatically or manually. You can also specify whether
                  special cookies should not be placed. Another option is to set
                  your internet browser to notify you each time a cookie is
                  placed. For more information about these options, see the
                  instructions in your browser's Help section. Please note that
                  our website may not function properly if all cookies are
                  disabled. If you delete the cookies in your browser, they will
                  be placed again when you visit our website again.
                </p>
                <p className="font-medium mb-4  text-xl sm:text-2xl">
                  9. Your rights regarding personal data
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  You have the following rights in relation to your personal
                  data
                </p>
                <nav className="mb-10">
                  <li className="pb-1">
                    You have the right to know why your personal data is needed,
                    what happens to it and how long it is kept.
                  </li>
                  <li className="pb-1">
                    Right of access: You have the right to view the personal
                    data we know about you.
                  </li>
                  <li className="pb-1">
                    Right to rectification: You have the right to have your
                    personal data supplemented, corrected, deleted or blocked
                    whenever you wish.
                  </li>
                  <li className="pb-1">
                    If you have given us your consent to process your data, you
                    have the right to withdraw this consent and have your
                    personal data deleted.
                  </li>
                  <li className="pb-1">
                    Right to data transfer of your data: You have the right to
                    request all of your personal data from one controller and to
                    transfer it in its entirety to another controller
                  </li>
                  <li className="pb-1">
                    Right to object: You can object to the processing of your
                    data. We will comply unless there are legitimate reasons for
                    the processing.
                  </li>
                </nav>
                <p className="leading-relaxed  mb-4">
                  To exercise these rights please contact us. Please refer to
                  the contact details at the end of this cookie statement. If
                  you have a complaint about how we handle your data, we would
                  like to hear it, but you also have the right to address it to
                  the supervisory authority (the data protection authority).
                </p>
                <p className="font-medium mb-4 text-xl sm:text-2xl">
                  10. Contact details
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  If you have any questions and/or comments about our Cookie
                  Policy and this statement, please contact us using the
                  following contact details:
                </p>
                <p className="leading-relaxed text-lg w-1/2 mb-4">
                  XRAY LAB Industrial Services GmbH & Co. KG
                  Theodor-Schweitzer-Str. 1+3 75447 Sternenfels Germany Germany
                  Website: https://xis.ai.com Email: moc.bal-yarx@ztuhcsnetad
                  Telephone number: +49 7045 2044 560 This Cookie Policy was
                  synchronized with cookiedatabase.org on November 11, 2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cookie;
