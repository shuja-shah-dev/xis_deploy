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

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white text-center p-4 absolute top-0 w-full z-50 shadow-lg flex items-center justify-center">
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
    </div>
  );
};

export default ProductBanner;
