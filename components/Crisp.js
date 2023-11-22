import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    // Add Crisp initialization code here
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = '4984d7ef-c85a-47a8-bd86-9fe4177057d6';

    // Include the Crisp script
    const crispScript = document.createElement('script');
    crispScript.src = 'https://client.crisp.chat/l.js';
    crispScript.async = 1;
    document.getElementsByTagName('head')[0].appendChild(crispScript);
  }, []);
  return null;
}

export default CrispChat;
