import { useEffect } from "react";

const CookiebotScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "Cookiebot";
    script.src = "https://consent.cookiebot.com/uc.js";
    script.setAttribute("data-cbid", "8398585a-8058-4a75-8438-8fbd945e42d7");
    script.setAttribute("data-blockingmode", "auto");
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup function to remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  // Adding styles using the style attribute
  const styles = `
    .CybotCookiebotDialogDetailFooter {
      display: none !important;
    }
    .CybotCookiebotDialogDetailBodyContentCookieContainerTypes {
      flex-direction: column !important;
    }
    .CybotCookiebotDialogTabContent {
      height: 400px !important;
    }
    .CybotCookiebotDialogDetailBodyContentCookieContainerTypes li {
      width: 100% !important;
    }
  `;

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = styles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default CookiebotScript;
