import { AuthProvider } from "@/common/authProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import "@/styles/globals.css";
// import "@fontsource/poppins";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";
import { useEffect, useState } from "react";
import { Box, Switch } from "@mui/material";
import { Roboto, Lato } from "next/font/google";
import CrispChat from "@/components/Crisp";
import Script from "next/script";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import "react-quill/dist/quill.snow.css";
import CookiebotScript from "@/components/CookiebotScript";
import { QueryClient, QueryClientProvider } from "react-query";
import CalendlyWidget from "@/components/CalendlyWidget";
import { BsFillClockFill } from "react-icons/bs";
import ProductBanner from "@/components/banner";
import { useRouter } from "next/router";
// Create a new QueryClient instance
const queryClient = new QueryClient();

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

const ArrowSlider = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 100; // Adjust the scroll distance as needed
      setShowButton(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="z-50 " style={{ position: "relative" }}>
      <div
        className="z-50 right-[21%] sm:right-[14%] md:right-[12%] lg:right-[10%] xl:right-[8%] 2xl:right-[6%]"
        style={{ position: "fixed", bottom: "85px" }}
      >
        <button
          id="scrollbtn"
          aria-label="Scroll to top of the page"
          className="z-50"
          style={{
            // backgroundColor: "#363636",
            padding: "10px 10px",
            borderRadius: "10px",
            color: "#fff",
            transition: "0.5s ease-in-out",
            opacity: showButton ? 1 : 0,
          }}
          onClick={scrollToTop}
        >
          <KeyboardDoubleArrowUpIcon />
        </button>

        {/* <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <div
          className="calendly-badge-widget  flex justify-end"
          style={{ position: "fixed", bottom: "14%", right: "2%" }}
        >
          <a
            href="https://calendly.com/syedmutti/call-with-muti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillClockFill size={46} color="rgba(93, 56, 194, 0.75)" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

const EssentialCookies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Switch
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "white",
            },
            "&.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "white",
            },
          }}
          defaultChecked
          disabled
        />

        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            marginTop: "1rem",
          }}
        >
          Essential Cookies
        </h3>
      </Box>
      <p className="text-sm">
        Essential cookies enable core functionality such as page navigation and
        access to secure areas. The website cannot function properly without
        these cookies, and can only be disabled by changing your browser
        preferences.
      </p>
    </Box>
  );
};

const MarketingCookies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Switch
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "white",
            },
            "&.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "white",
            },
          }}
        />

        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            marginTop: "1rem",
          }}
        >
          Marketing Cookies
        </h3>
      </Box>
      <p className="text-sm">
        Marketing cookies are used to track visitors across websites. The
        intention is to display ads that are relevant and engaging for the
        individual user and thereby more valuable for publishers and third party
        advertisers.
      </p>
    </Box>
  );
};

const AnalyticsCookies = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingBottom: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Switch
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "white",
            },
            "&.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "white",
            },
          }}
        />

        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            marginTop: "1rem",
          }}
        >
          Analytics Cookies
        </h3>
      </Box>
      <p className="text-sm">
        Analytical cookies help us to improve our website by collecting and
        reporting information on its usage.
      </p>
    </Box>
  );
};

export default function App({ Component, pageProps }) {
  const [settings, setSettings] = useState(false);
 const router = useRouter();
  const dec = {
    alignItems: "flex-start",
    background: "rgb(2 6 23)",
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    left: "0px",

    position: "fixed",
    zIndex: "999",
    height: "auto",
    fontSize: "20px",
    bottom: "5px",
    padding: "0.88rem 1.44rem",
    borderRadius: "8px",
    width: "100%",
    // margin: "0 auto",
    // marginLeft: "3%",
  };

  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {/* <CookieConsent
            enableDeclineButton
            style={{
              ...dec,
            }}
            disableStyles
            buttonStyle={{
              color: "#fff",
              background: "transparent",
              border: "1px solid #5D38C2",
              borderRadius: "8px",
              fontSize: "16px",
              padding: "8px 12px",
              "&:hover": {
                transform: "scale(1.1)",
              },
              marginRight: "72px",
            }}
            // declineButtonStyle={{
            //   color: "#fff",
            //   background: "transparent",
            //   border: "1px solid #5D38C2",
            //   borderRadius: "8px",
            //   fontSize: "16px",
            //   padding: "8px 12px",
            //   transform: "scale(1.1)",
            //   "&:hover": {
            //     transform: "scale(1.1)",
            //   },
            // }}
            buttonText="Accept"
            declineButtonText="Settings"
            buttonWrapperClasses="buttonWrapperT2"
            // onDecline={(_) => setSettings(true)}
            customDeclineButtonProps={{
              onClick: () => setSettings(true),
              style: {
                display: settings ? "none" : "block",
                ...{
                  color: "rgb(255, 255, 255)",
                  background: "transparent",
                  border: "1px solid #5D38C2",
                  borderRadius: "8px",
                  fontSize: "16px",
                  padding: "8px 12px",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                },
              },
            }}
          >
            {!settings ? (
              <>
                <div className="pb-[12px]">
                  We use cookies to enhance your browsing experience and analyze
                  site traffic. By clicking 'Accept,' you consent to the use of
                  all cookies. For More Info, see our{" "}
                  <Link href={"/privacy"} className="font-semibold">
                    Privacy Policy
                  </Link>
                  .{" "}
                </div>
              </>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <EssentialCookies />
                <MarketingCookies />
                <AnalyticsCookies />
              </Box>
            )}
          </CookieConsent> */}
          {/* <CookiebotScript /> */}
          {/* {router.pathname === "/" && <ProductBanner />} */}
          <Header />
          <main className={lato.className}>
            <Component {...pageProps} />
          </main>
          <ArrowSlider />
          <CalendlyWidget />
          <CrispChat />
          <Footer />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}
