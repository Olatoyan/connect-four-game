/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#5c2dd5",
        purple: "#7945FF",
        red: "#FD6687",
        yellow: "#FFCE67",
      },
      boxShadow: {
        "purple-sh": "0px 10px 0px 0px #5C2DD5",
        "black-sh": "0px 10px 0px 0px #000",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      screens: {
        desktop: { max: "62.5rem" },
        tablet: { max: "43.75rem" },
        mobile: { max: "37.5rem" },
        mobileSmall: { max: "25rem" },
      },
    },
  },
  plugins: [],
};
