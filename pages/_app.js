import { AuthProvider } from "@/common/authProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <>
    
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </>
  );
}
