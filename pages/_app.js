import { AuthProvider } from "@/common/authProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";
import { useEffect, useState } from "react";
import { Box, Switch } from "@mui/material";
import { Roboto, Lato } from 'next/font/google'
import CrispChat from "@/components/Crisp";
import Script from "next/script";



const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
})

const lato = Lato({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
})

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
      <p>
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
      <p>
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
      <p>
        Analytical cookies help us to improve our website by collecting and
        reporting information on its usage.
      </p>
    </Box>
  );
};

export default function App({ Component, pageProps }) {


  const [settings, setSettings] = useState(false);

  const dec = {
    alignItems: "flex-start",
    background: "rgb(31, 41, 54)",
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    left: "0px",
    position: "fixed",
    width: "100%",
    zIndex: "999",
    height: "auto",
    fontSize: "21px",
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
        <CookieConsent
          enableDeclineButton
          style={{
            background: "#1F2936",
            height: "13%",
            fontSize: "1.1rem",
            ...dec,
          }}
          disableStyles
          buttonStyle={{
            color: "#fff",
            background: "transparent",
            border: "1px solid #fff",
            borderRadius: "8px",
            fontSize: "16px",
            padding: "8px 12px",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          declineButtonStyle={{
            color: "#fff",
            background: "transparent",
            border: "1px solid #fff",
            borderRadius: "8px",
            fontSize: "16px",
            padding: "8px 12px",
            transform: "scale(1.1)",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
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
                border: "1px solid rgb(255, 255, 255)",
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
              We use cookies to enhance your browsing experience and analyze
              site traffic. By clicking 'Accept,' you consent to the use of all
              cookies. If you prefer not to allow non-essential cookies, click
              'Decline.'For More Info, see our{" "}
              <Link href={"/Privacy"}>Privacy Policy</Link>.{" "}
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
        </CookieConsent>
        <Navbar />
        <main className={lato.className}>
          <Component {...pageProps} />
        </main>
        <CrispChat />
        <Footer />
      </AuthProvider>
    </>
  );
}
