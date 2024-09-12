import Head from "next/head";
import Image from "next/image";
import React from "react";
import { HeroBlob } from "@/components/HeroSection";

const Agb = () => {

  return (
    <>
      <Head>
        <title>Terms & Conditions / AGB - xis.ai</title>
        <meta
          name="description"
          content="AI startup of Xray-Lab Industrial Services that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Defect Detection, AI Detection, AI Detector, AI Robotics, AI Web Technologies, Computer Vision, Precision Recall, Robotic Inspection"
        />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}agb`} />

        <meta
          property="og:title"
          content="Terms & Conditions / AGB - Simplified Edge AI for Industrial Inspection"
        />
        <meta
          property="og:description"
          content="AI startup of Xray-Lab Industrial Services that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
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
          content={`${process.env.NEXT_PUBLIC_BASE_URL}agb`}
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
          content="AI startup of Xray-Lab Industrial Services that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
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
                Terms and Conditions (GTC)
              </h1>
              <div className="h-1 w-20 bg-[#57C8E7] rounded"></div>
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
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">
                  General terms and conditions of business
                </h2>
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">
                  As of: October 1, 2017
                </h2>
                <p className="font-medium mb-4 text-center text-xl sm:text-2xl">
                  §1 Scope
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Xray-Lab Industrial Services Industrial Services GmbH Co. KG,
                  abbreviated as XIS, carries out the work assigned to it as a
                  contractor within the meaning of § 631 BGB exclusively on the
                  basis of these general terms and conditions of business and
                  payment. By placing the order with Xray-Lab Industrial
                  Services, the customer expressly accepts these terms and
                  conditions. The terms and conditions apply for the duration of
                  the entire business relationship, even if they are not
                  expressly agreed again. Differing conditions must be expressly
                  agreed in writing. Without such an express agreement,
                  conditions contrary to these general terms and conditions of
                  business and payment will not be recognized by us. Any
                  invalidity of individual provisions of these terms and
                  conditions of business and payment does not affect the
                  validity and effectiveness of the rest of the conditions. If
                  individual conditions are unavoidable, the contractual
                  partners are obliged to proceed in accordance with what is
                  actually intended.
                </p>
                <p className="font-medium mb-4 text-center text-xl sm:text-2xl">
                  §2 Conclusion of the contract, remuneration
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Offers from Xray-Lab Industrial Services are subject to change
                  and non-binding. After the order has been placed, the contract
                  for work is only concluded through express confirmation from
                  Xray-Lab Industrial Services or through execution of the
                  assigned work.
                </p>
                <p className="font-medium mb-4 text-center text-xl sm:text-2xl">
                  §3 Payment conditions
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Xray-Lab Industrial Services charges the customer the
                  remuneration in accordance with the contractual agreement.
                  Waiting times for material to be made available or other
                  delays that are not caused by us must be taken into account.
                  Payments are due within 2 weeks of the invoice being issued
                  without deductions. After this period, Xray-Lab Industrial
                  Services reserves the right to charge default interest. If
                  Xray-Lab Industrial Services is forced to hire a lawyer after
                  the third reminder, the entire legal fees will be charged.
                  Xray-Lab Industrial Services is entitled, despite the
                  customer's provisions to the contrary, to initially offset
                  payments against the customer's older debts and will inform
                  the customer about the type of offsetting that has taken
                  place. If costs and interest have already been incurred,
                  Xray-Lab Industrial Services is entitled to offset the payment
                  first against the costs, then against the interest and finally
                  against the main service. A payment is only considered to have
                  been made when Xray-Lab Industrial Services can dispose of the
                  amount.
                </p>
                <p className="font-medium mb-4 text-center text-xl sm:text-2xl">
                  §4 Interim invoices
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Xray-Lab Industrial Services is entitled to create interim
                  invoices for completed parts and agreed services. Xray-Lab
                  Industrial Services is also entitled to create interim
                  invoices for fixed periods, approximately one week each.
                </p>
                <p className="font-medium mb-4 text-center text-xl sm:text-2xl">
                  §5 Delay in delivery, liability, warranty
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Xray-Lab Industrial Services undertakes to carry out the work
                  assigned to it on time in accordance with the contractual
                  agreement. Delays in delivery or service due to force majeure
                  and events that make delivery significantly more difficult or
                  impossible for the seller, not only temporarily - these
                  include, in particular, strikes, lockouts, official orders and
                  so on, even if they occur at suppliers of Xray-Lab Industrial
                  Services or whose sub-suppliers are involved - Xray-Lab
                  Industrial Services is not responsible even if deadlines and
                  dates have been bindingly agreed. There is no obligation to
                  pay compensation. Any warranty claims of the purchaser must be
                  reported to Xray-Lab Industrial Services immediately upon
                  becoming aware of them. You are initially limited to the right
                  of repair or replacement delivery. If the repair or
                  replacement delivery fails after a reasonable period of time,
                  the purchaser can, at his discretion, request a reduction in
                  the remuneration (reduction) or reversal of the contract
                  (cancellation). Warranty claims against Xray-Lab Industrial
                  Services are only available to the purchaser directly and
                  cannot be assigned. Xray-Lab Industrial Services's liability
                  for damages arising from its contractual work is excluded
                  unless there is gross negligence or even intentional breach of
                  contract. In the event of any liability claims, there is
                  liability insurance in the amount of €5 million per damaging
                  event per year for personal injury and/or property damage.
                  There is insurance cover of €50,000 for customer
                  goods/equipment and machines located on Xray-Lab Industrial
                  Services's premises in the event of fire/water and theft
                  damage.
                </p>
                <p className="font-medium mb-4 text-center text-xl sm:text-2xl">
                  §6 Occupational safety, occupational safety
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  The work of the Xray-Lab Industrial Services employee at the
                  client is subject to the public law regulations of
                  occupational safety law applicable to the client's business;
                  The resulting obligations for the employer are the
                  responsibility of the client, without prejudice to the
                  obligations of the contractor. The client ensures that all
                  accident prevention and occupational safety regulations
                  applicable at the employee's place of employment as well as
                  the provisions of the Working Hours Act (ArbZG) are adhered to
                  and that first aid facilities and measures are guaranteed. The
                  client must inform the employee about the workplace-specific
                  dangers that arise during the activities to be carried out and
                  about the measures to avert them before the employment begins.
                  If the employee is exposed to chemical, physical or biological
                  influences while working in the client's company or carries
                  out hazardous activities within the meaning of BGV A 4, the
                  client must carry out an occupational medical check-up before
                  starting this activity. In the event of an accident at work,
                  the client must notify the contractor immediately.
                </p>
                <p className="font-medium mb-4 text-center text-xl sm:text-2xl">
                  §7 German law; Place of jurisdiction
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  The law of the Federal Republic of Germany applies to these
                  terms and conditions and the entire legal relationship between
                  Xray-Lab Industrial Services and the customer. If the customer
                  is a full merchant within the meaning of the Commercial Code,
                  a legal entity under public law or a special fund under public
                  law, the Maulbronn District Court or Karlsruhe Regional Court
                  is the exclusive place of jurisdiction for all disputes
                  arising directly or indirectly from the contractual
                  relationship. Should a provision in these terms and conditions
                  or a provision within the framework of other agreements be or
                  become invalid, this will not affect the effectiveness of all
                  other provisions or agreements.
                </p>
                <p className="font-medium mb-4 text-center text-xl sm:text-2xl text-[#57C8E7]">
                  <a href="/AGB_en.pdf" download="AGB">
                    Download General Terms and Conditions of Xray-Lab Industrial
                    Services Industrial Services GmbH & Co. KG as PDF
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agb;
