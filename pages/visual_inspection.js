import { useEffect, useRef, useState } from "react";
import { _landingPage } from "../components/staticContent";
import { SecondorayWidget } from "../components/CalendlyWidget";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import LogoBar from "../components/LogoBar";
import { _AltVideoSection } from "../components/VideoSection";
import IndustrySolutions from "../components/IndustrySolutions";
import { HeroBlob } from "../components/HeroSection";

const $Main = () => {
  const choices = [
    "Autonomous",
    "Private",
    "End-to-End",
    "Accessible",
    "Simple",
  ];
  const choicesLength = choices.length;
  let index = 0;
  const [sub, setSub] = useState(choices[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      index = (index + 1) % choicesLength;
      setSub(choices[index]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const videoRef = useRef(null);
  const spanStyle = {
    animation: "spin_words 7s infinite",
    display: "block",
    height: "100%",
    background: "linear-gradient(99deg, #A9C3FF 40.82%, #C8F3FF 62.26%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        position: "relative",
        overflowX: "hidden",
        // mixBlendMode: "overlay",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "#19053F",
          opacity: 0.4,
        }}
      >
        <video
          onTouchStart={playVideo()}
          onTouchMove={playVideo()}
          onTouchEnd={playVideo()}
          onTouchCancel={playVideo()}
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          className="w-full  h-full object-cover z-50"
        >
          <source src="/_renderd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Box
        sx={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "50%",
          p: "0 5rem",
        }}
      >
        <h1 className="font-nexa text-5xl sm:text-6xl pb-2 font-bold mt-8 text-shadow line-height-82 gradient-text">
          Making Visual Quality Inspection
        </h1>
        <div className="overflow-hidden max-h-[58px] sm:max-h-[70px] py-2">
          <div className="flex flex-col mt-[48px] sm:mt-[60px] font-nexa text-5xl sm:text-6xl font-bold  z-50 ">
            <span style={spanStyle}>Autonomous</span>
            <span style={spanStyle}>Private</span>
            <span style={spanStyle}>End-to-End</span>
            <span style={spanStyle}>Accessible</span>
            <span style={spanStyle}>Effortless</span>
          </div>
        </div>
        <h3
          className="font-nexa text-5xl sm:text-6xl pb-2 font-bold mt-8 text-shadow line-height-82 gradient-text"
          style={{
            margin: 0,
          }}
        >
          With{" "}
          <span
            style={{
              background:
                "linear-gradient(99deg, #A9C3FF 40.82%, #C8F3FF 62.26%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI
          </span>
        </h3>
      </Box>
    </Box>
  );
};

export default function VisualInspection() {
  const landingPageContent = useRef(null);

  // useEffect(() => {
  //   landingPageContent.current.innerHTML = _landingPage;
  // }, []);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>

        <title>xis.ai - Simplified Edge AI for Industrial Inspection</title>
        <meta
          name="description"
          content="XRAY-LAB that aims to revolutionize Industrial Quality inspection and Process Monitoring through the power of artificial intelligence and robotics"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="monitoring, 
                  computer vision,
                  defect,
                  Quality inspection,
                  defect detection,
                  development solutions,
                  inspection solutions,
                  automated quality assurance,
                  custom development solutions,
                  Visual Quality Inspection,
                  highest quality standards,
                  Quality inspection system,
                  visual quality inspection system,
                  AI,
                  FREE,
                  vision,
                  technology,
                  manufacturing,
                  software,
                  Autonomous,
                  quality assurance,
                  INSPECTION,
                  real-time,
                  quality control,
                  automated,
                  monitoring,"
        />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta
          property="og:title"
          content="Simplified Edge AI for Industrial Inspection"
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
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
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
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflowX: "hidden",
        }}
      >
        <HeroBlob
          sx={{
            top: "-100px",
            left: "0",
            zIndex: "1",
          }}
          key={1}
        />
        {/* -10 */}
        <HeroBlob
          sx={{
            right: "900px",
            right: "0",
            zIndex: "1",
          }}
          key={2}
          id="blob2"
        />

        <$Main />
        <Box
          className="min-[2300px]:w-[65%] min-[2300px]:m-auto"
          style={{
            padding: "2rem 0",
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            justifyContent: "center",
            flexDirection: {
              xs: "column",
              md: "column",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              m: 0,
              fontFamily: "Poppins",
              fontSize: "2.1rem",
              fontWeight: 400,
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
          >
            Trusted By{" "}
          </Typography>
          <LogoBar
            sx={{
              width: {
                xl: "80%",
                lg: "80%",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            background: "#121212",
            py: "2rem",
            px: "5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: {
                xl: "87%",
                lg: "87%",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
              alignItems: {
                xl: "center",
                lg: "center",
                md: "center",
                sm: "flex-start",
                xs: "flex-start",
              },
              justifyContent: "space-between",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              gap: {
                xl: 0,
                lg: 0,
                md: 0,
                sm: "1rem",
                xs: "1rem",
              },
            }}
          >
            {[
              { tt: "85%", bt: "Faster Time To Value" },
              { tt: "75%", bt: "Lower Total Cost" },
              { tt: "100%", bt: "Without any Risk" },
              { tt: "0", bt: "AI Expertise necessary " },
            ].map(({ tt, bt }, $Key) => (
              <$_renderation {...{ tt, bt }} key={$Key} />
            ))}
          </Box>
        </Box>

        <_AltVideoSection />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            display: {
              xl: "flex",
              lg: "flex",
              md: "none",
              sm: "none",
              xs: "none",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            className="text-4xl text-center mb-12 font-inter md:text-5xl pb-1.5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 "
            style={{
              margin: 0,
            }}
          >
            How it Works
          </h1>

          <Box
            sx={{
              display: "flex",
              width: {
                xl: "72%",
                lg: "72%",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Box
              sx={{
                // width: "100%",
                height: { xl: "600px", lg: "600px", md: "60%" },
              }}
            >
              <img
                src="/_pati.png"
                alt="How it works steps"
                style={{ height: "100%" }}
                class="block sm:hidden md:hidden lg:block xs:hidden xl:block"
              />
            </Box>

            <video
              style={{ borderRadius: "10px", width: "64%", height: "400px" }}
              controls
              className="border-[#193037]"
            >
              <source src="/FA2.mp4" type="video/mp4" />
            </video>
          </Box>
        </Box>
        <_Harware />
        <IndustrySolutions />
        <Box
          class="mt-10 mb-10"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xl: "72%", lg: "72%", md: "80%", sm: "90%", xs: "90%" },
            }}
          >
            <h3 class="text-5xl  my-10 text-center sm:text-center md:text-center lg:text-left xl:text-left pb-1.5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-inter">
              Our Customers
            </h3>
            <div class="flex flex-col gap-4">
              <div class="flex gap-4 flex flex-wrap gap-4 sm:gap-6 justify-center z-40 relative">
                <img
                  src="/Group 54.svg"
                  width="150px"
                  height=""
                  alt="General Motos"
                />
                <img
                  src="/Group 56.svg"
                  width="150px"
                  height=""
                  alt="Rockwell & collins"
                />
                <img src="/Group 58.svg" width="150px" height="" alt="ZF" />
                <img src="/Group 59.svg" width="150px" height="" alt="Denso" />
                <img
                  src="/Group 60.svg"
                  width="150px"
                  height=""
                  alt="Lamborghini"
                />
                <img src="/Group 61.svg" width="150px" height="" alt="Ford" />
                <img src="/Group 62.svg" width="150px" height="" alt="Porche" />
                <img src="/Group 63.svg" width="150px" height="" alt="ABB" />
              </div>
              <div class="flex gap-4 flex flex-wrap gap-4 sm:gap-6 justify-center z-40 relative">
                <img src="/Group 64.svg" width="150px" height="" alt="Mahale" />
                <img
                  src="/Group 67.svg"
                  width="150px"
                  height=""
                  alt="Phillips"
                />
                <img src="/Group 68.svg" width="150px" height="" alt="BOSCH" />
                <img src="/Group 69.svg" width="150px" height="" alt="Jopp" />
                <img src="/Group 70.svg" width="150px" height="" alt="Knoor" />
                <img src="/audi.svg" width="150px" height="" alt="Audi" />
                <img src="/lg.svg" width="150px" height="" alt="LG" />
                <img src="/toyota.svg" width="150px" height="" alt="Toyota" />
              </div>
              <div class="flex gap-4 flex flex-wrap gap-4 sm:gap-6 justify-center z-40 relative">
                <img src="/7.svg" width="150px" height="" alt="Samsung" />
                <img src="/8.svg" width="150px" height="" alt="Volkswagon" />
              </div>
            </div>
          </Box>
        </Box>

        <Box
          class="mt-10 mb-10"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xl: "72%", lg: "72%", md: "80%", sm: "90%", xs: "90%" },
            }}
          >
            <h3 class="text-5xl my-10 text-center sm:text-center md:text-center lg:text-left xl:text-left pb-1.5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400  font-inter">
              Our Partners
            </h3>
            <div class="flex gap-4 flex flex-wrap gap-4 sm:gap-6 justify-center z-40 relative">
              <img src="/Group 95.svg" width="150px" height="" alt="Nvidia" />
              <img src="/Group 96.svg" width="150px" height="" alt="AWS" />
              <img src="/Group 98.svg" width="150px" height="" alt="Basler" />
              <img src="/Group 99.svg" width="150px" height="" alt="Lanner" />
            </div>
          </Box>
        </Box>

        {/* <div
          style={{
            width: "100%",
            height: "100%",
          }}
          ref={landingPageContent}
        /> */}

        <SecondorayWidget />
      </Box>
    </>
  );
}

const _Harware = () => {
  return (
    <Box class="flex justify-center text-white my-24">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className="text-4xl text-center mb-12 font-inter md:text-5xl pb-1.5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 "
          style={{
            margin: 0,
          }}
        >
          Hardware Solutions
        </h1>

        <h3 class="font-poppins text-gray-300 text-base sm:text-xl md:text-xl mt-2 sm:mt-4 w-full md:w-[800px] text-center  ">
          We are specialized in providing personalized development solutions
          that are specifically created to address the unique requirements of
          our clients.
        </h3>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
            gap: "1rem",
            alignItems: "center",
            my: "2rem",
          }}
        >
          <div class="flex flex-col gap-4 items-center sm:items-center md:items-center lg:items-start xl:items-start">
            <img
              src="/image 66.svg"
              width="400px"
              height=""
              class="rounded-lg"
              alt=""
            />
            <p class="text-center cc34 w-[400px] ">Inline inspection system</p>
          </div>
          <div class="flex flex-col gap-4 flex flex-col gap-4 items-center sm:items-center md:items-center lg:items-start xl:items-start">
            <img
              src="/image 69.svg"
              width="400px"
              height=""
              class="rounded-lg"
              alt=""
            />
            <p class="text-center cc34 w-[400px]">
              End Of Line inspection system
            </p>
          </div>
          <div class="flex flex-col gap-4 items-center sm:items-center md:items-center lg:items-start xl:items-start">
            <img
              src="/_retroFit.jpg"
              width="353px"
              height="299.33px"
              class="rounded-lg"
              alt=""
            />
            <p class="text-center cc34  w-[353px]">
              Retro-fit Existing Vision system
            </p>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

const $_renderation = ({ tt, bt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: {
          xl: "150px",
          lg: "150px",
          md: "150px",
          sm: "100%",
          xs: "100%",
        },
        height: "100px",
      }}
    >
      <Typography
        sx={{
          fontSize: "2.4rem",
          fontWeight: 600,
          color: "#fff",
          fontFamily: "Roboto, Poppins, sans-serif",
        }}
      >
        {tt}
      </Typography>
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 400,
          color: "#fff",
          fontFamily: "Poppins",
          textAlign: "center",
        }}
      >
        {bt}
      </Typography>
    </Box>
  );
};
