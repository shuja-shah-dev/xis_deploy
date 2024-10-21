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
          color: "rgba(93, 56, 194, 0.75)",
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

export function SecondorayWidget() {
  const [on, setOn] = React.useState(false);
  useEffect(() => {
    if (on) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/syedmutti/call-with-muti",
          });
        }
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [on]);
  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      <div class=" mb-40 text-white flex flex-col justify-center items-center">
        <h1
          class="text-4xl mb-4 text-white"
          style={{
            fontFamily: "Poppins",
          }}
        >
          Get a Free Testing Prototype
        </h1>

        <button
          type="submit"
          class="ml-6 py-2 px-8 rounded-md mt-2 backdrop-blur-2xl border-[#5D38C2] border gradient-background-btn text-white"
          id="main-button"
          onClick={() => setOn(true)}
          style={{
            fontFamily: "Poppins",
          }}
        >
          Request
        </button>
      </div>
    </>
  );
}

export default CalendlyWidget;
