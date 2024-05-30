/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "text-sm": "600px", // Small text sections
        "text-md": "800px", // Medium text sections
        "text-lg": "1000px", // Large text sections
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nexa: ["Nexa Bold", "sans-serif"],
      },
      lineHeight: {
        82: "82px",
      },
      boxShadow: {
        custom: "5px 6px 5px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-justify": {
          textAlign: "justify",
          hyphens: "auto",
        },
      });
    },
  ],
};
