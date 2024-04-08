import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const Certificates = () => {
  return (
    <>
      <Head>
        <title>Certificates - xis.ai</title>
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
          href={`${process.env.NEXT_PUBLIC_BASE_URL}certificates`}
        />

        <meta
          property="og:title"
          content="Certificates - Simplified Edge AI for Industrial Inspection"
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
          content={`${process.env.NEXT_PUBLIC_BASE_URL}certificates`}
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
      <section className=" body-font relative ">
        <div className=" absolute right-[0px] top-[100px]  sm:top-[-200px]">
          <Image
            src="/Ellipse 171.png"
            alt="Ellipse "
            height={900}
            width={900}
          />
        </div>

        <div className=" absolute right-[0px] bottom-[400px] sm:hidden">
          <Image
            src="/Ellipse 171.png"
            alt="Ellipse "
            height={1000}
            width={1000}
          />
        </div>

      
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 ">
              CERTIFICATES / CERTIFICATES
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base sm:text-lg">
              Download certificates
            </p>
          </div>
          <div className="lg:w-3/4 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left ">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm sm:text-base bg-gray-900 rounded-tl rounded-bl">
                    Certificate / certificate
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm sm:text-base bg-gray-900">
                    Description / Location / Cert No.
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm sm:text-base bg-gray-900">
                    Language
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm sm:text-base bg-gray-900">
                    Download
                  </th>
                  <th className=" title-font tracking-wider font-medium text-sm sm:text-base bg-gray-900 rounded-tr rounded-br">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">ISO 9001:2015</td>
                  <td className="px-4 py-3">Germany 066984 QM15</td>
                  <td className="px-4 py-3">German / English</td>
                  <td className="px-4 py-3 text-lg ">
                    <Link
                      href="/QM_9001_de.pdf"
                      download="QM/German"
                      aria-label="QM/German"
                    >
                      Quality management certificate ISO 9001: 2015 Germany /
                      Language: German
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-lg ">
                    <Link
                      href="/QM_9001_en.pdf"
                      download="QM/English"
                      aria-label="QM/English"
                    >
                      Quality Certification ISO 9001: 2015 Germany / Language:
                      English
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    ISO 14001:2015
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Environmental management system ISO 14001: 2015 Location:
                    Germany 066984 UM15
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    German / English
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg ">
                    <Link
                      href="/UM_14001_de.pdf"
                      download="UM/German"
                      aria-label="UM/German"
                    >
                      {" "}
                      Environmental management system ISO 14001: 2015 Language:
                      German
                    </Link>
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg ">
                    <Link
                      href="/UM_14001_en.pdf"
                      download="UM/English"
                      aria-label="UM/English"
                    >
                      {" "}
                      ISO 14001: 2015 Environmental Management System Language:
                      English
                    </Link>
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 text-center"></td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    ISO 9001:2015
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Quality management system according to ISO 9001; 2015
                    Location: Slovakia 490354 SQM 15
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    German / English
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg ">
                    {/* <Link href="/Certifikat-ISO-9001-ang.-XRAY-LAB-Slovensko-k.s_.pdf" download="SL/English" aria-label="SL/English">ISO 9001 EN Certificate Xray-Lab Slovensko</Link> */}
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg">
                    <Link
                      href="/EN-ISO-14001-2015_ANG.pdf"
                      download="SL/German"
                      aria-label="SL/German"
                    >
                      ISO 14001 - 2016 Xray Lab Slovensko
                    </Link>
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200  text-center"></td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    ISO 9001:2015 IQNet
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    International Certification Network Location Slovakia
                    DE-490354 QM15
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    English
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg ">
                    <Link
                      href="/490354 QM15 2021-01-19 IQNet.pdf"
                      download="IQ/English"
                      aria-label="IQ/English"
                    >
                      IQNet International Certification Network Location:
                      Slovakia / Language: English
                    </Link>
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200  text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
       
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Certificates;
