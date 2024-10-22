import { useEffect, useRef, useState } from "react";
import { _landingPage } from "../components/staticContent";
import { SecondorayWidget } from "../components/CalendlyWidget";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import LogoBar from "../components/LogoBar";
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
      </Box>
    </Box>
  );
};

export default function VisualInspection() {
  const landingPageContent = useRef(null);

  useEffect(() => {
    landingPageContent.current.innerHTML = _landingPage;
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

        <title>xis.ai</title>
      </Head>
      <$Main />
      <div
        className="min-[2300px]:w-[65%] min-[2300px]:m-auto"
        style={{
          padding: "2rem 0",
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            m: 0,
            fontFamily: "Poppins",
            fontSize: "2.1rem",
            fontWeight: 400,
          }}
        >
          Trusted By{" "}
        </Typography>
        <LogoBar sx={{ width: "80%" }} />
      </div>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          background: "#121212",
          py: "2rem",
          px: "5rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {[
          { tt: "85%", bt: "Faster Time To Value" },
          { tt: "6.9%", bt: "Return On Investment" },
          { tt: "75%", bt: "Lower Total Cost" },
          { tt: "100%", bt: "Risk Free" },
          { tt: "0", bt: "AI Expertise necessary " },
        ].map(({ tt, bt }, $Key) => (
          <$_renderation {...{ tt, bt }} key={$Key} />
        ))}
      </Box>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
        ref={landingPageContent}
      />

      <SecondorayWidget />
    </>
  );
}

const $_renderation = ({ tt, bt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "150px",
        height: "100px",
      }}
    >
      <Typography
        sx={{
          fontSize: "2.4rem",
          fontWeight: 600,
          color: "#fff",
          fontFamily: "Roboto",
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
