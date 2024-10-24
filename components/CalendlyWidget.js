import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/syedmutti/call-with-muti",
          text: "Schedule Meeting",
          color: "rgba(93, 56, 194, 0.75)",
          textColor: "#ffffff",
          branding: undefined,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  );
}

export function SecondorayWidget() {
  const [on, setOn] = React.useState(false);
  useEffect(() => {
    if (on) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/syedmutti/call-with-muti",
          });
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [on]);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "2rem",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div class="flex flex-col justify-center items-center mb-14">
          <h1 class="pb-1.5 font-inter text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center md:text-justify">
            Contact Us
          </h1>
        </div>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            gap: "1rem",
            flexDirection: {
              xs: "column",
              md: "column",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <img
            src="/___Map.png"
            alt="Location Map"
            // class="h-[470px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px]"
            style={{
              height: "470px",
            }}            
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: {
                  xl: "800px",
                  lg: "800px",
                  md: "80%",
                  sm: "80%",
                  xs: "95%",
                },
                borderColor: "rgba(165, 165, 165, 0.50)",
                borderStyle: "solid",
                borderWidth: "1.5px",
                borderRadius: "10px",
                backdropFilter: "blur(50px)",
                background:
                  "linear-gradient(82deg, rgba(119, 84, 194, 0.10) 0.29%, rgba(119, 84, 194, 0.00) 99.65%)",
                p: "2rem",
                pt: "4rem",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  color: "#7C4EFC",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  mb: "2rem",
                }}
              >
                Get a FREE Consultation and a Proof of Concept for your Use Case
                & Explore how xis.ai can Improve your Quality Inspection.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: "300",
                }}
              >
                Join the ranks of manufacturers who have transformed their
                operations with xis.ai. Let&apos;s make quality control simple and
                effective together!
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xl: "800px",
                  lg: "800px",
                  md: "80%",
                  sm: "80%",
                  xs: "95%",
                },
                borderColor: "rgba(165, 165, 165, 0.50)",
                borderStyle: "solid",
                borderWidth: "1.5px",
                borderRadius: "20px",
                backdropFilter: "blur(50px)",
                background:
                  "linear-gradient(82deg, rgba(119, 84, 194, 0.10) 0.29%, rgba(119, 84, 194, 0.00) 99.65%)",
                p: "2rem",
                pt: "1rem",
                pb: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: {
                  xs: "column",
                  md: "column",
                  lg: "row",
                  xl: "row",
                },
              }}
            >
              <Typography
                // variant="h5"
                sx={{ fontFamily: "Poppins", color: "#fff", fontWeight: 700 , fontSize:{
                  xs:"1rem",
                  md:"1.2rem",
                  lg:"1.2rem",
                  xl:"1.2rem"
                }}}
              >
                Ready to Elevate your Production?
              </Typography>

              <button
                type="submit"
                id="main-button"
                onClick={() => setOn(true)}
                style={{
                  fontFamily: "Poppins",
                  background:
                    "linear-gradient(180deg, #301466 0%, #3E5FAA 100%)",
                  borderRadius: "10px",
                  border: "none",
                  color: "#fff",
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Request Your Free Consultation
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  );
}

export default CalendlyWidget;
