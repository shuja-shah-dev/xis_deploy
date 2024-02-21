/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      backgroundImage: {
        gradient:
          "linear-gradient(0deg, rgba(62, 95, 170, 0.25) 0%, rgba(48, 20, 102, 0.25) 193.33%)",
      },
    },
  },
  plugins: [],
};
