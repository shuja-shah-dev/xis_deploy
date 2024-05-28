// components/ProductBanner.js
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

  const handleClose = () => {
    setIsVisible(false);
    const now = new Date();
    const expiryDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    localStorage.setItem("productBannerExpiry", expiryDate.toString());
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white text-center p-4 fixed top-0 w-full z-50 shadow-lg flex items-center justify-center">
      <div className="flex-1">
        <span>
          🤖 Check out our new{" "}
          <a
            href="/Products"
            className="text-blue-300 font-bold hover:underline text-lg"
          >
            Products Page
          </a>
          ! IT'S LIVE. 🎉
        </span>
      </div>
      <button
        onClick={handleClose}
        className="absolute right-4 text-white bg-transparent hover:text-gray-300 focus:outline-none text-2xl font-bold"
      >
        &times;
      </button>
    </div>
  );
};

export default ProductBanner;
