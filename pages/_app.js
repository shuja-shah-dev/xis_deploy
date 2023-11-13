import { AuthProvider } from "@/common/authProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <CookieConsent
          enableDeclineButton
          style={{
            background: "#000",
          }}

          buttonStyle={{
            color:'#fff',
            background:'transparent',
            border: '1px solid #fff',
            borderRadius: '5px',
            fontSize: '13px',
            padding: '5px 10px',

          }}

          declineButtonStyle={{
            color:'#fff',
            background:'transparent',
            border: '1px solid #fff',
            borderRadius: '5px',
            fontSize: '13px',
            padding: '5px 10px',
          }}
          buttonText="Accept"
          declineButtonText="Decline"
          
        >
          We use cookies to enhance your browsing experience and analyze site
          traffic. By clicking 'Accept,' you consent to the use of all cookies.
          If you prefer not to allow non-essential cookies, click 'Decline.'For
          More Info, see our <Link href={"/Privacy"}>Privacy Policy</Link>.
        </CookieConsent>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </>
  );
}
