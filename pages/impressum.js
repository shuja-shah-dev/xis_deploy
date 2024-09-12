import Head from "next/head";
import Image from "next/image";
import React from "react";
import { HeroBlob } from "@/components/HeroSection";

const Impressum = () => {
  return (
    <>
      <Head>
        <title>Impressum - xis.ai</title>
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
          href={`${process.env.NEXT_PUBLIC_BASE_URL}impressum`}
        />

        <meta
          property="og:title"
          content="Impressum - Simplified Edge AI for Industrial Inspection"
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
          content={`${process.env.NEXT_PUBLIC_BASE_URL}impressum`}
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
      <section className="terms-and-conditions relative sm:px-16">
        {/* <div className=" absolute right-[0px] top-[100px]  sm:top-[-200px]">
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

        <div className=" absolute left-0 top-[1000px]  sm:top-[600px]">
          <Image
            src="/Ellipse 164.png"
            alt="Ellipse "
            height={900}
            width={900}
          />
        </div> */}
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
        <div className="container px-6 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 ">
                Impressum
              </h1>
              <div className="h-1 w-20 bg-[#57C8E7] rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full p-4">
              <div className="p-6 w-full sm:w-1/2 rounded-lg mb-10">
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
              <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h1 className="sm:text-lg text-base font-medium title-font mb-2 ">
                    XRAY LAB Industrial Services GmbH & Co. KG
                    Theodor-Schweitzer-Str 1+3. 75447 Sternenfels{" "}
                    <strong className="text-[#57C8E7]">Contact</strong> :
                    Telephone: +49 7045 2044 560 Email: contact@xray-lab.com
                  </h1>
                  <div className="h-1 w-20 bg-[#57C8E7] rounded"></div>
                </div>
                <p className="lg:w-1/2 w-full text-sm leading-relaxed">
                  <strong className="text-[#57C8E7]">Represented by</strong> Mr.
                  Uwe Hartnagel (managing director authorized to represent) Mr.
                  Muti Rehman (managing director authorized to represent){" "}
                  <strong className="text-[#57C8E7]">VAT ID</strong> : VAT
                  identification number in accordance with Section 27 a of the
                  Sales Tax Act: : DE326042920{" "}
                  <strong className="text-[#57C8E7]">District Court </strong>
                  Register court: Mannheim District Court Registration number:
                  HRA 708898{" "}
                  <strong className="text-[#57C8E7]">
                    Responsible for the content in accordance with Section 55
                    Paragraph 2 RStV
                  </strong>{" "}
                  : Muti Rehman XRAY LAB Industrial Services GmbH & Co. KG
                  Theodor-Schweitzer-Str. 1+3 75447 Sternenfels
                </p>
              </div>
              <div className="w-full">
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">
                  Reference to EU dispute settlement
                </h2>
                <p className="sm:text-lg text-base font-medium title-font mb-10">
                  The European Commission provides a platform for online dispute
                  resolution (OS platform), which can be accessed at
                  http://ec.europa.eu/consumers/odr . You can find our email
                  address in our legal notice. We are neither obliged nor
                  willing to take part in the dispute resolution process. The
                  images used on this website come from, among others , XIS,
                  Deutsche Messe AG, from Fotolia.com: MH, kimtaro2008, Gesina
                  Ottner from iStockphoto.com: M_a_y_a, querbeet, wahahaz,
                  turbohampster, Stefan Weichelt, Volodymyr Krasyuk, kyoshino,
                  Harald Richter, Givaga, Wavebreakmedia, gordana jovanovic,
                  BostjanT, Edi_Eco, MiguelMalo, Kajdi Szabolcs, deepblue4you,
                  choreograph, Bosca78, Alengo, gorodenkoff from
                  depositphotos:MasterMariner, from shutterstock: alterfalter,
                  lightwavemedia from pixabay
                </p>
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2">
                  Disclaimer
                </h2>
                <div className="h-1 w-20 bg-[#57C8E7] rounded mb-4"></div>
                <p className="font-medium mb-4 text-left sm:text-center text-xl sm:text-2xl">
                  Liability for content
                </p>
                <p className="leading-relaxed text-base sm:text-lg mb-4">
                  As a service provider, we are responsible for our own content
                  on these pages in accordance with general laws in accordance
                  with Section 7 Paragraph 1 TMG. However, according to Sections
                  8 to 10 TMG, as a service provider we are not obliged to
                  monitor transmitted or stored third-party information or to
                  investigate circumstances that indicate illegal activity.
                  Obligations to remove or block the use of information in
                  accordance with general law remain unaffected. However,
                  liability in this regard is only possible from the time of
                  knowledge of a specific legal violation. If we become aware of
                  any corresponding legal violations, we will immediately remove
                  this content.
                </p>
                <p className="font-medium mb-4 text-left sm:text-center text-xl sm:text-2xl">
                  Liability for links
                </p>
                <p className="leading-relaxed text-base sm:text-lg mb-4">
                  Our offer contains links to external third-party websites over
                  whose content we have no influence. We therefore cannot assume
                  any liability for this external content. The respective
                  provider or operator of the pages is always responsible for
                  the content of the linked pages. The linked pages were checked
                  for possible legal violations at the time of linking. Illegal
                  content was not apparent at the time of linking. However,
                  permanent control of the content of the linked pages is
                  unreasonable without concrete evidence of a legal violation.
                  If we become aware of any legal violations, we will
                  immediately remove such links.
                </p>
                <p className="font-medium mb-4 text-left sm:text-center text-xl sm:text-2xl">
                  Copyright
                </p>
                <p className="leading-relaxed text-base sm:text-lg mb-4">
                  The content and works on these pages created by the site
                  operators are subject to German copyright law. Reproduction,
                  processing, distribution and any kind of exploitation outside
                  the limits of copyright law require the written consent of the
                  respective author or creator. Downloads and copies of this
                  page are only permitted for private, non-commercial use. If
                  the content on this site was not created by the operator, the
                  copyrights of third parties are respected. In particular
                  contents of third parties are marked as such. Should you
                  nevertheless become aware of a copyright infringement, we ask
                  that you notify us accordingly. If we become aware of any
                  legal violations, we will immediately remove such content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impressum;
