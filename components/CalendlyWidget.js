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
          // color: "rgba(93, 56, 194, 0.75)",
          color: " linear-gradient(0deg, #301466 0%, #3E5FAA 123.73%)",
          textColor: "#ffffff",
            branding: undefined,
    
          
        });
          
        //   const badgeWidgetContainer = document.querySelector(
        //     ".calendly-badge-widget"
        //   );
        //   if (badgeWidgetContainer) {
        //     badgeWidgetContainer.style.position = "fixed";
        //     badgeWidgetContainer.style.bottom = "14%"; 

        //   }
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

export default CalendlyWidget;
