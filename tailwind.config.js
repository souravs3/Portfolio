/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBg: "#0F103F",
        secondary: " rgb(153 27 27)",
        primary: "rgb(24 24 24)",
      },
      backgroundImage: {
        linearBg: "linear-gradient(169deg, #C961DE 0%, #2954A3 100%)",
      },
      boxShadow: {
        btnShad: "0px 10px 20px 0px rgba(8, 12, 33, 0.15)",
      },
      fontFamily: {
        styleFont: "'Clicker Script', cursive",
      },
      screens: {
        tab: "900px",
      },
    },
  },
  plugins: [],
};
