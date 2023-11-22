import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("MY_CRISP_WEBSITE_ID");

    // Clean up the configuration when the component is unmounted
    return () => {
      Crisp.remove();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return null;
}

export default CrispChat;
