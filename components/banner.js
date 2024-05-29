import { useEffect, useState } from "react";

const ProductBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const storedExpiryDate = localStorage.getItem("productBannerExpiry");
    if (storedExpiryDate) {
      const expiryDate = new Date(storedExpiryDate);
      const now = new Date();
      if (now > expiryDate) {
        setIsVisible(false);
      }
    } else {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 7);
      localStorage.setItem("productBannerExpiry", expiryDate.toString());
    }
  }, []);

  if (!isVisible) return null;

  const bannerStyle = {
    background: "linear-gradient(to right, #5D38C2, #4B2377)",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 50,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(10px)",
    opacity: 0.9,
  };

  return (
    <div style={bannerStyle}>
      <div style={{ flex: 1 }}>
        <span>
          🤖 Check out our new{" "}
          <a
            href="/Products"
            style={{
              color: "#7FDBFF",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "1.125rem",
            }}
          >
            Products Page
          </a>
          ! IT'S LIVE. 🎉
        </span>
      </div>
    </div>
  );
};

export default ProductBanner;
