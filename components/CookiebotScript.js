import { useEffect } from "react";

const CookiebotScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "Cookiebot";
    script.src = "https://consent.cookiebot.com/uc.js";
    script.setAttribute("data-cbid", "b414e23e-aff2-42f7-bd91-416f2e90fad7");
    script.setAttribute("data-blockingmode", "auto");
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup function to remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const applyStyles = () => {
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

      const style = document.createElement("style");
      style.innerHTML = styles;
      document.head.appendChild(style);
    };

    // Delay the application of styles
    const timeout = setTimeout(applyStyles, 20000); // Adjust delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default CookiebotScript;
