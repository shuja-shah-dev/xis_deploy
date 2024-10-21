import { useEffect, useRef } from "react";
import { _landingPage } from "../components/staticContent";
import { SecondorayWidget } from "../components/CalendlyWidget";

export default function VisualInspection() {
  const landingPageContent = useRef(null);

  useEffect(() => {
    landingPageContent.current.innerHTML = _landingPage;
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
        ref={landingPageContent}
      />
      <SecondorayWidget />
    </>
  );
}
