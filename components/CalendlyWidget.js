// CalendlyWidget.js

import React, { useEffect } from "react";
import { BsFillClockFill } from "react-icons/bs";

const CalendlyWidget = () => {
  //   useEffect(() => {
  //     const script = document.createElement("script");
  //     script.src = "https://assets.calendly.com/assets/external/widget.js";
  //     script.async = true;
  //     document.body.appendChild(script);

  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     const badgeScript = document.createElement("script");
  //     badgeScript.src = "https://assets.calendly.com/assets/external/widget.js";
  //     badgeScript.async = true;
  //     document.body.appendChild(badgeScript);

  //     return () => {
  //       document.body.removeChild(badgeScript);
  //     };
  //   }, []);

  return (
    <>
      {/* Calendly inline widget */}
      {/* <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/syedmutti/call-with-muti"
        style={{ minWidth: 320, height: 700 }}
      ></div> */}

      {/* Calendly badge widget */}
      {/* <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <div
        className="calendly-badge-widget  flex justify-end"
        // style={{ minWidth: 50, height: 115 }}
        style={{ position: "fixed", bottom: "13%", right: "2%" }}
      >
        <a
          href="https://calendly.com/syedmutti/call-with-muti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFillClockFill size={50} color="indigo" />
        </a>
      </div> */}
    </>
  );
};

export default CalendlyWidget;
